// Build-time fetch of the live Google Business rating.
//
// Runs automatically before `next build` (wired as the npm "prebuild" script).
// It calls the Google Places API (New) once, bakes the current rating + review
// count into lib/google-rating.json, and that static value ships in the HTML —
// so visitors pay ZERO extra network cost, and the number refreshes on every
// rebuild (twice a week via the blog automation).
//
// Fail-safe by design: if the API key / Place ID is missing, or the request
// fails for any reason, it logs a warning and leaves the existing JSON intact
// (falling back to the last-known-good values). It never exits non-zero, so a
// flaky Google response can never break a deploy.
//
// Required env vars (set locally in .env.local, and as CI secrets in the
// GitHub Actions deploy workflow):
//   GOOGLE_PLACES_API_KEY  — a Google Cloud key with "Places API (New)" enabled
//   GOOGLE_PLACE_ID        — the Place ID of the MaxFace Google Business listing

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, "..", "lib", "google-rating.json");

/** Minimal .env.local loader so `npm run build` works locally without exporting
 *  vars by hand. CI passes real env vars, which always take precedence. */
function loadEnvLocal() {
  try {
    const txt = readFileSync(join(__dirname, "..", ".env.local"), "utf8");
    for (const line of txt.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !(m[1] in process.env)) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    /* no .env.local — fine, rely on real env vars */
  }
}

function warn(msg) {
  console.warn(`[fetch-google-rating] ${msg} — keeping existing rating.`);
}

async function main() {
  loadEnvLocal();

  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    warn("GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not set");
    return;
  }

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "rating,userRatingCount",
    },
  });

  if (!res.ok) {
    warn(`Places API returned ${res.status} ${res.statusText}`);
    return;
  }

  const data = await res.json();
  const rawRating = data.rating;
  const count = data.userRatingCount;

  if (typeof rawRating !== "number" || typeof count !== "number") {
    warn("Places API response missing rating/userRatingCount");
    return;
  }

  // Whole numbers print as "5" (not "5.0"); otherwise one decimal, e.g. "4.9".
  const rating = Number.isInteger(rawRating)
    ? String(rawRating)
    : rawRating.toFixed(1);

  const out = { rating, reviewsCount: count };
  writeFileSync(OUT_FILE, JSON.stringify(out, null, 2) + "\n");
  console.log(
    `[fetch-google-rating] Updated: ${rating}/5 from ${count} reviews.`,
  );
}

main().catch((err) => {
  warn(`unexpected error: ${err?.message ?? err}`);
  // Never fail the build.
  process.exit(0);
});

/**
 * Client-side Mailchimp signup for a static site (no backend).
 *
 * Posts to the audience's public embedded-form endpoint — the same target
 * Mailchimp's own embedded forms use. The legacy `post-json` JSONP endpoint
 * 404s for this audience, so this sends a no-cors form POST instead. The
 * response is opaque (unreadable cross-origin), but the audience is single
 * opt-in and the endpoint accepts any valid email, so a delivered request
 * is a completed signup. Duplicate signups are harmless.
 *
 * The account/audience ids below are public by design (they appear in every
 * embedded form); the secret API key must never ship in browser code.
 */

const SUBSCRIBE_URL =
  "https://maxfacedentalbd.us13.list-manage.com/subscribe/post";
const ACCOUNT_ID = "384798e380049bf2e8c272398";
const AUDIENCE_ID = "811fb89ed8";

export type SubscribeResult = { ok: boolean; msg: string };

export async function subscribeToMailchimp(
  email: string,
  merge: { FNAME?: string; PHONE?: string; SOURCE?: string } = {},
): Promise<SubscribeResult> {
  const body = new URLSearchParams({
    u: ACCOUNT_ID,
    id: AUDIENCE_ID,
    EMAIL: email,
    // Honeypot field from the embedded form — must stay empty.
    [`b_${ACCOUNT_ID}_${AUDIENCE_ID}`]: "",
  });
  for (const [key, value] of Object.entries(merge)) {
    if (value) body.set(key, value);
  }

  try {
    await fetch(SUBSCRIBE_URL, { method: "POST", mode: "no-cors", body });
    return { ok: true, msg: "" };
  } catch {
    return {
      ok: false,
      msg: "Couldn't subscribe — please check your connection and try again.",
    };
  }
}

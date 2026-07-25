import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { locales } from "@/lib/i18n/config";
import { postLocale } from "@/lib/i18n/posts";

const BASE = "https://maxfacedentalbd.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages that exist in both languages, with hreflang alternates.
  const shared: { sub: string; changeFrequency: "monthly" | "weekly" | "yearly"; priority: number }[] = [
    { sub: "", changeFrequency: "monthly", priority: 1 },
    { sub: "blog/", changeFrequency: "weekly", priority: 0.8 },
    { sub: "privacy-policy/", changeFrequency: "yearly", priority: 0.2 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const { sub, changeFrequency, priority } of shared) {
    for (const lang of locales) {
      entries.push({
        url: `${BASE}/${lang}/${sub}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: `${BASE}/en/${sub}`,
            bn: `${BASE}/bn/${sub}`,
          },
        },
      });
    }
  }

  // Each post lives under its own language only — no cross-language alternate.
  for (const post of posts) {
    entries.push({
      url: `${BASE}/${postLocale(post)}/blog/${post.slug}/`,
      lastModified: new Date(`${post.date}T00:00:00`),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return entries;
}

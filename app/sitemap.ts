import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { blogArticleSlugs } from "@/lib/i18n/posts";

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

  // Each article exists in both languages under the same slug, with hreflang.
  for (const { slug, date } of blogArticleSlugs) {
    for (const lang of locales) {
      entries.push({
        url: `${BASE}/${lang}/blog/${slug}/`,
        lastModified: new Date(`${date}T00:00:00`),
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: {
          languages: {
            en: `${BASE}/en/blog/${slug}/`,
            bn: `${BASE}/bn/blog/${slug}/`,
          },
        },
      });
    }
  }

  return entries;
}

import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://maxfacedentalbd.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://maxfacedentalbd.com/blog/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://maxfacedentalbd.com/privacy-policy/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    // Every post in lib/blog.ts is picked up automatically — no manual
    // sitemap maintenance needed when new posts (English or Bangla) are added.
    ...posts.map((post) => ({
      url: `https://maxfacedentalbd.com/blog/${post.slug}/`,
      lastModified: new Date(`${post.date}T00:00:00`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

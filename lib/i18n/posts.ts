import type { BlogPost } from "@/lib/blog";
import type { Locale } from "./config";

/** A post with no `lang` is treated as English. */
export const postLocale = (post: BlogPost): Locale =>
  post.lang === "bn" ? "bn" : "en";

/** Posts belonging to a given locale (Bangla posts on /bn, the rest on /en). */
export const postsForLang = (posts: BlogPost[], lang: Locale): BlogPost[] =>
  posts.filter((post) => postLocale(post) === lang);

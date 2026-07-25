"use client";

import { useMemo, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/blog";
import type { Dictionary, Locale } from "@/lib/i18n";
import styles from "./BlogIndex.module.css";

const PER_PAGE = 9;

/** Blog listing with category navigation chips and numbered pagination.
 *  `posts` are pre-filtered to the active locale by the page. */
export default function BlogIndex({
  posts,
  lang,
  dict,
}: {
  posts: BlogPost[];
  lang: Locale;
  dict: Dictionary["blog"];
}) {
  const allLabel = dict.filterAll;
  const [active, setActive] = useState(allLabel);
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLElement>(null);

  const categories = useMemo(
    () => [allLabel, ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts, allLabel],
  );

  // Newest first, regardless of order in the data file.
  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    [posts],
  );

  const filtered =
    active === allLabel ? sorted : sorted.filter((p) => p.category === active);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const shown = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const selectCategory = (category: string) => {
    setActive(category);
    setPage(1);
  };

  const goToPage = (n: number) => {
    setPage(n);
    // Bring the list back into view; use Lenis when it's driving the scroll.
    const el = topRef.current;
    if (!el) return;
    const lenis = (
      window as unknown as { lenis?: { scrollTo: (t: HTMLElement) => void } }
    ).lenis;
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav ref={topRef} className={styles.filters} aria-label="Blog categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.chip} ${active === category ? styles.chipActive : ""}`}
            aria-pressed={active === category}
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      {shown.length === 0 ? (
        <p className={styles.empty}>{dict.empty}</p>
      ) : (
        <div className={styles.grid}>
          {shown.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              lang={lang}
              readMore={dict.readMore}
            />
          ))}
        </div>
      )}

      {pageCount > 1 && (
        <nav className={styles.pagination} aria-label="Blog pages">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              className={`${styles.pageBtn} ${page === n ? styles.pageBtnActive : ""}`}
              aria-current={page === n ? "page" : undefined}
              onClick={() => goToPage(n)}
            >
              {n}
            </button>
          ))}
        </nav>
      )}
    </>
  );
}

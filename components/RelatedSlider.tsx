"use client";

import { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/blog";
import styles from "./RelatedSlider.module.css";

export default function RelatedSlider({ posts }: { posts: BlogPost[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slide = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.head}>
        <div>
          <span className="eyebrow">Keep Reading</span>
          <h2>Related Articles</h2>
        </div>
        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => slide(-1)}
            disabled={!canPrev}
            aria-label="Previous articles"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => slide(1)}
            disabled={!canNext}
            aria-label="Next articles"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.track} ref={trackRef} onScroll={update}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}

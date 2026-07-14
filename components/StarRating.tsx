"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StarRating.module.css";

/** Five stars that light up one-by-one (1→5) when scrolled into view. */
export default function StarRating({
  count = 5,
  size = 18,
  className,
}: {
  count?: number;
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`${styles.stars} ${className ?? ""}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={play ? styles.pop : styles.hidden}
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z" />
        </svg>
      ))}
    </span>
  );
}

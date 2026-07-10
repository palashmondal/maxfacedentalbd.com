"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

/**
 * Page-load overlay (mirrors the theme's .theme-preloader).
 * Fades out 600ms after mount; capped, not window.load-gated, to stay snappy.
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 400);
    const t2 = setTimeout(() => setGone(true), 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`${styles.preloader} ${hidden ? styles.hidden : ""}`}
      aria-hidden
    >
      <div className={styles.spinner} />
    </div>
  );
}

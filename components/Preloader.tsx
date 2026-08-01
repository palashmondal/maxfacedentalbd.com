"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Preloader.module.css";

/**
 * Page-load overlay: the MaxFace brand mark centered on a dark stage, with a
 * breathing pulse, a soft gold glow, and a thin gold arc orbiting it. Fades out
 * shortly after mount — capped, not window.load-gated, to stay snappy.
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 650);
    const t2 = setTimeout(() => setGone(true), 1250);
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
      <div className={styles.stage}>
        <span className={styles.ring} />
        <span className={styles.glow} />
        <Image
          src="/images/maxface-logo.png"
          alt=""
          width={104}
          height={104}
          priority
          className={styles.mark}
        />
      </div>
    </div>
  );
}

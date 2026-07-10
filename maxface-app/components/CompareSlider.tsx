"use client";

import { useCallback, useRef, useState } from "react";
import styles from "./CompareSlider.module.css";

type Props = {
  before: string;
  after: string;
  alt?: string;
};

/**
 * Draggable before/after image comparison
 * (replaces the theme's twentytwenty jQuery widget).
 */
export default function CompareSlider({ before, after, alt = "" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX);
  };

  const stop = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={ref}
      className={styles.wrap}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stop}
      onPointerLeave={stop}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={alt} className={styles.img} draggable={false} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt=""
        className={styles.img}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      <div className={styles.divider} style={{ left: `${pos}%` }}>
        <span className={styles.handle}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path
              d="M6 1 1 6l5 5M12 1l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={2}
        max={98}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        className={styles.a11yRange}
        aria-label="Compare before and after"
      />
    </div>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./CreativeButton.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Pill button with a cursor-position-aware circle "sweep" hover fill.
 * Ported from the theme's ElementsKit "Creative Button" widget
 * (ekit_creative_button + ekit_position_aware_bg): on mouseenter/mouseleave
 * the fill circle is repositioned to the cursor's offset within the button,
 * then CSS :hover expands it from 0 to fully cover the pill.
 */
export default function CreativeButton({ href, children, className }: Props) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const sweepRef = useRef<HTMLSpanElement>(null);

  const positionSweep = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current;
    const sweep = sweepRef.current;
    if (!btn || !sweep) return;
    const rect = btn.getBoundingClientRect();
    sweep.style.top = `${e.clientY - rect.top}px`;
    sweep.style.left = `${e.clientX - rect.left}px`;
  };

  return (
    <Link
      href={href}
      ref={btnRef}
      className={`${styles.btn} ${className ?? ""}`}
      onMouseEnter={positionSweep}
      onMouseLeave={positionSweep}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.icon} aria-hidden>
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 7h9M7.5 2.5 12 7l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span ref={sweepRef} className={styles.sweep} aria-hidden />
    </Link>
  );
}

"use client";

import { useEffect, useRef } from "react";
import styles from "./MagicCursor.module.css";

/**
 * Circular cursor follower (replaces the theme's magiccursor.js).
 * Lerps toward the pointer; grows over links/buttons. Desktop pointers only.
 */
export default function MagicCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ball = ref.current;
    if (!ball) return;

    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        ball.style.opacity = "1";
        visible = true;
      }
      const interactive = (e.target as Element).closest?.(
        "a, button, input, select, [role='tab']"
      );
      ball.classList.toggle(styles.grow, Boolean(interactive));
    };

    const onLeave = () => {
      ball.style.opacity = "0";
      visible = false;
    };

    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      ball.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className={styles.ball} aria-hidden />;
}

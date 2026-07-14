"use client";

import { useEffect } from "react";

/**
 * Lenis-powered inertial smooth scrolling (wheel/touch easing), applied
 * site-wide. Skipped entirely for reduced-motion users, who keep native
 * scrolling. The instance is exposed on window.lenis so nav links can
 * glide to anchors programmatically.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: { raf: (t: number) => void; destroy: () => void } | undefined;
    let raf = 0;
    let cancelled = false;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({
        lerp: 0.1,
        // Smooth-scroll plain "#hash" links (hero, section notes) too.
        anchors: true,
      });
      (window as unknown as { lenis?: unknown }).lenis = lenis;

      const loop = (time: number) => {
        lenis!.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      delete (window as unknown as { lenis?: unknown }).lenis;
    };
  }, []);

  return null;
}

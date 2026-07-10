"use client";

import { useEffect, useRef } from "react";

type Props = {
  to: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

/** Count-up number that animates when scrolled into view (replaces jquery-numerator). */
export default function Counter({
  to,
  decimals = 0,
  suffix = "",
  className,
  duration = 2000,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = (to * eased).toFixed(decimals) + suffix;
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, decimals, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {to.toFixed(decimals)}
      {suffix}
    </span>
  );
}

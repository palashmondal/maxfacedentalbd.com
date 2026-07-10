"use client";

import { useEffect, useRef } from "react";

type Props = {
  to: number;
  from?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  duration?: number;
  /** Drop trailing ".0" once the count reaches its final whole-number value. */
  snapToWholeAtEnd?: boolean;
};

/** Count-up number that animates when scrolled into view (replaces jquery-numerator). */
export default function Counter({
  to,
  from = 0,
  decimals = 0,
  suffix = "",
  className,
  duration = 2000,
  snapToWholeAtEnd = false,
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
          const value = from + (to - from) * eased;
          const label =
            t >= 1 && snapToWholeAtEnd
              ? to.toFixed(0)
              : value.toFixed(decimals);
          el.textContent = label + suffix;
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
  }, [to, from, decimals, suffix, duration, snapToWholeAtEnd]);

  return (
    <span ref={ref} className={className}>
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
}

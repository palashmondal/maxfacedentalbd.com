"use client";

import { useEffect, useRef } from "react";
import { localeDigits } from "@/lib/i18n/template";

type Props = {
  to: number;
  from?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  duration?: number;
  /** Drop trailing ".0" once the count reaches its final whole-number value. */
  snapToWholeAtEnd?: boolean;
  /** Locale for digit rendering — "bn" shows Bangla numerals. */
  lang?: string;
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
  lang = "en",
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
        const step = Math.pow(10, -decimals);
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          let value = from + (to - from) * eased;
          if (snapToWholeAtEnd && t < 1) {
            // Never show the final whole number early (e.g. "5.0") — hold
            // at one step short (e.g. "4.9") until animation completes.
            value = Math.min(value, to - step);
          }
          const label =
            t >= 1 && snapToWholeAtEnd ? to.toFixed(0) : value.toFixed(decimals);
          el.textContent = localeDigits(label + suffix, lang);
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
  }, [to, from, decimals, suffix, duration, snapToWholeAtEnd, lang]);

  return (
    <span ref={ref} className={className}>
      {localeDigits(from.toFixed(decimals) + suffix, lang)}
    </span>
  );
}

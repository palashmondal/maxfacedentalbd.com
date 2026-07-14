"use client";

import { useEffect } from "react";

/**
 * Scroll-triggered animations, parameters copied from the original theme's
 * function.js:
 *  - Heading char reveal ("style-3"): chars from x:50/opacity:0, back.out ease,
 *    stagger 0.02, trigger "top 90%" — applied to all h1/h2 in <main>.
 *  - fadeInUp entrances on [data-fade] elements (Elementor elementor-invisible).
 */
export default function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger, SplitText);

      ctx = gsap.context(() => {
        document
          .querySelectorAll<HTMLElement>(
            "main h1:not([data-no-split]), main h2",
          )
          .forEach((el) => {
            const split = new SplitText(el, {
              type: "lines,words,chars",
              linesClass: "split-line",
            });
            gsap.set(el, { perspective: 400 });
            gsap.set(split.chars, { opacity: 0, x: 50 });
            gsap.to(split.chars, {
              scrollTrigger: { trigger: el, start: "top 90%" },
              x: 0,
              y: 0,
              rotateX: 0,
              opacity: 1,
              duration: 1,
              ease: "back.out",
              stagger: 0.02,
            });
          });

        document.querySelectorAll<HTMLElement>("[data-fade]").forEach((el) => {
          const children = el.hasAttribute("data-fade-children")
            ? Array.from(el.children)
            : [el];
          gsap.set(children, { opacity: 0, y: 40 });
          gsap.to(children, {
            scrollTrigger: { trigger: el, start: "top 85%" },
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.12,
          });
        });
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return null;
}

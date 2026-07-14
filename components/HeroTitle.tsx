"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./HeroTitle.module.css";

/**
 * Rotating hero headline. The first title plays the theme's char-reveal
 * (x:50 → 0, back.out, 0.02 stagger — same params as ScrollAnimations),
 * then a typewriter loop backspaces it and types the next titles forever.
 * Reduced-motion users get the first title, static.
 */
const TITLES = [
  "Creating confident smiles with care!",
  "Best dental care in Malibagh, Dhaka!",
  "Gentle care, stunning smiles!",
];

// First title's intro layout matches the old static <br /> line break.
const INTRO_LINES = ["Creating confident", "smiles with care!"];

const HOLD_MS = 3800; // full title rests on screen
const DELETE_MS = 26; // per-char backspace
const TYPE_MS = 55; // per-char typing
const SWAP_PAUSE_MS = 350; // empty-line beat between titles

export default function HeroTitle({ className }: { className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [rotating, setRotating] = useState(false);
  const [text, setText] = useState(TITLES[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const timeouts: number[] = [];
    const later = (fn: () => void, ms: number) =>
      timeouts.push(window.setTimeout(fn, ms));

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled || !ref.current) return;
      gsap.set(ref.current, { perspective: 400 });
      gsap.fromTo(
        ref.current.querySelectorAll("[data-char]"),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "back.out", stagger: 0.02 },
      );
    })();

    const step = (mode: "del" | "type", index: number, pos: number) => {
      if (cancelled) return;
      const full = TITLES[index];
      setText(full.slice(0, pos));
      if (mode === "del") {
        if (pos > 0) later(() => step("del", index, pos - 1), DELETE_MS);
        else
          later(
            () => step("type", (index + 1) % TITLES.length, 1),
            SWAP_PAUSE_MS,
          );
      } else {
        if (pos < full.length) later(() => step("type", index, pos + 1), TYPE_MS);
        else later(() => step("del", index, pos - 1), HOLD_MS);
      }
    };

    later(() => {
      setRotating(true);
      step("del", 0, TITLES[0].length - 1);
    }, HOLD_MS);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <h1 ref={ref} className={`${className ?? ""} ${styles.title}`} data-no-split>
      {rotating ? (
        <>
          {text}
          <span className={styles.caret} aria-hidden />
        </>
      ) : (
        INTRO_LINES.map((line, li) => (
          <Fragment key={line}>
            {line.split(" ").map((word, wi, words) => (
              <Fragment key={`${word}-${wi}`}>
                <span className={styles.word}>
                  {Array.from(word).map((ch, ci) => (
                    <span key={ci} data-char className={styles.char}>
                      {ch}
                    </span>
                  ))}
                </span>
                {wi < words.length - 1 ? " " : null}
              </Fragment>
            ))}
            {li < INTRO_LINES.length - 1 && <br />}
          </Fragment>
        ))
      )}
    </h1>
  );
}

"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./HeroTitle.module.css";

/**
 * Rotating hero headline. The first title plays an intro reveal, then a
 * typewriter loop backspaces it and types the next titles forever.
 * Reduced-motion users get the first title, static.
 *
 * The typewriter (`full.slice(0, pos)`) is rendered as one contiguous string,
 * so it shapes correctly in Bangla too. The one thing that must NOT happen for
 * Bangla is splitting the text into per-code-point spans — that separates
 * consonants from their vowel-signs/conjuncts and renders ◌ dotted circles.
 * So English gets the char-by-char reveal on the first title; Bangla gets a
 * whole-headline fade, then both share the same typewriter rotation.
 *
 * `titles` come from the active locale's dictionary; `introLines` is the first
 * title pre-split into the two-line static layout (used for English only).
 */
const HOLD_MS = 3800; // full title rests on screen
const DELETE_MS = 26; // per-char backspace
const TYPE_MS = 55; // per-char typing
const SWAP_PAUSE_MS = 350; // empty-line beat between titles

const isBangla = (s: string) => /[ঀ-৿]/.test(s);

export default function HeroTitle({
  className,
  titles,
  introLines,
}: {
  className?: string;
  titles: string[];
  introLines: string[];
}) {
  const bangla = isBangla(titles[0] ?? "");
  const ref = useRef<HTMLHeadingElement>(null);
  const [rotating, setRotating] = useState(false);
  const [text, setText] = useState(titles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const timeouts: number[] = [];
    const later = (fn: () => void, ms: number) =>
      timeouts.push(window.setTimeout(fn, ms));

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled || !ref.current) return;
      if (bangla) {
        // Whole-headline fade — never split Bangla into per-char spans.
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        );
      } else {
        gsap.set(ref.current, { perspective: 400 });
        gsap.fromTo(
          ref.current.querySelectorAll("[data-char]"),
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1, ease: "back.out", stagger: 0.02 },
        );
      }
    })();

    const step = (mode: "del" | "type", index: number, pos: number) => {
      if (cancelled) return;
      const full = titles[index];
      setText(full.slice(0, pos));
      if (mode === "del") {
        if (pos > 0) later(() => step("del", index, pos - 1), DELETE_MS);
        else
          later(
            () => step("type", (index + 1) % titles.length, 1),
            SWAP_PAUSE_MS,
          );
      } else {
        if (pos < full.length) later(() => step("type", index, pos + 1), TYPE_MS);
        else later(() => step("del", index, pos - 1), HOLD_MS);
      }
    };

    later(() => {
      setRotating(true);
      step("del", 0, titles[0].length - 1);
    }, HOLD_MS);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [titles, bangla]);

  return (
    <h1
      ref={ref}
      className={`${className ?? ""} ${styles.title}`}
      data-no-split
      lang={bangla ? "bn" : undefined}
    >
      {rotating ? (
        <>
          {text}
          <span className={styles.caret} aria-hidden />
        </>
      ) : bangla ? (
        // Contiguous text — shapes correctly; no per-char splitting.
        titles[0]
      ) : (
        introLines.map((line, li) => (
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
            {li < introLines.length - 1 && <br />}
          </Fragment>
        ))
      )}
    </h1>
  );
}

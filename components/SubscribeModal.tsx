"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import styles from "./SubscribeModal.module.css";

export default function SubscribeModal({
  email,
  onClose,
}: {
  email: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscribe-thanks-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.imageWrap}>
          <Image
            src="/images/thankyou.jpg"
            alt={site.doctor}
            width={943}
            height={1017}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <span className="eyebrow">Thank You!</span>
          <h3 id="subscribe-thanks-title">You&apos;re on the list.</h3>
          <p>
            Thank you for trusting me with your smile. Every so often
            I&apos;ll send you the same simple, practical dental advice I
            give my own patients at the chamber — no spam, just healthy
            teeth.
          </p>
          <p className={styles.signature}>
            <strong>{site.doctor}</strong>
            <span>
              {site.credentials} — {site.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

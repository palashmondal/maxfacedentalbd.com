"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Alias-route helper: instantly forwards a clean URL like /doctor to its
 * homepage section (/#doctor). Static export can't do server redirects, so
 * this runs in the browser; the visible fallback covers the brief moment
 * before it fires (and no-JS visitors).
 */
export default function SectionRedirect({
  hash,
  label,
}: {
  hash: string;
  label: string;
}) {
  useEffect(() => {
    window.location.replace(`/#${hash}`);
  }, [hash]);

  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <p>
        Taking you to {label}…{" "}
        <Link href={`/#${hash}`} style={{ textDecoration: "underline" }}>
          Click here if nothing happens
        </Link>
      </p>
    </main>
  );
}

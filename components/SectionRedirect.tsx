"use client";

import { useEffect } from "react";
import Link from "next/link";
import { fill } from "@/lib/i18n/template";
import type { Locale } from "@/lib/i18n";

/**
 * Alias-route helper: instantly forwards a clean URL like /bn/doctor to its
 * homepage section (/bn/#doctor). Static export can't do server redirects, so
 * this runs in the browser; the visible fallback covers the brief moment
 * before it fires (and no-JS visitors).
 */
export default function SectionRedirect({
  lang,
  hash,
  label,
  taking,
  click,
}: {
  lang: Locale;
  hash: string;
  label: string;
  taking: string;
  click: string;
}) {
  const target = `/${lang}/#${hash}`;

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

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
        {fill(taking, { label })}{" "}
        <Link href={target} style={{ textDecoration: "underline" }}>
          {click}
        </Link>
      </p>
    </main>
  );
}

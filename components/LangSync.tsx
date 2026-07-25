"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

/**
 * Syncs the served locale to <html lang> (the root layout can't read the
 * [lang] param in a static export) and remembers it in localStorage so the
 * root "/" redirector sends the visitor back to the same language next time.
 */
export default function LangSync({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* private mode / storage disabled — non-fatal */
    }
  }, [lang]);

  return null;
}

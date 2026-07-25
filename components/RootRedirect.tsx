"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

/**
 * Client-side language gate for "/". Static export can't redirect on the
 * server, so first-time visitors default to Bangla (/bn); returning visitors
 * go to whichever language they last used (stored by LangSync).
 */
export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    let target: string = defaultLocale;
    try {
      const stored = localStorage.getItem("lang");
      if (stored && isLocale(stored)) target = stored;
    } catch {
      /* storage disabled — fall back to the default locale */
    }
    router.replace(`/${target}/`);
  }, [router]);

  return null;
}

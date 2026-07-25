"use client";

import { usePathname, useRouter } from "next/navigation";
import { otherLocale, type Locale } from "@/lib/i18n/config";
import { swapLocaleInPath } from "@/lib/i18n/href";
import styles from "./LanguageSwitcher.module.css";

const FLAG: Record<Locale, string> = { en: "🇬🇧", bn: "🇧🇩" };

/**
 * Top-right language toggle. Shows the flag + name of the *other* language;
 * clicking swaps the locale prefix of the current path and remembers the
 * choice so the whole site follows the visitor.
 */
export default function LanguageSwitcher({
  lang,
  label,
  aria,
}: {
  lang: Locale;
  label: string;
  aria: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const target = otherLocale(lang);

  const switchLang = () => {
    try {
      localStorage.setItem("lang", target);
    } catch {
      /* storage disabled — the URL still carries the locale */
    }
    router.push(swapLocaleInPath(pathname, target));
  };

  return (
    <button
      type="button"
      onClick={switchLang}
      className={styles.switch}
      aria-label={aria}
    >
      <span className={styles.flag} aria-hidden>
        {FLAG[target]}
      </span>
      <span className={styles.label} lang={target}>
        {label}
      </span>
    </button>
  );
}

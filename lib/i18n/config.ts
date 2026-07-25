/** Locale configuration for the bilingual (English / Bangla) site. */

export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];

/** First-time visitors default to Bangla (the clinic's primary audience). */
export const defaultLocale: Locale = "bn";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** The "other" locale — used by the language switch to toggle. */
export const otherLocale = (locale: Locale): Locale =>
  locale === "en" ? "bn" : "en";

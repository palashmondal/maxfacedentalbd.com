import type { Metadata } from "next";
import type { Locale } from "./config";

const SITE_URL = "https://maxfacedentalbd.com";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  bn: "bn_BD",
};

/**
 * Per-locale canonical + hreflang alternates for a page.
 * `subpath` is the path *after* the locale prefix, e.g. "" for home,
 * "/blog/" for the blog index, "/blog/some-slug/" for an article.
 */
export function localeAlternates(
  lang: Locale,
  subpath = "",
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: `/${lang}${subpath}`,
    languages: {
      en: `/en${subpath}`,
      bn: `/bn${subpath}`,
      "x-default": `/bn${subpath}`,
    },
  };
}

export const ogLocale = (lang: Locale) => OG_LOCALE[lang];

/** Complete per-page metadata: localized title/description + canonical +
 *  hreflang alternates + a fully-specified openGraph block (so nothing is
 *  lost to metadata merging). Site-wide defaults (keywords, robots, twitter,
 *  metadataBase) still come from the root layout. */
export function pageMetadata(opts: {
  lang: Locale;
  subpath?: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}): Metadata {
  const { lang, subpath = "", title, description } = opts;
  return {
    title,
    description,
    alternates: localeAlternates(lang, subpath),
    openGraph: {
      title: opts.ogTitle ?? title,
      description: opts.ogDescription ?? description,
      url: `${SITE_URL}/${lang}${subpath}`,
      siteName: "MaxFace Dental Care",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
      locale: ogLocale(lang),
      type: "website",
    },
  };
}

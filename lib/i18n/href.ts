import type { Locale } from "./config";
import { isLocale } from "./config";

/**
 * Prefix an internal href with the active locale.
 *   localizedHref("bn", "/")            -> "/bn"
 *   localizedHref("bn", "/#doctor")     -> "/bn/#doctor"
 *   localizedHref("en", "/blog")        -> "/en/blog"
 *   localizedHref("bn", "tel:+880…")    -> "tel:+880…"   (left untouched)
 * External links, tel:/mailto:, and bare hashes pass through unchanged.
 */
export function localizedHref(locale: Locale, href: string): string {
  if (
    !href.startsWith("/") ||
    href.startsWith("//") // protocol-relative external URL
  ) {
    return href;
  }
  // "/" -> "/bn", "/#doctor" -> "/bn/#doctor", "/blog" -> "/bn/blog"
  const rest = href === "/" ? "" : href;
  return `/${locale}${rest}`;
}

/**
 * Swap the locale prefix of a pathname to the target locale, preserving the
 * rest of the path. Used by the language switcher.
 *   swapLocaleInPath("/en/blog/", "bn") -> "/bn/blog/"
 *   swapLocaleInPath("/en", "bn")       -> "/bn"
 */
export function swapLocaleInPath(pathname: string, target: Locale): string {
  const segments = pathname.split("/"); // ["", "en", "blog", ""]
  if (segments.length > 1 && isLocale(segments[1])) {
    segments[1] = target;
    return segments.join("/");
  }
  return `/${target}${pathname === "/" ? "" : pathname}`;
}

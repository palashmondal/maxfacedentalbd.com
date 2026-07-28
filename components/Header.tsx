"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreativeButton from "./CreativeButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { site } from "@/lib/site";
import { localizedHref } from "@/lib/i18n/href";
import type { Dictionary, Locale } from "@/lib/i18n";
import styles from "./Header.module.css";

export default function Header({
  lang,
  nav,
  doctorName,
  switcher,
}: {
  lang: Locale;
  nav: Dictionary["nav"];
  doctorName: string;
  switcher: Dictionary["switcher"];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Last nav link the user clicked; wins over the pathname fallback.
  const [current, setCurrent] = useState<string | null>(null);
  const pathname = usePathname();

  const home = `/${lang}`;
  const isHome = pathname === home || pathname === `${home}/`;
  const items = nav.map((item) => ({
    label: item.label,
    raw: item.href,
    href: localizedHref(lang, item.href),
  }));

  const isActive = (item: (typeof items)[number]) =>
    current !== null
      ? current === item.href
      : item.raw === "/"
        ? isHome
        : !item.raw.includes("#") && pathname.startsWith(item.href);

  // Route change (e.g. into /blog via a footer link) invalidates the click.
  useEffect(() => {
    setCurrent(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClick = (item: (typeof items)[number]) => (e: React.MouseEvent) => {
    setCurrent(item.href);
    setOpen(false);
    // On the homepage, glide to hash targets via Lenis instead of jumping.
    const hash = item.raw.includes("#") ? `#${item.raw.split("#")[1]}` : null;
    const lenis = (
      window as unknown as { lenis?: { scrollTo: (t: string) => void } }
    ).lenis;
    if (hash && isHome && lenis) {
      e.preventDefault();
      lenis.scrollTo(hash);
      history.pushState(null, "", item.href);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link
          href={home}
          className={styles.brand}
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              setCurrent(home);
              // Drop any #section hash so the URL reads as the homepage again.
              history.replaceState(null, "", home);
              const lenis = (
                window as unknown as { lenis?: { scrollTo: (t: number) => void } }
              ).lenis;
              if (lenis) lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src={`/images/logo-white-${lang}.png`}
            alt={site.name}
            width={412}
            height={50}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={isActive(item) ? styles.active : undefined}
              onClick={navClick(item)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.cta}>
          <CreativeButton
            href={localizedHref(lang, "/#doctor")}
            className={styles.ctaBtn}
          >
            {doctorName}
          </CreativeButton>
        </div>

        <div className={styles.langWrap}>
          <LanguageSwitcher
            lang={lang}
            label={switcher.label}
            aria={switcher.aria}
          />
        </div>

        <button
          className={styles.burger}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

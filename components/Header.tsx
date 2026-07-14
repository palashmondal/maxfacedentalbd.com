"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreativeButton from "./CreativeButton";
import { nav, site } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Last nav link the user clicked; wins over the pathname fallback.
  const [current, setCurrent] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    current !== null
      ? current === href
      : href === "/"
        ? pathname === "/"
        : !href.includes("#") && pathname.startsWith(href);

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

  const navClick = (href: string) => (e: React.MouseEvent) => {
    setCurrent(href);
    setOpen(false);
    // On the homepage, glide to hash targets via Lenis instead of jumping.
    const hash = href.startsWith("/#") ? href.slice(1) : null;
    const lenis = (
      window as unknown as { lenis?: { scrollTo: (t: string) => void } }
    ).lenis;
    if (hash && pathname === "/" && lenis) {
      e.preventDefault();
      lenis.scrollTo(hash);
      history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <Link
          href="/"
          className={styles.brand}
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              setCurrent("/");
              // Drop any #section hash so the URL reads as the homepage again.
              history.replaceState(null, "", "/");
              const lenis = (
                window as unknown as { lenis?: { scrollTo: (t: number) => void } }
              ).lenis;
              if (lenis) lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/images/logo-white.png"
            alt={site.name}
            width={412}
            height={50}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={isActive(item.href) ? styles.active : undefined}
              onClick={navClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.cta}>
          <CreativeButton href="/#doctor" className={styles.ctaBtn}>
            {site.doctor}
          </CreativeButton>
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

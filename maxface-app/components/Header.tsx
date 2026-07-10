"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowButton from "./ArrowButton";
import { nav, site } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <Link href="#home" className={styles.brand}>
          <Image
            src="/images/home-version2-logo-white.png"
            alt={site.name}
            width={220}
            height={48}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {nav.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={i === 0 ? styles.active : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.cta}>
          <ArrowButton href="#doctor">{site.doctor}</ArrowButton>
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

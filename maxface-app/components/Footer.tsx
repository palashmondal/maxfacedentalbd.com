"use client";

import Image from "next/image";
import Link from "next/link";
import { site, footerLinks } from "@/lib/site";
import styles from "./Footer.module.css";

function subscribe(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
  if (!email) return;
  const text = `Hello MaxFace Dental Care, please subscribe me to free dental advice. My e-mail: ${email}`;
  window.open(
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

const socials = [
  {
    label: "Location on Google Maps",
    href: `https://www.google.com/maps/search/${encodeURIComponent(site.name + " " + site.address)}`,
    path: "M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@maxfacedentalcare",
    path: "M21.6 7.2a2.6 2.6 0 0 0-1.8-1.9C18.2 5 12 5 12 5s-6.2 0-7.8.3A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.9C5.8 19 12 19 12 19s6.2 0 7.8-.3a2.6 2.6 0 0 0 1.8-1.9A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/maxfacedentalcare",
    path: "M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/maxfacedentalcare",
    path: "M12 4.3c2.5 0 2.8 0 3.8.1 2.5.1 3.7 1.3 3.8 3.8 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.7-3.8 3.8-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.5-.1-3.7-1.3-3.8-3.8 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8c.1-2.5 1.3-3.7 3.8-3.8 1-.1 1.3-.1 3.8-.1ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5A2.5 2.5 0 1 1 12 9.5a2.5 2.5 0 0 1 0 5Zm4.2-6.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.subscribeBar}>
          <Link href="#home" className={styles.brand}>
            <Image
              src="/images/home-version2-logo-white.png"
              alt={site.name}
              width={230}
              height={50}
            />
          </Link>
          <h2 className={styles.subscribeTitle}>Subscribe to Free Advices</h2>
          <form className={styles.subscribeForm} onSubmit={subscribe}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M21.5 2.5 13 11m8.5-8.5-6 19-3.5-8.5m9.5-10.5-19 6 8.5 3.5" />
              </svg>
            </button>
          </form>
        </div>

        <div className={styles.columns}>
          <div className={styles.about}>
            <h3>{site.name}</h3>
            <p className={styles.address}>{site.address}</p>
            <p>
              Comprehensive dental services designed to create confident smiles
              through personalized care at <strong>{site.name}</strong> with{" "}
              <strong>{site.doctor}</strong>.
            </p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul className={styles.links}>
              {footerLinks.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Our Services</h3>
            <ul className={styles.links}>
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <Link href="#services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Chamber Working Hours</h3>
            <ul className={styles.hours}>
              {footerLinks.hours.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          Copyright © {site.name} | {new Date().getFullYear()} | All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

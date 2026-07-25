"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubscribeModal from "./SubscribeModal";
import { PhoneIcon, MailIcon, PinIcon } from "./icons";
import { site } from "@/lib/site";
import { subscribeToMailchimp } from "@/lib/mailchimp";
import { localizedHref } from "@/lib/i18n/href";
import { tmpl } from "@/lib/i18n/template";
import type { Dictionary, Locale } from "@/lib/i18n";
import styles from "./Footer.module.css";

const socials = [
  {
    label: "Location on Google Maps",
    href: `https://www.google.com/maps/search/${encodeURIComponent(site.name + " " + site.address)}`,
    path: "M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/maxfacedentalbd",
    path: "M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/maxfacedentalbd",
    path: "M12 4.3c2.5 0 2.8 0 3.8.1 2.5.1 3.7 1.3 3.8 3.8 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.7-3.8 3.8-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.5-.1-3.7-1.3-3.8-3.8 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8c.1-2.5 1.3-3.7 3.8-3.8 1-.1 1.3-.1 3.8-.1ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5A2.5 2.5 0 1 1 12 9.5a2.5 2.5 0 0 1 0 5Zm4.2-6.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z",
  },
];

export default function Footer({
  lang,
  dict,
  doctorName,
  subscribeModal,
}: {
  lang: Locale;
  dict: Dictionary["footer"];
  doctorName: string;
  subscribeModal: Dictionary["subscribeModal"];
}) {
  const pathname = usePathname();
  const home = `/${lang}`;
  const [thanksEmail, setThanksEmail] = useState<string | null>(null);
  const [subscribeError, setSubscribeError] = useState("");
  const [pending, setPending] = useState(false);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    if (!email || pending) return;
    setPending(true);
    setSubscribeError("");

    // Email the subscriber's address to the clinic via FormSubmit
    // (no backend on a static site). Fire-and-forget.
    fetch(`https://formsubmit.co/ajax/${site.notify.to}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `New Dental Tips Subscriber — ${email}`,
        _cc: site.notify.cc,
        _template: "table",
        "Subscriber e-mail": email,
      }),
    }).catch(() => {});

    // Add them to the Mailchimp audience — this is the real signup.
    const result = await subscribeToMailchimp(email, { SOURCE: "Newsletter" });
    setPending(false);
    if (result.ok) {
      form.reset();
      setThanksEmail(email);
    } else {
      setSubscribeError(result.msg || dict.subscribeError);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.subscribeBar}>
          <Link
            href={home}
            className={styles.brand}
            onClick={(e) => {
              if (pathname === home || pathname === `${home}/`) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/images/home-version2-logo-white.png"
              alt={site.name}
              width={230}
              height={50}
            />
          </Link>
          <h2 className={styles.subscribeTitle}>{dict.subscribeTitle}</h2>
          <div className={styles.subscribeCell}>
            <form className={styles.subscribeForm} onSubmit={subscribe}>
              <input
                type="email"
                name="email"
                placeholder={dict.subscribePlaceholder}
                required
                disabled={pending}
              />
              <button
                type="submit"
                aria-label={dict.subscribeAria}
                disabled={pending}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  <path d="M21.5 2.5 13 11m8.5-8.5-6 19-3.5-8.5m9.5-10.5-19 6 8.5 3.5" />
                </svg>
              </button>
            </form>
            {subscribeError && (
              <p className={styles.subscribeError} role="alert">
                {subscribeError}
              </p>
            )}
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.about}>
            <h3>
              <a href="https://maps.app.goo.gl/NMKCww73ZoPWAtAA7" target="_blank" rel="noopener noreferrer">
                {site.name}
              </a>
            </h3>
            <p className={styles.address}>
              <PinIcon size={20} />
              <span>{site.address}</span>
            </p>
            <p>
              {tmpl(dict.about, {
                name: <strong>{site.name}</strong>,
                doctor: <strong>{doctorName}</strong>,
              })}
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
            <h3>{dict.quickLinksTitle}</h3>
            <ul className={styles.links}>
              {dict.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={localizedHref(lang, l.href)}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{dict.servicesTitle}</h3>
            <ul className={styles.links}>
              {dict.services.map((s) => (
                <li key={s}>
                  <Link href={localizedHref(lang, "/#services")}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.contact}>
              <a href={site.phoneHref}>
                <PhoneIcon size={20} />
                <span>{site.phone}</span>
              </a>
              <a href={`mailto:${site.notify.to}`}>
                <MailIcon size={20} />
                <span>{site.notify.to}</span>
              </a>
            </div>
            <h3>{dict.hoursTitle}</h3>
            <ul className={styles.hours}>
              {dict.hours.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          {tmpl(dict.copyright, {
            name: site.name,
            year: String(new Date().getFullYear()),
          })}
        </div>
      </div>

      {thanksEmail && (
        <SubscribeModal
          email={thanksEmail}
          onClose={() => setThanksEmail(null)}
          doctorName={doctorName}
          credentials={site.credentials}
          dict={subscribeModal}
        />
      )}
    </footer>
  );
}

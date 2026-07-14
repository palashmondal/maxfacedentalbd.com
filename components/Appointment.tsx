"use client";

import { useEffect, useRef, useState } from "react";
import { HeadsetIcon, ClockIcon } from "./icons";
import { site } from "@/lib/site";
import { subscribeToMailchimp } from "@/lib/mailchimp";
import styles from "./Appointment.module.css";

export default function Appointment() {
  const [error, setError] = useState("");
  // The Maps embed is heavy: mount it only when the section nears the
  // viewport, and keep it click-to-interact so hovering it mid-scroll
  // doesn't swallow wheel events (which stalls Lenis smooth scrolling).
  const mapRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);
  const [mapActive, setMapActive] = useState(false);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phoneRest = String(data.get("phone") ?? "").trim();

    if (!name || !phoneRest) {
      setError("Please fill in your name and phone number.");
      return;
    }
    setError("");

    const phone = `+880 ${phoneRest}`;
    const email = String(data.get("email") ?? "").trim();
    const problem = String(data.get("problem") ?? "").trim();
    const lines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email && `E-mail: ${email}`,
      problem && `Problem:\n${problem}`,
    ].filter(Boolean);
    const message = lines.join("\n");

    // Open WhatsApp — kept inside the click gesture so it isn't popup-blocked.
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Email the same details to the clinic (+ cc) at the same time, via
    // FormSubmit (no backend needed for a static site). Fire-and-forget so the
    // WhatsApp window opens instantly.
    fetch(`https://formsubmit.co/ajax/${site.notify.to}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `New Appointment Request — ${name}`,
        _cc: site.notify.cc,
        _template: "table",
        Name: name,
        Phone: phone,
        "E-mail": email || "Not provided",
        Problem: problem || "Not provided",
      }),
    }).catch(() => {});

    // If they left an email, add them to the Mailchimp audience too
    // (dental-tips newsletter). Fire-and-forget — the appointment request
    // itself already went out via WhatsApp and FormSubmit above.
    if (email) {
      subscribeToMailchimp(email, {
        FNAME: name,
        PHONE: phone,
        SOURCE: "Appointment",
      }).catch(() => {});
    }
  };

  return (
    <section id="appointment" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className="eyebrow eyebrow--light">Book An Appointment</span>
          <h2 className={styles.title}>
            Toothache? Don&apos;t suffer in silence.
          </h2>
          <p className={styles.text}>
            From wisdom tooth pain to a brighter smile — thousands of patients
            across Dhaka trust Dr. Yoshita for gentle, honest, and affordable
            dental care. Book your visit today.
          </p>

          <div className={styles.infoCols}>
            <div className={styles.infoRow}>
              <span className={styles.infoIcon}>
                <HeadsetIcon size={22} />
              </span>
              <div>
                <h3>Talk to Dr. Yoshita</h3>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoIcon}>
                <ClockIcon size={22} />
              </span>
              <div>
                <h3>Opening Hours</h3>
                <p>
                  Saturday – Thursday (6PM – 10PM)
                  <br />
                  Friday (Closed)
                </p>
              </div>
            </div>
          </div>

          <div
            ref={mapRef}
            className={`${styles.mapBox} ${mapActive ? styles.mapActive : ""}`}
            onClick={() => setMapActive(true)}
            onMouseLeave={() => setMapActive(false)}
          >
            {showMap && (
              <iframe
                title={`${site.name} location on Google Maps`}
                src="https://www.google.com/maps?q=MaxFace+Dental+Care+(Dr.+Yoshita+Mazumder)+Khilgaon+Dhaka&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            )}
          </div>
        </div>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <h2 className={styles.formTitle}>Make an Appointment</h2>

          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="E-mail" />

          <div className={styles.phoneField}>
            <span className={styles.phonePrefix}>+880</span>
            <input
              name="phone"
              type="tel"
              placeholder="1XXX-XXXXXX"
              required
            />
          </div>

          <textarea
            name="problem"
            placeholder="Briefly describe your problem"
            rows={6}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submit}>
            Submit Message
          </button>
          <p className={styles.hint}>
            Your request opens in WhatsApp — send it there and we&apos;ll
            confirm your appointment.
          </p>
        </form>
      </div>
    </section>
  );
}

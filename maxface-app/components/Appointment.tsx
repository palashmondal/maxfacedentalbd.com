"use client";

import { useState } from "react";
import { HeadsetIcon, ClockIcon } from "./icons";
import { site, services } from "@/lib/site";
import styles from "./Appointment.module.css";

export default function Appointment() {
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!firstName || !phone) {
      setError("Please fill in at least your first name and phone number.");
      return;
    }
    setError("");

    const lines = [
      "Hello MaxFace Dental Care, I would like to book an appointment.",
      `Name: ${firstName} ${String(data.get("lastName") ?? "").trim()}`.trim(),
      `Phone: ${phone}`,
      String(data.get("email") ?? "").trim() &&
        `E-mail: ${String(data.get("email")).trim()}`,
      String(data.get("service") ?? "") &&
        `Service: ${String(data.get("service"))}`,
      String(data.get("date") ?? "") &&
        `Preferred date: ${String(data.get("date"))}`,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
  };

  return (
    <section id="appointment" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className="eyebrow eyebrow--light">Book An Appointment</span>
          <h2 className={styles.title}>
            Schedule your visit for a healthier smile
          </h2>
          <p className={styles.text}>
            Thousands of patients trust us for compassionate, advanced dental
            care that delivers lasting confidence and healthy smiles.
          </p>

          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>
              <HeadsetIcon size={30} />
            </span>
            <div>
              <h3>Customer Services</h3>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.infoRow}>
            <span className={styles.infoIcon}>
              <ClockIcon size={30} />
            </span>
            <div>
              <h3>Opening Hours</h3>
              <p>
                Sun – Thurs (16:00 – 22:00), Sat (14:00 – 22:00)
                <br />
                Friday (Closed)
              </p>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <h2 className={styles.formTitle}>Make an Appointment</h2>

          <div className={styles.row}>
            <input name="firstName" placeholder="First Name" required />
            <input name="lastName" placeholder="Last Name" />
          </div>
          <input name="email" type="email" placeholder="E-mail" />
          <input name="phone" type="tel" placeholder="Phone No." required />

          <div className={styles.row}>
            <select name="service" defaultValue="">
              <option value="" disabled>
                Service Type
              </option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            <input name="date" type="date" aria-label="Preferred date" />
          </div>

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

import Link from "next/link";
import SectionNote from "./SectionNote";
import { serviceIcons, ArrowUpRightIcon } from "./icons";
import { services, site } from "@/lib/site";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Services @MaxFace Dental Care</span>
          <h2 className={styles.title}>
            Complete Dental Care for Every Family in Khilgaon, Bangladesh
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <article key={s.title} className={styles.card}>
                <p className={styles.category}>{s.category}</p>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <div className={styles.cardFoot}>
                  <span className={styles.icon}>
                    <Icon size={44} />
                  </span>
                  <Link
                    href="#appointment"
                    className={styles.arrow}
                    aria-label={`Book ${s.title}`}
                  >
                    <ArrowUpRightIcon size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.notes}>
          <SectionNote
            text="Join us and create smiles that truly inspire confidence."
            linkLabel="Contact Us"
            href="#appointment"
          />
          <p className={styles.reviewLine}>
            <strong>{site.rating}/5</strong>
            <span className={styles.star}>★</span>
            <strong>Our 4k Patient Review</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

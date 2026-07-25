import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import styles from "./IntroBento.module.css";

export default function IntroBento({ dict }: { dict: Dictionary["introBento"] }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className={styles.title}>{dict.title}</h2>
        </div>

        <div className={styles.grid} data-fade data-fade-children>
          <article className={`${styles.card} ${styles.photoCard} shiny-glass`}>
            <h3 className={styles.photoTitle}>{dict.kidsTitle}</h3>
          </article>

          <article className={`${styles.card} ${styles.counterCard} shiny-glass`}>
            <Image
              src="/images/male_patients.jpg"
              alt={dict.patientsAlt}
              width={420}
              height={340}
              className={styles.patientImage}
            />
            <span className={styles.cardShadow} aria-hidden />
            <h3 className={styles.patientTitle}>{dict.patientsTitle}</h3>
          </article>

          <article className={`${styles.card} ${styles.teamCard} shiny-glass`}>
            <Image
              src="/images/about-us-item-dr-image-prime.png"
              alt={dict.adultAlt}
              width={420}
              height={250}
              className={styles.teamImage}
            />
            <span className={styles.cardShadow} aria-hidden />
            <h3 className={styles.adultTitle}>
              {dict.adultTitleLines[0]}
              <br />
              {dict.adultTitleLines[1]}
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}

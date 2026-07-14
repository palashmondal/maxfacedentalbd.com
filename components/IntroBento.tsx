import Image from "next/image";
import styles from "./IntroBento.module.css";

export default function IntroBento() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">MaxFace Dental Care</span>
          <h2 className={styles.title}>
            Your neighborhood dentist in Malibagh, Chowdhury Para — where
            gentle care, modern technology, and 15 years of trusted
            experience come together for your whole family.
          </h2>
        </div>

        <div className={styles.grid} data-fade data-fade-children>
          <article className={`${styles.card} ${styles.photoCard} shiny-glass`}>
            <h3 className={styles.photoTitle}>
              Gentle Pediatric Dental Care for Your Child
            </h3>
          </article>

          <article className={`${styles.card} ${styles.counterCard} shiny-glass`}>
            <Image
              src="/images/male_patients.jpg"
              alt="Smiling patients after treatment at MaxFace Dental Care, Malibagh, Dhaka"
              width={420}
              height={340}
              className={styles.patientImage}
            />
            <span className={styles.cardShadow} aria-hidden />
            <h3 className={styles.patientTitle}>
              Trusted by Happy Smiles Across Malibagh
            </h3>
          </article>

          <article className={`${styles.card} ${styles.teamCard} shiny-glass`}>
            <Image
              src="/images/about-us-item-dr-image-prime.png"
              alt="Dr. Yoshita Mazumder performing adult dental treatment at MaxFace Dental Care, Dhaka"
              width={420}
              height={250}
              className={styles.teamImage}
            />
            <span className={styles.cardShadow} aria-hidden />
            <h3 className={styles.adultTitle}>
              Complete Adult Dentistry
              <br />
              from Checkups to Surgery
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Counter from "./Counter";
import SectionNote from "./SectionNote";
import { site } from "@/lib/site";
import styles from "./IntroBento.module.css";

export default function IntroBento() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">MaxFace Dental Care</span>
          <h2 className={styles.title}>
            Dedicated to creating healthier smiles for our community with
            gentle care, modern technology, and a patient-first approach you
            can trust.
          </h2>
        </div>

        <div className={styles.grid} data-fade data-fade-children>
          <article className={`${styles.card} ${styles.photoCard} shiny-glass`}>
            <h3 className={styles.photoTitle}>
              Why Families Count On Us For Dentistry
            </h3>
            <div className={styles.tags}>
              <span>Trusted Experts</span>
              <span>Gentle Care</span>
            </div>
          </article>

          <article className={`${styles.card} ${styles.counterCard}`}>
            <div className={styles.counterNumber}>
              <Counter to={500} suffix="+" />
            </div>
            <p>
              Trusted by over 500 patients who left with healthier teeth,
              brighter smiles, and lasting confidence.
            </p>
          </article>

          <article className={`${styles.card} ${styles.teamCard} shiny-glass`}>
            <h3>Personalized Dental Solutions</h3>
            <Image
              src="/images/about-us-item-dr-image-prime.png"
              alt="Our dental team"
              width={420}
              height={250}
              className={styles.teamImage}
            />
          </article>
        </div>

        <div className={styles.footNotes}>
          <SectionNote
            text="Join us and create smiles that truly inspire confidence."
            linkLabel="Contact Us"
            href="#appointment"
          />
          <p className={styles.reviewLine}>
            <Image
              src="/images/icon-google.svg"
              alt="Google"
              width={28}
              height={28}
            />
            <strong>{site.rating}/5</strong>
            <span className={styles.stars}>★★★★★</span>
            <strong>{site.reviews}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

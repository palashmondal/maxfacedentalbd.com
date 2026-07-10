import SectionNote from "./SectionNote";
import { steps } from "@/lib/site";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow eyebrow--light">How It Work</span>
          <h2 className={styles.title}>
            Step-by-step care for healthy, confident smiles
          </h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <article key={step.title} className={styles.card}>
              <span className={styles.chip}>{step.chip}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <SectionNote
          pill="Free"
          text="Let's make something great work together."
          linkLabel="Get Free Quote"
          href="#appointment"
          dark
        />
      </div>
    </section>
  );
}

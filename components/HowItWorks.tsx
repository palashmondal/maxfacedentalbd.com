import SectionNote from "./SectionNote";
import { steps } from "@/lib/site";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow eyebrow--light">
            Services @MaxFace Dental Care
          </span>
          <h2 className={styles.title}>
            Complete Dental Care for Every Family — All Under One Roof
          </h2>
        </div>

        <div className={styles.grid} data-fade data-fade-children>
          {steps.map((step) => (
            <article key={step.title} className={styles.card}>
              <p className={styles.chip}>{step.chip}</p>
              <h3>{step.title}</h3>
              {step.items ? (
                <ul className={styles.list}>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{step.text}</p>
              )}
            </article>
          ))}
        </div>

        <SectionNote
          pill="More"
          text="Don't see the treatment you need? We offer many more services."
          linkLabel="Contact Us"
          href="#appointment"
          dark
        />
      </div>
    </section>
  );
}

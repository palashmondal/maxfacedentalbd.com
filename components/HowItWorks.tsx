import SectionNote from "./SectionNote";
import type { Dictionary } from "@/lib/i18n";
import styles from "./HowItWorks.module.css";

export default function HowItWorks({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow eyebrow--light">{dict.eyebrow}</span>
          <h2 className={styles.title}>{dict.title}</h2>
        </div>

        <div className={styles.grid} data-fade data-fade-children>
          {dict.items.map((step) => (
            <article key={step.shortTitle} className={styles.card}>
              <p className={styles.chip}>{step.chip}</p>
              <h3>{step.shortTitle}</h3>
              <ul className={styles.list}>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <SectionNote
          pill={dict.note.pill}
          text={dict.note.text}
          linkLabel={dict.note.linkLabel}
          href="#appointment"
          dark
        />
      </div>
    </section>
  );
}

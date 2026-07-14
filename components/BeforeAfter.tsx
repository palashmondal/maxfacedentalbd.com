import CompareSlider from "./CompareSlider";
import SectionNote from "./SectionNote";
import { transformations } from "@/lib/site";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">After/Before</span>
          <h2 className={styles.title}>
            Stunning Smile Transformations
            <br />
            Before &amp; After Treatment @ MaxFace Dental Care
          </h2>
        </div>

        <div className={styles.panel} data-fade data-fade-children>
          {transformations.map(({ pair, label }, i) => (
            <figure key={`${pair}-${i}`} className={styles.case}>
              <CompareSlider
                before={`/images/transformation-img-before-${pair}.jpg`}
                after={`/images/transformation-img-after-${pair}.jpg`}
                alt={`${label} result`}
              />
              <figcaption className={styles.caseLabel}>{label}</figcaption>
            </figure>
          ))}
        </div>

        <SectionNote
          pill="Free"
          text="Your smile could be next. Book a free consultation —"
          linkLabel="Get Appointment"
          href="#appointment"
        />
      </div>
    </section>
  );
}

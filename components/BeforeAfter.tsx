import CompareSlider from "./CompareSlider";
import SectionNote from "./SectionNote";
import { fill } from "@/lib/i18n/template";
import type { Dictionary } from "@/lib/i18n";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter({
  dict,
}: {
  dict: Dictionary["beforeAfter"];
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className={styles.title}>
            {dict.titleLines[0]}
            <br />
            {dict.titleLines[1]}
          </h2>
        </div>

        <div className={styles.panel} data-fade data-fade-children>
          {dict.transformations.map(({ pair, label }, i) => (
            <figure key={`${pair}-${i}`} className={styles.case}>
              <CompareSlider
                before={`/images/transformation-img-before-${pair}.jpg`}
                after={`/images/transformation-img-after-${pair}.jpg`}
                alt={fill(dict.resultAlt, { label })}
              />
              <figcaption className={styles.caseLabel}>{label}</figcaption>
            </figure>
          ))}
        </div>

        <SectionNote
          pill={dict.note.pill}
          text={dict.note.text}
          linkLabel={dict.note.linkLabel}
          href="#appointment"
        />
      </div>
    </section>
  );
}

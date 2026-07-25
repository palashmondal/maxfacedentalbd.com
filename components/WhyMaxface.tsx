import Image from "next/image";
import { serviceIcons } from "./icons";
import type { Dictionary } from "@/lib/i18n";
import styles from "./WhyMaxface.module.css";

type Feature = Dictionary["why"]["features"][number];

export default function WhyMaxface({ dict }: { dict: Dictionary["why"] }) {
  const features = dict.features;
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow eyebrow--light">{dict.eyebrow}</span>
          <h2 className={styles.title}>
            {dict.titleLines[0]}
            <br />
            {dict.titleLines[1]}
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            {[features[0], features[2]].map((f) => (
              <Feature key={f.title} {...f} />
            ))}
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/images/why-choose-image.png"
              alt={dict.imageAlt}
              width={520}
              height={860}
              className={styles.image}
            />
          </div>

          <div className={styles.column}>
            {[features[1], features[3]].map((f) => (
              <Feature key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }: Feature) {
  const Icon = serviceIcons[icon];
  return (
    <div className={styles.feature}>
      <span className={styles.iconTile}>{Icon && <Icon size={26} />}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

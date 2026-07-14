import Image from "next/image";
import {
  ToothIcon,
  CapsulesIcon,
  KitIcon,
  MicroscopeIcon,
} from "./icons";
import styles from "./WhyMaxface.module.css";

const features = [
  {
    icon: ToothIcon,
    title: "Modern Dental Technology",
    text: "Digital X-rays, precise instruments, and up-to-date techniques mean faster, more accurate treatment with less discomfort.",
  },
  {
    icon: CapsulesIcon,
    title: "Affordable Treatment",
    text: "Quality dental care shouldn't break the bank. We keep our pricing transparent and reasonable for every patient in Khilgaon, Dhaka.",
  },
  {
    icon: KitIcon,
    title: "Personalized Treatment Plans",
    text: "No two smiles are the same. Every treatment plan is tailored to your specific needs, concerns, and budget.",
  },
  {
    icon: MicroscopeIcon,
    title: "Safe for the Whole Family",
    text: "From your child's first checkup to specialized surgery, our gentle approach makes every visit comfortable for patients of all ages.",
  },
];

export default function WhyMaxface() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow eyebrow--light">WHY MaxFace Dental Care</span>
          <h2 className={styles.title}>
            Where Khilgaon &amp; Malibagh Chowdhurypara
            <br />
            Come to Smile with Confidence.
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
              alt="Dental implant with crown — permanent tooth replacement offered at MaxFace Dental Care, Dhaka"
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

function Feature({
  icon: Icon,
  title,
  text,
}: (typeof features)[number]) {
  return (
    <div className={styles.feature}>
      <span className={styles.iconTile}>
        <Icon size={26} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

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
    title: "State-of-Art Technology",
    text: "At our Khilgaon, Dhaka clinic, we provide gentle, reliable dental care using the latest technology. Our experienced team is dedicated to ensuring healthy, confident smiles for patients of all ages.",
  },
  {
    icon: CapsulesIcon,
    title: "Compassionate and Affordable Care",
    text: "We provide gentle, precise, and safe dental treatments using advanced technology, all while keeping our services affordable for every patient in Khilgaon, Dhaka.",
  },
  {
    icon: KitIcon,
    title: "Patient-Centered Approach",
    text: "At our family dental clinic in Khilgaon, Dhaka, we provide safe, precise, and comfortable treatments for patients of all ages using advanced dental technology.",
  },
  {
    icon: MicroscopeIcon,
    title: "Family-Friendly Environment",
    text: "At our family dental clinic, we use advanced technology to provide safe, precise, and comfortable treatments for patients of all ages.",
  },
];

export default function WhyMaxface() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow eyebrow--light">WHY MaxFace Dental Care</span>
          <h2 className={styles.title}>
            Delivering Gentle and Trusted Dental Care in Khilgaon, Dhaka.
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
              alt="Dental implant"
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

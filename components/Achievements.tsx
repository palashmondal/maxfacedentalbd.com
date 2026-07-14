import Image from "next/image";
import styles from "./Achievements.module.css";

const achievements = [
  {
    src: "/images/prize1.JPG",
    width: 1935,
    height: 1088,
    alt: "Dr. Yoshita Mazumder receiving a crest of honour from BARD on behalf of DGHS",
    caption:
      "Honoured with a crest by BARD, on behalf of the Directorate General of Health Services (DGHS), for successfully completing a special training course",
    // She stands at the far left of this wide group photo — anchor crops
    // there so a squarer mobile card doesn't cut her out of frame.
    objectPosition: "left center",
  },
  {
    src: "/images/prize2.jpeg",
    width: 755,
    height: 852,
    alt: "Dr. Yoshita Mazumder being felicitated by BAMOS",
    caption:
      "Recognised by BAMOS on completing her MS in Oral & Maxillofacial Surgery",
  },
];

export default function Achievements() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Achievements &amp; Recognition</span>
          <h2 className={styles.title}>
            Honoured for Excellence in Dental Care
          </h2>
        </div>

        <div className={styles.grid} data-fade data-fade-children>
          {achievements.map((a) => (
            <figure key={a.src} className={styles.item}>
              <div className={styles.imageWrap}>
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={a.width}
                  height={a.height}
                  className={styles.image}
                  style={
                    a.objectPosition
                      ? { objectPosition: a.objectPosition }
                      : undefined
                  }
                />
              </div>
              <figcaption className={styles.caption}>{a.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

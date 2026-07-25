import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import styles from "./Achievements.module.css";

// Language-neutral image meta; alt + caption come from the dictionary.
const media = [
  {
    src: "/images/prize1.JPG",
    width: 1935,
    height: 1088,
    // She stands at the far left of this wide group photo — anchor crops
    // there so a squarer mobile card doesn't cut her out of frame.
    objectPosition: "left center",
  },
  {
    src: "/images/prize2.jpeg",
    width: 755,
    height: 852,
    objectPosition: undefined as string | undefined,
  },
];

export default function Achievements({
  dict,
}: {
  dict: Dictionary["achievements"];
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className={styles.title}>{dict.title}</h2>
        </div>

        <div className={styles.grid} data-fade data-fade-children>
          {media.map((m, i) => (
            <figure key={m.src} className={styles.item}>
              <div className={styles.imageWrap}>
                <Image
                  src={m.src}
                  alt={dict.items[i].alt}
                  width={m.width}
                  height={m.height}
                  className={styles.image}
                  style={
                    m.objectPosition
                      ? { objectPosition: m.objectPosition }
                      : undefined
                  }
                />
              </div>
              <figcaption className={styles.caption}>
                {dict.items[i].caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

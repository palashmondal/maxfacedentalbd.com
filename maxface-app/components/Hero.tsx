import Image from "next/image";
import ArrowButton from "./ArrowButton";
import RotatingBadge from "./RotatingBadge";
import { site } from "@/lib/site";
import styles from "./Hero.module.css";

const avatars = [1, 2, 3, 4].map((n) => `/images/author-${n}.jpg`);

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.avatarPill}>
            <span className={styles.avatars}>
              {avatars.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={36}
                  height={36}
                  className={styles.avatar}
                />
              ))}
            </span>
            More than Thousand Satisficed Patients
          </div>

          <h1 className={styles.title}>
            Creating confident smiles with care!
          </h1>

          <p className={styles.text}>
            Looking for a Dentist ? Choose Us. Because we deliver expert,
            gentle, and comprehensive dental care at{" "}
            <strong>{site.name}</strong> under the guidance of{" "}
            <strong>{site.doctor}</strong>.
          </p>

          <div className={styles.actions}>
            <ArrowButton href="#appointment">Make Appointment Now</ArrowButton>

            <div className={styles.googleCard}>
              <Image
                src="/images/icon-google.svg"
                alt="Google"
                width={56}
                height={56}
              />
              <div>
                <div className={styles.ratingRow}>
                  <span className={styles.rating} data-counter="4.9">
                    {site.rating}/5
                  </span>
                  <span className={styles.stars} aria-label="5 stars">
                    ★★★★★
                  </span>
                </div>
                <div className={styles.googleLabel}>Google Business Page</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/images/yoshita.png"
            alt={site.doctor}
            width={760}
            height={880}
            className={styles.image}
            priority
          />
        </div>
      </div>

      <RotatingBadge className={styles.badge} />
    </section>
  );
}

import Image from "next/image";
import CreativeButton from "./CreativeButton";
import HeroTitle from "./HeroTitle";
import Counter from "./Counter";
import RotatingBadge from "./RotatingBadge";
import StarRating from "./StarRating";
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
            1000+ Happy Smiles &amp; Counting
          </div>

          <HeroTitle className={styles.title} />

          <p className={styles.text}>
            <strong>{site.doctor}</strong> — {site.credentials}, 15 years
            experience — provides expert, gentle dental care at{" "}
            <strong>{site.name}</strong> in Malibagh, Dhaka. Open evenings,
            six days a week.
          </p>

          <div className={styles.actions}>
            <CreativeButton href="#appointment">
              Make Appointment Now
            </CreativeButton>

            <a
              href={site.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleCard}
            >
              <Image
                src="/images/icon-google.svg"
                alt="Google"
                width={56}
                height={56}
              />
              <div>
                <div className={styles.ratingRow}>
                  <Counter
                    from={1}
                    to={5}
                    decimals={1}
                    suffix="/5"
                    snapToWholeAtEnd
                    duration={3200}
                    className={styles.rating}
                  />
                  <StarRating className={styles.stars} />
                </div>
                <div className={styles.googleLabel}>Google Business Page</div>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/images/yoshita.png"
            alt={`${site.doctor}, dental surgeon and oral & maxillofacial specialist at ${site.name}, Malibagh, Dhaka`}
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

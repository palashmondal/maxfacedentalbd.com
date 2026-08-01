import Image from "next/image";
import CreativeButton from "./CreativeButton";
import HeroTitle from "./HeroTitle";
import Counter from "./Counter";
import RotatingBadge from "./RotatingBadge";
import StarRating from "./StarRating";
import { site } from "@/lib/site";
import { tmpl, fill } from "@/lib/i18n/template";
import type { Dictionary, Locale } from "@/lib/i18n";
import styles from "./Hero.module.css";

const avatars = [1, 2, 3, 4].map((n) => `/images/author-${n}.jpg`);

export default function Hero({
  dict,
  doctorName,
  lang,
}: {
  dict: Dictionary["hero"];
  doctorName: string;
  lang: Locale;
}) {
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
            {dict.happySmiles}
          </div>

          <HeroTitle
            className={styles.title}
            titles={dict.titles}
            introLines={dict.introLines}
          />

          <p className={styles.text}>
            {tmpl(dict.bio, {
              doctor: <strong className={styles.docName}>{doctorName}</strong>,
              credentials: site.credentials,
              name: <strong>{site.name}</strong>,
            })}
          </p>

          <div className={styles.actions}>
            <CreativeButton href="#appointment">{dict.cta}</CreativeButton>

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
                    to={Number(site.rating)}
                    decimals={1}
                    suffix="/5"
                    snapToWholeAtEnd={Number.isInteger(Number(site.rating))}
                    duration={3200}
                    className={styles.rating}
                    lang={lang}
                  />
                  <StarRating className={styles.stars} />
                </div>
                <div className={styles.googleLabel}>{dict.googleLabel}</div>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/images/yoshita.png"
            alt={fill(dict.imageAlt, { doctor: site.doctor, name: site.name })}
            width={760}
            height={880}
            className={styles.image}
            priority
          />
        </div>
      </div>

      <RotatingBadge className={styles.badge} text={dict.badge} />
    </section>
  );
}

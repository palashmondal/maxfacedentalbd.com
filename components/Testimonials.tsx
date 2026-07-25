"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import styles from "./Testimonials.module.css";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials({
  dict,
}: {
  dict: Dictionary["testimonials"];
}) {
  const items = dict.items;
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

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className={styles.swiper}
        >
          {[...items, ...items].map((t, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <article className={styles.card}>
                <div className={styles.stars} aria-label={dict.starsAria}>
                  ★★★★★
                </div>
                <div className={styles.quote}>
                  {t.quote.split("\n\n").map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                <div className={styles.foot}>
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className={styles.avatar}
                  />
                  <div className={styles.person}>
                    <strong>{t.name}</strong>
                    <span>{t.treatment}</span>
                  </div>
                  <span className={styles.glyph} aria-hidden>
                    &#10078;
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.footNotes}>
          <div className={styles.reviewLine}>
            <Image
              src="/images/icon-google.svg"
              alt="Google"
              width={28}
              height={28}
            />
            <strong>{site.rating}/5</strong>
            <span className={styles.googleStars}>★★★★★</span>
          </div>
          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewsBtn}
          >
            {dict.reviewsLabel}
            <span className={styles.reviewsBtnArrow} aria-hidden>
              →
            </span>
          </a>
        </div>

        <div className={styles.reviewCta}>
          <div className={styles.reviewCtaText}>
            <span className={styles.reviewCtaStars} aria-hidden>
              ★★★★★
            </span>
            <h3>{dict.reviewCta.title}</h3>
            <p>{dict.reviewCta.text}</p>
          </div>
          <a
            href={site.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewCtaBtn}
          >
            <Image src="/images/icon-google.svg" alt="" width={22} height={22} />
            {dict.reviewCta.button}
          </a>
        </div>
      </div>
    </section>
  );
}

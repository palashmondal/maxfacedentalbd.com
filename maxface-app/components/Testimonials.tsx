"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonials, site } from "@/lib/site";
import styles from "./Testimonials.module.css";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Testimonials</span>
          <h2 className={styles.title}>
            Happy Patients Sharing Their Dental Care Journey @ MaxFace
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
          {[...testimonials, ...testimonials].map((t, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <article className={styles.card}>
                <div className={styles.stars} aria-label="5 out of 5 stars">
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

        <p className={styles.reviewLine}>
          <strong>{site.rating}/5</strong>
          <span className={styles.star}>★</span>
          <strong>Our 4k Patient Review</strong>
        </p>
      </div>
    </section>
  );
}

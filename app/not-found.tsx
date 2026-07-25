import type { Metadata } from "next";
import Image from "next/image";
import MagicCursor from "@/components/MagicCursor";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CreativeButton from "@/components/CreativeButton";
import Footer from "@/components/Footer";
import { defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n/href";
import styles from "./not-found.module.css";

const lang = defaultLocale;
const d = getDictionary(lang);

export const metadata: Metadata = {
  title: d.meta.notFound.title,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div lang={lang}>
      <MagicCursor />
      <Header
        lang={lang}
        nav={d.nav}
        doctorName={d.doctorName}
        switcher={d.switcher}
      />
      <main>
        <PageHero
          title={d.notFound.heroTitle}
          eyebrow={d.notFound.heroEyebrow}
          crumbs={[
            { label: d.blog.crumbHome, href: localizedHref(lang, "/") },
            { label: d.notFound.crumb },
          ]}
        />

        <section className={styles.section}>
          <div className={`container ${styles.inner}`}>
            <Image
              src="/images/404-error-img.png"
              alt="404 — page not found illustration with a dentist examining a tooth"
              width={709}
              height={485}
              className={styles.image}
              priority
            />
            <h2 className={styles.heading}>{d.notFound.heading}</h2>
            <p className={styles.text}>{d.notFound.text}</p>
            <div className={styles.actions}>
              <CreativeButton href={localizedHref(lang, "/")}>
                {d.notFound.backHome}
              </CreativeButton>
            </div>
          </div>
        </section>
      </main>
      <Footer
        lang={lang}
        dict={d.footer}
        doctorName={d.doctorName}
        subscribeModal={d.subscribeModal}
      />
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import MagicCursor from "@/components/MagicCursor";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CreativeButton from "@/components/CreativeButton";
import Footer from "@/components/Footer";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found | MaxFace Dental Care",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <MagicCursor />
      <Header />
      <main>
        <PageHero
          title="Page Not Found"
          eyebrow="404 Error"
          crumbs={[{ label: "Home", href: "/" }, { label: "404 Page Not Found" }]}
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
            <h2 className={styles.heading}>Oops! Page not found</h2>
            <p className={styles.text}>
              The page you are looking for doesn&rsquo;t exist or may have
              moved. Let&rsquo;s get you back to a healthy place.
            </p>
            <div className={styles.actions}>
              <CreativeButton href="/">Back To Home</CreativeButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import MagicCursor from "@/components/MagicCursor";
import ScrollAnimations from "@/components/ScrollAnimations";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import BlogIndex from "@/components/BlogIndex";
import Footer from "@/components/Footer";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Smile Insights — Dental Tips from MaxFace Dental Care",
  description:
    "Practical dental health advice from Dr. Yoshita Mazumder and the MaxFace Dental Care team in Dhaka — prevention, treatments, and oral health for Bangladeshi families.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <MagicCursor />
      <ScrollAnimations />
      <Header />
      <main>
        <PageHero
          title="Smile Insights from MaxFace Dental Care"
          eyebrow="Our Blog"
          crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />

        <section className={styles.section}>
          <div className="container">
            <BlogIndex />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

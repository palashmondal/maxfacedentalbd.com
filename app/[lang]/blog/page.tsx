import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MagicCursor from "@/components/MagicCursor";
import ScrollAnimations from "@/components/ScrollAnimations";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import BlogIndex from "@/components/BlogIndex";
import Footer from "@/components/Footer";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n/href";
import { pageMetadata } from "@/lib/i18n/metadata";
import { articlesForLang } from "@/lib/i18n/posts";
import styles from "./blog.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return pageMetadata({
    lang,
    subpath: "/blog/",
    title: d.meta.blog.title,
    description: d.meta.blog.description,
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const localePosts = articlesForLang(lang);

  return (
    <>
      <MagicCursor />
      <ScrollAnimations />
      <Header
        lang={lang}
        nav={d.nav}
        doctorName={d.doctorName}
        switcher={d.switcher}
      />
      <main>
        <PageHero
          title={d.blog.heroTitle}
          eyebrow={d.blog.heroEyebrow}
          crumbs={[
            { label: d.blog.crumbHome, href: localizedHref(lang, "/") },
            { label: d.blog.crumbBlog },
          ]}
        />

        <section className={styles.section}>
          <div className="container">
            <BlogIndex posts={localePosts} lang={lang} dict={d.blog} />
          </div>
        </section>
      </main>
      <Footer
        lang={lang}
        dict={d.footer}
        doctorName={d.doctorName}
        subscribeModal={d.subscribeModal}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MagicCursor from "@/components/MagicCursor";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import RelatedSlider from "@/components/RelatedSlider";
import ShareBar from "@/components/ShareBar";
import Footer from "@/components/Footer";
import CreativeButton from "@/components/CreativeButton";
import { posts, getPost, getPostTags, formatPostDate } from "@/lib/blog";
import { site } from "@/lib/site";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n/href";
import { fill, tmpl } from "@/lib/i18n/template";
import { postsForLang, postLocale } from "@/lib/i18n/posts";
import styles from "./article.module.css";

export function generateStaticParams() {
  // Enumerate the full {lang, slug} set so each post builds only under its own
  // language (required, and unambiguous, for `output: export`).
  return posts.map((post) => ({ lang: postLocale(post), slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const post = getPost(slug);
  if (!post) return {};
  const d = getDictionary(lang);
  return {
    title: `${post.title} | ${d.meta.aliasSuffix}`,
    description: post.excerpt,
    keywords: [
      ...getPostTags(post),
      post.category,
      "dental care Bangladesh",
      "dentist Dhaka",
    ],
    alternates: { canonical: `/${lang}/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Dr. Yoshita Mazumder"],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const post = getPost(slug);
  // Only serve a post under its own language.
  if (!post || postLocale(post) !== lang) notFound();

  const d = getDictionary(lang);
  const localePosts = postsForLang(posts, lang);

  // Same category first, then the rest — the slider shows them all.
  const related = [
    ...localePosts.filter(
      (p) => p.slug !== post.slug && p.category === post.category,
    ),
    ...localePosts.filter(
      (p) => p.slug !== post.slug && p.category !== post.category,
    ),
  ];
  const idx = localePosts.findIndex((p) => p.slug === post.slug);
  const nextPost = localePosts[(idx + 1) % localePosts.length];

  const canonical = `https://maxfacedentalbd.com/${lang}/blog/${post.slug}/`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://maxfacedentalbd.com${post.image}`,
    datePublished: post.date,
    inLanguage: lang,
    author: {
      "@type": "Person",
      name: "Dr. Yoshita Mazumder",
      jobTitle: "Dental Surgeon, MS (Oral & Maxillofacial Surgery)",
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: "https://maxfacedentalbd.com/images/maxface-logo.png",
      },
    },
    mainEntityOfPage: canonical,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: d.blog.crumbHome,
        item: `https://maxfacedentalbd.com/${lang}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: d.blog.crumbBlog,
        item: `https://maxfacedentalbd.com/${lang}/blog/`,
      },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <MagicCursor />
      <Header
        lang={lang}
        nav={d.nav}
        doctorName={d.doctorName}
        switcher={d.switcher}
      />
      <main lang={post.lang === "bn" ? "bn" : undefined}>
        <PageHero
          title={post.title}
          eyebrow={post.category}
          crumbs={[
            { label: d.blog.crumbHome, href: localizedHref(lang, "/") },
            { label: d.blog.crumbBlog, href: localizedHref(lang, "/blog") },
            { label: post.title },
          ]}
        />

        <section className={styles.section}>
          <div className="container">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1600}
              height={686}
              className={styles.cover}
              priority
            />

            <article className={styles.layout}>
              <div className={styles.meta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.dot} aria-hidden="true" />
                <time dateTime={post.date}>
                  {formatPostDate(post.date, post.lang)}
                </time>
                <span className={styles.dot} aria-hidden="true" />
                <span>{post.readTime}</span>
                <span className={styles.dot} aria-hidden="true" />
                <span>{fill(d.blog.by, { doctor: site.doctor })}</span>
              </div>

              <div className={styles.body}>
                {post.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}

                {post.sections.map((section, i) => (
                  <section key={section.heading ?? i}>
                    {section.heading && <h2>{section.heading}</h2>}
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                    {section.list && (
                      <ul>
                        {section.list.map((item) => (
                          <li key={item.slice(0, 40)}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                <div className={styles.takeaway}>
                  <h2>{d.blog.takeawayTitle}</h2>
                  <p>{post.takeaway}</p>
                </div>

                <ShareBar
                  url={canonical}
                  title={post.title}
                  tags={getPostTags(post)}
                  tagsLabel={d.blog.tagsLabel}
                />
              </div>

              <div className={styles.cta}>
                <div>
                  <h2>{d.blog.ctaTitle}</h2>
                  <p>
                    {tmpl(d.blog.ctaText, {
                      doctor: site.doctor,
                      credentials: site.credentials,
                      name: site.name,
                    })}
                  </p>
                </div>
                <CreativeButton href={localizedHref(lang, "/#appointment")}>
                  {d.blog.ctaButton}
                </CreativeButton>
              </div>

              <div className={styles.backRow}>
                <Link href={localizedHref(lang, "/blog")} className={styles.back}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M19 12H5m6-6-6 6 6 6" />
                  </svg>
                  {d.blog.backToAll}
                </Link>
                <Link
                  href={`/${lang}/blog/${nextPost.slug}`}
                  className={styles.next}
                  title={nextPost.title}
                >
                  <span className={styles.nextTitle}>
                    {fill(d.blog.next, { title: nextPost.title })}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>

            <aside className={styles.related} aria-label="Related articles">
              <RelatedSlider posts={related} lang={lang} dict={d.blog} />
            </aside>
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

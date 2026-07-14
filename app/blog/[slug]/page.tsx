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
import styles from "./article.module.css";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | MaxFace Dental Care`,
    description: post.excerpt,
    keywords: [
      ...getPostTags(post),
      post.category,
      "dental care Bangladesh",
      "dentist Dhaka",
    ],
    alternates: { canonical: `/blog/${post.slug}/` },
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
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  // Same category first, then the rest — the slider shows them all.
  const related = [
    ...posts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...posts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ];
  const nextPost = posts[(posts.findIndex((p) => p.slug === post.slug) + 1) % posts.length];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://maxfacedentalbd.com${post.image}`,
    datePublished: post.date,
    inLanguage: post.lang === "bn" ? "bn" : "en",
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
    mainEntityOfPage: `https://maxfacedentalbd.com/blog/${post.slug}/`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxfacedentalbd.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://maxfacedentalbd.com/blog/" },
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
      <Header />
      <main lang={post.lang === "bn" ? "bn" : undefined}>
        <PageHero
          title={post.title}
          eyebrow={post.category}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
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
                <span>By {site.doctor}</span>
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
                  <h2>The takeaway</h2>
                  <p>{post.takeaway}</p>
                </div>

                <ShareBar
                  url={`https://maxfacedentalbd.com/blog/${post.slug}/`}
                  title={post.title}
                  tags={getPostTags(post)}
                />
              </div>

              <div className={styles.cta}>
                <div>
                  <h2>Have a question about your teeth?</h2>
                  <p>
                    {site.doctor} — {site.credentials} — is available six days
                    a week at {site.name}, Malibagh, Dhaka.
                  </p>
                </div>
                <CreativeButton href="/#appointment">
                  Book an Appointment
                </CreativeButton>
              </div>

              <div className={styles.backRow}>
                <Link href="/blog" className={styles.back}>
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
                  Back to all articles
                </Link>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className={styles.next}
                  title={nextPost.title}
                >
                  <span className={styles.nextTitle}>
                    Next: {nextPost.title}
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
              <RelatedSlider posts={related} />
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

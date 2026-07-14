import Image from "next/image";
import Link from "next/link";
import { type BlogPost, formatPostDate } from "@/lib/blog";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article
      className={styles.card}
      data-fade
      lang={post.lang === "bn" ? "bn" : undefined}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={styles.imageLink}
        aria-label={post.title}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          width={640}
          height={534}
          className={styles.image}
        />
      </Link>
      <div className={styles.meta}>
        <span className={styles.category}>{post.category}</span>
        <span className={styles.dot} aria-hidden="true" />
        <time dateTime={post.date}>{formatPostDate(post.date, post.lang)}</time>
      </div>
      <h3 className={styles.title}>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <Link href={`/blog/${post.slug}`} className={styles.readMore}>
        Read More{" "}
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
    </article>
  );
}

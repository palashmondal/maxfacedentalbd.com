import Link from "next/link";
import styles from "./PageHero.module.css";

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  eyebrow,
  crumbs,
}: {
  title: string;
  eyebrow?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <ol>
            {crumbs.map((crumb, i) => (
              <li key={crumb.label}>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <svg
                    className={styles.sep}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}

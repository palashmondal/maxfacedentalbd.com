import Link from "next/link";
import styles from "./ArrowButton.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "white" | "outline";
  size?: "md" | "sm";
  className?: string;
};

/** Pill button with the circular arrow chip used across the site. */
export default function ArrowButton({
  href,
  children,
  variant = "white",
  size = "md",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={`${styles.btn} ${variant === "outline" ? styles.outline : ""} ${size === "sm" ? styles.sm : ""} ${className ?? ""}`}
    >
      <span className={styles.label}>{children}</span>
      <span className={styles.chip} aria-hidden>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 7h9M7.5 2.5 12 7l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

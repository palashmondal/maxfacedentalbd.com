import styles from "./SectionNote.module.css";

type Props = {
  text: string;
  linkLabel: string;
  href: string;
  pill?: string;
  dark?: boolean;
};

/** The "Join us… Contact Us" / "Free — Get Free Quote" line under sections. */
export default function SectionNote({ text, linkLabel, href, pill, dark }: Props) {
  return (
    <p className={`${styles.note} ${dark ? styles.dark : ""}`}>
      {pill && <span className={styles.pill}>{pill}</span>}
      {text}{" "}
      <a href={href} className={styles.link}>
        {linkLabel}
      </a>
    </p>
  );
}

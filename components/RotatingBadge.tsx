import { site } from "@/lib/site";
import styles from "./RotatingBadge.module.css";

/**
 * "15+ Years Excellence *" circular rotating text badge, linking to the
 * clinic's Google Maps location. SVG textPath on a circle, rotated
 * continuously via CSS animation (replaces ElementsKit text-path +
 * animate-circle.js).
 */
export default function RotatingBadge({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open MaxFace Dental Care location on Google Maps"
      className={`${styles.badge} ${className ?? ""}`}
    >
      <svg className={styles.text} viewBox="0 0 200 200">
        <defs>
          <path
            id="badge-circle"
            d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
          />
        </defs>
        <text textLength="478" lengthAdjust="spacingAndGlyphs">
          <textPath href="#badge-circle" textLength="478" lengthAdjust="spacingAndGlyphs">
            {text}&nbsp;
          </textPath>
        </text>
      </svg>
      <span className={styles.icon}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.5 2.5 13 11m8.5-8.5-6 19-3.5-8.5m9.5-10.5-19 6 8.5 3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

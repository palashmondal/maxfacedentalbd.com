import styles from "./RotatingBadge.module.css";

/**
 * "15+ Years Excellence *" circular rotating text badge.
 * SVG textPath on a circle, rotated continuously via CSS animation
 * (replaces ElementsKit text-path + animate-circle.js).
 */
export default function RotatingBadge({ className }: { className?: string }) {
  return (
    <div className={`${styles.badge} ${className ?? ""}`} aria-hidden>
      <svg className={styles.text} viewBox="0 0 200 200">
        <defs>
          <path
            id="badge-circle"
            d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
        </defs>
        <text textLength="450" lengthAdjust="spacingAndGlyphs">
          <textPath href="#badge-circle" textLength="450" lengthAdjust="spacingAndGlyphs">
            15+ Years Excellence * 15+ Years Excellence *&nbsp;
          </textPath>
        </text>
      </svg>
      <span className={styles.icon}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.5 2.5 13 11m8.5-8.5-6 19-3.5-8.5m9.5-10.5-19 6 8.5 3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

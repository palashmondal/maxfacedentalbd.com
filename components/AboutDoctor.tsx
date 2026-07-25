import Image from "next/image";
import ArrowButton from "./ArrowButton";
import { serviceIcons, PhoneIcon } from "./icons";
import { site } from "@/lib/site";
import { fill } from "@/lib/i18n/template";
import type { Dictionary } from "@/lib/i18n";
import styles from "./AboutDoctor.module.css";

export default function AboutDoctor({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="doctor" className={styles.section}>
      <span className={`eyebrow ${styles.sectionEyebrow}`}>{dict.eyebrow}</span>
      <div className={`container ${styles.grid}`}>
        <div className={styles.leftColumn}>
          <div className={`${styles.photoWrap} shiny-glass`}>
            <Image
              src="/images/yoshita2.png"
              alt={fill(dict.photoAlt, { doctor: site.doctor, name: site.name })}
              width={520}
              height={780}
              className={styles.photo}
            />
          </div>

          <div className={styles.actions}>
            <ArrowButton href="#appointment" variant="outline">
              {dict.ctaAppointment}
            </ArrowButton>
            <ArrowButton
              href={site.phoneHref}
              variant="outline"
              icon={<PhoneIcon size={18} />}
            >
              {fill(dict.call, { phone: site.phone })}
            </ArrowButton>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.name}>{dict.name}</h2>
          <p className={styles.credentials}>{site.credentials}</p>
          <p className={styles.designation}>{dict.designation}</p>
          <div className={styles.bioBlock}>
            {dict.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className={styles.bio}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.experienceSection}>
            <h3 className={styles.experienceTitle}>{dict.experiencesTitle}</h3>
            <ul className={styles.experienceList}>
              {dict.experiences.map((exp, index) => (
                <li key={index} className={styles.experienceItem}>
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.highlights}>
            {dict.highlights.map(({ icon, label }) => {
              const Icon = serviceIcons[icon];
              return (
                <span key={label} className={styles.highlight}>
                  <span className={styles.highlightIcon}>
                    {Icon && <Icon size={24} />}
                  </span>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

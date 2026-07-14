import Image from "next/image";
import ArrowButton from "./ArrowButton";
import {
  GradCapIcon,
  PersonIcon,
  MedalIcon,
  MoneyIcon,
  PhoneIcon,
} from "./icons";
import { site } from "@/lib/site";
import styles from "./AboutDoctor.module.css";

const highlights = [
  { icon: GradCapIcon, label: "Highly Qualified Doctor" },
  { icon: PersonIcon, label: "Female Doctor" },
  { icon: MedalIcon, label: "15 years of Experience" },
  { icon: MoneyIcon, label: "Affordable Treatment" },
];

const experiences = [
  "5 years training in Maxillofacial Surgery from Dhaka Dental College & Hospital",
  "6 months FPCS training on Oral & Maxillofacial Surgery",
  "3 years work experience at Khadimpara 31 beded Hospital, Sylhet",
  "2 years work experience at Mugdha Medical College",
];

export default function AboutDoctor() {
  return (
    <section id="doctor" className={styles.section}>
      <span className={`eyebrow ${styles.sectionEyebrow}`}>About Doctor</span>
      <div className={`container ${styles.grid}`}>
        <div className={styles.leftColumn}>
          <div className={`${styles.photoWrap} shiny-glass`}>
            <Image
              src="/images/yoshita2.png"
              alt={`${site.doctor} at ${site.name}`}
              width={520}
              height={780}
              className={styles.photo}
            />
          </div>

          <div className={styles.actions}>
            <ArrowButton href="#appointment" variant="outline">
              Make Appointment
            </ArrowButton>
            <ArrowButton
              href={site.phoneHref}
              variant="outline"
              icon={<PhoneIcon size={18} />}
            >
              Call: {site.phone}
            </ArrowButton>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.name}>{site.doctor.replace("Dr. ", "Dr. ")}</h2>
          <p className={styles.credentials}>{site.credentials}</p>
          <p className={styles.designation}>Dental Surgeon, Mugda Medical College & Hospital</p>
          <div className={styles.bioBlock}>
            <p className={styles.bio}>
              Dr. Yoshita Mazumder is a highly experienced female dental
              surgeon with 15+ years of clinical practice, currently serving as
              a Government Dental Doctor at Mugda Medical College Hospital. She
              leads MaxFace Dental Care — a trusted, modern dental chamber in
              Malibagh–Khilgaon, Dhaka, offering complete dental and oral
              healthcare in a comfortable, patient-friendly environment.
            </p>
            <p className={styles.bio}>
              From scaling, fillings, and extractions to root canal treatment,
              dental implants, pediatric dentistry, and oral &amp;
              maxillofacial surgery — every treatment is delivered with ethical
              care, strict sterilization, and patient satisfaction as the
              highest priorities.
            </p>
          </div>

          <div className={styles.experienceSection}>
            <h3 className={styles.experienceTitle}>Experiences</h3>
            <ul className={styles.experienceList}>
              {experiences.map((exp, index) => (
                <li key={index} className={styles.experienceItem}>
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.highlights}>
            {highlights.map(({ icon: Icon, label }) => (
              <span key={label} className={styles.highlight}>
                <span className={styles.highlightIcon}>
                  <Icon size={24} />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

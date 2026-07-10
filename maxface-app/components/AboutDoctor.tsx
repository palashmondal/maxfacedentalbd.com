import Image from "next/image";
import ArrowButton from "./ArrowButton";
import Counter from "./Counter";
import {
  GradCapIcon,
  PersonIcon,
  MedalIcon,
  MoneyIcon,
  PlaneIcon,
} from "./icons";
import { site } from "@/lib/site";
import styles from "./AboutDoctor.module.css";

const highlights = [
  { icon: GradCapIcon, label: "Highly Qualified Doctor" },
  { icon: PersonIcon, label: "Female Doctor" },
  { icon: MedalIcon, label: "15 years of Experience" },
  { icon: MoneyIcon, label: "Affordable Treatment" },
];

const avatars = [1, 2, 3].map((n) => `/images/author-${n}.jpg`);

export default function AboutDoctor() {
  return (
    <section id="doctor" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.photoWrap}>
          <Image
            src="/images/yoshita2.jpg"
            alt={`${site.doctor} at ${site.name}`}
            width={520}
            height={780}
            className={styles.photo}
          />
          <span className={styles.photoBadge}>
            <span className={styles.photoBadgeChip}>
              <PlaneIcon size={22} />
            </span>
          </span>
        </div>

        <div className={styles.middle}>
          <div className={styles.trustCard}>
            <div className={styles.trustTop}>
              <span className={styles.avatars}>
                {avatars.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={44}
                    height={44}
                    className={styles.avatar}
                  />
                ))}
                <span className={styles.plusChip}>+</span>
              </span>
              <span className={styles.trustRating}>
                <Counter to={4.9} decimals={1} />
                /5
              </span>
            </div>
            <p>Trusted by thousands of patients who took our service.</p>
          </div>

          <div className={styles.emergencyCard}>
            <div className={styles.emergencyNumber}>24/7</div>
            <p>Around the Clock Emergency Service</p>
            <Image
              src="/images/discount-box-image-prime.png"
              alt=""
              width={280}
              height={280}
              className={styles.toothImage}
              aria-hidden
            />
          </div>
        </div>

        <div className={styles.content}>
          <span className="eyebrow">About Doctor</span>
          <h2 className={styles.name}>{site.doctor.replace("Dr. ", "Dr. ")}</h2>
          <p className={styles.credentials}>{site.credentials}</p>
          <p className={styles.bio}>
            Dr. Yoshita Mazumder is a highly experienced and compassionate
            female dental surgeon with over 15 years of clinical experience.
            She currently serves as a Government Dental Doctor at Mugda Medical
            College Hospital. Dr. Yoshita holds a BDS from Chittagong
            University, is a BCS (Health) cadre doctor, and has completed her
            MS in Oral &amp; Maxillofacial Surgery. She is known for her gentle
            approach and commitment to providing safe, comfortable, and
            reliable dental care for patients of all ages.
          </p>

          <div className={styles.highlights}>
            {highlights.map(({ icon: Icon, label }) => (
              <span key={label} className={styles.highlight}>
                <span className={styles.highlightIcon}>
                  <Icon size={20} />
                </span>
                {label}
              </span>
            ))}
          </div>

          <div className={styles.actions}>
            <ArrowButton href="#appointment" variant="outline">
              Book An Appointment
            </ArrowButton>
            <ArrowButton href={site.phoneHref} variant="outline">
              Call now: {site.phone}
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}

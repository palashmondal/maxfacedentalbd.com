import type { Metadata } from "next";
import MagicCursor from "@/components/MagicCursor";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | MaxFace Dental Care",
  description:
    "How MaxFace Dental Care collects, uses and protects your personal information — appointment requests, newsletter subscriptions and website data.",
  alternates: { canonical: "/privacy-policy/" },
};

const updated = "14 July 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <MagicCursor />
      <Header />
      <main>
        <PageHero
          title="Privacy Policy"
          eyebrow="Your Privacy"
          crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />

        <section className={styles.section}>
          <div className={`container ${styles.prose}`}>
            <p className={styles.updated}>Last updated: {updated}</p>

            <p>
              {site.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;) respects your
              privacy. This page explains what information we collect through
              this website, why we collect it, and how it is handled.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong>Appointment requests:</strong> when you submit the
                appointment form we receive the name, phone number, e-mail
                address (optional) and problem description you provide.
              </li>
              <li>
                <strong>Newsletter subscription:</strong> when you subscribe to
                dental tips we receive the e-mail address you enter.
              </li>
              <li>
                <strong>Nothing automatic:</strong> this website does not set
                advertising cookies or run trackers of its own.
              </li>
            </ul>

            <h2>How your information is used</h2>
            <ul>
              <li>
                Appointment details are used only to contact you about your
                visit — by phone, WhatsApp or e-mail — and to prepare for your
                treatment.
              </li>
              <li>
                Subscriber e-mail addresses are used only to send occasional
                dental health tips from our team. Every such e-mail will
                include a way to unsubscribe.
              </li>
              <li>
                We never sell, rent or trade your personal information to
                anyone.
              </li>
            </ul>

            <h2>Services this site relies on</h2>
            <ul>
              <li>
                <strong>WhatsApp:</strong> the appointment form can open
                WhatsApp on your device with your message pre-filled — the
                message is sent from your own WhatsApp account, under
                WhatsApp&rsquo;s own terms.
              </li>
              <li>
                <strong>FormSubmit:</strong> form contents are relayed to our
                clinic e-mail through the FormSubmit delivery service.
              </li>
              <li>
                <strong>Google Maps:</strong> the location map is embedded from
                Google, which may set its own cookies when you interact with
                it, per Google&rsquo;s privacy policy.
              </li>
            </ul>

            <h2>Medical information</h2>
            <p>
              Any health details you share in an appointment request are
              treated as confidential and are seen only by our clinical team
              for the purpose of your care. Your full dental records are kept
              at the chamber, not on this website.
            </p>

            <h2>Data retention &amp; your rights</h2>
            <p>
              We keep appointment messages only as long as needed to arrange
              and follow up on your care. You may ask us at any time to see,
              correct or delete the personal information we hold about you, or
              to unsubscribe from our e-mails.
            </p>

            <h2>Contact</h2>
            <p>
              For any privacy question or request, contact {site.name} at{" "}
              <a href={`mailto:${site.notify.to}`}>{site.notify.to}</a>, call{" "}
              <a href={site.phoneHref}>{site.phone}</a>, or visit us at{" "}
              {site.address}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

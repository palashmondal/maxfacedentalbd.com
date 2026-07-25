import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MagicCursor from "@/components/MagicCursor";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n/href";
import { fill, tmpl } from "@/lib/i18n/template";
import { pageMetadata } from "@/lib/i18n/metadata";
import styles from "./privacy.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return pageMetadata({
    lang,
    subpath: "/privacy-policy/",
    title: d.meta.privacy.title,
    description: d.meta.privacy.description,
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const p = d.privacy;

  return (
    <>
      <MagicCursor />
      <Header
        lang={lang}
        nav={d.nav}
        doctorName={d.doctorName}
        switcher={d.switcher}
      />
      <main>
        <PageHero
          title={p.heroTitle}
          eyebrow={p.heroEyebrow}
          crumbs={[
            { label: d.blog.crumbHome, href: localizedHref(lang, "/") },
            { label: p.crumb },
          ]}
        />

        <section className={styles.section}>
          <div className={`container ${styles.prose}`}>
            <p className={styles.updated}>
              {fill(p.updatedLabel, { date: p.updated })}
            </p>

            <p>{tmpl(p.intro, { name: site.name })}</p>

            {p.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {"paragraphs" in section &&
                  section.paragraphs?.map((para) => (
                    <p key={para.slice(0, 30)}>{para}</p>
                  ))}
                {"list" in section && section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item.slice(0, 30)}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <h2>{p.contactHeading}</h2>
            <p>
              {tmpl(p.contact, {
                name: site.name,
                email: (
                  <a href={`mailto:${site.notify.to}`}>{site.notify.to}</a>
                ),
                phone: <a href={site.phoneHref}>{site.phone}</a>,
                address: site.address,
              })}
            </p>
          </div>
        </section>
      </main>
      <Footer
        lang={lang}
        dict={d.footer}
        doctorName={d.doctorName}
        subscribeModal={d.subscribeModal}
      />
    </>
  );
}

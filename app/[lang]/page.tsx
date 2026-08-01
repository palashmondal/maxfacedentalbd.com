import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Preloader from "@/components/Preloader";
import MagicCursor from "@/components/MagicCursor";
import ScrollAnimations from "@/components/ScrollAnimations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroBento from "@/components/IntroBento";
import WhyMaxface from "@/components/WhyMaxface";
import AboutDoctor from "@/components/AboutDoctor";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/i18n/metadata";

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
    title: d.meta.home.title,
    description: d.meta.home.description,
    ogTitle: d.meta.home.ogTitle,
    ogDescription: d.meta.home.ogDescription,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <>
      <Preloader />
      <MagicCursor />
      <ScrollAnimations />
      <Header
        lang={lang}
        nav={d.nav}
        doctorName={d.doctorName}
        switcher={d.switcher}
      />
      <main>
        <Hero dict={d.hero} doctorName={d.doctorName} lang={lang} />
        <IntroBento dict={d.introBento} />
        <WhyMaxface dict={d.why} />
        <AboutDoctor dict={d.about} />
        <HowItWorks dict={d.services} />
        <BeforeAfter dict={d.beforeAfter} />
        <Achievements dict={d.achievements} />
        <Testimonials dict={d.testimonials} lang={lang} />
        <Appointment dict={d.appointment} />
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

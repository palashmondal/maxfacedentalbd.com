import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LangSync from "@/components/LangSync";
import { locales, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { localeAlternates, ogLocale } from "@/lib/i18n/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: localeAlternates(lang),
    openGraph: { locale: ogLocale(lang) },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div lang={lang}>
      <LangSync lang={lang} />
      {children}
      <WhatsAppFloat dict={dict.whatsapp} />
    </div>
  );
}

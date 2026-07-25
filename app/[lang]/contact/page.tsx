import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionRedirect from "@/components/SectionRedirect";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return {
    title: d.meta.aliasSuffix,
    robots: { index: false },
    alternates: { canonical: `/${lang}/` },
  };
}

export default async function ContactAlias({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return (
    <SectionRedirect
      lang={lang}
      hash="appointment"
      label={d.redirect.labels.contact}
      taking={d.redirect.taking}
      click={d.redirect.click}
    />
  );
}

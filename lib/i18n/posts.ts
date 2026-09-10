import { posts as allPosts, type BlogPost } from "@/lib/blog";
import { bnPosts } from "@/lib/blog-bn";
import type { Locale } from "./config";

/**
 * Bilingual blog model.
 *
 * Every article is shown in BOTH locales under one shared (English) slug, so
 * `/en/blog/<slug>` and `/bn/blog/<slug>` are the same article in each
 * language. The English post is the base; its Bangla version is a separate
 * post object in lib/blog.ts linked here by slug (`BN_BY_SLUG`). Adding a new
 * article = add an English post, add its Bangla post, and add one line here.
 *
 * Until a Bangla translation exists, the Bangla route falls back to the English
 * text so the two listings still show the exact same set of articles.
 */

// English base slug -> Bangla translation slug.
const BN_BY_SLUG: Record<string, string> = {
  "root-canal-treatment-myths-vs-reality": "root-canal-cost-misconceptions-bangla",
  "bleeding-gums-diabetes-gum-disease": "bleeding-gums-warning-bangla",
  "milk-teeth-matter-child-dental-care-bangladesh": "milk-teeth-care-bangla",
  "wisdom-tooth-pain-when-to-remove": "wisdom-tooth-pain-bangla",
  "paan-betel-nut-oral-cancer-bangladesh": "paan-jorda-mouth-cancer-bangla",
  "teeth-whitening-dhaka-safe-vs-risky": "teeth-whitening-safe-way-bangla",
  "pregnancy-oral-health-safe-dental-care": "pregnancy-dental-treatment-bangla",
  "dental-emergency-first-aid-before-the-chamber": "toothache-emergency-solution-bangla",
  // Translations authored in lib/blog-bn.ts:
  "importance-of-regular-dental-checkups": "importance-of-regular-dental-checkups-bn",
  "braces-vs-clear-aligners": "braces-vs-clear-aligners-bn",
  "dental-implants-permanent-solution-missing-teeth": "dental-implants-permanent-solution-missing-teeth-bn",
  "oral-hygiene-routine-family-bangladesh": "oral-hygiene-routine-family-bangladesh-bn",
  "choosing-dental-clinic-dhaka-first-visit": "choosing-dental-clinic-dhaka-first-visit-bn",
  "infant-tongue-tie-breastfeeding-bangladesh": "infant-tongue-tie-breastfeeding-bangladesh-bn",
  "smoking-gul-zarda-gum-disease-bangladesh": "smoking-gul-zarda-gum-disease-bangladesh-bn",
  "sugar-cha-soft-drinks-cavities-bangladesh": "sugar-cha-soft-drinks-cavities-bangladesh-bn",
  "jaw-pain-clicking-tmj-disorder-treatment": "jaw-pain-clicking-tmj-disorder-treatment-bn",
  "sensitive-teeth-cold-water-causes-relief": "sensitive-teeth-cold-water-causes-relief-bn",
  "bad-breath-halitosis-causes-treatment": "bad-breath-halitosis-causes-treatment-bn",
  "dental-xray-safety-digital-radiology": "dental-xray-safety-digital-radiology-bn",
  "denture-care-cleaning-fit-and-replacement": "denture-care-cleaning-fit-and-replacement-bn",
  "recurring-mouth-ulcers-causes-treatment": "recurring-mouth-ulcers-causes-treatment-bn",
  "jaw-fracture-facial-injury-road-accident-bangladesh": "jaw-fracture-facial-injury-road-accident-bangladesh-bn",
  "scaling-professional-teeth-cleaning-myths-facts": "scaling-professional-teeth-cleaning-myths-facts-bn",
  "ramadan-fasting-oral-health-bangladesh": "ramadan-fasting-oral-health-bangladesh-bn",
  "cracked-tooth-bad-habits-bangladesh": "cracked-tooth-bad-habits-bangladesh-bn",
  "dental-crowns-types-cost-lifespan-bangladesh": "dental-crowns-types-cost-lifespan-bangladesh-bn",
  "dry-mouth-xerostomia-causes-relief-bangladesh": "dry-mouth-xerostomia-causes-relief-bangladesh-bn",
  "retainer-after-braces-avoiding-relapse-bangladesh": "retainer-after-braces-avoiding-relapse-bangladesh-bn",
  "dental-veneers-cost-care-bangladesh": "dental-veneers-cost-care-bangladesh-bn",
  "teeth-grinding-bruxism-stress-bangladesh": "teeth-grinding-bruxism-stress-bangladesh-bn",
  "dental-anxiety-fear-of-dentist-bangladesh": "dental-anxiety-fear-of-dentist-bangladesh-bn",
  "tooth-extraction-aftercare-dry-socket-bangladesh": "tooth-extraction-aftercare-dry-socket-bangladesh-bn",
  "sinus-toothache-monsoon-vs-cavity-bangladesh": "sinus-toothache-monsoon-vs-cavity-bangladesh-bn",
  "dental-bridge-missing-tooth-options-bangladesh": "dental-bridge-missing-tooth-options-bangladesh-bn",
};

// Category label per locale (keeps the /bn filter chips in Bangla while the
// article set/order stays identical to /en).
const CATEGORY_BN: Record<string, string> = {
  "Cosmetic Dentistry": "কসমেটিক ডেন্টিস্ট্রি",
  Diagnostics: "ডায়াগনস্টিক",
  Endodontics: "এন্ডোডন্টিক্স",
  "General Dentistry": "সাধারণ দন্তচিকিৎসা",
  "Gum Care": "মাড়ির যত্ন",
  "Oral Health": "মুখের স্বাস্থ্য",
  "Oral Surgery": "ওরাল সার্জারি",
  Orthodontics: "অর্থোডন্টিক্স",
  "Paediatric Dentistry": "শিশু দন্তচিকিৎসা",
  "Patient Guide": "রোগীর গাইড",
  "Preventive Care": "প্রতিরোধমূলক সেবা",
  "Restorative Dentistry": "পুনর্গঠনমূলক দন্তচিকিৎসা",
  "TMJ & Jaw Care": "টিএমজে ও চোয়ালের যত্ন",
  "Women's Oral Health": "নারীর মুখের স্বাস্থ্য",
};

const bySlug = new Map([...allPosts, ...bnPosts].map((p) => [p.slug, p]));

/** The canonical article list = the English (base) posts. */
const baseArticles: BlogPost[] = allPosts.filter((p) => p.lang !== "bn");

/** Resolve a base article to a locale. */
export function localizeArticle(base: BlogPost, lang: Locale): BlogPost {
  const category =
    lang === "bn" ? CATEGORY_BN[base.category] ?? base.category : base.category;

  if (lang !== "bn") return { ...base, lang: "en", category };

  const bnSlug = BN_BY_SLUG[base.slug];
  const bn = bnSlug ? bySlug.get(bnSlug) : undefined;
  // No translation yet -> English fallback (so both listings stay identical).
  if (!bn) return { ...base, lang: "bn", category };
  // Bangla content, served under the shared English slug/image/date.
  return {
    ...bn,
    slug: base.slug,
    image: base.image,
    date: base.date,
    category,
    lang: "bn",
  };
}

/** All articles for a locale (base set, localized). */
export function articlesForLang(lang: Locale): BlogPost[] {
  return baseArticles.map((a) => localizeArticle(a, lang));
}

/** A single article in a locale, by its shared slug. */
export function getArticle(slug: string, lang: Locale): BlogPost | undefined {
  const base = baseArticles.find((a) => a.slug === slug);
  return base ? localizeArticle(base, lang) : undefined;
}

/** `generateStaticParams` set: every article under both locales. */
export function articleParams(): { lang: Locale; slug: string }[] {
  return baseArticles.flatMap((a) => [
    { lang: "en" as Locale, slug: a.slug },
    { lang: "bn" as Locale, slug: a.slug },
  ]);
}

/** Base (English) articles — for the sitemap. */
export const blogArticleSlugs = baseArticles.map((a) => ({
  slug: a.slug,
  date: a.date,
}));

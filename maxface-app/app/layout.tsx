import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxfacedentalbd.com"),
  title: "MaxFace Dental Care | Dr. Yoshita Mazumder",
  description:
    "Expert, gentle, and comprehensive dental care at MaxFace Dental Care in Khilgaon, Dhaka under the guidance of Dr. Yoshita Mazumder — BDS, BCS, MS (OMS).",
  openGraph: {
    title: "MaxFace Dental Care | Dr. Yoshita Mazumder",
    description:
      "Creating confident smiles with care — comprehensive dental services in Malibagh/Khilgaon, Dhaka. Book an appointment today.",
    url: "https://maxfacedentalbd.com",
    siteName: "MaxFace Dental Care",
    images: [{ url: "/images/yoshita.png", width: 760, height: 880 }],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "MaxFace Dental Care",
  url: "https://maxfacedentalbd.com",
  telephone: "+8801344473973",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "411/B, Malibagh Chowdhury Para Road (Inside Nirvana Health Care)",
    addressLocality: "Dhaka",
    postalCode: "1219",
    addressCountry: "BD",
  },
  founder: {
    "@type": "Person",
    name: "Dr. Yoshita Mazumder",
    jobTitle: "Dental Surgeon, BDS, BCS, MS (OMS)",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "16:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "14:00",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "520",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxfacedentalbd.com"),
  title: "MaxFace Dental Care | Best Dentist in Malibagh, Dhaka — Dr. Yoshita Mazumder",
  description:
    "Expert, gentle & affordable dental care in Malibagh–Khilgaon, Dhaka. Dr. Yoshita Mazumder (BDS, BCS Health, MS Oral & Maxillofacial Surgery) — root canal, implants, braces, kids' dentistry & emergency care. Open 6PM–10PM, Friday closed.",
  keywords: [
    "dentist Malibagh",
    "dental clinic Khilgaon",
    "best dentist Dhaka",
    "female dentist Dhaka",
    "root canal treatment Dhaka",
    "dental implants Bangladesh",
    "maxillofacial surgeon Dhaka",
    "kids dentist Dhaka",
    "emergency dental care Dhaka",
    "MaxFace Dental Care",
    "Dr. Yoshita Mazumder",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "MaxFace Dental Care | Best Dentist in Malibagh, Dhaka",
    description:
      "Creating confident smiles with care — complete dental & maxillofacial services in Malibagh/Khilgaon, Dhaka. Open every evening except Friday. Book an appointment today.",
    url: "https://maxfacedentalbd.com",
    siteName: "MaxFace Dental Care",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxFace Dental Care | Best Dentist in Malibagh, Dhaka",
    description:
      "Expert, gentle dental care by Dr. Yoshita Mazumder — root canal, implants, kids' dentistry & emergency care in Malibagh, Dhaka.",
    images: ["/images/og-image.jpg"],
  },
  // Links shares of this site back to the clinic's Facebook Page (clears the
  // Sharing Debugger's "missing fb:app_id" warning).
  other: {
    "fb:pages": "709814125558367",
    "fb:app_id": "709814125558367",
  },
};

export const viewport: Viewport = {
  themeColor: "#161a2d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "MaxFace Dental Care",
  url: "https://maxfacedentalbd.com",
  image: "https://maxfacedentalbd.com/images/yoshita.png",
  logo: "https://maxfacedentalbd.com/images/maxface-logo.png",
  telephone: "+8801344473973",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "411/B, Malibagh Chowdhury Para Road (Inside Nirvana Health Care)",
    addressLocality: "Dhaka",
    postalCode: "1219",
    addressCountry: "BD",
  },
  areaServed: ["Malibagh", "Khilgaon", "Chowdhurypara", "Rampura", "Dhaka"],
  hasMap: "https://maps.app.goo.gl/XR74vcFzUs7QV8Jg6",
  sameAs: ["https://www.facebook.com/maxfacedentalbd"],
  medicalSpecialty: ["Dentistry", "Oral and Maxillofacial Surgery"],
  availableService: [
    "Oral & Maxillofacial Surgery",
    "Root Canal Treatment",
    "Dental Implants",
    "Crowns & Bridges",
    "Teeth Whitening",
    "Veneers",
    "Paediatric Dentistry",
    "Infant Tongue-Tie Surgery",
    "Gum Disease Treatment",
    "Digital Dental X-ray",
    "Emergency Dental Care",
  ].map((name) => ({ "@type": "MedicalProcedure", name })),
  founder: {
    "@type": "Person",
    name: "Dr. Yoshita Mazumder",
    jobTitle: "Dental Surgeon, BDS(CU), BCS (Health), MS(Oral & Maxillofacial Surgery)",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "18:00",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "30",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EJ2C70LP3F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EJ2C70LP3F');`}
        </Script>
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

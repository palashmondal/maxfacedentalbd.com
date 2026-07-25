import type { Metadata } from "next";
import Link from "next/link";
import RootRedirect from "@/components/RootRedirect";

// Language gate. Search engines get hreflang alternates to both locales;
// visitors are sent client-side to Bangla (default) or their saved language.
export const metadata: Metadata = {
  alternates: {
    languages: {
      en: "/en",
      bn: "/bn",
      "x-default": "/bn",
    },
  },
};

export default function RootPage() {
  return (
    <>
      <RootRedirect />
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <p>MaxFace Dental Care — Malibagh, Dhaka</p>
        <p>
          <Link href="/bn/" style={{ textDecoration: "underline" }}>
            বাংলা
          </Link>
          {"  ·  "}
          <Link href="/en/" style={{ textDecoration: "underline" }}>
            English
          </Link>
        </p>
      </main>
    </>
  );
}

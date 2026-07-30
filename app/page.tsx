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
      <style>{`@keyframes mfSpin{to{transform:rotate(360deg)}}`}</style>
      <main
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          background: "#161a2d",
        }}
        aria-busy="true"
        aria-label="Loading"
      >
        <span
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.22)",
            borderTopColor: "#316dff",
            animation: "mfSpin 0.8s linear infinite",
          }}
        />
        {/* Crawlers & no-JS visitors get real language links; JS visitors are
            redirected before this ever paints for long. */}
        <noscript>
          <p style={{ color: "#ffffffcc", textAlign: "center" }}>
            <Link href="/bn/" style={{ color: "#fff" }}>
              বাংলা
            </Link>
            {"  ·  "}
            <Link href="/en/" style={{ color: "#fff" }}>
              English
            </Link>
          </p>
        </noscript>
      </main>
    </>
  );
}

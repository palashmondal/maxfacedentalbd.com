import type { Metadata } from "next";
import SectionRedirect from "@/components/SectionRedirect";

export const metadata: Metadata = {
  title: "Contact Us | MaxFace Dental Care",
  robots: { index: false },
  alternates: { canonical: "/" },
};

export default function ContactAlias() {
  return <SectionRedirect hash="appointment" label="our contact section" />;
}

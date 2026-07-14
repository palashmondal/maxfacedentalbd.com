import type { Metadata } from "next";
import SectionRedirect from "@/components/SectionRedirect";

export const metadata: Metadata = {
  title: "Dental Services | MaxFace Dental Care",
  robots: { index: false },
  alternates: { canonical: "/" },
};

export default function ServicesAlias() {
  return <SectionRedirect hash="services" label="our services" />;
}

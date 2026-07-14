import type { Metadata } from "next";
import SectionRedirect from "@/components/SectionRedirect";

export const metadata: Metadata = {
  title: "About Dr. Yoshita Mazumder | MaxFace Dental Care",
  robots: { index: false },
  alternates: { canonical: "/" },
};

export default function DoctorAlias() {
  return <SectionRedirect hash="doctor" label="Dr. Yoshita's profile" />;
}

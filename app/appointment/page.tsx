import type { Metadata } from "next";
import SectionRedirect from "@/components/SectionRedirect";

export const metadata: Metadata = {
  title: "Book an Appointment | MaxFace Dental Care",
  robots: { index: false },
  alternates: { canonical: "/" },
};

export default function AppointmentAlias() {
  return <SectionRedirect hash="appointment" label="the appointment form" />;
}

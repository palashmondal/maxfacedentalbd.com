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
  title: "MaxFace Dental Care | Dr. Yoshita Mazumder",
  description:
    "Expert, gentle, and comprehensive dental care at MaxFace Dental Care in Khilgaon, Dhaka under the guidance of Dr. Yoshita Mazumder — BDS, BCS, MS (OMS).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}

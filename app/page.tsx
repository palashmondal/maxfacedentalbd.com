import Preloader from "@/components/Preloader";
import MagicCursor from "@/components/MagicCursor";
import ScrollAnimations from "@/components/ScrollAnimations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroBento from "@/components/IntroBento";
import WhyMaxface from "@/components/WhyMaxface";
import AboutDoctor from "@/components/AboutDoctor";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <MagicCursor />
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <IntroBento />
        <WhyMaxface />
        <AboutDoctor />
        <HowItWorks />
        <BeforeAfter />
        <Achievements />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}

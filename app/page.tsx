import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DoctorIntro from "@/components/home/DoctorIntro";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import IndianSkinApproach from "@/components/home/IndianSkinApproach";
import TestimonialsWall from "@/components/home/TestimonialsWall";
import ProofOfCare from "@/components/home/ProofOfCare";
import HomepageFAQ from "@/components/home/HomepageFAQ";
import LocationCTA from "@/components/home/LocationCTA";

export const metadata: Metadata = {
  title: "SKIN@Mantraa | Kanpur's Best Dermatologist – Dr. Mamta Bhura",
  description:
    "Dr. Mamta Bhura, MD Dermatology (IMS BHU) – trusted dermatologist in Kanpur. Laser, acne, anti-aging & hair treatments. 451+ patients. Consult from ₹600.",
  alternates: { canonical: "https://skinmantraa.in" },
  openGraph: {
    title: "SKIN@Mantraa - Kanpur's Premier Dermatology Clinic",
    description:
      "Dr. Mamta Bhura, BHU-trained dermatologist with 26+ years of experience. Advanced treatments for all skin conditions at SKIN@Mantraa, Swaroop Nagar, Kanpur.",
    url: "https://skinmantraa.in",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SKIN@Mantraa - Premier Dermatology Clinic, Kanpur",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <DoctorIntro />
        <ServicesShowcase />
        <IndianSkinApproach />
        <TestimonialsWall />
        <ProofOfCare />
        <HomepageFAQ />
        <LocationCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

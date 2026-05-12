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

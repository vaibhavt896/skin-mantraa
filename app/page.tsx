import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import DoctorIntro from "@/components/home/DoctorIntro";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import TestimonialsWall from "@/components/home/TestimonialsWall";
import LocationCTA from "@/components/home/LocationCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <DoctorIntro />
        <ServicesShowcase />
        <TestimonialsWall />
        <LocationCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import SkinAnalysisTool from "@/components/skin-analysis/SkinAnalysisTool";

export const metadata: Metadata = {
  title: "Smart Skin Analysis | Free Online Skin Assessment — SKIN@Mantraa",
  description:
    "Get a free, evidence-based preliminary skin assessment in under 3 minutes. Identify early signs of acne, pigmentation, hair loss, aging and more. By Dr. Mamta Bhura, Kanpur.",
  openGraph: {
    title: "Free Smart Skin Analysis — SKIN@Mantraa",
    description:
      "Answer a few clinically-informed questions and get personalised skin insights instantly. 100% free and private.",
  },
};

export default function SkinAnalysisPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#FDF6EC", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            paddingTop: 120,
            paddingBottom: 20,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle background glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              height: "100%",
              background:
                "radial-gradient(ellipse, rgba(196,112,78,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </section>

        {/* Tool */}
        <section style={{ paddingBottom: 80 }}>
          <SkinAnalysisTool />
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

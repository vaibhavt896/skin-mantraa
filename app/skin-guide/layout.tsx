import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skin Guide | Expert Dermatology Advice — SKIN@Mantraa",
  description:
    "Evidence-based skin care guides by Dr. Mamta Bhura, Kanpur's leading dermatologist. Learn about treatments, common skin myths, seasonal tips, and hair care.",
  openGraph: {
    title: "Expert Skin Guide — SKIN@Mantraa",
    description:
      "Trusted dermatology advice from Dr. Mamta Bhura. Skin care tips, treatment guides, myth busters, and seasonal skincare advice.",
  },
};

export default function SkinGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}

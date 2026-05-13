import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skin Guide | Expert Dermatology Advice - SKIN@Mantraa Kanpur",
  description:
    "Evidence-based skin care guides by Dr. Mamta Bhura, Kanpur's leading dermatologist. Treatments, laser, acne, hair loss, melasma, anti-aging and seasonal skin advice.",
  alternates: { canonical: "https://skinmantraa.in/skin-guide" },
  openGraph: {
    title: "Expert Skin Guide - SKIN@Mantraa Kanpur",
    description:
      "Trusted dermatology advice from Dr. Mamta Bhura. Skin care tips, treatment guides, myth busters, and seasonal skincare advice.",
    url: "https://skinmantraa.in/skin-guide",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Skin Guide by Dr. Mamta Bhura - SKIN@Mantraa",
      },
    ],
  },
};

export default function SkinGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

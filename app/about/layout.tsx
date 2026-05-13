import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Mamta Bhura — MBBS MD Dermatologist, 26 Years | SKIN@Mantraa Kanpur",
  description:
    "Meet Dr. Mamta Bhura — MD Dermatology, IMS BHU Varanasi. 26+ years of clinical experience. Former Consultant, Kaya Skin Clinic Delhi. IMA, IADVL, CDSI member. Kanpur's leading female dermatologist at SKIN@Mantraa, Swaroop Nagar.",
  alternates: { canonical: "https://skinmantraa.in/about" },
  openGraph: {
    title: "Dr. Mamta Bhura — MBBS MD Dermatologist, 26 Years | SKIN@Mantraa Kanpur",
    description:
      "MD Dermatology from IMS BHU. 26+ years clinical experience. Former Consultant at Kaya Skin Clinic Delhi. IMA, IADVL, CDSI member. Kanpur's #1 female dermatologist.",
    url: "https://skinmantraa.in/about",
    type: "profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dr. Mamta Bhura — SKIN@Mantraa Kanpur" }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

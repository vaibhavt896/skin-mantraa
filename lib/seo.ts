import { Metadata } from "next";
import { BRAND } from "./constants";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/og-image.svg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const baseUrl = "https://skinmantraa.com";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: { canonical: url },
  };
}

export const homeMetadata: Metadata = {
  title:
    "SKIN@Mantraa | Dr. Mamta Bhura — Best Dermatologist in Kanpur | 26 Years Experience",
  description:
    "Visit SKIN@Mantraa in Swaroop Nagar, Kanpur for expert skin care by Dr. Mamta Bhura (MBBS, MD — BHU). Advanced laser treatments, anti-aging, acne solutions, hair restoration. 451+ happy patients. Book now.",
  keywords: [
    "dermatologist in Kanpur",
    "skin specialist Kanpur",
    "Dr Mamta Bhura",
    "Skin Mantraa",
    "laser treatment Kanpur",
    "best skin doctor Swaroop Nagar",
    "acne treatment Kanpur",
    "hair fall treatment Kanpur",
    "PRP treatment Kanpur",
  ],
  metadataBase: new URL("https://skinmantraa.com"),
  openGraph: {
    title: "SKIN@Mantraa — Kanpur's Premier Dermatology Clinic",
    description:
      "Dr. Mamta Bhura, BHU-trained dermatologist with 26 years of experience. Advanced treatments for all skin conditions.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://skinmantraa.com" },
};

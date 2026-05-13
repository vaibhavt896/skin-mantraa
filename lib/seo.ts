import { Metadata } from "next";
import { BRAND } from "./constants";

const BASE_URL = "https://skinmantraa.in";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
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
    "SKIN@Mantraa | Dr. Mamta Bhura - Best Female Dermatologist in Kanpur | 26 Years Experience",
  description:
    "Dr. Mamta Bhura - MD Dermatology, IMS BHU. Kanpur's #1 ranked female dermatologist (ThreeBestRated). Advanced laser, anti-aging, acne, and hair treatments at SKIN@Mantraa, Swaroop Nagar. 451+ patients. Consultation: ₹600.",
  keywords: [
    "dermatologist in Kanpur",
    "best dermatologist Kanpur",
    "skin specialist Kanpur",
    "Dr Mamta Bhura Kanpur",
    "female dermatologist Kanpur",
    "cosmetologist Kanpur",
    "skin doctor Kanpur Swaroop Nagar",
    "best skin clinic Kanpur",
    "laser treatment Kanpur",
    "laser hair removal Kanpur",
    "Nd:YAG laser Kanpur",
    "laser pigmentation treatment Kanpur",
    "tattoo removal Kanpur",
    "skin resurfacing Kanpur",
    "botox Kanpur",
    "fillers Kanpur",
    "thread lift Kanpur",
    "anti-aging treatment Kanpur",
    "HIFU Kanpur",
    "acne treatment Kanpur",
    "acne scar removal Kanpur",
    "chemical peel Kanpur",
    "Dermapen 4 Kanpur",
    "melasma treatment Kanpur",
    "vitiligo specialist Kanpur",
    "eczema treatment Kanpur",
    "psoriasis treatment Kanpur",
    "PRP hair treatment Kanpur",
    "GFC hair treatment Kanpur",
    "hair loss treatment Kanpur",
    "mesotherapy hair Kanpur",
    "skin specialist Swaroop Nagar",
    "laser hair removal Swaroop Nagar Kanpur",
  ],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "SKIN@Mantraa - Kanpur's Premier Dermatology Clinic",
    description:
      "Dr. Mamta Bhura, BHU-trained dermatologist with 26 years of experience. Advanced treatments for all skin conditions.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: BASE_URL },
};

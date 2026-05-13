import type { Metadata } from "next";

const BASE_URL = "https://skinmantraa.in";

const SERVICE_META: Record<string, { title: string; description: string }> = {
  "laser-treatments": {
    title: "Advanced Laser Treatments in Kanpur — Hair Removal, Pigmentation, Tattoo | SKIN@Mantraa",
    description:
      "Nd:YAG laser, diode laser, Q-switch, carbon peel and more by Dr. Mamta Bhura. Safe laser treatments for Indian skin (Fitzpatrick III–V) at SKIN@Mantraa Kanpur.",
  },
  "anti-aging": {
    title: "Anti-Aging & Rejuvenation in Kanpur — Botox, Fillers, HIFU, Thread Lift | SKIN@Mantraa",
    description:
      "Botox, dermal fillers, HIFU skin tightening, thread lift, and PRP for face by Dr. Mamta Bhura in Kanpur. Natural-looking anti-aging results at SKIN@Mantraa.",
  },
  "acne-scars": {
    title: "Acne & Scar Treatment in Kanpur — Dermapen 4, Chemical Peels, TCA CROSS | SKIN@Mantraa",
    description:
      "Dermapen 4 microneedling, chemical peels, TCA CROSS, and laser for acne scars. Dr. Mamta Bhura — Kanpur's leading dermatologist for acne and post-acne marks.",
  },
  "hair-restoration": {
    title: "Hair Restoration in Kanpur — PRP, GFC, Mesotherapy for Hair Loss | SKIN@Mantraa",
    description:
      "PRP therapy, GFC hair treatment, and mesotherapy for hair loss and thinning. Doctor-led diagnosis and evidence-based protocols by Dr. Mamta Bhura at SKIN@Mantraa Kanpur.",
  },
  "skin-conditions": {
    title: "Skin Disease Treatment in Kanpur — Vitiligo, Psoriasis, Eczema | SKIN@Mantraa",
    description:
      "Medical dermatology for vitiligo, psoriasis, eczema, melasma, fungal infections, and chronic skin diseases. NB-UVB phototherapy available. Dr. Mamta Bhura, Kanpur.",
  },
  cosmetic: {
    title: "Cosmetic Skin Treatments in Kanpur — Pigmentation, Tattoo Removal, Brightening | SKIN@Mantraa",
    description:
      "Tattoo removal, carbon laser facial, melasma treatment, pigmentation correction, and skin brightening at SKIN@Mantraa Kanpur. Dr. Mamta Bhura, MD Dermatology.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = SERVICE_META[id];
  if (!meta) return {};

  const url = `${BASE_URL}/services/${id}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: meta.title }],
    },
  };
}

export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

const BASE_URL = "https://skinmantraa.in";

const ARTICLE_META: Record<string, { title: string; description: string }> = {
  "sun-protection-guide": {
    title: "Sun Protection for Indian Skin — SPF, PA Rating & Expert Tips | SKIN@Mantraa",
    description:
      "Indian skin is not immune to UV damage. Dr. Mamta Bhura explains SPF vs PA rating, how much sunscreen to apply, and why reapplication matters — especially in North India's climate.",
  },
  "sun-protection": {
    title: "The Truth About Sun Protection for Indian Skin | Dr. Mamta Bhura — SKIN@Mantraa",
    description:
      "Indian skin has melanin advantages but is not UV-immune. Dr. Mamta Bhura covers SPF numbers, chemical vs physical sunscreens, and why most people in North India are under-protected.",
  },
  "adult-acne-causes": {
    title: "Why You're Still Getting Breakouts in Your 30s — Causes & Solutions | SKIN@Mantraa",
    description:
      "Adult acne in your 30s is often hormonal, not oil-driven. Dr. Mamta Bhura explains the triggers — hormones, stress, diet — and the treatments that actually work.",
  },
  "laser-hair-removal-myths": {
    title: "Top 5 Laser Hair Removal Myths Debunked | SKIN@Mantraa Kanpur",
    description:
      "Is laser safe for dark Indian skin? Does it work in one session? Dr. Mamta Bhura clears the most persistent myths about laser hair removal for Indian skin types.",
  },
  "anti-aging-routine": {
    title: "A Minimalist Anti-Aging Routine That Actually Works | Dr. Mamta Bhura — SKIN@Mantraa",
    description:
      "You don't need 10 steps to fight aging. Dr. Mamta Bhura's evidence-based minimalist routine: Vitamin C, sunscreen, and retinoids — what they do and when to use them.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = ARTICLE_META[slug];
  if (!meta) {
    return {
      alternates: { canonical: `${BASE_URL}/skin-guide/${slug}` },
    };
  }

  const url = `${BASE_URL}/skin-guide/${slug}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: meta.title }],
    },
  };
}

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}

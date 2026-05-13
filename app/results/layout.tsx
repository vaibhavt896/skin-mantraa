import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Results | Real Transformations - SKIN@Mantraa",
  description:
    "See real patient transformations at SKIN@Mantraa. Before and after results for laser treatments, acne solutions, anti-aging, hair restoration and more by Dr. Mamta Bhura, Kanpur.",
  openGraph: {
    title: "Real Results - SKIN@Mantraa by Dr. Mamta Bhura",
    description:
      "Real patient transformations: laser treatments, acne solutions, anti-aging, hair restoration. See what's possible with expert dermatological care.",
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

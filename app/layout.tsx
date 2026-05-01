import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import SmoothScroll from "@/components/layout/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#c4704e",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skinmantraa.in";

export const metadata: Metadata = {
  title: {
    default: "SKIN@Mantraa — Premier Dermatology & Cosmetology in Kanpur",
    template: "%s | SKIN@Mantraa",
  },
  description:
    "Advanced dermatology & cosmetology by Dr. Mamta Bhura — BHU Gold Medallist with 26+ years of expertise. Laser treatments, anti-aging, acne & hair care in Kanpur.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.ico" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SKIN@Mantraa",
    title: "SKIN@Mantraa — Premier Dermatology in Kanpur",
    description:
      "Expert skin care by Dr. Mamta Bhura, MBBS MD (Dermatology). Laser treatments, anti-aging, acne solutions & hair restoration in Kanpur.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SKIN@Mantraa — Premier Dermatology Clinic, Kanpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SKIN@Mantraa — Premier Dermatology in Kanpur",
    description:
      "Expert skin care by Dr. Mamta Bhura. Laser treatments, anti-aging, acne solutions & hair restoration.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

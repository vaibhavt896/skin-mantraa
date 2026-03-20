import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { homeMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

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

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}

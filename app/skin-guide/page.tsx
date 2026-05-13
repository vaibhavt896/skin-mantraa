"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Note: metadata export is handled in a separate layout or via generateMetadata
// For this client component page, SEO tags are set here as a reference comment.
// Title: "Skin Guide | Expert Dermatology Advice — SKIN@Mantraa"
// Description: Evidence-based skin care guides by Dr. Mamta Bhura, Kanpur's
// leading dermatologist. Learn about treatments, common myths, and seasonal tips.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ArticleCategory =
  | "Skin Care Tips"
  | "Treatment Guides"
  | "Myth Busters"
  | "Hair Care"
  | "Seasonal Tips";

interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  readTime: number;
  date: string;
  tags?: string[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const ARTICLE_CATEGORIES: ArticleCategory[] = [
  "Skin Care Tips",
  "Treatment Guides",
  "Myth Busters",
  "Hair Care",
  "Seasonal Tips",
];

const FEATURED_ARTICLE = {
  slug: "sun-protection",
  title: "The Truth About Sun Protection for Indian Skin",
  category: "Skin Care Tips" as ArticleCategory,
  readTime: 8,
  date: "March 10, 2026",
  excerpt:
    "Indian skin has a natural advantage in melanin, but that doesn't make it immune to UV damage, melasma, or accelerated ageing. Dr. Bhura breaks down which SPF numbers actually matter, the difference between chemical and physical sunscreens, and why most people in North India are significantly under-protected — even in winter.",
};

const ARTICLES: Article[] = [
  {
    slug: "hifu-treatment-kanpur",
    title: "HIFU Treatment in Kanpur — Not Magic, Just Science That Actually Works",
    category: "Treatment Guides",
    excerpt:
      "HIFU (High-Intensity Focused Ultrasound) is the only non-surgical treatment that reaches the SMAS layer — the same tissue a surgeon tightens during a facelift. Dr. Bhura explains who benefits, what the treatment honestly feels like, and realistic results for Indian skin.",
    readTime: 7,
    date: "May 12, 2026",
    tags: ["skin tightening", "non-surgical", "anti-aging"],
  },
  {
    slug: "laser-hair-removal-kanpur",
    title: "Laser Hair Removal in Kanpur — How Many Sessions, Best Laser for Indian Skin",
    category: "Treatment Guides",
    excerpt:
      "Most patients need 6 to 8 sessions for lasting hair reduction. But using the wrong laser on Indian skin causes burns and pigmentation. Dr. Bhura explains why Nd:YAG and diode lasers are the safe choice for Fitzpatrick Type III–V skin, and what realistic results look like.",
    readTime: 8,
    date: "May 12, 2026",
    tags: ["laser hair removal", "Indian skin", "Nd:YAG"],
  },
  {
    slug: "prp-hair-loss-treatment-kanpur",
    title: "Is PRP Effective for Hair Loss? A Clinical Guide for Indian Patients",
    category: "Hair Care",
    excerpt:
      "PRP therapy is evidence-supported for androgenetic alopecia — but only when follicles are still alive and miniaturising. Dr. Bhura explains who actually benefits, how many sessions are needed, and the difference between PRP and the more advanced GFC treatment.",
    readTime: 8,
    date: "May 12, 2026",
    tags: ["PRP", "hair loss", "GFC treatment"],
  },
  {
    slug: "botox-vs-dermal-fillers-kanpur",
    title: "Botox vs Dermal Fillers — What Is the Difference and Who Needs Which?",
    category: "Treatment Guides",
    excerpt:
      "Botox relaxes muscles that cause expression lines. Fillers restore lost volume. They treat different problems with different mechanisms — and using one where you need the other produces poor results. Dr. Bhura explains the distinction every patient should understand.",
    readTime: 7,
    date: "May 12, 2026",
    tags: ["botox", "dermal fillers", "anti-aging"],
  },
  {
    slug: "melasma-treatment-kanpur",
    title: "What Causes Melasma and How to Treat It on Indian Skin",
    category: "Treatment Guides",
    excerpt:
      "Melasma is triggered by UV, hormones, and heat — and is especially persistent on Indian skin. The treatment sequence matters: starting with laser without priming can make it significantly worse. Dr. Bhura explains the phased approach that actually works.",
    readTime: 9,
    date: "May 12, 2026",
    tags: ["melasma", "pigmentation", "Indian skin"],
  },
  {
    slug: "signs-you-need-a-dermatologist",
    title: "5 Signs You Need to See a Dermatologist",
    category: "Skin Care Tips",
    excerpt:
      "Persistent acne, unusual moles, prolonged rashes — there are clear signals your skin is asking for professional attention. Here's how to tell when over-the-counter isn't enough.",
    readTime: 5,
    date: "February 28, 2026",
  },
  {
    slug: "debunking-indian-skin-myths",
    title: "Debunking Common Indian Skin Myths",
    category: "Myth Busters",
    excerpt:
      "From 'besan face packs cure acne' to 'dark skin doesn't age' — Dr. Bhura addresses the most persistent myths that do more harm than good to Indian skin health.",
    readTime: 6,
    date: "February 14, 2026",
  },
  {
    slug: "monsoon-skin-care",
    title: "Monsoon Skin Care: Fungal Infections & Prevention",
    category: "Seasonal Tips",
    excerpt:
      "Humidity spikes in Kanpur's monsoon season create the perfect conditions for fungal overgrowth. Learn which areas to watch, what to avoid, and when a rash needs medical care.",
    readTime: 5,
    date: "January 30, 2026",
  },
  {
    slug: "understanding-melasma",
    title: "Understanding Melasma: Causes & Treatment Options",
    category: "Treatment Guides",
    excerpt:
      "Melasma is one of the most common — and most misunderstood — skin conditions among Indian women. Dr. Bhura explains the hormonal triggers, what worsens it, and the step-by-step approach that actually works.",
    readTime: 9,
    date: "January 18, 2026",
  },
  {
    slug: "hair-fall-in-your-30s",
    title: "Hair Fall in Your 30s: When to Worry & What to Do",
    category: "Hair Care",
    excerpt:
      "Losing 50–100 hairs daily is normal. Losing clumps, noticing a widening part, or seeing scalp through thinning hair is not. Here's the clinical perspective on what causes early-onset hair loss and the treatments that make a real difference.",
    readTime: 7,
    date: "January 5, 2026",
  },
  {
    slug: "chemical-peels-vs-lasers",
    title: "Chemical Peels vs Lasers: Which Is Right for You?",
    category: "Treatment Guides",
    excerpt:
      "Both are powerful tools for improving skin texture, tone, and clarity — but they work very differently and suit different concerns. Dr. Bhura walks you through the decision framework she uses with patients every day.",
    readTime: 8,
    date: "December 20, 2025",
  },
];

// ---------------------------------------------------------------------------
// Category colour map
// ---------------------------------------------------------------------------

const CATEGORY_COLORS: Record<ArticleCategory, { bg: string; text: string }> = {
  "Skin Care Tips": { bg: "rgba(196,112,78,0.1)", text: "#7a3b1e" },
  "Treatment Guides": { bg: "rgba(199,141,107,0.12)", text: "#5a3520" },
  "Myth Busters": { bg: "rgba(212,167,106,0.14)", text: "#6b4a12" },
  "Hair Care": { bg: "rgba(92,64,51,0.1)", text: "#3D2B1F" },
  "Seasonal Tips": { bg: "rgba(168,181,160,0.15)", text: "#3a4a36" },
};

// ---------------------------------------------------------------------------
// ArticleCard
// ---------------------------------------------------------------------------

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const colors = CATEGORY_COLORS[article.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(199,141,107,0.12)",
        boxShadow: "0 4px 24px rgba(61,43,31,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(61,43,31,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(61,43,31,0.06)";
      }}
    >
      {/* Decorative top strip */}
      <div
        className="h-1.5 w-full"
        style={{ background: "linear-gradient(90deg, #C4704E 0%, #D4A76A 100%)" }}
      />

      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Category badge */}
        <span
          className="self-start text-xs font-medium px-3 py-1 rounded-full"
          style={{
            fontFamily: "var(--font-accent)",
            background: colors.bg,
            color: colors.text,
            letterSpacing: "0.04em",
          }}
        >
          {article.category}
        </span>

        {/* Title */}
        <h3
          className="text-xl leading-tight group-hover:text-[#C4704E] transition-colors duration-200"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#3D2B1F" }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed line-clamp-2 flex-1"
          style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
        >
          {article.excerpt}
        </p>

        {/* Meta footer */}
        <div
          className="pt-4 mt-2 border-t flex items-center justify-between"
          style={{ borderColor: "rgba(199,141,107,0.12)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #C4704E, #C78D6B)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="5" r="2.5" stroke="white" strokeWidth="1.2" />
                <path d="M2 12c0-2.2 2.2-4 5-4s5 1.8 5 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p
                className="text-xs font-medium leading-none"
                style={{ fontFamily: "var(--font-accent)", color: "#3D2B1F" }}
              >
                Dr. Mamta Bhura
              </p>
              <p
                className="text-xs leading-none mt-0.5"
                style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
              >
                {article.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#C78D6B" strokeWidth="1.2" />
              <path d="M6 3v3.5L8 8" stroke="#C78D6B" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
            >
              {article.readTime} min
            </span>
          </div>
        </div>

        {/* Read more */}
        <Link
          href={`/skin-guide/${article.slug}`}
          className="mt-1 text-sm font-medium flex items-center gap-1.5 transition-all duration-200 w-fit"
          style={{ fontFamily: "var(--font-accent)", color: "#C4704E" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.gap = "0.5rem";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.gap = "0.375rem";
          }}
        >
          Read More
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

// ---------------------------------------------------------------------------
// Skin Guide Page
// ---------------------------------------------------------------------------

export default function SkinGuidePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | "All">("All");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const featuredColors = CATEGORY_COLORS[FEATURED_ARTICLE.category];

  return (
    <>
      <Header />
      <main>
        {/* ----------------------------------------------------------------- */}
        {/* 1. Hero                                                           */}
        {/* ----------------------------------------------------------------- */}
        <section
          className="pt-32 pb-24 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 70%, #FDF6EC 100%)" }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-20 right-12 w-80 h-80 rounded-full opacity-25 pointer-events-none"
            style={{ background: "radial-gradient(circle, #D4A76A 0%, transparent 70%)", filter: "blur(70px)" }}
          />
          <div
            className="absolute bottom-0 left-8 w-56 h-56 rounded-full opacity-15 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C4704E 0%, transparent 70%)", filter: "blur(55px)" }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-5"
                  style={{ fontFamily: "var(--font-accent)", color: "#C78D6B", letterSpacing: "0.2em" }}
                >
                  Knowledge is Your Best Skin Care
                </p>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#3D2B1F" }}
                >
                  The{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontStyle: "italic",
                    }}
                  >
                    Skin Guide
                  </span>
                </h1>
                <p
                  className="text-xl md:text-2xl leading-relaxed"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    color: "#5C4033",
                    fontWeight: 400,
                  }}
                >
                  Expert skin care wisdom from Dr. Mamta Bhura —<br className="hidden md:block" /> evidence-based, practical, honest.
                </p>
              </motion.div>

              {/* Right Column: GIF Animation */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex justify-center lg:justify-end"
              >
                <motion.div
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/skin-guide/skin-guide-animation.webp"
                    alt="Skin Guide Animation"
                    width={480}
                    height={480}
                    className="w-full max-w-[480px] h-auto mix-blend-multiply"
                    priority
                    unoptimized
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 2. Featured Article                                               */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 md:py-20" style={{ background: "#FDF6EC" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-6"
                style={{ fontFamily: "var(--font-accent)", color: "#C78D6B", letterSpacing: "0.2em" }}
              >
                Featured Article
              </p>

              <Link
                href={`/skin-guide/${FEATURED_ARTICLE.slug}`}
                className="group flex flex-col lg:flex-row rounded-3xl overflow-hidden transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(199,141,107,0.14)",
                  boxShadow: "0 8px 40px rgba(61,43,31,0.08)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 60px rgba(61,43,31,0.14)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(61,43,31,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Left: decorative gradient panel */}
                <div
                  className="lg:w-2/5 min-h-64 lg:min-h-auto flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #F5E6D3 0%, #F8E8E0 30%, #FDF6EC 55%, #F5E6D3 80%, #C78D6B22 100%)",
                  }}
                >
                  {/* Layered orbs for visual depth */}
                  <div
                    className="absolute top-8 right-8 w-32 h-32 rounded-full opacity-40"
                    style={{ background: "radial-gradient(circle, #D4A76A 0%, transparent 70%)", filter: "blur(24px)" }}
                  />
                  <div
                    className="absolute bottom-8 left-6 w-24 h-24 rounded-full opacity-30"
                    style={{ background: "radial-gradient(circle, #C4704E 0%, transparent 70%)", filter: "blur(20px)" }}
                  />
                  {/* Central emblem */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(253,246,236,0.75)",
                        border: "1.5px solid rgba(199,141,107,0.3)",
                        boxShadow: "0 4px 24px rgba(199,141,107,0.15)",
                      }}
                    >
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <circle cx="18" cy="18" r="10" stroke="#C78D6B" strokeWidth="1.5" />
                        <path d="M18 8V18l6 4" stroke="#C4704E" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="18" cy="18" r="2" fill="#D4A76A" />
                        {/* sun rays */}
                        <path d="M18 4v3M18 29v3M4 18h3M29 18h3M7.76 7.76l2.12 2.12M26.12 26.12l2.12 2.12M7.76 28.24l2.12-2.12M26.12 9.88l2.12-2.12" stroke="#C78D6B" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                      </svg>
                    </div>
                    <p
                      className="text-sm text-center px-4"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        color: "#5C4033",
                        maxWidth: "180px",
                        lineHeight: 1.4,
                      }}
                    >
                      Evidence-based dermatology insights
                    </p>
                  </div>
                </div>

                {/* Right: article content */}
                <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center gap-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-accent)",
                        background: featuredColors.bg,
                        color: featuredColors.text,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {FEATURED_ARTICLE.category}
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
                    >
                      {FEATURED_ARTICLE.readTime} min read
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
                    >
                      · {FEATURED_ARTICLE.date}
                    </span>
                  </div>

                  <h2
                    className="text-3xl md:text-4xl leading-tight group-hover:text-[#C4704E] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#3D2B1F" }}
                  >
                    {FEATURED_ARTICLE.title}
                  </h2>

                  <p
                    className="text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
                  >
                    {FEATURED_ARTICLE.excerpt}
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #C4704E, #C78D6B)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="6" r="3" stroke="white" strokeWidth="1.3" />
                        <path d="M2 14c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold leading-none"
                        style={{ fontFamily: "var(--font-accent)", color: "#3D2B1F" }}
                      >
                        {BRAND.doctor.name}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
                      >
                        {BRAND.doctor.title}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                      style={{ fontFamily: "var(--font-accent)", color: "#C4704E" }}
                    >
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 4. Categories Row (placed before grid for UX flow)               */}
        {/* ----------------------------------------------------------------- */}
        <section
          className="py-6 sticky top-20 z-30"
          style={{
            background: "rgba(253,246,236,0.94)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(199,141,107,0.1)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setActiveCategory("All")}
                className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "var(--font-accent)",
                  background: activeCategory === "All" ? "#C4704E" : "transparent",
                  color: activeCategory === "All" ? "#FFFFFF" : "#5C4033",
                  border: activeCategory === "All" ? "1.5px solid #C4704E" : "1.5px solid rgba(199,141,107,0.35)",
                }}
              >
                All Articles
              </button>
              {ARTICLE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-accent)",
                    background: activeCategory === cat ? "#C4704E" : "transparent",
                    color: activeCategory === cat ? "#FFFFFF" : "#5C4033",
                    border: activeCategory === cat ? "1.5px solid #C4704E" : "1.5px solid rgba(199,141,107,0.35)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 3. Article Grid                                                   */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-16 md:py-20" style={{ background: "#FDF6EC" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTICLES.filter(
                (a) => activeCategory === "All" || a.category === activeCategory
              ).map((article, index) => (
                <ArticleCard key={article.slug} article={article} index={index} />
              ))}
            </div>

            {ARTICLES.filter(
              (a) => activeCategory === "All" || a.category === activeCategory
            ).length === 0 && (
              <p
                className="text-center py-16"
                style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
              >
                No articles in this category yet. Check back soon.
              </p>
            )}
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 5. Newsletter / Stay Updated CTA                                 */}
        {/* ----------------------------------------------------------------- */}
        <section
          className="py-20 md:py-24"
          style={{ background: "linear-gradient(135deg, #F5E6D3 0%, #FDF6EC 50%, #F8E8E0 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, #C4704E, #C78D6B)",
                    boxShadow: "0 8px 24px rgba(196,112,78,0.25)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" />
                    <path d="M2 7l10 8 10-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ fontFamily: "var(--font-accent)", color: "#C78D6B", letterSpacing: "0.2em" }}
                >
                  Stay in the Know
                </p>
                <h2
                  className="text-3xl md:text-4xl mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#3D2B1F" }}
                >
                  Monthly Skin Tips, Straight to Your Inbox
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
                >
                  Get Dr. Bhura&apos;s monthly skin tips directly to your inbox — no fluff, no spam.
                  Just honest, evidence-based advice tailored for Indian skin.
                </p>

                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-5 px-8 rounded-2xl"
                    style={{
                      background: "rgba(199,141,107,0.1)",
                      border: "1px solid rgba(199,141,107,0.25)",
                    }}
                  >
                    <p
                      className="text-lg"
                      style={{ fontFamily: "var(--font-display)", color: "#3D2B1F", fontWeight: 600 }}
                    >
                      Thank you for subscribing!
                    </p>
                    <p
                      className="text-sm mt-1"
                      style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
                    >
                      You&apos;ll receive Dr. Bhura&apos;s next skin guide in your inbox.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="flex-1 px-5 py-3 rounded-full text-sm outline-none transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-body)",
                        background: "#FFFFFF",
                        border: "1.5px solid rgba(199,141,107,0.3)",
                        color: "#3D2B1F",
                      }}
                      onFocus={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#C78D6B";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(199,141,107,0.12)";
                      }}
                      onBlur={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(199,141,107,0.3)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full text-sm font-medium text-white flex-shrink-0 transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-accent)",
                        background: "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                        boxShadow: "0 4px 16px rgba(196,112,78,0.3)",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(196,112,78,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(196,112,78,0.3)";
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                )}

                <p
                  className="text-xs mt-4"
                  style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
                >
                  No spam, ever. Unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 6. Bottom CTA                                                     */}
        {/* ----------------------------------------------------------------- */}
        <section
          className="py-20 md:py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #3D2B1F 0%, #5C4033 100%)" }}
        >
          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C78D6B 0%, transparent 70%)", filter: "blur(80px)" }}
          />

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-accent)", color: "#C78D6B", letterSpacing: "0.2em" }}
              >
                Personalised Advice
              </p>
              <h2
                className="text-4xl md:text-5xl mb-5 leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#FDF6EC" }}
              >
                Have a skin concern?{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #C78D6B 0%, #D4A76A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontStyle: "italic",
                  }}
                >
                  Consult Dr. Bhura
                </span>
              </h2>
              <p
                className="text-lg mb-10 max-w-xl mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "rgba(253,246,236,0.72)" }}
              >
                Reading is a great start — but nothing replaces a one-to-one consultation with a board-certified dermatologist who understands Indian skin.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`https://wa.me/${BRAND.clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a Consultation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="btn-ghost"
                  style={{ color: "#F5E6D3", borderColor: "rgba(199,141,107,0.4)" }}
                >
                  Contact the Clinic
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

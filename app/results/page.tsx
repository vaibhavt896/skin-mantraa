"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { TESTIMONIALS, BRAND } from "@/lib/constants";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type FilterCategory =
  | "All"
  | "Laser"
  | "Anti-Aging"
  | "Acne & Scars"
  | "Hair"
  | "Pigmentation";

interface Transformation {
  id: number;
  category: FilterCategory;
  treatment: string;
  duration: string;
  result: string;
  quote: string;
  patientName: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const FILTER_CATEGORIES: FilterCategory[] = [
  "All",
  "Laser",
  "Anti-Aging",
  "Acne & Scars",
  "Hair",
  "Pigmentation",
];

const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    category: "Acne & Scars",
    treatment: "Chemical Peel + Dermaroller",
    duration: "3 months · 4 sessions",
    result:
      "Significant reduction in active acne and post-acne scarring. Skin texture visibly smoother.",
    quote:
      "After struggling with acne for years, Dr. Bhura gave me clear skin in 3 months.",
    patientName: "Rahul M.",
  },
  {
    id: 2,
    category: "Laser",
    treatment: "Nd-YAG Laser",
    duration: "6 weeks · 3 sessions",
    result:
      "Unwanted hair reduced by 85%. Skin left smooth with no irritation or downtime.",
    quote:
      "Dr. Bhura is absolutely wonderful. The laser treatment results exceeded my expectations.",
    patientName: "Priya S.",
  },
  {
    id: 3,
    category: "Anti-Aging",
    treatment: "Dermal Fillers + Skin Boosters",
    duration: "Single session",
    result:
      "Natural volume restoration with lifted appearance. No swelling, natural-looking results within 5 days.",
    quote:
      "Everyone asks if I've been on vacation - not that I've had any procedure done. That's a true expert.",
    patientName: "Sunita K.",
  },
  {
    id: 4,
    category: "Hair",
    treatment: "PRP Therapy for Hair Fall",
    duration: "6 months · 4 sessions",
    result:
      "Significant reduction in hair fall. Visible new growth along hairline and crown.",
    quote:
      "Started PRP 6 months ago. The reduction is significant and new growth is visible.",
    patientName: "Amit T.",
  },
  {
    id: 5,
    category: "Pigmentation",
    treatment: "Q-Switch Laser + Melasma Protocol",
    duration: "4 months · 5 sessions",
    result:
      "Melasma lightened by approximately 70%. Skin tone significantly more even.",
    quote:
      "My skin has never looked this good. Dr. Bhura customized the treatment perfectly for my skin type.",
    patientName: "Kavita R.",
  },
  {
    id: 6,
    category: "Acne & Scars",
    treatment: "TCA Cross + Subcision",
    duration: "3 months · 3 sessions",
    result:
      "Deep ice-pick scars reduced in depth and appearance. Overall skin surface visibly improved.",
    quote:
      "I had given up hope on my scars. The results genuinely surprised me - and my family noticed first.",
    patientName: "Ananya P.",
  },
  {
    id: 7,
    category: "Laser",
    treatment: "Fractional CO2 Resurfacing",
    duration: "2 months · 2 sessions",
    result:
      "Fine lines, sun damage and uneven texture significantly improved. Skin looks years younger.",
    quote:
      "Dr. Bhura gave me hope when others said nothing could be done. Remarkable results.",
    patientName: "Deepak V.",
  },
  {
    id: 8,
    category: "Anti-Aging",
    treatment: "Botox + Thread Lift",
    duration: "Single session",
    result:
      "Forehead lines smoothed, brow lifted subtly. Refreshed appearance without looking 'done'.",
    quote:
      "A year on, people think I just look 'well-rested.' That's exactly what I wanted.",
    patientName: "Nisha G.",
  },
];

// ---------------------------------------------------------------------------
// TransformationCard
// ---------------------------------------------------------------------------

function TransformationCard({
  item,
  index,
}: {
  item: Transformation;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      layout
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "#FFFFFF",
        boxShadow: "0 4px 24px rgba(61,43,31,0.07)",
        border: "1px solid rgba(199,141,107,0.12)",
      }}
    >
      {/* Before/After visual */}
      <BeforeAfterSlider
        treatment={item.treatment}
        category={item.category}
        // beforeImage={`/images/results/${item.id}-before.jpg`}
        // afterImage={`/images/results/${item.id}-after.jpg`}
      />

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3
            className="text-lg leading-tight mb-0.5"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              color: "#3D2B1F",
            }}
          >
            {item.treatment}
          </h3>
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-accent)",
              color: "#C78D6B",
              letterSpacing: "0.05em",
            }}
          >
            {item.duration}
          </p>
        </div>

        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
        >
          {item.result}
        </p>

        {/* Patient quote */}
        <blockquote
          className="mt-auto pt-3 border-t"
          style={{ borderColor: "rgba(199,141,107,0.15)" }}
        >
          <p
            className="text-sm italic leading-relaxed mb-1.5"
            style={{
              fontFamily: "var(--font-display)",
              color: "#5C4033",
              fontStyle: "italic",
            }}
          >
            &ldquo;{item.quote}&rdquo;
          </p>
          <cite
            className="text-xs not-italic"
            style={{
              fontFamily: "var(--font-accent)",
              color: "#C78D6B",
              fontStyle: "normal",
            }}
          >
            - {item.patientName}
          </cite>
        </blockquote>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Star Rating
// ---------------------------------------------------------------------------

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < rating ? "#D4A76A" : "none"}
          stroke={i < rating ? "#D4A76A" : "#C78D6B"}
          strokeWidth="1.2"
        >
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.436.59 3.438L7 8.875l-3.09 1.631.59-3.438L2 4.632l3.455-.502L7 1z" />
        </svg>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Results Page
// ---------------------------------------------------------------------------

export default function ResultsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered =
    activeFilter === "All"
      ? TRANSFORMATIONS
      : TRANSFORMATIONS.filter((t) => t.category === activeFilter);

  return (
    <>
      <Header />
      <main>
        {/* ----------------------------------------------------------------- */}
        {/* 1. Hero                                                           */}
        {/* ----------------------------------------------------------------- */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 60%, #F8E8E0 100%)",
          }}
        >
          {/* Decorative orbs */}
          <div
            className="absolute top-16 right-16 w-64 h-64 rounded-full opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #C78D6B 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #C4704E 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center max-w-3xl mx-auto"
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{
                  fontFamily: "var(--font-accent)",
                  color: "#C78D6B",
                  letterSpacing: "0.2em",
                }}
              >
                Patient Transformations
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#3D2B1F",
                }}
              >
                Real Results,{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontStyle: "italic",
                  }}
                >
                  Real Patients
                </span>
              </h1>
              <p
                className="text-lg md:text-xl leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
              >
                Every transformation at SKIN@Mantraa is personal, medically
                guided, and built on clinical expertise. Explore what&apos;s
                possible when science meets genuine care.
              </p>
              <p
                className="text-sm italic"
                style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
              >
                Results shown are representative of outcomes for similar
                treatments. Individual results vary based on skin type,
                condition, and adherence to treatment protocols.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 2. Filter Bar                                                     */}
        {/* ----------------------------------------------------------------- */}
        <section
          className="py-8 sticky top-20 z-30"
          style={{
            background: "rgba(253,246,236,0.94)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(199,141,107,0.12)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-250"
                  style={{
                    fontFamily: "var(--font-accent)",
                    letterSpacing: "0.02em",
                    background:
                      activeFilter === cat ? "#C4704E" : "transparent",
                    color: activeFilter === cat ? "#FFFFFF" : "#5C4033",
                    border:
                      activeFilter === cat
                        ? "1.5px solid #C4704E"
                        : "1.5px solid rgba(199,141,107,0.35)",
                    boxShadow:
                      activeFilter === cat
                        ? "0 4px 16px rgba(196,112,78,0.25)"
                        : "none",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 3. Before/After Gallery                                           */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-20" style={{ background: "#FDF6EC" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div
                  key={activeFilter}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filtered.map((item, index) => (
                    <TransformationCard
                      key={item.id}
                      item={item}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                  style={{ fontFamily: "var(--font-body)", color: "#C78D6B" }}
                >
                  No transformations found for this category yet.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 4. Medical Disclaimer                                             */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-14" style={{ background: "#F5E6D3" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(199,141,107,0.18)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(196,112,78,0.12)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle
                      cx="9"
                      cy="9"
                      r="8"
                      stroke="#C4704E"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 5v4.5M9 12h.01"
                      stroke="#C4704E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "#3D2B1F",
                    }}
                  >
                    Medical Disclaimer
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
                  >
                    Results shown on this page are representative of outcomes
                    achieved by actual patients of SKIN@Mantraa under the care
                    of Dr. Mamta Bhura. All before-and-after documentation is
                    clinical in nature and intended for informational purposes
                    only.
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
                  >
                    <strong>Individual results vary.</strong> Outcomes depend on
                    multiple factors including skin type, age, severity of
                    condition, adherence to pre- and post-treatment care
                    instructions, and the patient&apos;s overall health. No
                    specific result can be guaranteed.
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "#5C4033" }}
                  >
                    A consultation with Dr. Bhura is essential to determine the
                    most appropriate treatment plan for your specific skin
                    concern. We encourage every patient to approach treatment
                    with realistic expectations and open communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 5. Testimonials Grid                                              */}
        {/* ----------------------------------------------------------------- */}
        <section className="py-20 md:py-28" style={{ background: "#FDF6EC" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "var(--font-accent)",
                  color: "#C78D6B",
                  letterSpacing: "0.2em",
                }}
              >
                What Patients Say
              </p>
              <h2
                className="text-4xl md:text-5xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#3D2B1F",
                }}
              >
                Voices of{" "}
                <span style={{ fontStyle: "italic", color: "#C4704E" }}>
                  Transformation
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-7 rounded-2xl flex flex-col gap-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(199,141,107,0.12)",
                    boxShadow: "0 4px 24px rgba(61,43,31,0.06)",
                  }}
                >
                  {/* Stars */}
                  <StarRating rating={t.rating} />

                  {/* Quote */}
                  <blockquote>
                    <p
                      className="text-base leading-relaxed italic"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "#3D2B1F",
                        fontStyle: "italic",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Patient info */}
                  <div
                    className="mt-auto pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: "rgba(199,141,107,0.12)" }}
                  >
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{
                          fontFamily: "var(--font-accent)",
                          color: "#3D2B1F",
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "#C78D6B",
                        }}
                      >
                        {t.treatment}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-accent)",
                        background: "rgba(212,167,106,0.12)",
                        color: "#7a5c2e",
                        fontSize: "0.7rem",
                      }}
                    >
                      {t.source}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 6. CTA - Start Your Transformation                               */}
        {/* ----------------------------------------------------------------- */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3D2B1F 0%, #5C4033 100%)",
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #C78D6B 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{
                  fontFamily: "var(--font-accent)",
                  color: "#C78D6B",
                  letterSpacing: "0.2em",
                }}
              >
                Your Journey Begins Here
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "#FDF6EC",
                }}
              >
                Start Your{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #C78D6B 0%, #D4A76A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontStyle: "italic",
                  }}
                >
                  Transformation
                </span>
              </h2>
              <p
                className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(253,246,236,0.75)",
                }}
              >
                Every journey at SKIN@Mantraa begins with an honest, in-depth
                consultation. Dr. Bhura will assess your skin, explain your
                options clearly, and craft a plan built around your unique
                goals.
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
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="btn-ghost"
                  style={{
                    color: "#F5E6D3",
                    borderColor: "rgba(199,141,107,0.4)",
                  }}
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

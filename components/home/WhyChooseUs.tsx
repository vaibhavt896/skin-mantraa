"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Value pillars (why patients trust the clinic) ──────────────────────────
const PILLARS = [
  {
    title: "Honest, never upsold",
    body: "If a treatment is not right for you, Dr. Bhura says so plainly. That honesty is rare in an industry built on upselling, and it is exactly why patients return and refer their families.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#C4704E" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(196,112,78,0.06)" />
        <path d="M8.5 12l2.5 2.5L15.5 10" stroke="#C4704E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Trained where it counts",
    body: "MBBS and MD Dermatology from IMS BHU, then Senior Consultant at Kaya Skin Clinic, Delhi. Years of complex cases at high patient volumes built genuine, hands-on expertise.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4L3 8.5l9 4.5 9-4.5L12 4z" stroke="#C4704E" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(196,112,78,0.06)" />
        <path d="M7 10.5V15c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.5" stroke="#C4704E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 8.5V13" stroke="#C4704E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "A plan built around you",
    body: "Acne, vitiligo, laser hair removal, Botox, fillers, HIFU, PRP for hair loss. Every plan is shaped by your skin type, lifestyle, goals, and budget, never a fixed package.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="4" width="14" height="17" rx="2" stroke="#C4704E" strokeWidth="1.5" fill="rgba(196,112,78,0.06)" />
        <path d="M9 4h6v3H9z" stroke="#C4704E" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.5 12h7M8.5 16h4" stroke="#C4704E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ─── Real patient stories (concern → what happened → outcome) ────────────────
const STORIES = [
  {
    tag: "Acne · Kidwai Nagar",
    concern: "A 34-year-old teacher had battled hormonal acne for years.",
    outcome:
      "Three months of medical care plus a salicylic-acid peel course gave her the clearest skin she had seen in a long time. No expensive laser needed. She now follows a simple home routine.",
  },
  {
    tag: "Anti-ageing · Honest advice",
    concern: "A 28-year-old came in asking for Botox.",
    outcome:
      "Dr. Bhura told her she did not need it yet, and gave her a medical-grade SPF routine and one Dermapen session instead. She began Botox two years later, when the timing was genuinely right.",
  },
  {
    tag: "Melasma · Civil Lines",
    concern: "A 45-year-old had fought melasma with fairness creams for six years.",
    outcome:
      "One proper treatment cycle, priming creams, two chemical peels, and disciplined sun care, controlled it to a level she had not seen in a decade. The difference was a protocol, not a product.",
  },
];

function Pillar({ pillar }: { pillar: (typeof PILLARS)[number] }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        background: "#FDFAF5",
        border: "1px solid rgba(199,141,107,0.18)",
        borderRadius: "18px",
        padding: "1.6rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        boxShadow: "0 2px 16px rgba(60,43,31,0.04)",
      }}
    >
      <span
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          background: "rgba(196,112,78,0.08)",
          border: "1px solid rgba(196,112,78,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {pillar.icon}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#3D2B1F",
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {pillar.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: "#5C4033",
          margin: 0,
        }}
      >
        {pillar.body}
      </p>
    </motion.div>
  );
}

function StoryCard({ story }: { story: (typeof STORIES)[number] }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        position: "relative",
        background:
          "linear-gradient(160deg, #FFFFFF 0%, #FDF6EC 100%)",
        border: "1px solid rgba(199,141,107,0.2)",
        borderRadius: "18px",
        padding: "1.6rem 1.5rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        boxShadow: "0 4px 24px rgba(60,43,31,0.06)",
        overflow: "hidden",
      }}
    >
      {/* accent bar */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: "100%",
          background: "linear-gradient(180deg, #C4704E, #D4A76A)",
        }}
      />
      <span
        style={{
          alignSelf: "flex-start",
          fontFamily: "var(--font-accent)",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#C4704E",
          background: "rgba(196,112,78,0.08)",
          border: "1px solid rgba(196,112,78,0.2)",
          borderRadius: "100px",
          padding: "0.3rem 0.7rem",
        }}
      >
        {story.tag}
      </span>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.05rem",
          fontWeight: 600,
          fontStyle: "italic",
          color: "#3D2B1F",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {story.concern}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.92rem",
          lineHeight: 1.7,
          color: "#5C4033",
          margin: 0,
        }}
      >
        {story.outcome}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="why-us"
      aria-label="Why Kanpur patients choose SKIN@Mantraa"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header + honesty promise */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-accent)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: "#C78D6B",
              marginBottom: "1rem",
            }}
          >
            <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
            Trusted by Kanpur
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.85rem, 3.5vw, 2.6rem)",
              fontWeight: 600,
              color: "#3D2B1F",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Why Kanpur Patients Choose{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              SKIN@Mantraa
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: "#5C4033",
              margin: 0,
            }}
          >
            Finding the right dermatologist in Kanpur is not about chasing the
            longest list of degrees. It is about finding a doctor who tells you
            the truth: what a treatment can do, what it cannot, and whether you
            need it at all. That is how Dr. Mamta Bhura has practised since 1998.
          </motion.p>
        </motion.div>

        {/* Value pillars */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          style={{ marginTop: "2.75rem" }}
        >
          {PILLARS.map((p) => (
            <Pillar key={p.title} pillar={p} />
          ))}
        </motion.div>

        {/* Real patient stories */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ marginTop: "4rem" }}
        >
          <motion.h3
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 600,
              color: "#3D2B1F",
              lineHeight: 1.2,
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Real Patients, Real Decisions
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#5C4033",
              opacity: 0.85,
              maxWidth: "560px",
              marginBottom: "2rem",
            }}
          >
            A few moments that show how care is decided here, always around what
            the patient actually needs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STORIES.map((s) => (
              <StoryCard key={s.tag} story={s} />
            ))}
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
          style={{ marginTop: "3rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "#5C4033",
              margin: 0,
            }}
          >
            Want an honest opinion on your skin?
          </p>
          <Link href="/contact" className="btn-primary" style={{ alignSelf: "flex-start" }}>
            Book a Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

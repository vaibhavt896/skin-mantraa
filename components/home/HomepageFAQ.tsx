"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best dermatologist in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Mamta Bhura at SKIN@Mantraa is widely recognised as one of Kanpur's most experienced dermatologists. She holds an MBBS and MD in Dermatology from the Institute of Medical Sciences, BHU, has 26+ years of clinical experience, and has been ranked #1 dermatologist in Kanpur by ThreeBestRated.in. She is verified on Practo and Justdial with a 4.8 star rating.",
      },
    },
    {
      "@type": "Question",
      name: "What skin treatments are available at SKIN@Mantraa Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SKIN@Mantraa offers advanced laser treatments (Nd:YAG, IPL, Diode, Triple-Wavelength laser), anti-aging procedures (Botox, dermal fillers, thread lift, HIFU skin tightening), acne and scar treatments (chemical peels, Dermapen 4, microdermabrasion), hair restoration (PRP therapy, GFC treatment, mesotherapy for hair), and medical dermatology for eczema, vitiligo, psoriasis, melasma, and other skin conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Is HIFU treatment available in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, SKIN@Mantraa has a clinical-grade HIFU machine for non-surgical skin tightening and facial lifting in Kanpur. HIFU uses focused ultrasound energy to reach the SMAS layer beneath the skin, stimulating new collagen production and producing gradual skin tightening results over 3 to 6 months. It is safe for Indian skin tones.",
      },
    },
    {
      "@type": "Question",
      name: "Where is SKIN@Mantraa located in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SKIN@Mantraa is located at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur, Uttar Pradesh 208002. Clinic hours: Monday–Friday 11AM–6PM, Saturday 12PM–6PM, Sunday 10AM–2PM.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment with Dr. Mamta Bhura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 73830 79825, WhatsApp +91 98380 00024, or fill the contact form at skinmantraa.in/contact. Walk-ins are welcome during clinic hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is Dr. Mamta Bhura experienced with Indian skin types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With 26 years of practice in Kanpur, Dr. Mamta Bhura specialises in treating Fitzpatrick Type III–V Indian skin. She customises all treatment protocols - including laser settings, chemical peel formulations, and energy-based therapies - for Indian skin to minimise pigmentation risk and maximise results.",
      },
    },
    {
      "@type": "Question",
      name: "What is the consultation fee at SKIN@Mantraa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The consultation fee at SKIN@Mantraa is ₹600. Procedure costs vary depending on the treatment type, area, and number of sessions required. Contact the clinic directly for current procedure pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How many sessions does laser hair removal take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients require 6 to 8 sessions for significant and lasting hair reduction. Sessions are spaced 4 to 6 weeks apart depending on the treatment area and hair growth cycle. A skin assessment is conducted before starting to determine the most appropriate laser system and settings for your skin and hair type.",
      },
    },
  ],
};

const FAQ_ITEMS = FAQ_SCHEMA.mainEntity.map((item) => ({
  q: item.name,
  a: item.acceptedAnswer.text,
}));

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        borderBottom: "1px solid rgba(199,141,107,0.15)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.25rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left" as const,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: open ? "#C4704E" : "#3D2B1F",
            lineHeight: 1.4,
            transition: "color 0.2s ease",
          }}
        >
          {q}
        </span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: open ? "#C4704E" : "rgba(199,141,107,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s ease",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <path
              d="M2 4l4 4 4-4"
              stroke={open ? "#ffffff" : "#C78D6B"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.97rem",
                lineHeight: 1.8,
                color: "#5C4033",
                paddingBottom: "1.25rem",
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HomepageFAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="faq"
      aria-label="Frequently asked questions"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "#FFFFFF" }}
    >
      {/* FAQPage JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-12"
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
            <span
              aria-hidden="true"
              style={{ width: "24px", height: "1px", background: "#C78D6B" }}
            />
            Common Questions
            <span
              aria-hidden="true"
              style={{ width: "24px", height: "1px", background: "#C78D6B" }}
            />
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 600,
              color: "#3D2B1F",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <div>
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

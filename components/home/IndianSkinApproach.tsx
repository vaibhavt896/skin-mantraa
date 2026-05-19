"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function SectionBlock({
  eyebrow,
  heading,
  paragraphs,
  background,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  background: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} style={{ background, padding: "5rem 0" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
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
            {eyebrow}
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
              marginBottom: "2rem",
              letterSpacing: "-0.02em",
            }}
          >
            {heading}
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "1.25rem",
            }}
          >
            {paragraphs.map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "#5C4033",
                }}
              >
                {text}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function IndianSkinApproach() {
  return (
    <>
      <section id="indian-skin" aria-label="Dermatology for Indian skin">
        <SectionBlock
          eyebrow="Indian Skin Expertise"
          heading="Dermatology Designed for Indian Skin"
          background="#FDF6EC"
          paragraphs={[
            "Most cosmetic skin research comes from Western populations — lighter skin tones that behave very differently under lasers and chemical treatments compared to the skin tones most North Indian patients have.",
            "At SKIN@Mantraa, every plan is built for Indian skin. Laser settings, peel types, and after-care are all chosen with Indian skin's pigment sensitivity and healing patterns in mind. This is not an add-on. It is how we work.",
            "Dr. Mamta Bhura has 26 years of treating patients in Kanpur. She has direct, hands-on experience with conditions common in Indian skin: melasma, dark spots after acne, vitiligo, stubborn oily-skin acne, and early ageing from UP's high UV levels.",
            'If you have ever been told a treatment "might not suit your skin tone," come in for a consult. With the right tools and settings, most treatments work safely and well on Indian skin.',
          ]}
        />
      </section>

      <section id="approach" aria-label="Our clinical approach">
        <SectionBlock
          eyebrow="Our Method"
          heading="Assessment Before Treatment"
          background="#F5E6D3"
          paragraphs={[
            "Before any procedure at SKIN@Mantraa, every patient goes through a skin consult. We look at skin type, health history, and your goals. This shapes every decision — which device to use, what settings to apply, and what results to expect.",
            "Our clinic has clinical-grade laser systems — Nd:YAG, Diode, and Triple-Wavelength — for hair removal and pigmentation. We also have HIFU for skin tightening, Dermapen 4 for scars and texture, and medical-grade peels for Indian skin. All Botox and filler treatments are done by Dr. Bhura personally, using approved products.",
            "We do not push packages. We build plans around what you need. Some patients need one session. Others need a few months of care. You will know what to expect before anything begins.",
          ]}
        />
      </section>
    </>
  );
}

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
            "Most cosmetic dermatology research originates in Western populations - Fitzpatrick Type I and II skin that behaves very differently under lasers, light, and chemical treatments compared to the Fitzpatrick Type III to V skin tones most North Indian patients have.",
            "At SKIN@Mantraa, every protocol is adapted for Indian skin. Laser settings, peel formulations, post-procedure care - all of it is calibrated with pigmentation sensitivity, tanning tendency, and Indian skin's unique healing patterns in mind. This is not a modification made as an afterthought. It is built into how we practice.",
            "After 26 years of treating patients in Kanpur, Dr. Mamta Bhura has deep, practical experience with conditions that disproportionately affect people of Indian descent: melasma, post-inflammatory hyperpigmentation, vitiligo, stubborn acne on oilier skin types, and premature photoageing from Uttar Pradesh's high UV exposure months.",
            'If you have ever been told a treatment "might not be right for your skin tone," we encourage you to come in for a consultation. In many cases, the right technology used at the right settings works safely and effectively regardless of skin tone.',
          ]}
        />
      </section>

      <section id="approach" aria-label="Our clinical approach">
        <SectionBlock
          eyebrow="Our Method"
          heading="Assessment Before Treatment"
          background="#F5E6D3"
          paragraphs={[
            "Before any procedure at SKIN@Mantraa, every patient goes through a structured skin consultation. We look at skin type, existing conditions, treatment history, and realistic goals. This assessment shapes every decision - which technology to use, what settings to apply, what results to honestly expect, and what timeline to plan for.",
            "We use a range of advanced dermatology equipment: clinical-grade Nd:YAG, Diode, and Triple-Wavelength laser systems for hair removal and pigmentation; HIFU for non-surgical skin tightening; Dermapen 4 for scar revision and skin rejuvenation; and medical-grade chemical peels formulated for Indian skin. All cosmetic injectables - Botox and dermal fillers - are FDA-approved products administered by Dr. Bhura personally.",
            "We do not offer packages as a default. We design treatment plans around what you need. Some patients benefit from a single session; others from a structured programme over several months. You will know exactly what to expect before anything is started.",
          ]}
        />
      </section>
    </>
  );
}

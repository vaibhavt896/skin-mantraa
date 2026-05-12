"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="why-us"
      aria-label="Why choose SKIN@Mantraa"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-4xl mx-auto">
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
            <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
            Trusted by Kanpur
            <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
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

          <motion.div
            variants={fadeInUp}
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "1.25rem",
            }}
          >
            {[
              "Finding a reliable dermatologist in Kanpur is not simply about finding someone with the right degrees. It is about finding a doctor who will tell you the truth — about what a treatment can do, what it cannot, and whether you actually need it. That is the standard Dr. Mamta Bhura has practised since she started in 1998.",
              "Trained at the Institute of Medical Sciences, Banaras Hindu University — one of India's most rigorous medical institutions — Dr. Bhura holds an MBBS and MD in Dermatology. Before founding SKIN@Mantraa, she served as a consultant at Kaya Skin Clinic in Delhi, where she gained exposure to some of the highest patient volumes and most complex cases in the country.",
              "Today, patients from across Kanpur and neighbouring districts come to SKIN@Mantraa for conditions ranging from acne and vitiligo to laser hair removal, Botox, fillers, HIFU skin tightening, and PRP for hair loss. Every treatment plan is designed for the individual — their skin type, lifestyle, realistic goals, and budget.",
              "If a treatment is not right for you, she will say so. That honesty — rare in an industry often driven by upselling — is what keeps patients returning and referring friends and family.",
              "A 34-year-old teacher from Kidwai Nagar came in with hormonal acne she had battled since her late 20s. After 3 months of medical management combined with a salicylic acid peel course, her skin was clearer than it had been in years — without any expensive laser procedure she had been told elsewhere was the only option. She is now on a simple home regimen Dr. Bhura prescribed.",
              "A 28-year-old professional came in asking about Botox but was told she did not yet need it — instead, Dr. Bhura recommended a medical-grade SPF routine and one session of Dermapen to address early texture concerns. She left with a plan that cost a fraction of what she had budgeted. Two years later, she has started Botox — on Dr. Bhura's recommendation, when she actually needed it.",
              "A 45-year-old woman from Civil Lines came in with melasma she had been trying to treat with fairness creams for six years. Within one structured treatment cycle — priming topicals, two chemical peels, and strict sun protection — her melasma was controlled to a level she had not seen in a decade. The difference was a proper dermatologist-designed protocol rather than over-the-counter products.",
            ].map((text, i) => (
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
    </section>
  );
}

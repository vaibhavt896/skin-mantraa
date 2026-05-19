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
            <span
              aria-hidden="true"
              style={{ width: "24px", height: "1px", background: "#C78D6B" }}
            />
            Trusted by Kanpur
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
              "Finding a good dermatologist in Kanpur is not just about degrees. It is about finding a doctor who tells you the truth — what a treatment can do, what it cannot, and whether you need it at all. That is how Dr. Mamta Bhura has worked since 1998.",
              "Dr. Bhura trained at IMS BHU, one of India's top medical schools. She holds an MBBS and MD in Dermatology. Before starting SKIN@Mantraa, she worked as a consultant at Kaya Skin Clinic in Delhi. There, she built experience treating complex cases at high patient volumes.",
              "Patients come to SKIN@Mantraa from Kanpur and nearby areas. They come for acne, vitiligo, laser hair removal, Botox, fillers, HIFU skin tightening, and PRP for hair loss. Every plan is made for the patient — based on skin type, lifestyle, goals, and budget.",
              "If a treatment is not right for you, she will say so. That honesty is rare in an industry driven by upselling. It is why patients return and refer friends and family.",
              "A 34-year-old teacher from Kidwai Nagar came in with hormonal acne she had battled for years. After 3 months of treatment — medical care plus a salicylic acid peel course — her skin was the clearest it had been in a long time. No expensive laser was needed. She now follows a simple home plan Dr. Bhura prescribed.",
              "A 28-year-old came in asking about Botox. Dr. Bhura told her she did not need it yet. She was given a medical-grade SPF routine and one Dermapen session for early skin texture concerns. She left with a plan that cost far less than she had expected. Two years later, she started Botox — when Dr. Bhura said the time was right.",
              "A 45-year-old woman from Civil Lines had tried to fix melasma with fairness creams for six years. After one treatment cycle — priming creams, two chemical peels, and sun care — her skin was controlled to a level she had not seen in a decade. The difference was a proper protocol, not an over-the-counter product.",
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

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FAQS = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "During your initial consultation, Dr. Bhura conducts a comprehensive skin assessment — analysing your skin type, phototype (particularly important for Indian skin tones), medical history, lifestyle, and specific concerns. Based on this thorough evaluation, she designs a personalised treatment plan that prioritises your skin's long-term health over short-term results. There is no one-size-fits-all approach at SKIN@Mantraa.",
  },
  {
    question: "Are the treatments safe for Indian skin tones?",
    answer:
      "Absolutely. Dr. Bhura has extensive experience treating Fitzpatrick skin types III–VI, which are predominant across India. Treatments like laser therapy and chemical peels require careful calibration for darker skin tones to avoid complications such as post-inflammatory hyperpigmentation. Every protocol at SKIN@Mantraa is specifically adjusted for the unique characteristics of Indian skin, ensuring both safety and efficacy.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on the treatment type, your specific condition, and your skin's response. For example, laser hair removal typically requires 6–8 sessions, while a single deep chemical peel may show significant results in one sitting. PRP therapy for hair loss generally follows a 3–4 session induction course followed by maintenance. Dr. Bhura will outline a realistic session plan during your consultation, with clear milestones to track progress.",
  },
  {
    question: "What is the downtime for laser treatments?",
    answer:
      "Downtime varies significantly by treatment type and intensity. Nd-YAG laser for pigmentation and hair removal typically involves minimal downtime — mild redness subsiding within a few hours. Fractional CO2 laser resurfacing may require 5–7 days of recovery as the skin heals. Q-Switch laser sessions generally allow patients to resume normal activities the same day. Dr. Bhura will discuss expected downtime and post-treatment care in detail before any procedure, so you can plan accordingly.",
  },
  {
    question: "Do you offer package deals?",
    answer:
      "Yes — for treatments requiring multiple sessions, such as laser hair removal, PRP therapy, and chemical peel courses, SKIN@Mantraa offers structured packages that provide better value than individual session pricing. Package details are discussed transparently during consultation. Dr. Bhura's philosophy is that packages should only be recommended when genuinely clinically appropriate for your treatment plan — never as a sales tactic.",
  },
];

export default function ServicesClient() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-14"
        >
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C4704E",
              marginBottom: "0.875rem",
            }}
          >
            Common Questions
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#3D2B1F",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-3"
        >
          {FAQS.map((faq, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1px solid rgba(199,141,107,0.18)",
        background: open ? "rgba(248,232,224,0.5)" : "rgba(253,246,236,0.8)",
        transition: "background 0.25s ease",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 600,
            color: open ? "#C4704E" : "#3D2B1F",
            lineHeight: 1.3,
            transition: "color 0.25s ease",
          }}
        >
          {question}
        </span>

        {/* +/× icon */}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: open
              ? "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)"
              : "rgba(199,141,107,0.12)",
            transition: "background 0.25s ease",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 2V12M2 7H12"
              stroke={open ? "white" : "#C4704E"}
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="px-6 pb-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "#5C4033",
                lineHeight: 1.75,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  headline: string;
  subtext?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function SectionHeader({
  label,
  headline,
  subtext,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  const headlineColor = dark ? "#FDF6EC" : "#3D2B1F";
  const subtextColor = dark ? "rgba(253,246,236,0.72)" : "#5C4033";
  const labelBorderColor = dark
    ? "rgba(199,141,107,0.55)"
    : "rgba(199,141,107,0.45)";
  const labelTextColor = dark ? "#D4A76A" : "#C78D6B";
  const labelBg = dark ? "rgba(199,141,107,0.12)" : "rgba(199,141,107,0.08)";

  const headlineLines = headline.split("\n");

  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`flex flex-col gap-4 ${alignClass}`}
    >
      {label && (
        <motion.div variants={fadeInUp}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-accent)",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: labelTextColor,
              background: labelBg,
              border: `1px solid ${labelBorderColor}`,
              borderRadius: "100px",
              padding: "0.3rem 0.875rem",
            }}
          >
            {label}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeInUp}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 600,
          lineHeight: 1.08,
          color: headlineColor,
          letterSpacing: "-0.01em",
          fontStyle: "italic",
        }}
      >
        {headlineLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < headlineLines.length - 1 && <br />}
          </span>
        ))}
      </motion.h2>

      {subtext && (
        <motion.p
          variants={fadeInUp}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            lineHeight: 1.7,
            color: subtextColor,
            maxWidth: "60ch",
          }}
        >
          {subtext}
        </motion.p>
      )}
    </motion.div>
  );
}

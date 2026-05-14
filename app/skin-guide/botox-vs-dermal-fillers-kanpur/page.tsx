import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title:
    "Botox vs Dermal Fillers - What Is the Difference? | SKIN@Mantraa Kanpur",
  description:
    "Botox relaxes muscles that cause expression lines. Fillers restore lost volume. They are not interchangeable. Dr. Mamta Bhura explains the difference, who needs which, and how they work together.",
  alternates: {
    canonical:
      "https://skinmantraa.in/skin-guide/botox-vs-dermal-fillers-kanpur",
  },
  openGraph: {
    title: "Botox vs Dermal Fillers - What Is the Difference?",
    description:
      "Botox relaxes muscles that cause expression lines. Fillers restore lost volume. They are not interchangeable. Dr. Mamta Bhura explains the difference, who needs which, and how they work together.",
    url: "https://skinmantraa.in/skin-guide/botox-vs-dermal-fillers-kanpur",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Botox vs Dermal Fillers - What Is the Difference and Who Needs Which?",
  description:
    "Clinical guide explaining the difference between Botox and dermal fillers, by Dr. Mamta Bhura at SKIN@Mantraa Kanpur. Includes who benefits from each, combination approaches, and what to expect.",
  image: "https://skinmantraa.in/opengraph-image",
  author: {
    "@type": "Physician",
    "@id": "https://skinmantraa.in/about#doctor",
    name: "Dr. Mamta Bhura",
    url: "https://skinmantraa.in/about",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://skinmantraa.in/#clinic",
    name: "SKIN@Mantraa",
    url: "https://skinmantraa.in",
  },
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  mainEntityOfPage:
    "https://skinmantraa.in/skin-guide/botox-vs-dermal-fillers-kanpur",
  keywords:
    "botox vs fillers, botox Kanpur, dermal fillers Kanpur, difference between botox and fillers, anti-aging treatment Kanpur, wrinkle treatment Kanpur",
  about: [
    {
      "@type": "MedicalProcedure",
      name: "Botox",
      alternateName: "Botulinum Toxin Injection",
      description:
        "A neuromodulator that temporarily relaxes overactive muscles causing dynamic expression lines — forehead, frown lines, crow's feet.",
      url: "https://skinmantraa.in/services/anti-aging",
      procedureType: "https://health-lifesci.schema.org/NoninvasiveProcedure",
    },
    {
      "@type": "MedicalProcedure",
      name: "Dermal Fillers",
      alternateName: "Hyaluronic Acid Fillers",
      description:
        "Injectable gel that restores lost volume to cheeks, lips, nasolabial folds, and under-eye hollows. Treats different concerns than Botox.",
      url: "https://skinmantraa.in/services/anti-aging",
      procedureType: "https://health-lifesci.schema.org/NoninvasiveProcedure",
    },
  ],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".answer-box"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Botox and dermal fillers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Botox (botulinum toxin) is a muscle-relaxing injection that reduces dynamic wrinkles - lines caused by repeated muscle movement like frowning, squinting, and smiling. Dermal fillers are injectable gels (typically hyaluronic acid) that restore volume lost with age and improve static lines - creases that are visible even when the face is at rest. They work differently, last for different durations, and address different concerns. Many patients benefit from both.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Botox last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Botox typically lasts 3 to 6 months. The duration varies based on the area treated, the dose used, and individual metabolism. With regular treatment, some patients find that their results last progressively longer over time as the treated muscles become less hyperactive.",
      },
    },
    {
      "@type": "Question",
      name: "How long do dermal fillers last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hyaluronic acid fillers last between 9 to 18 months depending on the product used, the treatment area, and the individual patient's metabolism. Fillers used in high-movement areas (like the lips) tend to break down faster than those placed in lower-movement areas (like the cheeks or under-eye region).",
      },
    },
    {
      "@type": "Question",
      name: "Do Botox and fillers work together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - Botox and fillers address different aspects of facial ageing and can be used in the same session or at staged intervals. Botox reduces the muscle activity that causes dynamic lines; fillers restore lost facial volume and soften static creases. A combination approach produces more natural, comprehensive results than either treatment alone.",
      },
    },
    {
      "@type": "Question",
      name: "Is Botox safe for Indian skin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Botox is safe for all skin types, including Fitzpatrick Type III–V Indian skin. The mechanism of action is on the muscle, not the skin surface, so there is no skin-related risk specific to Indian skin. Complications from Botox are almost entirely technique-dependent, which is why choosing an experienced medical practitioner matters. At SKIN@Mantraa, all injectable procedures are performed by Dr. Mamta Bhura, MD Dermatology.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of Botox and fillers in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Botox is priced per unit of toxin used; the number of units depends on the treatment area and the degree of muscle activity. Fillers are priced per syringe (typically 1ml). Both costs vary by area and desired outcome. Book a consultation (₹600) for a personalised assessment and full pricing.",
      },
    },
  ],
};

const styles = {
  articleBg: { background: "#FDF6EC" },
  heading1: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: 600,
    lineHeight: 1.15,
    color: "#3D2B1F",
    marginBottom: "1.5rem",
    letterSpacing: "-0.025em",
  } as React.CSSProperties,
  heading2: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
    fontWeight: 600,
    color: "#3D2B1F",
    marginTop: "2.5rem",
    marginBottom: "1rem",
    paddingLeft: "0.75rem",
    borderLeft: "3px solid #C4704E",
    lineHeight: 1.3,
  } as React.CSSProperties,
  para: {
    fontFamily: "var(--font-body)",
    fontSize: "1.05rem",
    lineHeight: 1.85,
    color: "#2d2d2d",
    marginBottom: "1.25rem",
  } as React.CSSProperties,
  li: {
    fontFamily: "var(--font-body)",
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: "#2d2d2d",
    marginBottom: "0.4rem",
    paddingLeft: "0.25rem",
  } as React.CSSProperties,
  ul: {
    margin: "0.5rem 0 1.25rem 1.5rem",
    listStyle: "disc",
  } as React.CSSProperties,
};

export default function BotoxVsFillerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main style={styles.articleBg}>
        <article className="pt-40 pb-24">
          {/* Header */}
          <header className="max-w-4xl mx-auto px-6 lg:px-8 mb-14">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  padding: "0.2rem 0.85rem",
                  background: "rgba(196,112,78,0.1)",
                  color: "#7a3b1e",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-accent)",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                }}
              >
                Treatment Guides
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "#8C6F5E",
                }}
              >
                May 12, 2026 · 7 min read
              </span>
            </div>

            <h1 style={styles.heading1}>
              Botox vs Dermal Fillers
              <br />
              <span style={{ color: "#C4704E" }}>
                What Is the Difference and Who Needs Which?
              </span>
            </h1>

            <p
              style={{ ...styles.para, fontSize: "1.15rem", color: "#5C4033" }}
            >
              Botox relaxes the muscles that cause expression lines. Fillers
              restore the volume your face has lost with age. They are not
              interchangeable - they treat different problems with different
              mechanisms. Many patients need both, but understanding which does
              what is essential before choosing either.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(199,141,107,0.25)",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    margin: 0,
                  }}
                >
                  Dr. Mamta Bhura
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "#8C6F5E",
                    margin: 0,
                  }}
                >
                  MD Dermatology, IMS BHU · 26+ years clinical experience
                </p>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div
              className="answer-box"
              style={{
                background: "rgba(196,112,78,0.06)",
                borderLeft: "3px solid #C4704E",
                borderRadius: "0 10px 10px 0",
                padding: "1.1rem 1.4rem",
                marginBottom: "1.75rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C4704E",
                  margin: "0 0 0.45rem",
                }}
              >
                Quick Answer
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#3D2B1F",
                  margin: 0,
                }}
              >
                Botox (botulinum toxin) relaxes overactive muscles to soften dynamic expression lines — forehead wrinkles, frown lines, crow&apos;s feet. Dermal fillers restore lost volume to static areas — nasolabial folds, cheeks, lips, under-eyes. They treat fundamentally different problems. Using one where you need the other produces poor results. Many patients benefit from both, addressing different concerns at the same visit.
              </p>
            </div>
            <h2 style={styles.heading2}>What Botox Is and What It Does</h2>
            <p style={styles.para}>
              Botox is the commercial name for botulinum toxin type A, a protein
              that temporarily blocks the nerve signals that cause muscle
              contraction. When injected in small, precise doses into specific
              facial muscles, it reduces the repeated muscle movement
              responsible for expression lines - the frown lines between the
              eyebrows (glabellar lines), the horizontal forehead lines, and the
              crow&apos;s feet around the eyes.
            </p>
            <p style={styles.para}>
              These are called <em>dynamic</em> wrinkles - they are created by
              movement, not by loss of volume or skin thinning. Every time you
              frown, squint at a screen, or raise your eyebrows in surprise,
              those muscles contract and fold the overlying skin. Do this
              thousands of times over years and the skin eventually stays folded
              even at rest. Botox interrupts this cycle.
            </p>
            <p style={styles.para}>
              The effect begins 3 to 5 days after injection and is fully visible
              at 2 weeks. It lasts 3 to 6 months, after which the muscles
              gradually regain full activity and the lines slowly return.
              Regular treatment prevents lines from deepening progressively over
              time - this is why patients who maintain regular Botox from their
              mid-30s often look noticeably different at 50 than peers who did
              not.
            </p>

            <h2 style={styles.heading2}>
              What Dermal Fillers Are and What They Do
            </h2>
            <p style={styles.para}>
              Dermal fillers are injectable gels - most commonly hyaluronic acid
              (HA), a substance naturally present in skin and connective tissue
              - used to restore volume that the face has lost with age. From the
              mid-20s onwards, the face loses fat, bone mass, and collagen in
              predictable patterns. The cheeks flatten, the under-eye area
              hollows, the nasolabial folds (lines from nose to corner of mouth)
              deepen, and the jawline softens.
            </p>
            <p style={styles.para}>
              Fillers address this by replenishing lost volume in specific
              areas. When placed correctly, they restore the three-dimensional
              structure of the face, not just fill a line. Common filler areas:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Cheeks</strong> - restoring midface volume and lifting
                the lower face passively
              </li>
              <li style={styles.li}>
                <strong>Nasolabial folds</strong> - softening deep nose-to-mouth
                lines
              </li>
              <li style={styles.li}>
                <strong>Under-eye (tear trough)</strong> - addressing hollowing
                and dark circles caused by volume loss
              </li>
              <li style={styles.li}>
                <strong>Lips</strong> - enhancing definition, volume, or
                symmetry
              </li>
              <li style={styles.li}>
                <strong>Jawline and chin</strong> - improving facial structure
                and definition
              </li>
            </ul>
            <p style={styles.para}>
              Fillers address <em>static</em> lines and volume deficits -
              changes present even when the face is completely at rest,
              unrelated to muscle movement.
            </p>

            <h2 style={styles.heading2}>
              The Key Distinction: Dynamic vs Static Ageing
            </h2>
            <p style={styles.para}>
              The most useful way to understand whether you need Botox, fillers,
              or both is to identify whether the change you want to address is:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Dynamic</strong> (lines appear or worsen when you move
                your face): Botox is the primary tool
              </li>
              <li style={styles.li}>
                <strong>Static</strong> (loss of fullness, hollowing, deep
                creases at rest): Fillers are the primary tool
              </li>
              <li style={styles.li}>
                <strong>Both</strong>: A combination approach is appropriate
              </li>
            </ul>
            <p style={styles.para}>
              A common mistake - particularly in clinics that do not perform
              thorough assessments - is using fillers to fill dynamic lines.
              Injecting filler into an active forehead line or crow&apos;s foot
              does not address the muscle contraction causing it, and the filler
              will be rapidly broken down by the repeated movement. The correct
              treatment is Botox first, and if residual depth remains after the
              muscles are relaxed, the decision about filler can be made then.
            </p>

            <h2 style={styles.heading2}>How Botox and Fillers Work Together</h2>
            <p style={styles.para}>
              Most patients seeking anti-aging treatment in their 40s and beyond
              benefit from both Botox and fillers - but addressing different
              zones. A typical combination approach:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Botox for the upper face (forehead, glabellar, crow&apos;s feet)
              </li>
              <li style={styles.li}>
                Fillers for the mid-face (cheeks, tear trough) and lower face
                (nasolabial folds, lips, jawline)
              </li>
            </ul>
            <p style={styles.para}>
              HIFU skin tightening can be added to this combination when the
              primary concern is skin laxity - the structural looseness of the
              skin itself, which neither Botox nor fillers directly address.
              Each targets a different level of the ageing process: muscle
              activity, volume, and structural support respectively.
            </p>

            <h2 style={styles.heading2}>Safety on Indian Skin</h2>
            <p style={styles.para}>
              Both Botox and hyaluronic acid fillers are safe for Fitzpatrick
              Type III–V Indian skin. Botox acts on the muscle layer beneath the
              skin, with no surface skin contact. Hyaluronic acid is
              biocompatible and naturally present in the skin. The primary
              safety factor for both is technique - improper placement of filler
              can cause bruising, asymmetry, or in rare cases, vascular
              complications.
            </p>
            <p style={styles.para}>
              At SKIN@Mantraa, all injectable procedures are performed
              exclusively by Dr. Mamta Bhura (MD Dermatology, IMS BHU, 26+ years
              experience). We use only CE-marked and FDA-approved products from
              established manufacturers.
            </p>

            {/* FAQ */}
            <h2 style={styles.heading2}>Frequently Asked Questions</h2>

            {faqSchema.mainEntity.map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid rgba(199,141,107,0.2)",
                  padding: "0.1rem 0",
                }}
              >
                <summary
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    cursor: "pointer",
                    padding: "1.1rem 0",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {item.name}
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "1.2rem",
                      color: "#C4704E",
                      fontWeight: 300,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p style={{ ...styles.para, paddingBottom: "1rem" }}>
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}

            {/* CTA */}
            <div
              style={{
                background: "#3D2B1F",
                borderRadius: "12px",
                padding: "2.5rem",
                marginTop: "3rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#FDF6EC",
                  marginBottom: "0.75rem",
                }}
              >
                Book an Anti-Aging Consultation
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.97rem",
                  color: "rgba(253,246,236,0.75)",
                  marginBottom: "1.75rem",
                  lineHeight: 1.7,
                }}
              >
                Dr. Bhura will assess your face in detail, identify which
                concerns are dynamic vs static, and recommend the right
                combination - Botox, fillers, HIFU, or all three. Consultation:
                ₹600.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "0.8rem 2rem",
                    background: "#C4704E",
                    color: "#ffffff",
                    borderRadius: "6px",
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  Book Consultation
                </Link>
                <Link
                  href="/services/anti-aging"
                  style={{
                    display: "inline-block",
                    padding: "0.8rem 2rem",
                    background: "transparent",
                    color: "#C78D6B",
                    border: "1px solid rgba(199,141,107,0.4)",
                    borderRadius: "6px",
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  Anti-Aging Services
                </Link>
              </div>
            </div>

            {/* Footer meta */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(199,141,107,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  color: "#8C6F5E",
                  marginBottom: "0.75rem",
                }}
              >
                Written by <strong>Dr. Mamta Bhura</strong>, MD Dermatology (IMS
                BHU), Member - IMA, IADVL, CDSI. 26+ years clinical practice in
                Kanpur.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  "botox Kanpur",
                  "dermal fillers Kanpur",
                  "anti-aging treatment",
                  "botox vs fillers",
                  "wrinkle treatment",
                  "dermatologist Kanpur",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.2rem 0.75rem",
                      background: "rgba(199,141,107,0.1)",
                      color: "#7a3b1e",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-accent)",
                      borderRadius: "999px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <Link
                  href="/skin-guide"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "#C4704E",
                    textDecoration: "none",
                  }}
                >
                  ← Back to Skin Guide
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}

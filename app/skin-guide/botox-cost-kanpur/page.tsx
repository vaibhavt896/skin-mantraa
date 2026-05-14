import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title: "Botox Cost in Kanpur (2026) - Honest Pricing Guide | SKIN@Mantraa",
  description:
    "How much does Botox cost in Kanpur? Dr. Mamta Bhura explains unit-based pricing, treatment areas, what affects cost, and why medical supervision matters. SKIN@Mantraa.",
  alternates: {
    canonical: "https://skinmantraa.in/skin-guide/botox-cost-kanpur",
  },
  openGraph: {
    title: "Botox Cost in Kanpur (2026) - Honest Pricing Guide | SKIN@Mantraa",
    description:
      "Botox pricing in Kanpur: forehead, frown lines, crow's feet, lip flip, jawline slimming. Dr. Mamta Bhura explains unit-based pricing and what you should know before booking.",
    url: "https://skinmantraa.in/skin-guide/botox-cost-kanpur",
    type: "article",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Botox Cost Kanpur",
      },
    ],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Botox Cost in Kanpur (2026) - An Honest Pricing Guide by a Dermatologist",
  description:
    "Unit-based Botox pricing guide for Kanpur by Dr. Mamta Bhura. Covers area-wise units, total cost range, and what to look for when choosing a provider.",
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
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  mainEntityOfPage: "https://skinmantraa.in/skin-guide/botox-cost-kanpur",
  keywords:
    "botox cost Kanpur, botox price Kanpur, botox Kanpur 2026, how much does botox cost in Kanpur, botox dermatologist Kanpur",
  about: [
    {
      "@type": "MedicalProcedure",
      name: "Botox",
      alternateName: "Botulinum Toxin Injection",
      description:
        "A neuromodulator injected to relax overactive facial muscles. Priced per unit, with different areas requiring different unit counts depending on muscle strength.",
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
      name: "How much does Botox cost in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Botox in Kanpur is priced per unit of toxin used. The number of units required depends on the treatment area and the strength of the muscles being treated. Common areas: forehead (10–20 units), frown lines between brows (15–25 units), crow's feet (10–15 units per side). Total cost per session depends on the areas treated and units used. Book a consultation (₹600) at SKIN@Mantraa for a personalised assessment and pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Botox last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Botox typically lasts 3 to 6 months. Results become visible within 7 to 14 days after the injection. With regular treatment, many patients find results last progressively longer as the treated muscles become less hyperactive over time. The forehead and frown line areas tend to last longer than crow's feet.",
      },
    },
    {
      "@type": "Question",
      name: "Is Botox safe? Who should administer it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Botox is a prescription medicine and should only be administered by a qualified doctor - a dermatologist or plastic surgeon - not by non-medical aestheticians. The most common complications (asymmetry, ptosis, unnatural results) come from incorrect placement or over-treatment. Dr. Mamta Bhura uses micro-dosing technique at SKIN@Mantraa, preserving natural facial movement while softening expression lines. All injectable treatments at SKIN@Mantraa are performed by Dr. Bhura personally.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Botox and fillers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Botox relaxes muscles that cause dynamic expression lines - forehead lines, frown lines, crow's feet. Fillers restore lost volume - they treat hollowing under the eyes, flat cheeks, thinning lips, and deepened nasolabial folds. Botox works on movement; fillers work on structure. They are often used together for comprehensive facial rejuvenation, but they treat fundamentally different problems.",
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

export default function BotoxCostKanpurPage() {
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
                Pricing Guide
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "#8C6F5E",
                }}
              >
                May 2026 · 5 min read
              </span>
            </div>

            <h1 style={styles.heading1}>
              Botox Cost in Kanpur
              <br />
              <span style={{ color: "#C4704E" }}>
                What You Actually Pay - and Why
              </span>
            </h1>

            <p
              style={{ ...styles.para, fontSize: "1.15rem", color: "#5C4033" }}
            >
              Botox pricing in Kanpur is not a flat fee - it is priced per unit
              of toxin used, and the number of units depends on the area being
              treated and the individual patient. Understanding this structure
              helps you compare options accurately.
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
                Botox cost in Kanpur is priced per unit of toxin used. Common areas: forehead (10–20 units), frown lines between brows (15–25 units), crow&apos;s feet (10–15 units per side). Total cost depends on areas treated and individual muscle strength. At SKIN@Mantraa, Botox is administered by Dr. Mamta Bhura personally. A ₹600 consultation assesses your face and provides exact pricing before any commitment.
              </p>
            </div>
            <h2 style={styles.heading2}>How Botox Pricing Works</h2>
            <p style={styles.para}>
              Botox is sold in vials and used in units. The per-unit cost varies
              by brand (Botox, Dysport, Xeomin) and clinic. What matters to you
              as a patient is how many units your specific treatment requires -
              which determines the total session cost.
            </p>
            <p style={styles.para}>
              This is why a flat "Botox for forehead: ₹X" quote is often
              misleading. Some patients with strong forehead muscles need more
              units than others. A competent dermatologist assesses your muscle
              strength and movement before deciding on units - not after.
            </p>

            <h2 style={styles.heading2}>How Many Units Does Each Area Need?</h2>
            <p style={styles.para}>
              These are typical ranges. Individual anatomy varies and Dr. Bhura
              assesses each patient before determining the precise amount:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Forehead lines:</strong> 10–20 units
              </li>
              <li style={styles.li}>
                <strong>Glabella (frown lines / "11s"):</strong> 15–25 units
              </li>
              <li style={styles.li}>
                <strong>Crow's feet (both sides):</strong> 10–15 units per side
              </li>
              <li style={styles.li}>
                <strong>Brow lift:</strong> 2–5 units per side
              </li>
              <li style={styles.li}>
                <strong>Lip flip (upper lip):</strong> 4–6 units
              </li>
              <li style={styles.li}>
                <strong>Bunny lines (nose):</strong> 5–10 units
              </li>
              <li style={styles.li}>
                <strong>Jaw slimming / bruxism (masseter):</strong> 20–40 units
                per side
              </li>
              <li style={styles.li}>
                <strong>Neck bands (platysmal bands):</strong> 25–50 units
              </li>
              <li style={styles.li}>
                <strong>Hyperhidrosis (underarm sweating):</strong> 50–100 units
                total
              </li>
            </ul>
            <p style={styles.para}>
              A full upper face treatment (forehead + glabella + crow's feet)
              typically requires 50 to 70 units total. Preventive Botox for
              younger patients with early lines typically requires fewer units.
            </p>

            <h2 style={styles.heading2}>
              The Most Important Question Is Not the Price
            </h2>
            <p style={styles.para}>
              Botox is a prescription medicine. It should only be injected by a
              qualified medical doctor - a dermatologist or plastic surgeon -
              not by beauty therapists, nurses, or untrained aestheticians. The
              most common complications are not caused by the product itself;
              they are caused by incorrect placement and dosing.
            </p>
            <p style={styles.para}>
              Over-treated Botox produces the &ldquo;frozen&rdquo; look that
              makes patients look operated-upon rather than rested. Under-dosed
              Botox produces results that last 4 to 6 weeks before wearing off
              unevenly. Incorrectly placed Botox near the brow can cause ptosis
              (drooping eyelid) - a complication that takes 3 months to resolve
              on its own.
            </p>
            <p style={styles.para}>
              At SKIN@Mantraa, all injectable treatments are performed
              personally by Dr. Mamta Bhura. The approach is conservative
              micro-dosing: softening expression lines while preserving natural
              facial movement. The goal is that you look rested, not treated.
            </p>

            <h2 style={styles.heading2}>How Long Do Results Last?</h2>
            <p style={styles.para}>
              Botox results become visible within 7 to 14 days after the
              injection and last 3 to 6 months. With regular treatment (every 3
              to 4 months), many patients find that results last progressively
              longer as treated muscles become less hyperactive over time. Some
              patients who have been treating consistently for 2 or more years
              only need 2 sessions per year.
            </p>

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
                Book a Botox Consultation in Kanpur
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
                Dr. Bhura will assess your facial anatomy, discuss your goals
                honestly, and provide accurate unit-based pricing before any
                treatment begins. Consultation: ₹600.
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
                  href="/skin-guide/botox-vs-dermal-fillers-kanpur"
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
                  Botox vs Fillers →
                </Link>
              </div>
            </div>

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
                  "botox cost Kanpur",
                  "botox price Kanpur 2026",
                  "anti-aging Kanpur",
                  "dermatologist Kanpur botox",
                  "botox treatment Kanpur",
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

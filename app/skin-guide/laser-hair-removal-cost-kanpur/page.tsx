import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title:
    "Laser Hair Removal Cost in Kanpur (2026) - Area-wise Pricing Guide | SKIN@Mantraa",
  description:
    "What does laser hair removal cost in Kanpur? Dr. Mamta Bhura explains pricing by area, factors that affect cost, and what's included. Honest guide from SKIN@Mantraa.",
  alternates: {
    canonical:
      "https://skinmantraa.in/skin-guide/laser-hair-removal-cost-kanpur",
  },
  openGraph: {
    title: "Laser Hair Removal Cost in Kanpur (2026) - Area-wise Pricing Guide",
    description:
      "Laser hair removal pricing in Kanpur by area - underarms, full legs, face, bikini line. What's included per session and what to watch out for.",
    url: "https://skinmantraa.in/skin-guide/laser-hair-removal-cost-kanpur",
    type: "article",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Laser Hair Removal Cost Kanpur",
      },
    ],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Laser Hair Removal Cost in Kanpur (2026) - Area-wise Pricing Guide",
  description:
    "Honest guide to laser hair removal pricing in Kanpur by Dr. Mamta Bhura. Area-wise session costs, package factors, and what to look for when comparing clinics.",
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
  mainEntityOfPage:
    "https://skinmantraa.in/skin-guide/laser-hair-removal-cost-kanpur",
  keywords:
    "laser hair removal cost Kanpur, laser hair removal price Kanpur, laser hair removal Kanpur 2026, how much does laser hair removal cost in Kanpur",
  about: [
    {
      "@type": "MedicalProcedure",
      name: "Laser Hair Removal",
      description:
        "Cosmetic procedure using targeted light energy to permanently reduce unwanted hair. Cost depends on treatment area, skin type, and number of sessions required.",
      url: "https://skinmantraa.in/services/laser-treatments",
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
      name: "How much does laser hair removal cost in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Laser hair removal cost in Kanpur varies by treatment area and number of sessions. At SKIN@Mantraa, pricing is structured per session by area - underarms, face, full legs, bikini line, and back are the most common. Multi-session packages are available at a reduced per-session cost. Book a consultation (₹600) for a personalised assessment and current pricing for your specific areas.",
      },
    },
    {
      "@type": "Question",
      name: "Is cheaper laser hair removal in Kanpur safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. The risk with laser hair removal - particularly on Indian (Fitzpatrick III–V) skin - is that the wrong laser wavelength or poorly calibrated settings cause burns and post-inflammatory hyperpigmentation. Very low-cost sessions often use IPL devices (not true lasers) or alexandrite lasers unsuitable for dark skin. At SKIN@Mantraa, we use Nd:YAG and diode laser systems with settings calibrated per patient by Dr. Bhura. Price should not be the only criterion - the laser type, doctor supervision, and skin type experience matter far more.",
      },
    },
    {
      "@type": "Question",
      name: "How many sessions does laser hair removal take and what is the total cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients require 6 to 8 sessions spaced 4 to 6 weeks apart for 80 to 90% permanent hair reduction. The total cost is the per-session price multiplied by the number of sessions needed. Multi-session packages (typically 6 sessions) are available at SKIN@Mantraa and offer better value than paying per session. Book a consultation to discuss your areas and get an accurate package cost.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the consultation fee at SKIN@Mantraa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ₹600 consultation fee at SKIN@Mantraa covers a full assessment of your skin type (Fitzpatrick classification), hair characteristics, treatment areas, and any contraindications. Dr. Bhura will explain which laser system is appropriate for your skin tone, how many sessions are likely needed, and provide accurate pricing for your personalised treatment plan. This fee is waived toward your first treatment session.",
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

export default function LaserCostKanpurPage() {
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
                May 2026 · 6 min read
              </span>
            </div>

            <h1 style={styles.heading1}>
              Laser Hair Removal Cost in Kanpur
              <br />
              <span style={{ color: "#C4704E" }}>
                An Honest 2026 Pricing Guide
              </span>
            </h1>

            <p
              style={{ ...styles.para, fontSize: "1.15rem", color: "#5C4033" }}
            >
              Laser hair removal pricing in Kanpur varies widely - from very
              low-cost packages at parlours to clinical pricing at dermatology
              practices. Understanding what you are paying for (and what you are
              not getting) is as important as the number itself.
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
                Laser hair removal cost in Kanpur varies by treatment area (underarms, full legs, face, bikini line), the laser used, and the number of sessions required. Most patients need 6–8 sessions. At SKIN@Mantraa, pricing is per session with package options available. A ₹600 consultation determines the right laser for your skin type and provides precise pricing — Nd:YAG 1064nm for Indian skin tones.
              </p>
            </div>
            <h2 style={styles.heading2}>
              What Determines Laser Hair Removal Cost
            </h2>
            <p style={styles.para}>
              Three factors determine the final cost of any laser hair removal
              course: the treatment area (size determines session duration), the
              number of sessions required (typically 6 to 8 for Indian skin),
              and the type of equipment and clinical supervision provided.
            </p>
            <p style={styles.para}>
              Sessions are priced individually or as part of a multi-session
              package. Package pricing - usually covering 6 sessions - offers
              better per-session value and is what most patients opt for once
              their initial consultation confirms suitability.
            </p>

            <h2 style={styles.heading2}>
              Treatment Areas and Typical Session Duration
            </h2>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Upper lip / chin:</strong> 5–10 minutes per session
              </li>
              <li style={styles.li}>
                <strong>Sideburns / jawline:</strong> 10–15 minutes per session
              </li>
              <li style={styles.li}>
                <strong>Underarms:</strong> 10–15 minutes per session
              </li>
              <li style={styles.li}>
                <strong>Full arms (upper + lower):</strong> 30–40 minutes per
                session
              </li>
              <li style={styles.li}>
                <strong>Lower legs:</strong> 30–40 minutes per session
              </li>
              <li style={styles.li}>
                <strong>Full legs:</strong> 45–60 minutes per session
              </li>
              <li style={styles.li}>
                <strong>Bikini line:</strong> 15–20 minutes per session
              </li>
              <li style={styles.li}>
                <strong>Full Brazilian:</strong> 20–30 minutes per session
              </li>
              <li style={styles.li}>
                <strong>Back (full):</strong> 40–50 minutes per session
              </li>
              <li style={styles.li}>
                <strong>Abdomen / chest:</strong> 20–30 minutes per session
              </li>
            </ul>
            <p style={styles.para}>
              At SKIN@Mantraa, you can combine multiple areas in one session.
              Combination pricing is available - for example, underarms + full
              arms, or full legs + bikini line - which is often more economical
              than treating each area separately.
            </p>

            <h2 style={styles.heading2}>
              Why Price Alone Is Not the Right Criterion
            </h2>
            <p style={styles.para}>
              This is the most important point in this guide. Laser hair removal
              on Indian skin (Fitzpatrick Type III–V) requires the{" "}
              <em>correct laser wavelength</em>. The Nd:YAG 1064nm and diode
              810nm lasers are the appropriate choices for dark skin. The 755nm
              alexandrite laser - widely used for fair skin - has higher melanin
              absorption and causes a significantly elevated risk of burns and
              post-inflammatory hyperpigmentation on darker Indian skin.
            </p>
            <p style={styles.para}>
              Many low-cost clinics and parlours in Kanpur use IPL (intense
              pulsed light) devices, which are not true lasers. IPL is broadly
              effective only for very fair skin and carries high risk of
              pigmentation complications on Indian skin. The correct laser,
              proper settings per session, and clinical assessment before each
              session matter far more than price.
            </p>

            <h2 style={styles.heading2}>What to Ask Before Booking Anywhere</h2>
            <ul style={styles.ul}>
              <li style={styles.li}>
                What laser machine are you using, and what wavelength?
              </li>
              <li style={styles.li}>
                Is a doctor involved in treatment planning and supervision?
              </li>
              <li style={styles.li}>
                Is my Fitzpatrick skin type assessed before each session?
              </li>
              <li style={styles.li}>
                Are settings calibrated per patient or fixed clinic-wide?
              </li>
              <li style={styles.li}>
                What aftercare protocol is provided after each session?
              </li>
            </ul>
            <p style={styles.para}>
              At SKIN@Mantraa, every patient receives a consultation with Dr.
              Mamta Bhura before starting treatment. Fitzpatrick type is
              assessed, a test patch is done, and laser settings (fluence, pulse
              duration, spot size) are documented and adjusted at each session.
              This is standard clinical practice - not an add-on.
            </p>

            <h2 style={styles.heading2}>How Many Sessions Will You Need?</h2>
            <p style={styles.para}>
              Most patients with Indian skin need 6 to 8 sessions for 80–90%
              permanent hair reduction. Sessions are spaced 4 to 6 weeks apart
              for body areas and 3 to 4 weeks apart for facial areas, following
              the natural hair growth cycle.
            </p>
            <p style={styles.para}>
              Patients with hormonal conditions (PCOS, thyroid disorders) or
              actively changing hormone levels (post-partum, during certain
              medications) may need an additional 1–2 sessions. This is
              discussed at your initial consultation.
            </p>

            <h2 style={styles.heading2}>
              Book a Consultation - Get Accurate Pricing for Your Plan
            </h2>
            <p style={styles.para}>
              The most accurate way to get pricing for your specific treatment
              areas is a consultation with Dr. Bhura. The ₹600 consultation fee
              covers a full Fitzpatrick assessment, test patch, review of any
              contraindications, and a personalised session plan with package
              pricing for your areas.
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
                Book a Laser Consultation in Kanpur
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
                Get accurate pricing for your specific areas and a personalised
                treatment plan from Dr. Bhura. Consultation: ₹600.
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
                  href="/skin-guide/laser-hair-removal-kanpur"
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
                  Laser Guide →
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
                  "laser hair removal cost Kanpur",
                  "laser hair removal price Kanpur",
                  "laser hair removal Kanpur 2026",
                  "dermatologist Kanpur laser",
                  "best laser clinic Kanpur",
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

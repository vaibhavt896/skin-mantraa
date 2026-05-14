import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title:
    "Laser Hair Removal in Kanpur - How Many Sessions, What to Expect | SKIN@Mantraa",
  description:
    "How many sessions does laser hair removal take? What is the best laser for Indian skin? Dr. Mamta Bhura explains the full clinical picture - sessions, intervals, results, and why the laser type matters for dark skin.",
  alternates: {
    canonical: "https://skinmantraa.in/skin-guide/laser-hair-removal-kanpur",
  },
  openGraph: {
    title: "Laser Hair Removal in Kanpur - How Many Sessions, What to Expect",
    description:
      "How many sessions does laser hair removal take? What is the best laser for Indian skin? Dr. Mamta Bhura explains the full clinical picture - sessions, intervals, results, and why the laser type matters for dark skin.",
    url: "https://skinmantraa.in/skin-guide/laser-hair-removal-kanpur",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Laser Hair Removal in Kanpur - How Many Sessions, What to Expect, Best Laser for Indian Skin",
  description:
    "Clinical guide to laser hair removal for Indian skin by Dr. Mamta Bhura, SKIN@Mantraa Kanpur. Covers session count, intervals, laser types suitable for dark skin, and realistic results.",
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
    "https://skinmantraa.in/skin-guide/laser-hair-removal-kanpur",
  keywords:
    "laser hair removal Kanpur, how many sessions laser hair removal, best laser for Indian skin, diode laser Kanpur, laser hair removal dark skin, dermatologist Kanpur laser",
  about: [
    {
      "@type": "MedicalProcedure",
      name: "Laser Hair Removal",
      description:
        "A cosmetic procedure using targeted light energy to destroy hair follicles, producing long-term hair reduction. Nd:YAG 1064nm and diode lasers are safest for Indian skin (Fitzpatrick III–V).",
      url: "https://skinmantraa.in/services/laser-treatments",
      procedureType: "https://health-lifesci.schema.org/NoninvasiveProcedure",
      bodyLocation: "Full body, underarms, face, legs, bikini",
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
      name: "How many sessions does laser hair removal take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients require 6 to 8 sessions for significant and lasting hair reduction. Sessions are spaced 4 to 6 weeks apart for the body and 3 to 4 weeks apart for the face, following the natural hair growth cycle. After 6 sessions, most patients see 80 to 90% permanent hair reduction. Occasional maintenance sessions - once or twice a year - may be needed for the small percentage of fine or dormant follicles that activate over time.",
      },
    },
    {
      "@type": "Question",
      name: "Which is the best laser for Indian skin for hair removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Indian skin (Fitzpatrick Type III-V), the Nd:YAG 1064nm laser and diode 810nm laser are the most appropriate and safest options. The 755nm alexandrite laser, commonly used for fair skin, carries higher risk of burns and post-inflammatory hyperpigmentation in darker skin tones due to its absorption by melanin in the surrounding skin. At SKIN@Mantraa, we use Nd:YAG and diode lasers with settings calibrated specifically for Indian skin tones.",
      },
    },
    {
      "@type": "Question",
      name: "Is laser hair removal safe for dark Indian skin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - when the correct laser is used with appropriate settings. The risk with laser hair removal on dark skin is that the laser energy intended for the hair follicle is partially absorbed by the melanin in the surrounding skin, causing burns or pigmentation changes. This risk is effectively managed by using longer wavelengths (Nd:YAG 1064nm), longer pulse durations, and conservative fluence levels, along with skin cooling during treatment. At SKIN@Mantraa, Dr. Mamta Bhura customises every laser protocol to the patient's Fitzpatrick type.",
      },
    },
    {
      "@type": "Question",
      name: "What areas can be treated with laser hair removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common treatment areas include the upper lip, chin, sideburns, underarms, arms (upper and lower), legs (full, lower, or upper), bikini line, full Brazilian, back, chest, abdomen, and neck. Almost any area of the body with unwanted hair can be treated. The session duration depends on the area size - underarms take 5 to 10 minutes; full legs take 45 to 60 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do before and after a laser hair removal session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before: shave the area 24 hours before treatment (do not wax or thread for 4 weeks before - the hair root must be present). Avoid sun exposure for 2 weeks before. Remove all makeup, creams, or deodorant from the treatment area. After: apply the prescribed soothing cream or aloe vera gel. Avoid direct sun for 2 weeks and use SPF 50 sunscreen on treated areas. Avoid hot baths, saunas, and vigorous exercise for 24 to 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How much does laser hair removal cost in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Laser hair removal cost at SKIN@Mantraa is priced per session by treatment area. Packages covering multiple sessions are available. Pricing varies by area size and the number of sessions in the package. Book a consultation (₹600) for a personalised assessment and current pricing.",
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

export default function LaserHairRemovalPage() {
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
                May 12, 2026 · 8 min read
              </span>
            </div>

            <h1 style={styles.heading1}>
              Laser Hair Removal in Kanpur
              <br />
              <span style={{ color: "#C4704E" }}>
                How Many Sessions, What to Expect, Best Laser for Indian Skin
              </span>
            </h1>

            <p
              style={{ ...styles.para, fontSize: "1.15rem", color: "#5C4033" }}
            >
              Most patients need 6 to 8 sessions of laser hair removal for
              significant and lasting hair reduction. The number, the spacing,
              and the laser type all depend on your hair growth cycle and -
              critically - your skin tone. For Indian skin, using the wrong
              laser is the most common cause of burns and pigmentation problems.
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
                Laser hair removal uses targeted light energy to destroy hair follicles, producing long-term hair reduction. Most patients need 6–8 sessions spaced 4–6 weeks apart. For Indian skin (Fitzpatrick III–V), Nd:YAG 1064nm and diode lasers are the safest choices — IPL and alexandrite lasers carry a real risk of burns and pigmentation on darker tones. Realistic outcome: 70–90% permanent reduction across all treated areas.
              </p>
            </div>
            <h2 style={styles.heading2}>Why Multiple Sessions Are Required</h2>
            <p style={styles.para}>
              Laser hair removal works by targeting the pigment (melanin) in the
              hair root. The laser energy heats the follicle, damages the cells
              responsible for hair production, and prevents regrowth. However,
              this only works on follicles that are actively in the growth phase
              (anagen) at the time of treatment.
            </p>
            <p style={styles.para}>
              At any given time, human hair follicles are in one of three
              phases: anagen (active growth), catagen (transition), or telogen
              (resting). Only anagen follicles have sufficient melanin
              concentration in the bulb to absorb enough laser energy to be
              destroyed. Depending on the body area, only 20 to 40% of follicles
              are in anagen at any one time.
            </p>
            <p style={styles.para}>
              This is why sessions are spaced 4 to 6 weeks apart - to catch
              follicles as they cycle into the anagen phase - and why multiple
              sessions are required. With each session, a new cohort of
              follicles is targeted. After 6 to 8 sessions, the cumulative
              effect is 80 to 90% permanent hair reduction across all follicles
              in the treatment area.
            </p>

            <h2 style={styles.heading2}>
              The Laser Question - Which Type Is Right for Indian Skin?
            </h2>
            <p style={styles.para}>
              This is the most clinically important question, and the one most
              frequently glossed over by clinics offering low-cost laser
              packages.
            </p>
            <p style={styles.para}>
              Laser wavelength determines which target in the skin absorbs the
              energy. For hair removal, the target is melanin in the hair
              follicle. The challenge with Indian skin (Fitzpatrick Type III–V)
              is that the melanin in the surrounding skin also absorbs laser
              energy - and if the wavelength is poorly chosen, the surrounding
              skin heats up along with the follicle, causing burns and
              post-inflammatory hyperpigmentation.
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Nd:YAG 1064nm</strong> - the gold standard for dark
                skin. This wavelength has lower melanin absorption, allowing
                energy to pass through the skin to the follicle with less
                heating of the surrounding tissue. Safe for Fitzpatrick Type
                IV–VI.
              </li>
              <li style={styles.li}>
                <strong>Diode 810nm</strong> - effective for Fitzpatrick Type
                III–IV with appropriate settings. Good melanin-to-follicle
                selectivity when used correctly on medium-dark Indian skin.
              </li>
              <li style={styles.li}>
                <strong>Alexandrite 755nm</strong> - primarily for fair skin
                (Fitzpatrick Type I–III). High melanin absorption makes it risky
                on darker Indian skin tones - higher risk of burns, blistering,
                and hyperpigmentation.
              </li>
              <li style={styles.li}>
                <strong>IPL (Intense Pulsed Light)</strong> - a broad-spectrum
                light source, not a true laser. Effective for very fair skin
                only. Not recommended for medium-to-dark Indian skin for hair
                removal.
              </li>
            </ul>
            <p style={styles.para}>
              At SKIN@Mantraa, we use Nd:YAG and diode laser systems. Before
              every session, Dr. Mamta Bhura assesses your Fitzpatrick type and
              adjusts the fluence, pulse duration, and spot size accordingly.
              These are not fixed clinic-wide settings - they are calibrated per
              patient, per session.
            </p>

            <h2 style={styles.heading2}>What Happens in a Session</h2>
            <p style={styles.para}>
              The treatment area is shaved 24 hours before your appointment (not
              waxed - the hair root must be present). A cooling gel is applied.
              The handpiece is placed against the skin and delivers precisely
              timed laser pulses. A built-in cooling mechanism reduces surface
              discomfort during treatment.
            </p>
            <p style={styles.para}>
              During the session, most patients describe a mild snapping or
              warming sensation. The face is more sensitive than the body; an
              optional topical anaesthetic is available for facial treatments.
              Post-session, the treated area may appear mildly pink for 1 to 2
              hours. You can return to work and daily activities immediately.
            </p>
            <p style={styles.para}>
              Over the 2 to 3 weeks following a session, treated hairs gradually
              shed - they do not fall out immediately. This is a normal part of
              the process. The skin in the treated area will remain hairless for
              progressively longer durations with each successive session.
            </p>

            <h2 style={styles.heading2}>Realistic Results - What to Expect</h2>
            <p style={styles.para}>After completing 6 to 8 sessions:</p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                80 to 90% of hair in the treated area will be permanently
                reduced
              </li>
              <li style={styles.li}>
                Remaining hair, if any, will be significantly finer and lighter
                than before
              </li>
              <li style={styles.li}>
                Most patients require no maintenance for 1 to 2 years after
                completing their course
              </li>
              <li style={styles.li}>
                Hormonal changes (pregnancy, PCOS, thyroid) can activate dormant
                follicles - 1 to 2 maintenance sessions per year may be needed
                in these cases
              </li>
            </ul>
            <p style={styles.para}>
              Laser hair removal does not guarantee 100% permanent hair removal
              for every follicle - no treatment does. What it reliably delivers
              is a major, lasting reduction in hair density and thickness,
              eliminating the need for regular waxing, threading, or shaving in
              the treated area.
            </p>

            <h2 style={styles.heading2}>
              Special Considerations for Laser in Kanpur&apos;s Climate
            </h2>
            <p style={styles.para}>
              In Kanpur&apos;s climate - with intense summer UV and temperature
              extremes - photoprotection around laser sessions is
              non-negotiable. Tanned or sun-exposed skin carries more surface
              melanin, which increases the risk of surface heating during laser
              treatment. We ask patients to:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Avoid direct sun exposure for 2 weeks before each session
              </li>
              <li style={styles.li}>
                Apply SPF 50+ PA+++ sunscreen daily on the treatment area in the
                2 weeks before and 2 weeks after each session
              </li>
              <li style={styles.li}>
                Schedule sessions during lower-UV months (September to March) if
                possible for best results and lowest risk
              </li>
            </ul>

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
                Book a Laser Hair Removal Assessment
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
                Dr. Bhura will assess your skin tone, hair type, and treatment
                area to design the safest and most effective laser protocol for
                your skin. Consultation: ₹600.
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
                  href="/services/laser-treatments"
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
                  Laser Treatments
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
                  "laser hair removal Kanpur",
                  "Nd:YAG laser",
                  "diode laser",
                  "Indian skin laser",
                  "best dermatologist Kanpur laser",
                  "laser treatment Kanpur",
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

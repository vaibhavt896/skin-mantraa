import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title: "Is PRP Effective for Hair Loss? A Clinical Guide for Indian Patients — SKIN@Mantraa",
  description:
    "PRP therapy for hair loss: how it works, who benefits, how many sessions are needed, and realistic results for Indian hair types. Clinical guide by Dr. Mamta Bhura, Kanpur.",
  alternates: {
    canonical: "https://skinmantraa.in/skin-guide/prp-hair-loss-treatment-kanpur",
  },
  openGraph: {
    title: "Is PRP Effective for Hair Loss? A Clinical Guide for Indian Patients",
    description:
      "PRP therapy for hair loss: how it works, who benefits, how many sessions are needed, and realistic results for Indian hair types. Clinical guide by Dr. Mamta Bhura, Kanpur.",
    url: "https://skinmantraa.in/skin-guide/prp-hair-loss-treatment-kanpur",
    type: "article",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Is PRP Effective for Hair Loss? A Clinical Guide for Indian Patients",
  description:
    "Clinical guide to PRP therapy for hair loss by Dr. Mamta Bhura, SKIN@Mantraa Kanpur. Who it works for, how many sessions, and realistic results for Indian hair types.",
  image: "https://skinmantraa.in/og-image.svg",
  author: {
    "@type": "Physician",
    name: "Dr. Mamta Bhura",
    url: "https://skinmantraa.in/about",
  },
  publisher: {
    "@type": "Organization",
    name: "SKIN@Mantraa",
    url: "https://skinmantraa.in",
  },
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  mainEntityOfPage: "https://skinmantraa.in/skin-guide/prp-hair-loss-treatment-kanpur",
  keywords:
    "PRP treatment Kanpur, PRP for hair loss India, platelet rich plasma hair, hair loss treatment Kanpur, GFC hair treatment, androgenetic alopecia treatment India",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is PRP effective for hair loss in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — PRP (Platelet Rich Plasma) is an evidence-supported treatment for androgenetic alopecia (pattern hair loss) and is well-suited to Indian hair types. Clinical studies show PRP significantly increases hair density and thickness when the follicle is still alive and miniaturising, rather than absent. It works best in early-to-mid stages of hair loss, not in areas of complete baldness.",
      },
    },
    {
      "@type": "Question",
      name: "How many PRP sessions are needed for hair loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard protocol at SKIN@Mantraa is 4 sessions, spaced 3 to 4 weeks apart, followed by maintenance sessions every 4 to 6 months. Most patients notice reduced shedding after sessions 2 to 3, and visible density improvement by the 3 to 4 month mark after completing the initial course.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between PRP and GFC for hair loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PRP (Platelet Rich Plasma) concentrates platelets from your own blood using centrifugation. GFC (Growth Factor Concentrate) is a more advanced preparation that further concentrates growth factors from those platelets, producing a higher concentration of the specific proteins that stimulate follicle activity. At SKIN@Mantraa, we offer both and recommend the appropriate protocol based on your degree of hair loss and response to initial treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Does PRP work for female pattern hair loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Female pattern hair loss (FPHL) — which typically presents as diffuse thinning over the crown and mid-scalp rather than a receding hairline — responds well to PRP. In women, PRP is often combined with topical minoxidil or nutritional supplementation depending on the underlying cause of the hair loss (hormonal, nutritional deficiency, or post-partum).",
      },
    },
    {
      "@type": "Question",
      name: "Is PRP hair treatment painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The injections cause mild discomfort. We apply a topical anaesthetic cream for 30 to 45 minutes before the procedure, which makes the session well-tolerated by most patients. There is no downtime — you can return to work the same day. Some patients experience mild scalp tenderness or redness for 24 to 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How much does PRP hair treatment cost in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PRP and GFC hair treatment costs at SKIN@Mantraa depend on the treatment area and the preparation type used. Book a consultation (₹600) and we will assess your hair loss pattern, recommend the appropriate protocol, and give you complete pricing at that visit.",
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

export default function PrpHairLossPage() {
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
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              <span
                style={{
                  padding: "0.2rem 0.85rem",
                  background: "rgba(92,64,51,0.1)",
                  color: "#3D2B1F",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-accent)",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                }}
              >
                Hair Care
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#8C6F5E" }}>
                May 12, 2026 · 8 min read
              </span>
            </div>

            <h1 style={styles.heading1}>
              Is PRP Effective for Hair Loss?<br />
              <span style={{ color: "#C4704E" }}>A Clinical Guide for Indian Patients</span>
            </h1>

            <p style={{ ...styles.para, fontSize: "1.15rem", color: "#5C4033" }}>
              PRP (Platelet Rich Plasma) therapy is an evidence-supported treatment for androgenetic alopecia — pattern hair loss — in both men and women. It is effective when the hair follicle is still alive and miniaturising. It does not work on follicles that are completely dormant or absent. This distinction matters before you book a session anywhere.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "1rem", borderTop: "1px solid rgba(199,141,107,0.25)" }}>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", fontWeight: 600, color: "#3D2B1F", margin: 0 }}>Dr. Mamta Bhura</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#8C6F5E", margin: 0 }}>MD Dermatology, IMS BHU · 26+ years clinical experience</p>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="max-w-3xl mx-auto px-6 lg:px-8">

            <h2 style={styles.heading2}>What PRP Actually Is</h2>
            <p style={styles.para}>
              PRP stands for Platelet Rich Plasma. It is prepared from your own blood. A small sample is drawn, placed in a centrifuge, and spun to separate the blood components. The resulting plasma layer is rich in platelets — the same cells responsible for wound healing and tissue repair. When injected into the scalp at the level of the hair follicle, the growth factors released by platelets stimulate follicular activity: they encourage dormant follicles to re-enter the growth (anagen) phase and strengthen miniaturising follicles that are progressively thinning.
            </p>
            <p style={styles.para}>
              This is not a "boost" treatment in the general wellness sense. PRP contains specific proteins — PDGF (platelet-derived growth factor), VEGF (vascular endothelial growth factor), EGF (epidermal growth factor), and IGF (insulin-like growth factor) — that act on follicular cells directly. The evidence base for PRP in androgenetic alopecia is solid: multiple randomised controlled trials show meaningful improvements in hair count, hair shaft thickness, and scalp coverage compared to placebo.
            </p>

            <h2 style={styles.heading2}>Who PRP Works For</h2>
            <p style={styles.para}>
              PRP produces the best results in patients with early-to-moderate hair loss. The key clinical marker is whether follicles are still present and miniaturising versus completely absent. In areas of complete baldness — where the scalp appears smooth and no fine hair is visible even under dermatoscopy — PRP will not produce regrowth because there are no follicles left to stimulate.
            </p>
            <p style={styles.para}>Patients who typically respond well:</p>
            <ul style={styles.ul}>
              <li style={styles.li}>Men with Hamilton-Norwood Grade I–IV pattern baldness (early-to-mid thinning)</li>
              <li style={styles.li}>Women with Ludwig Grade I–II diffuse thinning across the crown</li>
              <li style={styles.li}>Post-partum hair shedding (telogen effluvium) — here PRP accelerates recovery</li>
              <li style={styles.li}>Patients with alopecia areata (patchy hair loss) — often a good response in non-scarring patches</li>
              <li style={styles.li}>Anyone experiencing generalised hair thinning with identifiable follicles on dermatoscopy</li>
            </ul>
            <p style={styles.para}>
              Before recommending PRP, we perform a detailed scalp examination and dermatoscopy. If there is an underlying hormonal cause (thyroid dysfunction, PCOS), nutritional deficiency (ferritin, Vitamin D3, B12), or anagen effluvium from medication, that is addressed first or in parallel — because PRP alone will not offset an ongoing cause of hair loss.
            </p>

            <h2 style={styles.heading2}>PRP vs GFC — What Is the Difference?</h2>
            <p style={styles.para}>
              GFC stands for Growth Factor Concentrate. It is a more advanced preparation derived from PRP. Whereas standard PRP concentrates platelets, GFC takes an additional step to activate those platelets and extract the growth factors at a higher concentration and in a more stable form. The result is a preparation with a significantly higher level of PDGF, VEGF, and EGF than standard PRP — with less plasma volume, meaning less fluid is injected into the scalp per session.
            </p>
            <p style={styles.para}>
              At SKIN@Mantraa, we offer both. For patients with moderate-to-advanced thinning or those who have had a partial response to PRP, GFC is typically the recommendation. For early-stage hair loss or younger patients, standard PRP is often sufficient. The preparation best suited to you is determined at consultation.
            </p>

            <h2 style={styles.heading2}>How Many Sessions and What to Expect</h2>
            <p style={styles.para}>
              The standard PRP protocol is 4 sessions spaced 3 to 4 weeks apart. After the initial course:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Sessions 1–2: Reduced shedding is usually the first change patients notice. Hair loss slows.</li>
              <li style={styles.li}>Sessions 3–4: New fine hairs begin appearing at the hairline and crown. Existing hairs become thicker.</li>
              <li style={styles.li}>Months 3–6 post-course: Visible improvement in density as the growth cycle completes.</li>
            </ul>
            <p style={styles.para}>
              Maintenance sessions are recommended every 4 to 6 months after the initial course to sustain results. Androgenetic alopecia is a progressive condition — PRP does not permanently reverse the genetic predisposition. It manages it effectively as long as treatment continues.
            </p>
            <p style={styles.para}>
              The procedure takes 45 to 60 minutes. A topical anaesthetic is applied beforehand. There is no downtime — most patients return to work immediately. Mild scalp tenderness and redness lasting 24 to 48 hours are common and expected.
            </p>

            <h2 style={styles.heading2}>PRP for Indian Hair — What the Fitzpatrick Data Shows</h2>
            <p style={styles.para}>
              Indian hair has specific structural characteristics: a predominantly oval cross-section (compared to the rounder cross-section of East Asian hair), high melanin density, and a natural tendency toward dryness along the shaft. These structural traits do not affect PRP efficacy — PRP works at the follicular unit beneath the scalp surface, not the hair shaft itself.
            </p>
            <p style={styles.para}>
              What does affect Indian patients is the higher rate of nutritional deficiency as a contributing factor to hair loss — particularly low ferritin, Vitamin D3 deficiency, and B12 deficiency, which are significantly more prevalent in vegetarian populations. At SKIN@Mantraa, all hair loss patients receive a baseline blood panel before PRP is started, because PRP's effects will be partially offset if a nutritional deficiency is simultaneously causing hair shedding.
            </p>
            <p style={styles.para}>
              Hormonal factors — particularly PCOS in women and DHT-driven miniaturisation in men — are also addressed. PRP works best as part of a complete hair loss management plan, not as a standalone injection series.
            </p>

            <h2 style={styles.heading2}>What PRP Cannot Do</h2>
            <p style={styles.para}>Honest assessment matters. PRP will not:</p>
            <ul style={styles.ul}>
              <li style={styles.li}>Restore hair in areas of complete baldness (no follicles present)</li>
              <li style={styles.li}>Permanently stop androgenetic alopecia — it manages the condition, it does not cure it</li>
              <li style={styles.li}>Replace a hair transplant for patients who are candidates for surgical restoration</li>
              <li style={styles.li}>Produce dramatic results in a single session</li>
            </ul>
            <p style={styles.para}>
              If you are considering both PRP and a hair transplant, we can assess which is appropriate at your current stage and discuss sequencing — PRP is often used post-transplant to improve graft survival and density.
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
                  <span style={{ flexShrink: 0, fontSize: "1.2rem", color: "#C4704E", fontWeight: 300 }}>+</span>
                </summary>
                <p style={{ ...styles.para, paddingBottom: "1rem" }}>{item.acceptedAnswer.text}</p>
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
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "#FDF6EC", marginBottom: "0.75rem" }}>
                Assess Your Hair Loss at SKIN@Mantraa
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "rgba(253,246,236,0.75)", marginBottom: "1.75rem", lineHeight: 1.7 }}>
                Dr. Mamta Bhura will examine your scalp under dermatoscopy, review your blood work, and recommend the most appropriate protocol — PRP, GFC, or a combined approach. Consultation: ₹600.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
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
                  href="/services/hair-restoration"
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
                  Hair Restoration Services
                </Link>
              </div>
            </div>

            {/* Footer meta */}
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(199,141,107,0.2)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#8C6F5E", marginBottom: "0.75rem" }}>
                Written by <strong>Dr. Mamta Bhura</strong>, MD Dermatology (IMS BHU), Member — IMA, IADVL, CDSI. 26+ years clinical practice in Kanpur.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["PRP treatment Kanpur", "GFC hair treatment", "hair loss treatment", "androgenetic alopecia", "PRP for hair India", "dermatologist Kanpur"].map((tag) => (
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
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#C4704E", textDecoration: "none" }}
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

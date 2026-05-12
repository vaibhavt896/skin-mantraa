import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title: "What Causes Melasma and How to Treat It — A Clinical Guide for Indian Skin | SKIN@Mantraa",
  description:
    "Melasma is triggered by UV exposure, hormones, and heat — and is especially prevalent on Indian skin. Dr. Mamta Bhura explains the real causes, what makes it worse, and the step-by-step treatment approach that works.",
  alternates: {
    canonical: "https://skinmantraa.in/skin-guide/melasma-treatment-kanpur",
  },
  openGraph: {
    title: "What Causes Melasma and How to Treat It on Indian Skin",
    description:
      "Melasma is triggered by UV exposure, hormones, and heat — and is especially prevalent on Indian skin. Dr. Mamta Bhura explains the real causes, what makes it worse, and the step-by-step treatment approach that works.",
    url: "https://skinmantraa.in/skin-guide/melasma-treatment-kanpur",
    type: "article",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Causes Melasma and How to Treat It on Indian Skin",
  description:
    "Clinical guide to melasma causes and treatment by Dr. Mamta Bhura, SKIN@Mantraa Kanpur. Covers hormonal triggers, sun exposure, heat, and the treatment approach for Fitzpatrick Type III-V skin.",
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
  mainEntityOfPage: "https://skinmantraa.in/skin-guide/melasma-treatment-kanpur",
  keywords:
    "what causes melasma, melasma treatment Kanpur, melasma on Indian skin, pigmentation treatment Kanpur, hormonal pigmentation, melasma dermatologist Kanpur",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What causes melasma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Melasma is caused by overactivation of melanocytes — the pigment-producing cells in the skin — triggered by UV radiation, hormonal changes, and heat. The three primary triggers are sun exposure (UVA/UVB activate melanocytes directly), hormonal shifts (estrogen and progesterone increase melanocyte sensitivity — which is why melasma is common during pregnancy and with oral contraceptive use), and heat (infrared radiation from stoves, direct sun, and hot environments independently stimulates pigmentation). Indian skin is genetically predisposed to stronger melanocyte response, making melasma more prevalent and more persistent.",
      },
    },
    {
      "@type": "Question",
      name: "Can melasma be cured permanently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Melasma can be effectively controlled and significantly lightened, but it is not a condition that is 'cured' in the way an infection is cured. The genetic predisposition and hormonal sensitivity remain. With the right treatment — topical depigmenting agents, chemical peels, laser therapy, and strict photoprotection — melasma can be cleared and kept clear for years. However, if sun protection lapses or hormonal triggers return, melasma can recur. Ongoing maintenance is part of the treatment plan.",
      },
    },
    {
      "@type": "Question",
      name: "How is melasma treated on Indian skin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Melasma treatment on Indian (Fitzpatrick Type III-V) skin must be approached carefully because aggressive laser settings or high-strength peels can trigger post-inflammatory hyperpigmentation — darkening the skin further rather than lightening it. The standard approach at SKIN@Mantraa is: Phase 1 — skin priming with topical agents (modified Kligman's formula or tranexamic acid combinations) for 4 to 6 weeks. Phase 2 — chemical peels (glycolic, lactic, or Jessner's) at appropriate strengths for Indian skin, spaced 3 to 4 weeks apart. Phase 3 — maintenance with daily broad-spectrum SPF 50+ PA+++ sunscreen and topical maintenance agents. Laser (Q-switched Nd:YAG or low-fluence) may be added at Phase 2 for deep or recalcitrant melasma after priming.",
      },
    },
    {
      "@type": "Question",
      name: "Why does melasma worsen in summer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Melasma worsens in summer for two reasons: increased UV radiation directly activates melanocytes, and increased ambient temperature and infrared radiation add an independent pigmentation stimulus. In Kanpur specifically, summer temperatures above 40°C mean that even time spent outdoors without direct sun exposure — due to ambient heat — can trigger melasma darkening. This is why physical sun protection (wide-brimmed hat, sun-protective clothing) matters in addition to sunscreen.",
      },
    },
    {
      "@type": "Question",
      name: "Does stopping contraceptive pills clear melasma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stopping hormonal contraceptives removes one trigger, but melasma does not automatically clear on its own — and in many patients, it persists long after stopping oral contraceptives because UV exposure continues to maintain and worsen it. Stopping the pill is often recommended when it is clearly the dominant trigger, but active treatment and photoprotection are still required to clear established melasma.",
      },
    },
    {
      "@type": "Question",
      name: "How many sessions of chemical peels are needed for melasma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients require 4 to 6 sessions of chemical peels spaced 3 to 4 weeks apart for significant improvement. The first improvement is usually visible after sessions 2 to 3. Sessions are always preceded by a priming phase with topical agents, and always followed by strict sun protection — without which peel results will not hold.",
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

export default function MelasmaTreatmentPage() {
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
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#8C6F5E" }}>
                May 12, 2026 · 9 min read
              </span>
            </div>

            <h1 style={styles.heading1}>
              What Causes Melasma and<br />
              <span style={{ color: "#C4704E" }}>How to Treat It on Indian Skin</span>
            </h1>

            <p style={{ ...styles.para, fontSize: "1.15rem", color: "#5C4033" }}>
              Melasma is a chronic pigmentation disorder caused by the overactivation of melanocytes — pigment-producing cells — triggered by UV radiation, hormonal changes, and heat. It is among the most common skin concerns in Indian women, and one of the most frequently mistreated. Getting the treatment sequence right matters.
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

            <h2 style={styles.heading2}>What Melasma Actually Is</h2>
            <p style={styles.para}>
              Melasma is not a single condition — it is a clinical presentation of melanocyte hyperactivity that can involve epidermal (surface) pigmentation, dermal (deep) pigmentation, or both. The depth of pigmentation matters enormously for treatment, because superficial melasma responds faster to topical treatment and peels, while dermal melasma requires longer timelines and may need laser.
            </p>
            <p style={styles.para}>
              Under a Wood&apos;s lamp examination, epidermal melasma becomes more pronounced (the contrast sharpens), while dermal melasma does not. This is one of the first assessments we perform before designing a treatment plan, because starting with aggressive laser on unidentified deep melasma in Indian skin can cause post-inflammatory hyperpigmentation — making the pigmentation significantly worse.
            </p>

            <h2 style={styles.heading2}>The Three Causes of Melasma</h2>
            <p style={styles.para}><strong>1. UV radiation</strong></p>
            <p style={styles.para}>
              UVA and UVB from sunlight directly activate melanocytes via DNA photodamage signals and oxidative stress pathways. A single day of significant sun exposure without protection can undo weeks of depigmenting treatment. This is the primary trigger for melasma in almost every patient, regardless of other factors.
            </p>
            <p style={styles.para}><strong>2. Hormonal changes</strong></p>
            <p style={styles.para}>
              Estrogen and progesterone stimulate melanocyte-stimulating hormone (MSH) activity, increasing the skin&apos;s pigment response. This is why melasma is common during pregnancy (sometimes called the &quot;mask of pregnancy&quot; or chloasma) and in women using combined oral contraceptive pills. Thyroid dysfunction can also amplify melanocyte sensitivity. In men, melasma is less common but does occur — typically driven by sun exposure rather than hormonal factors.
            </p>
            <p style={styles.para}><strong>3. Heat</strong></p>
            <p style={styles.para}>
              Infrared radiation — heat — is an independent melasma trigger that is frequently overlooked. Cooking over open flames, standing near hot environments, and prolonged outdoor exposure in high-temperature conditions can all worsen melasma even when UV is blocked. In Kanpur&apos;s summer climate (40–45°C), this is particularly relevant.
            </p>

            <h2 style={styles.heading2}>Why Indian Skin Is More Vulnerable to Melasma</h2>
            <p style={styles.para}>
              Fitzpatrick Type III–V Indian skin has a higher baseline melanocyte density and more reactive melanocytes than lighter skin types. This is protective against skin cancer — but it also means that any stimulus (UV, hormonal, inflammatory) produces a stronger pigmentation response. Melasma in Indian skin tends to be:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>More persistent once established</li>
              <li style={styles.li}>More likely to involve the dermal layer</li>
              <li style={styles.li}>More prone to post-inflammatory hyperpigmentation from aggressive treatment</li>
              <li style={styles.li}>More likely to recur after clearance if photoprotection lapses</li>
            </ul>
            <p style={styles.para}>
              This is precisely why the treatment protocols appropriate for Western skin types are often too aggressive for Indian skin — and why the treatment sequence here at SKIN@Mantraa is specifically calibrated for Fitzpatrick Type III–V patients.
            </p>

            <h2 style={styles.heading2}>The Treatment Approach for Indian Skin Melasma</h2>
            <p style={styles.para}>
              Treating melasma in Indian skin is a structured, phased process. There is no single-session fix, and shortcutting the sequence tends to cause setbacks.
            </p>
            <p style={styles.para}><strong>Phase 1 — Priming (4 to 6 weeks)</strong></p>
            <p style={styles.para}>
              Before any procedural treatment, the skin is prepared with topical depigmenting agents. We use combinations based on modified Kligman&apos;s formula (hydroquinone/tretinoin/steroid), tranexamic acid, azelaic acid, kojic acid, or niacinamide depending on the patient&apos;s skin sensitivity and melasma depth. Priming suppresses melanocyte activity and reduces the risk of post-inflammatory hyperpigmentation from subsequent procedures. Skipping this phase and going straight to peels or laser is a common cause of worsening in Indian patients.
            </p>
            <p style={styles.para}><strong>Phase 2 — Procedural treatment</strong></p>
            <p style={styles.para}>
              After priming, chemical peels are introduced at conservative concentrations and progressively increased. Glycolic acid, lactic acid, and Jessner&apos;s solution are the most common choices for Indian skin melasma. For deep or recalcitrant melasma, Q-switched Nd:YAG laser at low fluence (the toning protocol) can be added — but only after priming, and with conservative settings calibrated for Indian skin.
            </p>
            <p style={styles.para}><strong>Phase 3 — Maintenance</strong></p>
            <p style={styles.para}>
              Once melasma is cleared, the result is not self-sustaining. Daily broad-spectrum SPF 50+ PA+++ sunscreen must be used every morning (and reapplied if outdoors). A maintenance topical agent — typically a lower-strength version of what was used in Phase 1 — is continued 2 to 3 nights per week. Physical protection (hats, avoiding peak sun hours) adds another layer of prevention.
            </p>

            <h2 style={styles.heading2}>What Makes Melasma Worse</h2>
            <p style={styles.para}>The most common mistakes that worsen melasma or cause recurrence:</p>
            <ul style={styles.ul}>
              <li style={styles.li}>Using sunscreen once daily and not reapplying — SPF degrades after 2 to 3 hours of sun exposure</li>
              <li style={styles.li}>Using a sunscreen with SPF but no PA rating — PA measures UVA protection, which is specifically what drives melasma</li>
              <li style={styles.li}>Starting laser treatment without priming — triggers post-inflammatory hyperpigmentation</li>
              <li style={styles.li}>Stopping treatment as soon as lightening begins — melasma requires full course completion and maintenance</li>
              <li style={styles.li}>Home remedies with lemon juice or harsh exfoliants — these cause inflammation, which worsens pigmentation in Indian skin</li>
              <li style={styles.li}>Not addressing hormonal triggers (contraceptive pill, thyroid) before or during treatment</li>
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
                Get a Melasma Assessment
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "rgba(253,246,236,0.75)", marginBottom: "1.75rem", lineHeight: 1.7 }}>
                Dr. Bhura will assess your melasma depth, identify your triggers, and build a phased treatment plan calibrated for Indian skin. Consultation: ₹600.
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
                  href="/services/skin-treatments"
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
                  Skin Treatments
                </Link>
              </div>
            </div>

            {/* Footer meta */}
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(199,141,107,0.2)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#8C6F5E", marginBottom: "0.75rem" }}>
                Written by <strong>Dr. Mamta Bhura</strong>, MD Dermatology (IMS BHU), Member — IMA, IADVL, CDSI. 26+ years clinical practice in Kanpur.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["melasma treatment Kanpur", "pigmentation treatment", "Indian skin melasma", "hormonal pigmentation", "chemical peel Kanpur", "dermatologist Kanpur"].map((tag) => (
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

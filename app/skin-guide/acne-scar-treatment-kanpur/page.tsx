import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title:
    "Acne Treatment and Scar Removal in Kanpur - Dermapen 4, Chemical Peels | SKIN@Mantraa",
  description:
    "Acne scars, dark spots, and post-acne pigmentation treated with Dermapen 4, chemical peels, and laser by Dr. Mamta Bhura in Kanpur. Best dermatologist in Kanpur for acne and dark spots.",
  alternates: {
    canonical: "https://skinmantraa.in/skin-guide/acne-scar-treatment-kanpur",
  },
  openGraph: {
    title:
      "Acne Treatment and Scar Removal in Kanpur - Dermapen 4, Chemical Peels",
    description:
      "Acne scars, dark spots, and post-acne pigmentation treated with Dermapen 4, chemical peels, and laser by Dr. Mamta Bhura - best dermatologist in Kanpur for acne and dark spots.",
    url: "https://skinmantraa.in/skin-guide/acne-scar-treatment-kanpur",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Acne Treatment and Scar Removal in Kanpur - Dermapen 4, Chemical Peels, and What Actually Works",
  description:
    "Clinical guide to acne and scar treatment by Dr. Mamta Bhura, SKIN@Mantraa Kanpur. Covers active acne, post-acne pigmentation, ice-pick scars, and the step-by-step treatment approach with Dermapen 4, chemical peels, and Nd:YAG laser.",
  image: "https://skinmantraa.in/opengraph-image",
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
  mainEntityOfPage:
    "https://skinmantraa.in/skin-guide/acne-scar-treatment-kanpur",
  keywords:
    "acne treatment Kanpur, acne scar removal Kanpur, dermapen 4 acne scars Kanpur, chemical peel Kanpur, best dermatologist Kanpur dark spots, acne scar removal Kanpur, skin resurfacing Kanpur",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best treatment for acne scars in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best treatment for acne scars depends on the scar type. Atrophic (depressed) scars - ice pick, boxcar, and rolling scars - respond best to Dermapen 4 microneedling with multiple sessions, and deeper scars may need subcision or TCA cross before microneedling. Hyperpigmented post-acne marks (PIH) respond well to chemical peels and topical brighteners. Hypertrophic (raised) scars are treated with intralesional corticosteroid injections. At SKIN@Mantraa, Dr. Bhura first classifies your scar types before recommending a treatment plan - most patients require a combination approach.",
      },
    },
    {
      "@type": "Question",
      name: "How many Dermapen 4 sessions are needed for acne scars?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients require 4 to 6 sessions spaced 4 weeks apart for meaningful improvement in atrophic acne scars. Improvement continues for 3 to 6 months after the final session as collagen remodelling completes. Moderate rolling and boxcar scars typically show 40 to 60% improvement after a full course. Deep ice-pick scars may need TCA cross before Dermapen sessions for best results.",
      },
    },
    {
      "@type": "Question",
      name: "What chemical peels are used for acne and dark spots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For active acne in Indian skin, salicylic acid (BHA) peels at 20 to 30% are the first choice - salicylic acid is oil-soluble and penetrates sebaceous follicles directly. For post-acne dark spots (PIH), glycolic acid or mandelic acid peels are used after a skin-priming phase to reduce pigmentation safely. Peels are always preceded by priming with topical retinoids and depigmenting agents to reduce the risk of post-inflammatory hyperpigmentation in Indian skin.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between acne marks and acne scars?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acne marks (post-inflammatory hyperpigmentation or PIH) are flat, discoloured areas - red, brown, or dark - left after a pimple heals. They are not true scars: the skin surface is intact, and they fade over months to years with proper treatment and sun protection. Acne scars are structural changes in the skin tissue - either depressed (ice pick, boxcar, rolling) or raised (hypertrophic, keloid). They do not fade on their own and require procedural treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nd:YAG laser used for acne scar treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Q-switched Nd:YAG laser is used for active acne (reducing P. acnes bacteria and sebum production) and for post-acne pigmentation (targeting melanin in dark spots). Fractional Nd:YAG laser can also be used for scar resurfacing in Indian skin - it is preferred over ablative CO2 laser for darker skin tones because it carries a lower risk of post-inflammatory hyperpigmentation.",
      },
    },
    {
      "@type": "Question",
      name: "Why does acne leave dark spots on Indian skin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indian skin (Fitzpatrick Type III–V) has more reactive melanocytes - pigment-producing cells - than lighter skin types. Any inflammation, including the inflammation from an acne lesion, triggers a localised melanocyte response: the skin darkens in the healing area. This post-inflammatory hyperpigmentation (PIH) is not a scar - it is a pigmentation response specific to darker skin tones, and it is entirely treatable with the right topical agents, chemical peels, and sun protection.",
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

export default function AcneScarTreatmentPage() {
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
                Treatment Guides
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "#8C6F5E",
                }}
              >
                May 12, 2026 · 9 min read
              </span>
            </div>
            <h1 style={styles.heading1}>
              Acne Treatment and Scar Removal in Kanpur
              <br />
              <span style={{ color: "#C4704E" }}>
                Dermapen 4, Chemical Peels, and What Actually Works
              </span>
            </h1>
            <p
              style={{ ...styles.para, fontSize: "1.15rem", color: "#5C4033" }}
            >
              Acne scars and dark spots left by acne are among the most common
              concerns at SKIN@Mantraa. The right treatment depends on what you
              are actually dealing with - active acne, post-acne pigmentation
              (marks), or true structural scars. These are different problems
              requiring different approaches, and treating one with the protocol
              for another is why so many patients come in after failed
              treatments elsewhere.
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
                  MD Dermatology, IMS BHU · 26+ years · Best dermatologist in
                  Kanpur for acne and scar treatment
                </p>
              </div>
            </div>
          </header>

          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 style={styles.heading2}>
              Three Different Problems, Three Different Treatments
            </h2>
            <p style={styles.para}>
              When patients say &quot;I have acne scars,&quot; they typically
              mean one of three distinct things:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Active acne</strong> - the condition itself: comedones,
                papules, pustules, cysts. Needs to be controlled medically
                before any scar treatment begins.
              </li>
              <li style={styles.li}>
                <strong>Post-inflammatory hyperpigmentation (PIH)</strong> - the
                dark marks left after a pimple heals. Flat, discoloured skin.
                Not a true scar. Treatable with topicals + peels.
              </li>
              <li style={styles.li}>
                <strong>Atrophic scars</strong> - actual structural damage:
                ice-pick (deep, narrow), boxcar (broad, sharp edges), rolling
                (broad, sloped). These require procedural treatment: Dermapen,
                subcision, TCA cross, or laser resurfacing.
              </li>
            </ul>
            <p style={styles.para}>
              The treatment plan begins with controlling active acne first.
              Performing Dermapen or peels on skin with active inflammatory acne
              is counterproductive - it can spread bacteria and worsen
              inflammation. Once acne is controlled for a minimum of 4 to 6
              weeks, procedural scar treatment begins.
            </p>

            <h2 style={styles.heading2}>
              Treating Active Acne - Medical Control First
            </h2>
            <p style={styles.para}>
              Active acne at SKIN@Mantraa is managed with a combination of
              topical and, when needed, oral therapy. The prescription approach
              depends on severity:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Mild comedonal acne</strong>: Topical retinoids
                (tretinoin or adapalene) + benzoyl peroxide
              </li>
              <li style={styles.li}>
                <strong>Moderate papulopustular acne</strong>: Topical
                clindamycin combination + oral doxycycline (short course)
              </li>
              <li style={styles.li}>
                <strong>Severe nodular/cystic acne</strong>: Oral isotretinoin
                (Accutane) - the most effective treatment for severe, scarring
                acne
              </li>
            </ul>
            <p style={styles.para}>
              Salicylic acid chemical peels at 20 to 30% are introduced after 4
              to 6 weeks to accelerate clearance - BHA peels penetrate
              oil-filled pores directly, reducing comedones and P. acnes
              bacteria more effectively than surface-level treatments alone.
            </p>

            <h2 style={styles.heading2}>
              Chemical Peels for Post-Acne Dark Spots
            </h2>
            <p style={styles.para}>
              Post-inflammatory hyperpigmentation (PIH) - the dark marks that
              linger for months after acne heals - is extremely common on Indian
              skin due to the stronger melanocyte response in Fitzpatrick Type
              III–V skin types. Chemical peels are the most effective procedural
              tool for PIH.
            </p>
            <p style={styles.para}>
              The approach at SKIN@Mantraa for acne PIH in Indian skin:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Priming phase</strong> (4 weeks): Topical depigmenting
                agents - modified Kligman&apos;s formula, tranexamic acid, or
                kojic acid combination - to suppress melanocyte activity before
                peeling
              </li>
              <li style={styles.li}>
                <strong>Peeling phase</strong>: Glycolic acid (30–50%) or
                mandelic acid peels, 4 to 6 sessions spaced 3 to 4 weeks apart
              </li>
              <li style={styles.li}>
                <strong>Maintenance</strong>: SPF 50+ PA+++ sunscreen daily
                (mandatory - UV exposure will darken marks again)
              </li>
            </ul>
            <p style={styles.para}>
              Skipping the priming phase and going straight to high-strength
              peels is the most common mistake in Indian skin - it triggers
              paradoxical darkening from post-peel inflammation.
            </p>

            <h2 style={styles.heading2}>Dermapen 4 for Acne Scars</h2>
            <p style={styles.para}>
              Dermapen 4 is a medical-grade microneedling device that creates
              thousands of controlled micro-channels in the skin at precise
              depths. This triggers the skin&apos;s wound-healing cascade -
              fibroblasts are activated, new collagen and elastin are produced,
              and the depressed scar tissue is gradually filled and remodelled
              from below.
            </p>
            <p style={styles.para}>
              Dermapen 4 is particularly effective for rolling and boxcar scars.
              The protocol at SKIN@Mantraa:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Sessions: 4 to 6 total, spaced 4 weeks apart
              </li>
              <li style={styles.li}>
                Needle depth: adjusted per area (0.5mm for surface PIH, up to
                2.5mm for deep atrophic scars)
              </li>
              <li style={styles.li}>
                Topical serums (hyaluronic acid, growth factors) applied during
                treatment to enhance collagen response
              </li>
              <li style={styles.li}>
                Downtime: 24 to 48 hours of redness; return to normal activities
                the following day
              </li>
              <li style={styles.li}>
                Results: visible improvement by session 3; full collagen
                remodelling visible at 3 to 6 months post-course
              </li>
            </ul>
            <p style={styles.para}>
              For deep ice-pick scars, TCA CROSS (chemical reconstruction of
              skin scars) is performed before Dermapen - a high-concentration
              TCA drop is placed into the base of each ice-pick scar to
              stimulate collagen in the scar floor, raising it before
              microneedling further remodels the surface.
            </p>

            <h2 style={styles.heading2}>Laser Treatment for Acne and Scars</h2>
            <p style={styles.para}>
              Nd:YAG laser is used at SKIN@Mantraa for two acne-related
              applications:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <strong>Active acne</strong>: 1064nm long-pulse Nd:YAG targets
                the sebaceous glands and reduces P. acnes activity, with
                anti-inflammatory effects that reduce papule and pustule
                formation
              </li>
              <li style={styles.li}>
                <strong>Post-acne pigmentation and skin texture</strong>:
                Q-switched Nd:YAG (toning protocol) targets melanin in dark
                spots and improves overall skin clarity
              </li>
            </ul>
            <p style={styles.para}>
              For scar resurfacing, fractional laser is an option after Dermapen
              courses for patients with persistent shallow boxcar scars. We use
              Nd:YAG fractional rather than ablative CO2 laser in Indian skin to
              minimise post-inflammatory pigmentation risk - the trade-off is
              more sessions needed, but significantly safer for Fitzpatrick Type
              III–V patients.
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
                Get an Acne and Scar Assessment
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
                Dr. Bhura will classify your scar types, assess your active
                acne, and build a phased treatment plan in the right sequence.
                Consultation: ₹600.
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
                  "acne treatment Kanpur",
                  "acne scar removal Kanpur",
                  "Dermapen 4 Kanpur",
                  "chemical peel Kanpur",
                  "dark spots Kanpur",
                  "skin resurfacing Kanpur",
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

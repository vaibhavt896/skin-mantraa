import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export const metadata: Metadata = {
  title:
    "HIFU Treatment in Kanpur - Non-Surgical Skin Tightening at SKIN@Mantraa",
  description:
    "Dr. Mamta Bhura explains HIFU skin tightening in Kanpur - who it works for, what the treatment feels like, and realistic results. Clinical guide from SKIN@Mantraa.",
  alternates: {
    canonical: "https://skinmantraa.in/skin-guide/hifu-treatment-kanpur",
  },
  openGraph: {
    title:
      "HIFU Treatment in Kanpur - Non-Surgical Skin Tightening at SKIN@Mantraa",
    description:
      "Dr. Mamta Bhura explains HIFU skin tightening in Kanpur - who it works for, what the treatment feels like, and realistic results. Clinical guide from SKIN@Mantraa.",
    url: "https://skinmantraa.in/skin-guide/hifu-treatment-kanpur",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "HIFU Treatment in Kanpur - An Honest Guide From a Dermatologist",
  description:
    "Clinical guide to HIFU skin tightening by Dr. Mamta Bhura, SKIN@Mantraa Kanpur. Who it works for, what to expect, and how Indian skin responds.",
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
  mainEntityOfPage: "https://skinmantraa.in/skin-guide/hifu-treatment-kanpur",
  keywords:
    "HIFU treatment Kanpur, non-surgical facelift Kanpur, skin tightening Kanpur, HIFU face lifting, HIFU SMAS layer",
  about: [
    {
      "@type": "MedicalProcedure",
      name: "HIFU Treatment",
      alternateName: "High-Intensity Focused Ultrasound",
      description:
        "Non-surgical skin tightening using focused ultrasound energy to target the SMAS layer at 4.5mm depth, stimulating collagen production.",
      url: "https://skinmantraa.in/services/anti-aging",
      procedureType: "https://health-lifesci.schema.org/NoninvasiveProcedure",
      bodyLocation: "Face, Neck, Décolletage",
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
      name: "How many HIFU sessions will I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients with mild to moderate laxity see meaningful improvement after a single session. We reassess at the 3-month mark, when collagen response is becoming visible. Some patients benefit from a second session at 6 months, but this is not a standard recommendation - it depends on individual response and the degree of change present.",
      },
    },
    {
      "@type": "Question",
      name: "Can HIFU be combined with Botox or fillers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HIFU addresses structural laxity, Botox addresses dynamic expression lines, and fillers address volume loss - these are different problems requiring different solutions, and they do not interfere with each other. Many patients benefit from a combined approach.",
      },
    },
    {
      "@type": "Question",
      name: "How is HIFU different from radiofrequency (RF) tightening?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Radiofrequency treatments typically work at 1.5 to 2mm depth in the dermis. HIFU goes deeper and targets the SMAS layer at 4.5mm. For genuine structural lifting, HIFU reaches tissue that RF generally does not.",
      },
    },
    {
      "@type": "Question",
      name: "What should I avoid after a HIFU session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For 24 to 48 hours after treatment: avoid direct sun exposure, high heat environments (saunas, steam rooms, hot yoga), and vigorous physical exercise. Use SPF 50 sunscreen for at least 2 weeks post-treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Is HIFU safe during pregnancy or breastfeeding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No - HIFU is not recommended during pregnancy or while breastfeeding. Wait until breastfeeding is complete and allow 3 to 6 months post-partum for skin to stabilise before assessing laxity.",
      },
    },
    {
      "@type": "Question",
      name: "How much does HIFU cost at SKIN@Mantraa Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HIFU pricing depends on the treatment area - full face and neck, face only, lower face only, décolletage, or a combination. Cost varies accordingly. Please book a consultation (₹600) and we will give you complete pricing and a clear treatment plan at that visit.",
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

export default function HifuBlogPage() {
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
          {/* ─── Header ─────────────────────────────────────────── */}
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
                  fontSize: "0.82rem",
                  color: "#C78D6B",
                }}
              >
                May 2026 · 7 min read
              </span>
            </div>

            <h1 style={styles.heading1}>
              HIFU Treatment in Kanpur - Not Magic, Just Science That Actually
              Works
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                padding: "1.25rem 0",
                borderTop: "1px solid rgba(199,141,107,0.2)",
                borderBottom: "1px solid rgba(199,141,107,0.2)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C4704E, #C78D6B)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                MB
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "#3D2B1F",
                    fontSize: "0.97rem",
                    margin: 0,
                  }}
                >
                  Dr. Mamta Bhura
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.7rem",
                    color: "#C78D6B",
                    letterSpacing: "0.06em",
                    margin: 0,
                  }}
                >
                  MBBS MD DERMATOLOGY · SKIN@MANTRAA, KANPUR
                </p>
              </div>
            </div>

            {/* Keyword tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {[
                "HIFU treatment Kanpur",
                "non-surgical facelift",
                "skin tightening Kanpur",
                "SMAS layer",
                "collagen stimulation",
              ].map((kw) => (
                <span
                  key={kw}
                  style={{
                    background: "rgba(199,141,107,0.1)",
                    color: "#5C4033",
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-body)",
                    padding: "0.2rem 0.75rem",
                    borderRadius: "999px",
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </header>

          {/* ─── Body ────────────────────────────────────────────── */}
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
                HIFU (High-Intensity Focused Ultrasound) is a non-surgical skin tightening treatment that targets the SMAS layer at 4.5mm depth — the same tissue a surgeon tightens during a facelift. It stimulates new collagen production over 3–6 months. At SKIN@Mantraa Kanpur, HIFU treats jawline laxity, neck loosening, brow drooping, and décolletage crepiness. It is safe for all Indian skin tones as it bypasses the epidermis entirely.
              </p>
            </div>
            <p style={styles.para}>
              Somewhere between forty and fifty, most of my patients notice the
              same shift. It is not wrinkles exactly - they have had those for a
              while, and they have made peace with them. What changes is the
              structure. The jawline is not as clean. The skin under the chin
              has softened. The cheeks have quietly moved a little south of
              where they spent the last three decades.
            </p>

            <p style={styles.para}>
              They come in asking some version of the same question:{" "}
              <em>Is there anything that can help without surgery?</em>
            </p>

            <p style={styles.para}>
              The honest answer - and I try to always be honest - is that
              surgery remains the gold standard when laxity is significant.
              Nothing non-invasive fully replicates what a skilled plastic
              surgeon can achieve when sagging is severe. But for the large
              group of patients who are seeing early to moderate change, who are
              not ready for surgery, or who simply do not want it, HIFU is the
              most clinically credible non-surgical option we have today.
            </p>

            <p style={styles.para}>
              We have this machine at SKIN@Mantraa. Here is everything I
              actually want you to understand about it - before you book, before
              you spend money, before you decide.
            </p>

            <h2 style={styles.heading2}>What HIFU Actually Is</h2>

            <p style={styles.para}>
              HIFU stands for High-Intensity Focused Ultrasound. The technology
              has been used in oncology for decades. Its adaptation to cosmetic
              dermatology took hold in the late 2000s, and it has remained in
              clinical use because the underlying mechanism is sound.
            </p>

            <p style={styles.para}>
              What makes HIFU fundamentally different from radiofrequency
              treatments, laser tightening, or the collagen creams sold at
              chemists is this: it reaches the SMAS layer. The SMAS -
              Superficial Muscular Aponeurotic System - is a fibromuscular sheet
              that sits approximately 4.5mm below the skin surface, beneath the
              dermis and subcutaneous fat. It is literally the same layer that a
              surgeon tightens when performing a conventional facelift.
            </p>

            <p style={styles.para}>
              Until HIFU, there was no reliable non-surgical way to treat this
              depth. Topical creams stay on the surface. Radiofrequency
              typically reaches 1.5 to 2mm. HIFU, by focusing ultrasound energy
              like a lens focuses light, creates micro-coagulation points at the
              target depth of 4.5mm - without disturbing the overlying skin at
              all.
            </p>

            <p style={styles.para}>
              At these coagulation points, tissue reaches 65 to 70°C. The body
              recognises this as micro-injury. Fibroblasts activate. New
              collagen begins forming. Over 3 to 6 months, as that collagen
              matures, the facial structure gradually tightens from within. The
              overlying skin sees no burning, no wound, no surface change. Just
              the slow biological work of repair happening at depth.
            </p>

            <h2 style={styles.heading2}>Who Actually Benefits From HIFU</h2>

            <p style={styles.para}>
              The patients I see the most satisfying results in are generally
              between 35 and 58, with mild to moderate laxity - skin that has
              started to change but has not changed dramatically. Specifically:
            </p>

            <ul style={styles.ul}>
              {[
                "A jawline beginning to soften, with early jowl formation along the lower face",
                "The submental area - the skin and tissue beneath the chin - that has lost its previous tautness",
                "A subtle brow heaviness, where the outer brow has dropped slightly",
                "Neck skin that feels looser and less firm than it did five years ago",
                "Crepey texture developing across the décolletage",
              ].map((item, i) => (
                <li key={i} style={styles.li}>
                  {item}
                </li>
              ))}
            </ul>

            <p style={styles.para}>
              HIFU is not appropriate for everyone. If laxity is pronounced -
              deep jowls, significant redundant neck skin, heavy nasolabial
              folding - I will tell you directly that surgery will deliver a
              better outcome. It would be wrong to charge for a treatment that
              will only partially address what you are actually bothered by.
            </p>

            <p style={styles.para}>
              Very young patients with good skin elasticity do not need HIFU
              yet. The treatment works because there is collagen scaffolding
              present that has begun to loosen - the energy stimulates what is
              already there. When skin is still well-supported at 28, the
              clinical benefit is minimal.
            </p>

            <h2 style={styles.heading2}>
              What the Treatment Feels Like - Honestly
            </h2>

            <p style={styles.para}>
              I think it is important to be straightforward about this, because
              some clinics undersell the sensory experience to avoid patient
              apprehension.
            </p>

            <p style={styles.para}>
              HIFU is not painless. When focused energy passes through to the
              SMAS layer, most patients feel a warming sensation - sometimes
              sharp and brief - at the moment of delivery. Bony regions of the
              face, such as the temples, cheekbones, and along the mandible, are
              typically more sensitive than the fleshier mid-cheek area.
              Tolerance varies considerably between individuals.
            </p>

            <p style={styles.para}>
              We apply a thin conductive gel to the skin. The applicator is
              moved in precise linear passes across each treatment zone. We
              typically work at three depths - 4.5mm, 3.0mm, and 1.5mm - to
              treat different tissue layers in each zone. A full-face and neck
              session takes 60 to 90 minutes.
            </p>

            <p style={styles.para}>
              I tell patients this: if a HIFU session produces no discomfort at
              all, it may mean the energy is not reaching the depth needed for
              effect. Some sensation is a reasonable indicator that the
              treatment is working at the correct layer. For patients with lower
              pain tolerance, topical numbing cream can be applied 30 to 45
              minutes before we start.
            </p>

            <p style={styles.para}>
              There is no anaesthesia. No incisions. No recovery period - the
              majority of patients return to normal activity the same day,
              sometimes with mild redness that resolves within a few hours.
            </p>

            <h2 style={styles.heading2}>How Results Develop</h2>

            <p style={styles.para}>
              There are two distinct phases of visible change after HIFU.
            </p>

            <p style={styles.para}>
              The first happens within 48 hours. As any initial mild swelling
              resolves, many patients notice an immediate tightening and a
              certain brightness to the skin. This is real - it is partly the
              immediate structural response to the heat - but it is not the full
              result. Do not judge the treatment at day two.
            </p>

            <p style={styles.para}>
              The meaningful, structural improvement builds over 3 to 6 months
              as new collagen matures and reorganises. Patients who photograph
              themselves monthly often do not perceive the gradual change in
              real time. Then they look at a 3-month or 6-month comparison photo
              and the difference is clear.
            </p>

            <p style={styles.para}>
              What patients typically report at the 6-month mark:
            </p>

            <ul style={styles.ul}>
              {[
                "A cleaner, more defined jawline - early jowling visibly reduced",
                "Tighter skin below the chin and along the neck",
                "A subtle lift in the outer brow and upper face",
                "An overall impression of looking refreshed - without looking altered",
              ].map((item, i) => (
                <li key={i} style={styles.li}>
                  {item}
                </li>
              ))}
            </ul>

            <p style={styles.para}>
              HIFU does not freeze expression. Unlike Botox, it does not affect
              muscle movement at all. The results look natural because they come
              from your own biology - new collagen produced by your own
              fibroblasts.
            </p>

            <p style={styles.para}>
              Results generally hold for 12 to 18 months. Annual maintenance
              sessions help sustain the effect. There is no sudden reversal -
              the collagen simply ages naturally over time, as all collagen
              does.
            </p>

            <h2 style={styles.heading2}>
              Why HIFU Is Particularly Well-Suited to Indian Skin
            </h2>

            <p style={styles.para}>
              This matters and I do not think it is discussed often enough in
              the context of cosmetic dermatology in India.
            </p>

            <p style={styles.para}>
              The majority of cosmetic energy-based treatments were developed
              and trialled on predominantly Western populations - Fitzpatrick
              Type I to III skin. North Indian patients typically have
              Fitzpatrick Type III to V skin, which behaves differently under
              light-based treatments. Laser resurfacing, intense pulsed light,
              and some radiofrequency treatments carry genuine pigmentation risk
              on darker skin tones when settings are not appropriately
              calibrated.
            </p>

            <p style={styles.para}>
              HIFU avoids this problem structurally. It uses focused mechanical
              heating of deep tissue - it does not target chromophores, does not
              rely on melanin absorption, and does not interact with the
              epidermis in the way light-based treatments do. The energy
              bypasses the skin surface and acts at the SMAS depth. This makes
              HIFU one of the more skin-type-agnostic tightening technologies
              available - the risk of surface pigmentation change is
              fundamentally lower.
            </p>

            <p style={styles.para}>
              We still assess each patient carefully before treatment. Skin
              thickness, subcutaneous fat distribution, and degree of laxity all
              inform which depth settings and energy parameters we use. There is
              no universal protocol, and we do not use one.
            </p>

            <h2 style={styles.heading2}>A Note on Where HIFU Is Offered</h2>

            <p style={styles.para}>
              Over the past few years, HIFU devices have appeared in beauty
              salons and general aesthetic centres across Kanpur and elsewhere.
              The name is the same. The technology often is not.
            </p>

            <p style={styles.para}>
              Clinical-grade HIFU machines are calibrated to deliver verified
              energy densities at specific tissue depths, confirmed by imaging
              transducers. Consumer or salon-grade machines frequently cannot
              deliver energy at the 4.5mm SMAS depth - which is the entire point
              of the procedure. A treatment that only reaches 1.5mm is a surface
              skin treatment, not a structural one. You may feel something. You
              may not see much.
            </p>

            <p style={styles.para}>
              The training and judgment of the clinician matters equally.
              Incorrect depth selection, wrong energy parameters, or treating a
              patient who is not a suitable candidate - these produce either
              poor results or, in inexperienced hands, complications. This is
              not a treatment to choose based on price alone.
            </p>

            {/* ─── FAQ Block ─────────────────────────────────────── */}
            <div
              style={{
                marginTop: "3rem",
                borderTop: "1px solid rgba(199,141,107,0.2)",
                paddingTop: "2rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
                  fontWeight: 600,
                  color: "#3D2B1F",
                  marginBottom: "1.5rem",
                }}
              >
                Frequently Asked Questions About HIFU
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  {
                    q: "How many HIFU sessions will I need?",
                    a: "Most patients with mild to moderate laxity see meaningful improvement after a single session. We reassess at the 3-month mark, when collagen response is becoming visible. Some patients benefit from a second session at 6 months, but this is not a standard recommendation - it depends on individual response and the degree of change present. We will not suggest a second session unless it is genuinely warranted.",
                  },
                  {
                    q: "Can HIFU be combined with Botox or fillers?",
                    a: "Yes. HIFU addresses structural laxity, Botox addresses dynamic expression lines, and fillers address volume loss - these are different problems requiring different solutions, and they do not interfere with each other. Many patients benefit from a combined approach. We plan this in consultation, not as a default package, based on what your face actually needs.",
                  },
                  {
                    q: "How is HIFU different from radiofrequency (RF) tightening?",
                    a: "Radiofrequency treatments typically work at 1.5 to 2mm depth in the dermis. They are effective for surface skin quality - fine lines, texture, mild tightening. HIFU goes deeper and targets the SMAS layer at 4.5mm. For genuine structural lifting, HIFU reaches tissue that RF generally does not. For surface skin quality, RF treatments may complement HIFU well.",
                  },
                  {
                    q: "What should I avoid after a HIFU session?",
                    a: "For 24 to 48 hours after treatment: avoid direct sun exposure, high heat environments (saunas, steam rooms, hot yoga), and vigorous physical exercise. Use SPF 50 sunscreen for at least 2 weeks post-treatment. We provide full post-care instructions at the clinic. Most patients return to normal daily activity the same day.",
                  },
                  {
                    q: "Is HIFU safe during pregnancy or breastfeeding?",
                    a: "No - HIFU is not recommended during pregnancy or while breastfeeding. Wait until breastfeeding is complete. We also recommend allowing 3 to 6 months post-partum for skin to stabilise before assessing laxity, since skin quality and structure change significantly during the post-pregnancy hormonal recovery period.",
                  },
                  {
                    q: "How much does HIFU cost at SKIN@Mantraa Kanpur?",
                    a: "HIFU pricing depends on the treatment area - full face and neck, face only, lower face only, décolletage, or a combination. Cost varies accordingly. We do not quote over WhatsApp because the appropriate treatment area is determined after a proper facial assessment. Please book a consultation (₹600) and we will give you complete pricing and a clear treatment plan at that visit.",
                  },
                ].map(({ q, a }, i) => (
                  <details
                    key={i}
                    style={{
                      border: "1px solid rgba(199,141,107,0.2)",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <summary
                      style={{
                        padding: "1rem 1.25rem",
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#3D2B1F",
                        background: "#f8f7f4",
                        cursor: "pointer",
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.75rem",
                      }}
                    >
                      {q}
                      <span
                        aria-hidden="true"
                        style={{
                          color: "#C78D6B",
                          fontWeight: 400,
                          fontSize: "1.25rem",
                          lineHeight: 1,
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </summary>
                    <p
                      style={{
                        padding: "0.875rem 1.25rem 1rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.97rem",
                        lineHeight: 1.8,
                        color: "#444",
                        margin: 0,
                      }}
                    >
                      {a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* ─── Blog CTA ───────────────────────────────────────── */}
            <div
              style={{
                background: "#3D2B1F",
                borderRadius: "14px",
                padding: "2rem 1.75rem",
                marginTop: "2.5rem",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#FDF6EC",
                  marginBottom: "0.5rem",
                }}
              >
                Book a HIFU Consultation at SKIN@Mantraa, Kanpur
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "rgba(253,246,236,0.7)",
                  marginBottom: "1rem",
                  lineHeight: 1.7,
                }}
              >
                Not sure if HIFU is right for you? Come in. Dr. Bhura will
                assess your skin, tell you honestly what to expect, and plan
                only what you actually need. No upselling. No pressure.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.9rem",
                  color: "#C78D6B",
                  marginBottom: "0.25rem",
                }}
              >
                +91 73830 79825 &nbsp;·&nbsp; WhatsApp: +91 98380 00024
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  color: "rgba(253,246,236,0.4)",
                  marginTop: "0.25rem",
                }}
              >
                Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur 208002
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  justifyContent: "center",
                  marginTop: "1.25rem",
                }}
              >
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ borderRadius: "10px" }}
                >
                  Book Consultation
                </Link>
                <Link
                  href="/services/anti-aging"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.65rem 1.4rem",
                    borderRadius: "10px",
                    border: "1px solid rgba(199,141,107,0.35)",
                    color: "#C78D6B",
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Anti-Aging Services
                </Link>
              </div>
            </div>

            {/* ─── Author Bio ─────────────────────────────────────── */}
            <p
              style={{
                marginTop: "2rem",
                fontSize: "0.82rem",
                fontFamily: "var(--font-body)",
                color: "#888",
                borderTop: "1px solid rgba(199,141,107,0.15)",
                paddingTop: "1rem",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              Dr. Mamta Bhura, MBBS MD Dermatology (IMS BHU), has 26 years of
              clinical experience in Kanpur. She is a member of the Indian
              Medical Association, IADVL, and the Cosmetology Society of India.
              SKIN@Mantraa is located at Bungalow No. 4, 113/196, Swaroop Nagar,
              Kanpur 208002.
            </p>

            {/* ─── Back Link ──────────────────────────────────────── */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(199,141,107,0.15)",
              }}
            >
              <Link
                href="/skin-guide"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.88rem",
                  color: "#C4704E",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                ← Back to Skin Guide
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dr. Mamta Bhura — Best Female Dermatologist in Kanpur | SKIN@Mantraa",
  description:
    "Dr. Mamta Bhura — MBBS, MD Dermatology (IMS BHU). 26+ years clinical experience. Kanpur's #1 ranked dermatologist by ThreeBestRated. Female dermatologist specialising in laser, anti-aging, acne, and hair treatments for Indian skin.",
  keywords: [
    "Dr Mamta Bhura Kanpur",
    "female dermatologist Kanpur",
    "best dermatologist Kanpur",
    "Dr Mamta Bhura dermatologist",
    "MD dermatology IMS BHU Kanpur",
    "skin specialist Kanpur",
    "cosmetologist Kanpur",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/about/dr-mamta-bhura",
  },
  openGraph: {
    title: "Dr. Mamta Bhura — Best Female Dermatologist in Kanpur",
    description:
      "Dr. Mamta Bhura — MD Dermatology, IMS BHU. 26+ years. Kanpur's #1 ThreeBestRated dermatologist. Female dermatologist and cosmetologist at SKIN@Mantraa, Swaroop Nagar.",
    url: "https://skinmantraa.in/about/dr-mamta-bhura",
    type: "profile",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const doctorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://skinmantraa.in/about/dr-mamta-bhura#doctor",
      name: "Dr. Mamta Bhura",
      honorificPrefix: "Dr.",
      honorificSuffix: "MBBS, MD (Dermatology)",
      gender: "Female",
      jobTitle: "Dermatologist and Cosmetologist",
      description:
        "Dr. Mamta Bhura is Kanpur's leading female dermatologist and cosmetologist with 26+ years of clinical experience. She completed MBBS and MD in Dermatology from the Institute of Medical Sciences, Banaras Hindu University (IMS BHU). She is a member of IMA, IADVL, and CDSI, and has been ranked #1 dermatologist in Kanpur by ThreeBestRated.in.",
      url: "https://skinmantraa.in/about/dr-mamta-bhura",
      medicalSpecialty: ["Dermatology", "Cosmetology"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Institute of Medical Sciences, Banaras Hindu University (IMS BHU)",
        address: { "@type": "PostalAddress", addressLocality: "Varanasi", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      },
      memberOf: [
        { "@type": "Organization", name: "Indian Medical Association", alternateName: "IMA" },
        { "@type": "Organization", name: "Indian Association of Dermatologists, Venereologists and Leprologists", alternateName: "IADVL" },
        { "@type": "Organization", name: "Cosmetology Society of India", alternateName: "CDSI" },
      ],
      worksFor: {
        "@type": "MedicalBusiness",
        "@id": "https://skinmantraa.in/#clinic",
        name: "SKIN@Mantraa",
        url: "https://skinmantraa.in",
      },
      knowsAbout: [
        "Laser Hair Removal", "Acne Treatment", "Acne Scar Treatment", "Dermapen 4 Microneedling",
        "Anti-Aging", "Botox", "Dermal Fillers", "Thread Lift", "HIFU Skin Tightening",
        "Hair Restoration", "PRP Therapy", "GFC Treatment", "Mesotherapy",
        "Vitiligo", "Psoriasis", "Melasma", "Eczema",
        "Chemical Peels", "Tattoo Removal", "Carbon Laser Facial",
        "Pigmentation Treatment", "Indian Skin Dermatology", "Fitzpatrick III-V Skin"
      ],
      sameAs: [
        "https://www.practo.com/kanpur/doctor/mamta-bhura-dermatologist",
        "https://www.justdial.com/Kanpur/Dr-Mamta-Bhura-Near-Domino-s-Swaroop-Nagar/0512PX512-X512-160830213024-J7A4_BZDET/reviews",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are Dr. Mamta Bhura's qualifications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Mamta Bhura holds an MBBS and MD in Dermatology from the Institute of Medical Sciences, Banaras Hindu University (IMS BHU) — one of India's most prestigious medical institutions. She is a member of the Indian Medical Association (IMA), IADVL, and the Cosmetology Society of India (CDSI).",
          },
        },
        {
          "@type": "Question",
          name: "How many years of experience does Dr. Mamta Bhura have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Mamta Bhura has 26+ years of clinical experience in dermatology and cosmetology. She previously served as Consultant at Kaya Skin Clinic, New Delhi, before establishing SKIN@Mantraa in Kanpur's Swaroop Nagar.",
          },
        },
        {
          "@type": "Question",
          name: "Is Dr. Mamta Bhura a female dermatologist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dr. Mamta Bhura is a female dermatologist and cosmetologist. She is one of Kanpur's most experienced female skin specialists, and many patients — particularly women — specifically seek a female dermatologist for consultations involving skin, hair, and cosmetic concerns.",
          },
        },
        {
          "@type": "Question",
          name: "What does Dr. Mamta Bhura specialise in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Bhura specialises in: laser treatments (Nd:YAG, diode, IPL), anti-aging procedures (Botox, fillers, thread lift, HIFU), acne and scar treatment (Dermapen 4, chemical peels, TCA cross), hair restoration (PRP, GFC, mesotherapy), and medical dermatology (vitiligo, psoriasis, melasma, eczema). She has particular expertise in treating Fitzpatrick Type III–V Indian skin.",
          },
        },
        {
          "@type": "Question",
          name: "Is Dr. Mamta Bhura verified on Practo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dr. Mamta Bhura is verified on Practo and Justdial, with a 4.8-star rating. She has been ranked #1 dermatologist in Kanpur by ThreeBestRated.in — an independent ranking organisation that evaluates reputation, credibility, and experience.",
          },
        },
      ],
    },
  ],
};

const CREDENTIALS = [
  { label: "Degree", value: "MBBS, MD in Dermatology" },
  { label: "Institution", value: "Institute of Medical Sciences, BHU (IMS BHU)" },
  { label: "Experience", value: "26+ years clinical practice" },
  { label: "Specialisation", value: "Dermatology & Cosmetology" },
  { label: "Previous Role", value: "Consultant Dermatologist, Kaya Skin Clinic, New Delhi" },
  { label: "Current Role", value: "Director & Consultant, SKIN@Mantraa, Kanpur" },
];

const MEMBERSHIPS = [
  { short: "IMA", full: "Indian Medical Association" },
  { short: "IADVL", full: "Indian Association of Dermatologists, Venereologists and Leprologists" },
  { short: "CDSI", full: "Cosmetology Society of India" },
];

const RECOGNITION = [
  { title: "#1 Dermatologist in Kanpur", source: "ThreeBestRated.in — Independent Ranking" },
  { title: "4.8★ Rating", source: "Practo — Verified Patient Reviews" },
  { title: "4.8★ Rating", source: "Justdial — Verified Reviews" },
  { title: "451+ Patient Reviews", source: "Across Practo, Google, and Justdial" },
];

export default function DrMamtaBhuraPage() {
  const faqs = (doctorSchema["@graph"][1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }} />
      <Header />
      <main style={{ background: "#FDF6EC" }}>

        {/* ── Hero ── */}
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 100%)" }}>
          <div className="max-w-4xl mx-auto">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C78D6B", marginBottom: "1.25rem" }}>
              <span style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
              Dermatologist Profile
            </span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5.5vw, 4rem)", fontWeight: 600, lineHeight: 1.1, color: "#3D2B1F", letterSpacing: "-0.025em", marginBottom: "0.75rem" }}>
              Dr. Mamta Bhura
            </h1>
            <p style={{ fontFamily: "var(--font-accent)", fontSize: "1.1rem", color: "#C4704E", fontWeight: 600, letterSpacing: "0.02em", marginBottom: "1.5rem" }}>
              MBBS, MD Dermatology (IMS BHU) · Female Dermatologist · 26+ Years
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", lineHeight: 1.8, color: "#5C4033", maxWidth: "600px", marginBottom: "2rem" }}>
              Kanpur&apos;s most experienced female dermatologist and cosmetologist. Rated #1 by ThreeBestRated.in. 451+ verified patient reviews. Director of SKIN@Mantraa, Swaroop Nagar — Kanpur&apos;s premier clinical dermatology practice.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "#C4704E", color: "#ffffff", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                Book Consultation — ₹600
              </Link>
              <Link href="/dermatologist-kanpur" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#3D2B1F", border: "1.5px solid rgba(61,43,31,0.25)", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                Clinic Overview
              </Link>
            </div>
          </div>
        </section>

        {/* ── Credentials ── */}
        <section style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "2rem" }}>
              Credentials & Training
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              <div>
                {CREDENTIALS.map(({ label, value }) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "0.75rem", borderBottom: "1px solid rgba(199,141,107,0.15)", padding: "0.9rem 0" }}>
                    <span style={{ fontFamily: "var(--font-accent)", fontSize: "0.78rem", fontWeight: 700, color: "#8C6F5E", textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: "0.1rem" }}>{label}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "#2d2d2d", lineHeight: 1.5 }}>{value}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.25rem" }}>Professional Memberships</h3>
                {MEMBERSHIPS.map(({ short, full }) => (
                  <div key={short} style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(199,141,107,0.15)" }}>
                    <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.9rem", fontWeight: 700, color: "#C4704E", marginBottom: "0.2rem" }}>{short}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#5C4033", lineHeight: 1.5 }}>{full}</p>
                  </div>
                ))}
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "#3D2B1F", margin: "1.75rem 0 1.25rem" }}>Recognition</h3>
                {RECOGNITION.map(({ title, source }) => (
                  <div key={title} style={{ marginBottom: "0.9rem", paddingBottom: "0.9rem", borderBottom: "1px solid rgba(199,141,107,0.15)" }}>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "#3D2B1F", marginBottom: "0.15rem" }}>{title}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#8C6F5E" }}>{source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── About & Philosophy ── */}
        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.5rem" }}>
              26 Years of Clinical Practice in Kanpur
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", maxWidth: "700px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "#2d2d2d" }}>
                Dr. Mamta Bhura began her dermatology training at IMS BHU — one of India&apos;s most selective and prestigious medical institutions. After completing her MD in Dermatology, she joined Kaya Skin Clinic in New Delhi as a Consultant Dermatologist, gaining advanced exposure to clinical and cosmetic dermatology in a high-volume practice before returning to Kanpur to establish SKIN@Mantraa.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "#2d2d2d" }}>
                In 26+ years of full-time practice at SKIN@Mantraa, Dr. Bhura has treated thousands of patients across the full spectrum of dermatology — medical conditions (vitiligo, psoriasis, eczema, melasma), procedural and laser treatments, and cosmetic dermatology (Botox, fillers, thread lift, HIFU). She remains the sole practising dermatologist at the clinic — every procedure is performed or directly supervised by her.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "#2d2d2d" }}>
                Her practice is built on a specific principle: Indian skin — Fitzpatrick Type III to V — requires different treatment protocols than those developed for lighter skin types. Laser settings, chemical peel formulations, injectable techniques, and post-treatment care are all calibrated for the melanin density, healing patterns, and pigmentation risk specific to Indian skin. This is not marketing — it is what keeps patients safe and produces predictable results.
              </p>
            </div>
          </div>
        </section>

        {/* ── Specialisations ── */}
        <section style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "2rem" }}>
              Areas of Specialisation
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {[
                { heading: "Laser Treatments", items: ["Laser Hair Removal (Nd:YAG, Diode)", "Laser Pigmentation Treatment", "Tattoo Removal", "Carbon Laser Facial", "Skin Resurfacing"] },
                { heading: "Anti-Aging & Cosmetic", items: ["Botox (Botulinum Toxin)", "Dermal Fillers", "Thread Lift (PDO Threads)", "HIFU Skin Tightening", "Mesotherapy"] },
                { heading: "Acne & Skin Conditions", items: ["Acne Treatment (All Grades)", "Acne Scar Removal", "Dermapen 4 Microneedling", "Chemical Peels", "Melasma, Vitiligo, Psoriasis, Eczema"] },
                { heading: "Hair Restoration", items: ["PRP Therapy", "GFC (Growth Factor Concentrate)", "Hair Loss Diagnosis", "Scalp Mesotherapy", "Nutritional Deficiency Assessment"] },
              ].map(({ heading, items }) => (
                <div key={heading} style={{ background: "#FDF6EC", borderRadius: "12px", padding: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "#3D2B1F", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(199,141,107,0.2)" }}>{heading}</p>
                  {items.map((item) => (
                    <p key={item} style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#5C4033", lineHeight: 1.6, marginBottom: "0.4rem" }}>· {item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "2rem" }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((item, i) => (
              <details key={i} style={{ borderBottom: "1px solid rgba(199,141,107,0.2)", padding: "0.1rem 0" }}>
                <summary style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "#3D2B1F", cursor: "pointer", padding: "1.1rem 0", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  {item.name}
                  <span style={{ flexShrink: 0, fontSize: "1.2rem", color: "#C4704E", fontWeight: 300 }}>+</span>
                </summary>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "#2d2d2d", paddingBottom: "1.25rem" }}>{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "#3D2B1F", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#FDF6EC", lineHeight: 1.2, marginBottom: "1rem" }}>
              Consult Dr. Mamta Bhura
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(253,246,236,0.75)", lineHeight: 1.8, marginBottom: "2rem" }}>
              SKIN@Mantraa, Swaroop Nagar, Kanpur · ₹600 consultation fee · Monday–Saturday
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "#C4704E", color: "#ffffff", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                Book Appointment
              </Link>
              <a href={`tel:${BRAND.clinic.phone}`} style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#C78D6B", border: "1px solid rgba(199,141,107,0.4)", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                {BRAND.clinic.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

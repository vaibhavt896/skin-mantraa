import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Dermatologist in Kanpur — Dr. Mamta Bhura | SKIN@Mantraa",
  description:
    "Dr. Mamta Bhura is Kanpur's leading female dermatologist. MD Dermatology, IMS BHU. 26+ years experience. Rated #1 by ThreeBestRated. Advanced laser, anti-aging, acne, and hair treatments at SKIN@Mantraa, Swaroop Nagar.",
  keywords: [
    "dermatologist in Kanpur",
    "best dermatologist Kanpur",
    "Dr Mamta Bhura Kanpur",
    "skin specialist Kanpur",
    "cosmetologist Kanpur",
    "female dermatologist Kanpur",
    "skin doctor Kanpur",
    "best skin clinic Kanpur",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/dermatologist-kanpur",
  },
  openGraph: {
    title: "Best Dermatologist in Kanpur — Dr. Mamta Bhura | SKIN@Mantraa",
    description:
      "Dr. Mamta Bhura — MD Dermatology, IMS BHU. 26+ years. Rated #1 dermatologist in Kanpur by ThreeBestRated. Advanced skin, laser, and hair treatments at SKIN@Mantraa Swaroop Nagar.",
    url: "https://skinmantraa.in/dermatologist-kanpur",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": "https://skinmantraa.in/#clinic",
      name: "SKIN@Mantraa",
      url: "https://skinmantraa.in",
      telephone: BRAND.clinic.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff",
        addressLocality: "Kanpur",
        addressRegion: "Uttar Pradesh",
        postalCode: "208002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BRAND.clinic.coordinates.lat,
        longitude: BRAND.clinic.coordinates.lng,
      },
      medicalSpecialty: "Dermatology",
      founder: {
        "@type": "Physician",
        name: "Dr. Mamta Bhura",
        honorificPrefix: "Dr.",
        gender: "Female",
        jobTitle: "Dermatologist and Cosmetologist",
        alumniOf: { "@type": "CollegeOrUniversity", name: "Institute of Medical Sciences, Banaras Hindu University" },
        url: "https://skinmantraa.in/about/dr-mamta-bhura",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best dermatologist in Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Mamta Bhura at SKIN@Mantraa is widely recognised as one of Kanpur's most experienced dermatologists. She holds an MBBS and MD in Dermatology from IMS BHU, has 26+ years of clinical experience, and has been ranked #1 dermatologist in Kanpur by ThreeBestRated.in. She is a verified practitioner on Practo and Justdial with a 4.8-star rating.",
          },
        },
        {
          "@type": "Question",
          name: "Is Dr. Mamta Bhura a female dermatologist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dr. Mamta Bhura is a female dermatologist and cosmetologist with 26+ years of clinical practice in Kanpur. Many patients — particularly women — specifically seek a female dermatologist for skin, hair, and cosmetic consultations. Dr. Bhura practises exclusively at SKIN@Mantraa, Swaroop Nagar.",
          },
        },
        {
          "@type": "Question",
          name: "What treatments are available at SKIN@Mantraa Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa offers advanced laser treatments (Nd:YAG, Diode, IPL), anti-aging procedures (Botox, dermal fillers, thread lift, HIFU), acne and scar treatments (Dermapen 4, chemical peels, TCA cross), hair restoration (PRP, GFC, mesotherapy), and medical dermatology for vitiligo, psoriasis, melasma, eczema, and other skin conditions.",
          },
        },
        {
          "@type": "Question",
          name: "What is the consultation fee at SKIN@Mantraa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The consultation fee at SKIN@Mantraa is ₹600. Procedure costs vary by treatment type and number of sessions required. Contact the clinic directly for current pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Where is SKIN@Mantraa located in Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa is located at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur, UP 208002. Clinic hours: Monday–Friday 11AM–6PM, Saturday 12PM–6PM, Sunday 10AM–2PM.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book an appointment with Dr. Mamta Bhura?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call +91 73830 79825, WhatsApp +91 98380 00024, or fill the contact form at skinmantraa.in/contact. Walk-ins are welcome during clinic hours.",
          },
        },
      ],
    },
  ],
};

const SERVICES_LIST = [
  { id: "laser-treatments", label: "Laser Treatments", desc: "Hair removal, pigmentation, tattoo removal, Nd:YAG, diode laser" },
  { id: "anti-aging", label: "Anti-Aging & Cosmetics", desc: "Botox, dermal fillers, thread lift, HIFU skin tightening" },
  { id: "acne-scars", label: "Acne & Scar Treatment", desc: "Dermapen 4, chemical peels, TCA cross, acne management" },
  { id: "hair-restoration", label: "Hair Restoration", desc: "PRP therapy, GFC treatment, mesotherapy, hair loss diagnosis" },
  { id: "skin-conditions", label: "Skin Disease Treatment", desc: "Vitiligo, psoriasis, eczema, melasma, fungal infections" },
  { id: "cosmetic", label: "Cosmetic Dermatology", desc: "Carbon laser facial, hydrafacial, skin resurfacing, pigmentation" },
];

const TRUST_ITEMS = [
  { stat: "#1", label: "ThreeBestRated.in — Kanpur Dermatologist" },
  { stat: "26+", label: "Years of Clinical Experience" },
  { stat: "451+", label: "Verified Patient Reviews" },
  { stat: "MD", label: "Dermatology — IMS BHU (Top-ranked medical university)" },
];

export default function DermatologistKanpurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main style={{ background: "#FDF6EC" }}>

        {/* ── Hero ── */}
        <section
          className="pt-40 pb-20 px-4 sm:px-6 lg:px-8"
          style={{ background: "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 100%)" }}
        >
          <div className="max-w-4xl mx-auto">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C78D6B", marginBottom: "1.25rem" }}>
              <span style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
              Swaroop Nagar, Kanpur
            </span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5.5vw, 4rem)", fontWeight: 600, lineHeight: 1.1, color: "#3D2B1F", letterSpacing: "-0.025em", marginBottom: "1.5rem" }}>
              Best Dermatologist<br />
              <span style={{ color: "#C4704E" }}>in Kanpur</span>
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.8, color: "#5C4033", maxWidth: "600px", marginBottom: "2rem" }}>
              Dr. Mamta Bhura — MD Dermatology, IMS BHU — brings 26+ years of clinical expertise to every patient at SKIN@Mantraa. Kanpur&apos;s only ThreeBestRated #1 ranked dermatologist. Female dermatologist. Advanced clinical dermatology and cosmetology.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "#C4704E", color: "#ffffff", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                Book Consultation — ₹600
              </Link>
              <Link href="/about/dr-mamta-bhura" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#3D2B1F", border: "1.5px solid rgba(61,43,31,0.25)", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                Dr. Bhura&apos;s Profile
              </Link>
            </div>
          </div>
        </section>

        {/* ── Trust Stats ── */}
        <section style={{ background: "#3D2B1F", padding: "3rem 1.5rem" }}>
          <div className="max-w-5xl mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {TRUST_ITEMS.map(({ stat, label }) => (
              <div key={stat} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "#C78D6B", lineHeight: 1, marginBottom: "0.5rem" }}>{stat}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(253,246,236,0.8)", lineHeight: 1.5 }}>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About Dr. Bhura ── */}
        <section style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C78D6B", marginBottom: "1rem" }}>
              <span style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
              Meet Your Doctor
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#3D2B1F", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Dr. Mamta Bhura — Kanpur&apos;s Leading Female Dermatologist
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", maxWidth: "700px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "#2d2d2d" }}>
                Dr. Mamta Bhura completed her MBBS and MD in Dermatology from the Institute of Medical Sciences, Banaras Hindu University (IMS BHU) — one of India&apos;s most prestigious medical institutions. She has 26+ years of full-time clinical practice in Kanpur, making her one of the most experienced dermatologists in Uttar Pradesh.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "#2d2d2d" }}>
                She is a member of the Indian Medical Association (IMA), the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL), and the Cosmetology Society of India (CDSI). She previously served as Consultant at Kaya Skin Clinic, New Delhi, before establishing SKIN@Mantraa in Kanpur.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "#2d2d2d" }}>
                Dr. Bhura specialises in treating Fitzpatrick Type III–V Indian skin — customising all laser, chemical peel, and injectable protocols for Indian skin tones to minimise pigmentation risk and maximise results. She is one of the few dermatologists in Kanpur who offers clinical-grade HIFU, Dermapen 4, GFC hair treatment, and combination anti-aging approaches.
              </p>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {["MBBS, MD Dermatology", "IMS BHU Trained", "IMA Member", "IADVL Member", "CDSI Member", "ThreeBestRated #1", "26+ Years Experience", "Female Dermatologist"].map((tag) => (
                <span key={tag} style={{ padding: "0.3rem 0.9rem", background: "rgba(199,141,107,0.12)", color: "#5C4033", fontSize: "0.8rem", fontFamily: "var(--font-accent)", fontWeight: 600, borderRadius: "999px" }}>{tag}</span>
              ))}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/about/dr-mamta-bhura" style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#C4704E", textDecoration: "none", fontWeight: 600 }}>
                View full profile and credentials →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div className="max-w-5xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#3D2B1F", lineHeight: 1.2, marginBottom: "0.75rem" }}>
              Treatments at SKIN@Mantraa
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#8C6F5E", marginBottom: "2.5rem", maxWidth: "550px" }}>
              Advanced dermatology and cosmetology — all procedures performed or directly supervised by Dr. Bhura.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {SERVICES_LIST.map(({ id, label, desc }) => (
                <Link key={id} href={`/services/${id}`} style={{ display: "block", padding: "1.5rem", background: "#FFFFFF", borderRadius: "10px", border: "1px solid rgba(199,141,107,0.15)", textDecoration: "none", transition: "box-shadow 0.2s" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "#3D2B1F", marginBottom: "0.5rem" }}>{label}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#8C6F5E", lineHeight: 1.6 }}>{desc}</p>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <Link href="/services" style={{ display: "inline-block", padding: "0.8rem 2rem", background: "transparent", color: "#3D2B1F", border: "1.5px solid rgba(61,43,31,0.2)", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── Clinic Hours + Location ── */}
        <section style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.25rem" }}>Clinic Location</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "#5C4033" }}>
                Bungalow No. 4, 113/196<br />
                Swaroop Nagar<br />
                Behind Hotel Royal Cliff<br />
                Kanpur, Uttar Pradesh 208002
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#8C6F5E", marginTop: "0.75rem" }}>
                Easily accessible from Kakadeo, Civil Lines, Kidwai Nagar, Govind Nagar, and Rawatpur.
              </p>
              <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href={`tel:${BRAND.clinic.phone}`} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#C4704E", textDecoration: "none" }}>📞 {BRAND.clinic.phoneDisplay}</a>
                <a href={`https://wa.me/${BRAND.clinic.whatsapp}`} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#C4704E", textDecoration: "none" }}>💬 WhatsApp: +91 98380 00024</a>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.25rem" }}>Clinic Hours</h2>
              {[
                { day: "Monday – Friday", time: "11:00 AM – 6:00 PM" },
                { day: "Saturday", time: "12:00 PM – 6:00 PM" },
                { day: "Sunday", time: "10:00 AM – 2:00 PM" },
              ].map(({ day, time }) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(199,141,107,0.15)", padding: "0.75rem 0" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#3D2B1F", fontWeight: 600 }}>{day}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#8C6F5E" }}>{time}</span>
                </div>
              ))}
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#8C6F5E", marginTop: "1rem" }}>Walk-ins welcome during clinic hours.</p>
            </div>
          </div>
        </section>

        {/* ── Patient Outcomes ── */}
        <section style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C78D6B", marginBottom: "1rem" }}>
              <span style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
              Real Patients, Real Results
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#3D2B1F", lineHeight: 1.2, marginBottom: "2rem" }}>
              What Patients Experience at SKIN@Mantraa
            </h2>
            <div style={{ display: "grid", gap: "2rem" }}>
              {[
                {
                  concern: "Chronic Melasma",
                  story: "A 45-year-old woman from Civil Lines had been applying fairness creams for six years without result. After a Wood's lamp assessment confirming epidermal melasma, Dr. Bhura prescribed a 4-week priming protocol, followed by two glycolic acid peels and daily SPF 50+ PA+++ sunscreen. Within three months, her melasma had lightened to a level she had not seen in a decade. The key difference: a structured dermatologist-designed protocol instead of OTC products.",
                },
                {
                  concern: "Female Pattern Hair Loss",
                  story: "A 32-year-old teacher noticed significant diffuse thinning over two years. A baseline blood panel at SKIN@Mantraa revealed critically low ferritin and Vitamin D3 — both corrected with supplementation. Combined with four sessions of PRP therapy, she saw a measurable reduction in daily hair fall by session two and visible density improvement at the four-month mark. Without the blood panel, the PRP alone would have produced limited results.",
                },
                {
                  concern: "Acne at 29",
                  story: "A 29-year-old professional came in convinced she needed laser treatment for her hormonal acne, having been told this by two other clinics. Dr. Bhura's assessment showed active inflammatory acne requiring medical management first — oral therapy for 8 weeks, followed by a salicylic acid peel course once stable. Within three months, her skin was clearer than it had been since her teens. The laser conversation was deferred indefinitely because it was not needed.",
                },
                {
                  concern: "Vitiligo — Child Patient",
                  story: "An 8-year-old with newly diagnosed, spreading non-segmental vitiligo was brought to SKIN@Mantraa by her parents. Early intervention with NB-UVB phototherapy (2 sessions per week) combined with topical tacrolimus produced visible repigmentation on the face and hands within 5 months of treatment. Earlier treatment consistently produces better outcomes in vitiligo — a fact Dr. Bhura communicates clearly at the first consultation.",
                },
              ].map(({ concern, story }) => (
                <div key={concern} style={{ padding: "1.75rem", background: "#FDF6EC", borderRadius: "12px", borderLeft: "3px solid #C78D6B" }}>
                  <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.75rem", fontWeight: 700, color: "#C4704E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>{concern}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "#2d2d2d" }}>{story}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#8C6F5E", marginTop: "1.5rem", fontStyle: "italic" }}>
              Patient details anonymised. Results are individual and vary based on condition, compliance, and treatment plan.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "2rem" }}>
              Frequently Asked Questions
            </h2>
            {(pageSchema["@graph"][1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((item, i) => (
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

        {/* ── Final CTA ── */}
        <section style={{ background: "#3D2B1F", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#FDF6EC", lineHeight: 1.2, marginBottom: "1rem" }}>
              Book Your Consultation
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(253,246,236,0.75)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Consultation with Dr. Mamta Bhura: ₹600. Monday–Saturday. Walk-ins welcome.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "#C4704E", color: "#ffffff", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                Book Consultation
              </Link>
              <a href={`tel:${BRAND.clinic.phone}`} style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#C78D6B", border: "1px solid rgba(199,141,107,0.4)", borderRadius: "6px", fontFamily: "var(--font-accent)", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}>
                Call Clinic
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

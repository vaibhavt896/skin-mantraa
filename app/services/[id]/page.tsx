"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface ServiceStep {
  step: string;
  title: string;
  text: string;
}

interface ServiceFaq {
  q: string;
  a: string;
}

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
}

// Detailed service content map
// Map service IDs to their corresponding image from the assets folder
const SERVICE_IMAGE_MAP: Record<string, string> = {
  "laser-treatments": "/optimized/Laser%20Treatment%20Image.webp",
  "anti-aging": "/optimized/Anti-Aging%20%26%20Rejuvenation.webp",
  "acne-scars": "/optimized/Acne%20%26%20Scar%20Solutions.webp",
  "hair-restoration": "/optimized/Hair%20Restoration.webp",
  "skin-conditions": "/optimized/Skin%20Disease%20Treatment.webp",
  "cosmetic": "/optimized/Cosmetic%20Enhancements.webp",
};

const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "laser-treatments": {
    title: "Advanced Laser Treatments",
    subtitle: "Precision Light Therapy for Flawless Skin",
    description: "When skin concerns need precision, laser-based treatments offer control, consistency, and visible improvement. This category includes advanced systems for unwanted hair, melasma, freckles, post-acne marks, sun damage, enlarged pores, and tattoo removal. Depending on your concern, we select the right laser modality to target the problem while protecting surrounding skin — especially important for Indian skin tones.",
    benefits: [
      "Permanent reduction of unwanted hair",
      "Safe and effective tattoo removal",
      "Minimized appearance of scars and large pores",
      "Correction of deep-seated pigmentation",
      "Improved skin texture and tone"
    ],
    process: [
      { step: "01", title: "Assessment", text: "Skin type analysis and patch test to determine optimal laser settings." },
      { step: "02", title: "Preparation", text: "Cleaning the target area and applying cooling gel or numbing cream if required." },
      { step: "03", title: "Treatment", text: "Precise application of laser energy by Dr. Bhura or trained technicians under her supervision." },
      { step: "04", title: "Aftercare", text: "Application of soothing balms and detailed sun-protection guidelines." }
    ],
    faqs: [
      { q: "Is laser hair removal painful?", a: "Most patients describe it as a snapping rubber band sensation. We use advanced cooling systems to ensure maximum comfort." },
      { q: "How many sessions are needed?", a: "Typically 6-8 sessions for hair removal, and 3-5 sessions for skin resurfacing, depending on the concern." }
    ]
  },
  "anti-aging": {
    title: "Anti-Aging & Rejuvenation",
    subtitle: "Restore Your Natural Youthful Radiance",
    description: "Our anti-aging treatments are designed to soften lines, improve texture, support collagen, and bring back a fresher look without changing what makes your face yours. Whether you want subtle wrinkle softening, deeper skin hydration, lifted contours, or regenerative skin support, we build the plan around your age, skin condition, and aesthetic goals.",
    benefits: [
      "Smoothing of fine lines and deep wrinkles",
      "Restoration of lost facial volume in cheeks and lips",
      "Lifted jawline and improved facial contours",
      "Stimulation of natural collagen production",
      "Immediate results with minimal downtime"
    ],
    process: [
      { step: "01", title: "Consultation", text: "Mapping facial anatomy and discussing aesthetic goals." },
      { step: "02", title: "Customization", text: "Selecting the precise grade of filler or Botox units needed." },
      { step: "03", title: "Procedure", text: "Strategic injections to achieve symmetry and lift." },
      { step: "04", title: "Review", text: "A follow-up assessment after 2 weeks to ensure perfect results." }
    ],
    faqs: [
      { q: "Will I look 'frozen'?", a: "No. Dr. Bhura's philosophy is micro-dosing to preserve natural movement while softening lines." },
      { q: "How long do fillers last?", a: "Depending on the product, results can last from 6 to 18 months." }
    ]
  },
  "acne-scars": {
    title: "Acne, Scars & Pores",
    subtitle: "Clear Skin is Possible at Any Age",
    description: "Acne leaves more than breakouts behind — it often leaves redness, marks, scars, and uneven texture that can affect confidence long after the acne is gone. This section focuses on controlled, step-by-step improvement using treatments that help clear congestion, smooth scars, and refine skin texture over time.",
    benefits: [
      "Elimination of active acne-causing bacteria",
      "Reduction of post-acne pigmentation and redness",
      "Leveling of deep 'pitted' acne scars",
      "Regulation of excess oil production",
      "Overall smoother and clearer skin texture"
    ],
    process: [
      { step: "01", title: "Diagnosis", text: "Identifying the root cause—hormonal, bacterial, or lifestyle." },
      { step: "02", title: "Exfoliation", text: "Clearing clogged pores through medical-grade extractions or peels." },
      { step: "03", title: "Repair", text: "Treating deep scars with microneedling or TCA Cross techniques." },
      { step: "04", title: "Maintenance", text: "A personalized home-care regimen to prevent future breakouts." }
    ],
    faqs: [
      { q: "Can old acne scars be removed?", a: "Yes, even years-old scars can be significantly improved with current medical techniques." },
      { q: "Are chemical peels safe?", a: "We use pH-controlled peels that are specifically safe for Indian skin to avoid hyperpigmentation." }
    ]
  },
  "hair-restoration": {
    title: "Hair Restoration",
    subtitle: "Scientifically Proven Solutions for Hair Growth",
    description: "Hair loss is rarely just cosmetic — it is often emotional, frustrating, and deeply personal. Our hair restoration treatments are selected to support weaker follicles, improve scalp health, and encourage better hair density where possible. We focus on realistic expectations, proper diagnosis, and a treatment plan that matches the pattern and cause of hair loss.",
    benefits: [
      "Significant reduction in hair fall within 3 sessions",
      "Thickening of existing hair shafts",
      "Stimulation of dormant hair follicles",
      "Safe, natural procedure using your own blood",
      "Effective for both male and female pattern baldness"
    ],
    process: [
      { step: "01", title: "Blood Draw", text: "Extracting a small amount of your own blood—similar to a lab test." },
      { step: "02", title: "Centrifugation", text: "Spinning the blood to concentrate growth factors and platelets." },
      { step: "03", title: "Activation", text: "Preparing the concentrate for maximum regenerative potential." },
      { step: "04", title: "Injection", text: "Micro-injections into the scalp areas with thinning hair." }
    ],
    faqs: [
      { q: "Does PRP hurt?", a: "We use ultra-fine needles and cooling devices to make the procedure very tolerable." },
      { q: "When will I see results?", a: "Initial reduction in hair fall is seen after 2 sessions; new growth is usually visible by session 4." }
    ]
  },
  "skin-conditions": {
    title: "Skin Disease Treatment",
    subtitle: "Expert Medical Care for Chronic Skin Issues",
    description: "This section brings clinical dermatology to the forefront. For skin conditions that are recurring, uncomfortable, or difficult to manage on your own, our approach begins with accurate diagnosis and continues with a treatment plan that is practical, safe, and medically sound.",
    benefits: [
      "Accurate clinical diagnosis of complex skin diseases",
      "Personalized medication protocols",
      "Advanced phototherapy options for Vitiligo and Psoriasis",
      "Management of chronic itching and inflammation",
      "Guideline-based care for pediatric skin issues"
    ],
    process: [
      { step: "01", title: "History", text: "Detailed review of flare-ups, triggers, and past treatments." },
      { step: "02", title: "Examination", text: "Close clinical inspection, sometimes including dermoscopy." },
      { step: "03", title: "Plan", text: "Prescribing a mix of topical, oral, or light-based therapies." },
      { step: "04", title: "Follow-up", text: "Regular monitoring to manage chronic conditions safely." }
    ],
    faqs: [
      { q: "Is Vitiligo curable?", a: "While 'cure' is complex, most cases can be successfully stabilized and re-pigmented." },
      { q: "Can Psoriasis be managed without steroids?", a: "Yes, we use many steroid-sparing agents and modern biologics for long-term safety." }
    ]
  },
  "cosmetic": {
    title: "Cosmetic Enhancements",
    subtitle: "Refining Your Natural Beauty with Science",
    description: "Some concerns are not disease — they are refinement. This category is built for patients who want to even out skin tone, reduce visible pigmentation, soften stubborn spots, and improve overall complexion quality. The goal is not to bleach or over-treat the skin, but to make it look clearer, healthier, and more balanced.",
    benefits: [
      "Removal of stubborn dark spots and melasma",
      "Complete removal of unwanted tattoos",
      "Brighter, more even skin tone",
      "Correction of sun-damaged skin",
      "Instant glow for special occasions"
    ],
    process: [
      { step: "01", title: "Analysis", text: "Determining the depth and type of pigmentation or ink." },
      { step: "02", title: "Protection", text: "Ensuring skin barrier health before aggressive treatment." },
      { step: "03", title: "Procedure", text: "Light-based or chemical enhancement of skin tone." },
      { step: "04", title: "Regimen", text: "Maintenance using medical-grade serums and sunscreen." }
    ],
    faqs: [
      { q: "How long does tattoo removal take?", a: "It varies by color and depth, typically requiring 5-10 sessions." },
      { q: "Can melasma return?", a: "Melasma is a chronic condition; we provide the tools to keep it managed and invisible." }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const detail = SERVICE_DETAILS[id];

  if (!detail) {
    notFound();
  }

  return (
    <>
      <Header />
      <main style={{ background: "#FDF6EC" }}>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 100%)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="mb-6">
                <Link href="/services" className="text-brand-rosegold text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity">
                  ← Back to Services
                </Link>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-semibold italic text-brand-espresso mb-6">
                {detail.title}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-brand-terracotta font-accent tracking-wide mb-8">
                {detail.subtitle}
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-brand-walnut max-w-3xl leading-relaxed">
                {detail.description}
              </motion.p>
            </motion.div>

            {/* Hero Image */}
            {SERVICE_IMAGE_MAP[id] && (
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "21/9" }}
              >
                <Image
                  src={SERVICE_IMAGE_MAP[id]}
                  alt={`${detail.title} treatment at SKIN@Mantraa`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-cover"
                  quality={90}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjVFNkQzIi8+PC9zdmc+"
                />
                {/* Subtle bottom gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-0 w-1/3 h-full opacity-10 pointer-events-none">
             <div className="w-full h-full bg-brand-rosegold blur-[100px] rounded-full" />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-semibold italic text-brand-espresso mb-8">Why Choose This Treatment?</h2>
                <ul className="space-y-6">
                  {detail.benefits.map((benefit: string, i: number) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-champagne flex items-center justify-center shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4704E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span className="text-brand-walnut text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                {SERVICE_IMAGE_MAP[id] ? (
                  <Image
                    src={SERVICE_IMAGE_MAP[id]}
                    alt={`${detail.title} — results at SKIN@Mantraa`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    className="object-cover"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjVFNkQzIi8+PC9zdmc+"
                  />
                ) : (
                  <div className="absolute inset-0 bg-brand-champagne" />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-semibold italic text-brand-espresso mb-4">The Experience</h2>
              <p className="text-brand-walnut max-w-2xl mx-auto">From the moment you step in, Dr. Bhura ensures your journey is clinical, comfortable, and clear.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {detail.process.map((p, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-champagne/30">
                  <span className="text-4xl font-display font-bold text-brand-rosegold/20 mb-4 block">{p.step}</span>
                  <h3 className="text-xl font-display font-semibold text-brand-espresso mb-3">{p.title}</h3>
                  <p className="text-brand-walnut text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-display font-semibold italic text-brand-espresso mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {detail.faqs.map((faq, i) => (
                <div key={i} className="border-b border-brand-champagne pb-8">
                  <h3 className="text-xl font-display font-semibold text-brand-espresso mb-4">{faq.q}</h3>
                  <p className="text-brand-walnut leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-brand-espresso text-brand-cream text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-semibold italic mb-8">Ready to see the results for yourself?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?concern=${id}`} className="btn-primary">Book Consultation</Link>
              <Link href="/results" className="btn-ghost !text-brand-cream !border-brand-cream/30 hover:!bg-brand-cream/10">View Results</Link>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-cream rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-cream rounded-full" />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

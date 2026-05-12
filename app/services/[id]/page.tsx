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
  candidateFor: string[];
  benefits: string[];
  process: ServiceStep[];
  expectedResults: string;
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
    candidateFor: [
      "Laser treatments are most effective for adults above 18 who have completed their primary hair growth cycles. For laser hair removal, candidates with a noticeable contrast between hair pigment and skin tone see the fastest results. Fitzpatrick Type III–V Indian skin responds well to Nd:YAG 1064nm laser — the safest choice for darker skin tones — which is the primary system used at SKIN@Mantraa. Treatment areas include face, underarms, arms, legs, bikini line, and back.",
      "For pigmentation correction and tattoo removal, suitable candidates include those with stable melasma, post-acne dark spots, sun damage, freckles, or tattoo ink they want removed. A patch test and consultation are conducted before any laser session to assess skin type, identify contraindications, and calibrate settings appropriately for your skin and concern.",
      "Laser treatments are generally not suitable during pregnancy, active skin infections, or within 2 weeks of significant sun exposure. Patients on blood thinners, isotretinoin (Roaccutane), or photosensitising medications require a structured pause before treatment. Dr. Bhura reviews all medications and medical history at the initial consultation before recommending any laser protocol.",
    ],
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
    expectedResults: "Laser hair removal delivers 80–90% permanent hair reduction after a full course of 6–8 sessions — most patients see 50–60% reduction by session 3. For pigmentation, noticeable lightening is typically visible after 2–3 sessions. Tattoo removal fades ink progressively; most tattoos require 6–10 sessions depending on ink colour and depth. Skin texture improvements from laser resurfacing are visible within 4–6 weeks and continue improving over 3 months.",
    faqs: [
      { q: "Is laser hair removal painful?", a: "Most patients describe it as a mild snapping or warming sensation. The laser handpiece has built-in cooling that reduces surface discomfort. Topical anaesthetic is available for facial treatments. There is no downtime — patients return to normal activities immediately." },
      { q: "How many sessions does laser hair removal take?", a: "Most patients need 6 to 8 sessions spaced 4 to 6 weeks apart for significant and lasting hair reduction. This follows the natural hair growth cycle — only follicles in the active (anagen) phase are destroyed per session. After completing the course, 80 to 90% permanent hair reduction is typical." },
      { q: "Which laser is safe for Indian skin?", a: "For Fitzpatrick Type III–V Indian skin, we use Nd:YAG 1064nm and diode 810nm lasers — both have lower melanin absorption and are significantly safer for darker skin tones than alexandrite 755nm. Settings are calibrated per patient at every session." },
      { q: "Can laser treat pigmentation and dark spots?", a: "Yes. Q-switched Nd:YAG laser targets melanin in dark spots, melasma patches, and post-acne pigmentation. We also use laser for tattoo removal and skin resurfacing to improve texture and clarity." },
      { q: "What should I do before a laser session?", a: "Shave (not wax) the treatment area 24 hours before. Avoid sun exposure for 2 weeks prior. Arrive with clean, product-free skin. After each session, apply SPF 50+ sunscreen and avoid direct sun for 2 weeks." },
      { q: "How much does laser treatment cost in Kanpur?", a: "Laser treatment cost at SKIN@Mantraa is priced per session by treatment area. Multi-session packages are available. Book a consultation (₹600) for a personalised assessment and pricing based on your specific concern and areas." }
    ]
  },
  "anti-aging": {
    title: "Anti-Aging & Rejuvenation",
    subtitle: "Restore Your Natural Youthful Radiance",
    description: "Our anti-aging treatments are designed to soften lines, improve texture, support collagen, and bring back a fresher look without changing what makes your face yours. Whether you want subtle wrinkle softening, deeper skin hydration, lifted contours, or regenerative skin support, we build the plan around your age, skin condition, and aesthetic goals.",
    candidateFor: [
      "Botox is most effective for adults experiencing dynamic wrinkles — lines caused by repeated muscle movement — including forehead creases, frown lines between the brows, and crow's feet. Preventive Botox from the late 20s is increasingly popular to delay the permanent setting of expression lines. Botox does not treat volume loss or skin sagging, which require fillers, thread lift, or HIFU.",
      "Dermal fillers are appropriate for patients who have lost volume in the cheeks, temples, or under-eye area, or who have deepened nasolabial folds, marionette lines, or lip thinning. HIFU is best suited for patients with mild-to-moderate skin laxity on the face, jawline, or neck who want non-surgical lifting without injectables. Thread lift is ideal for moderate sagging where both lifting and collagen stimulation are needed.",
      "Anti-aging treatments are suitable from age 28 upward. All injectables require a face-to-face consultation to assess facial anatomy, muscle dynamics, skin laxity, and aesthetic goals before any treatment is planned. Pregnant patients, those on blood thinners, and patients with certain autoimmune conditions require special assessment before injectable treatment.",
    ],
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
    expectedResults: "Botox results become visible within 7–14 days and last 3–6 months; with regular treatment, longevity often increases over time as treated muscles become less hyperactive. Dermal filler results are immediate and last 9–18 months depending on the area and product used. Thread lift provides visible lifting within 2–4 weeks with results lasting 12–18 months. HIFU results develop gradually over 3–6 months as new collagen forms, with tightening lasting up to 18 months.",
    faqs: [
      { q: "Will I look 'frozen' after Botox?", a: "No. Dr. Bhura's approach is precise micro-dosing to soften expression lines while preserving natural facial movement. Over-treatment is the cause of the 'frozen' look — not Botox itself. The goal is that you look rested and refreshed, not treated." },
      { q: "How long does Botox last?", a: "Botox typically lasts 3 to 6 months. With regular treatment, many patients find results last progressively longer as treated muscles become less hyperactive over time." },
      { q: "How long do dermal fillers last?", a: "Hyaluronic acid fillers last 9 to 18 months depending on the product, treatment area, and individual metabolism. Fillers in high-movement areas (lips) break down faster than those in lower-movement areas (cheeks, under-eye)." },
      { q: "What is the difference between Botox and fillers?", a: "Botox relaxes muscles that cause expression lines (forehead, frown lines, crow's feet). Fillers restore volume lost with age — in the cheeks, under-eye area, nasolabial folds, lips, and jawline. They treat different problems and are often used together for comprehensive rejuvenation." },
      { q: "Is HIFU better than Botox for anti-aging?", a: "They address different concerns. HIFU treats structural skin laxity — it tightens the SMAS layer, the same tissue a surgeon tightens during a facelift. Botox treats dynamic wrinkles caused by muscle movement. Thread lift addresses moderate skin sagging. Many patients benefit from a combination approach." },
      { q: "How much do anti-aging treatments cost in Kanpur?", a: "Botox is priced per unit used; fillers per syringe (1ml). Costs vary by area and degree of treatment needed. HIFU pricing depends on treatment area (full face, lower face, décolletage). Book a consultation (₹600) for a complete assessment and personalised pricing." }
    ]
  },
  "acne-scars": {
    title: "Acne, Scars & Pores",
    subtitle: "Clear Skin is Possible at Any Age",
    description: "Acne leaves more than breakouts behind — it often leaves redness, marks, scars, and uneven texture that can affect confidence long after the acne is gone. This section focuses on controlled, step-by-step improvement using treatments that help clear congestion, smooth scars, and refine skin texture over time.",
    candidateFor: [
      "Acne treatment is suitable for anyone with persistent or cyclical breakouts — whether hormonal, comedonal, or cystic — at any age. If over-the-counter products have not controlled your acne after 3 months of consistent use, a medical consultation is recommended. Active acne must be treated and stabilised before scar revision procedures can begin.",
      "Acne scar treatments — Dermapen 4 microneedling, chemical peels, TCA cross — are suitable for patients with stable acne and no active lesions for at least 4–6 weeks before treatment. Fitzpatrick Type III–V patients require a 4-week priming protocol with topical depigmenting agents before any peel to minimise post-inflammatory hyperpigmentation risk.",
      "Patients on isotretinoin (Roaccutane) must pause the medication for 6 months before undergoing laser or microneedling scar treatments. Patients with a personal or family history of keloid scarring require a patch test and careful dermatologist assessment before any scar revision procedure is initiated.",
    ],
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
    expectedResults: "Active acne typically shows significant improvement within 6–8 weeks of starting medical management. Post-inflammatory hyperpigmentation (flat dark marks) fades 40–60% after a course of 4–6 chemical peels over 3–4 months. Atrophic acne scars — ice pick, boxcar, rolling — improve 40–70% after a complete Dermapen 4 or laser course of 4–6 sessions. Results continue to improve for 3–6 months after the final session as collagen remodelling completes.",
    faqs: [
      { q: "Can old acne scars be removed?", a: "Yes. Even years-old atrophic (depressed) acne scars can be significantly improved with Dermapen 4 microneedling, TCA cross, or fractional laser. Most patients achieve 40 to 70% improvement after a full course. Deep ice-pick scars may need TCA cross before microneedling for best results." },
      { q: "Are chemical peels safe for Indian skin?", a: "Yes — when properly prescribed. We use pH-controlled glycolic, salicylic, and mandelic acid peels calibrated for Indian skin (Fitzpatrick Type III–V). A 4-week priming phase with topical depigmenting agents precedes all peels to reduce the risk of post-inflammatory hyperpigmentation." },
      { q: "How many Dermapen 4 sessions are needed for acne scars?", a: "Most patients require 4 to 6 sessions spaced 4 weeks apart. Improvement continues for 3 to 6 months after the final session as collagen remodelling completes. Rolling and boxcar scars typically show 40 to 60% improvement after a full course." },
      { q: "What is the difference between acne marks and acne scars?", a: "Acne marks (post-inflammatory hyperpigmentation or PIH) are flat, discoloured areas left after a pimple heals. They fade with topicals and peels over months. Acne scars are structural skin changes — depressed (ice pick, boxcar, rolling) or raised (hypertrophic) — that require procedural treatment and do not fade on their own." },
      { q: "Is there downtime after acne scar treatment?", a: "Dermapen 4 causes 24 to 48 hours of redness. Chemical peels cause mild flaking for 3 to 5 days. Most patients return to work the next day. We provide specific aftercare instructions including SPF 50+ sunscreen use, which is mandatory for all peeling procedures." },
      { q: "How much does acne scar treatment cost in Kanpur?", a: "Treatment costs at SKIN@Mantraa vary by procedure type and number of sessions. Chemical peels and Dermapen 4 are priced per session; package rates are available. Book a consultation (₹600) for a scar classification assessment and personalised treatment plan with pricing." }
    ]
  },
  "hair-restoration": {
    title: "Hair Restoration",
    subtitle: "Scientifically Proven Solutions for Hair Growth",
    description: "Hair loss is rarely just cosmetic — it is often emotional, frustrating, and deeply personal. Our hair restoration treatments are selected to support weaker follicles, improve scalp health, and encourage better hair density where possible. We focus on realistic expectations, proper diagnosis, and a treatment plan that matches the pattern and cause of hair loss.",
    candidateFor: [
      "PRP and GFC hair restoration is most effective for patients with androgenetic alopecia — male or female pattern hair loss — with early-to-moderate thinning. The treatment works best when there are still functioning follicles that can be stimulated. Miniaturised follicles respond to growth factor treatment; completely bald areas without any follicular activity do not. Earlier treatment consistently delivers better outcomes.",
      "Telogen effluvium — sudden, diffuse shedding triggered by stress, illness, nutritional deficiency, or hormonal changes such as post-partum hair loss — also responds well to PRP when combined with correcting the underlying cause. All hair restoration patients at SKIN@Mantraa receive a baseline blood panel (ferritin, Vitamin D3, B12, thyroid, hormonal markers) before treatment begins, as nutritional deficiencies are very common in Indian patients and must be corrected alongside PRP.",
      "Patients on anticoagulant medications, those with platelet disorders or haematological conditions, or those with active scalp infections are not suitable candidates for PRP. Patients who have had inadequate response to standard PRP may benefit from GFC (Growth Factor Concentrate), which delivers a higher concentration of growth factors for more advanced thinning.",
    ],
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
    expectedResults: "Most patients notice a significant reduction in hair fall within 4–6 weeks of starting PRP treatment. Visible density improvement and new hair growth typically become apparent after the second or third session (6–8 weeks in). Maximum results are seen 4–6 months after completing the initial course of 4 sessions. Maintenance sessions every 4–6 months sustain results over the long term. GFC patients typically see faster and more pronounced response than standard PRP.",
    faqs: [
      { q: "Does PRP hair treatment hurt?", a: "The injections cause mild discomfort. We apply topical anaesthetic cream for 30 to 45 minutes before the procedure, making it well-tolerated by most patients. There is no downtime — patients return to work the same day. Mild scalp tenderness and redness for 24 to 48 hours are normal." },
      { q: "How many PRP sessions are needed for hair loss?", a: "The standard protocol is 4 sessions spaced 3 to 4 weeks apart, followed by maintenance sessions every 4 to 6 months. Most patients notice reduced shedding after sessions 2 to 3, and visible density improvement by the 3 to 4 month mark after completing the initial course." },
      { q: "What is the difference between PRP and GFC for hair?", a: "PRP (Platelet Rich Plasma) concentrates platelets from your own blood. GFC (Growth Factor Concentrate) further extracts growth factors at a higher concentration, producing more PDGF, VEGF, and EGF than standard PRP. For moderate-to-advanced thinning or partial response to PRP, GFC is often recommended." },
      { q: "Is PRP effective for female pattern hair loss?", a: "Yes. Female pattern hair loss (diffuse thinning over the crown and mid-scalp) responds well to PRP and GFC. In women, we often combine PRP with topical minoxidil or nutritional supplementation depending on the underlying cause — hormonal, nutritional deficiency, or post-partum." },
      { q: "Do I need a blood test before PRP hair treatment?", a: "Yes. All hair loss patients at SKIN@Mantraa receive a baseline blood panel (ferritin, Vitamin D3, B12, thyroid function, and hormonal markers) before PRP begins. Nutritional deficiencies — especially ferritin and Vitamin D3 — are very common in Indian patients and will offset PRP results if not corrected." },
      { q: "How much does PRP hair treatment cost in Kanpur?", a: "PRP and GFC hair treatment cost at SKIN@Mantraa depends on the treatment area and preparation type. Book a consultation (₹600) for a hair loss assessment, blood work recommendations, and complete pricing for your personalised protocol." }
    ]
  },
  "skin-conditions": {
    title: "Skin Disease Treatment",
    subtitle: "Expert Medical Care for Chronic Skin Issues",
    description: "This section brings clinical dermatology to the forefront. For skin conditions that are recurring, uncomfortable, or difficult to manage on your own, our approach begins with accurate diagnosis and continues with a treatment plan that is practical, safe, and medically sound.",
    candidateFor: [
      "Medical dermatology at SKIN@Mantraa is for any patient with a skin condition that has not responded adequately to self-care or over-the-counter treatments. This includes vitiligo (any stage, any age), psoriasis (plaque, scalp, or nail), eczema and atopic dermatitis, melasma, seborrheic dermatitis, rosacea, fungal skin infections, urticaria, and other inflammatory or chronic skin diseases.",
      "Vitiligo phototherapy (NB-UVB) is available for patients with non-segmental vitiligo. It is appropriate for adults and children above 5 years. Patients with extreme photosensitivity, a history of skin cancers, or lupus require special assessment before phototherapy is started. Results are best in patients who begin treatment within 2–3 years of onset.",
      "For psoriasis and eczema, suitable candidates include patients who have had inadequate response to topical steroids or standard over-the-counter management and require a dermatologist-designed protocol. Systemic treatment (methotrexate, acitretin) is initiated only when clinically appropriate and requires regular blood monitoring — Dr. Bhura uses many steroid-sparing and non-systemic strategies as long as possible before escalating.",
    ],
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
    expectedResults: "Vitiligo: Repigmentation becomes visible after 3–6 months of consistent NB-UVB phototherapy; 60–70% of patients see meaningful repigmentation after completing a full course. Psoriasis: Most patients achieve 50–75% reduction in plaque area after 8–12 weeks of consistent treatment. Eczema: Flares are typically controlled within 2–4 weeks; maintenance therapy prevents recurrence. Melasma: Visible lightening after 6–8 weeks; ongoing SPF 50+ PA+++ maintenance is essential to prevent recurrence.",
    faqs: [
      { q: "Is vitiligo curable?", a: "Vitiligo cannot be permanently cured, but it can be effectively stabilised and repigmented in most cases. NB-UVB phototherapy combined with topical steroids or tacrolimus produces repigmentation in a significant proportion of patients. The earlier treatment begins, the better the response." },
      { q: "How is psoriasis managed at SKIN@Mantraa?", a: "Psoriasis management depends on severity. Mild-to-moderate cases are managed with topical corticosteroids, vitamin D analogues, and coal tar preparations. Moderate-to-severe cases may need phototherapy (NB-UVB) or systemic therapy (methotrexate, acitretin). Dr. Bhura uses many steroid-sparing agents for long-term safety in chronic management." },
      { q: "What treatments are available for vitiligo phototherapy in Kanpur?", a: "SKIN@Mantraa offers Narrowband UVB (NB-UVB) phototherapy for vitiligo — the most evidence-supported treatment for non-segmental vitiligo. Treatment is typically 2 to 3 sessions per week. Repigmentation becomes visible after 3 to 6 months of consistent treatment. Phototherapy is combined with topical agents for best results." },
      { q: "Can eczema be treated permanently?", a: "Eczema (atopic dermatitis) is a chronic condition that cannot be permanently cured, but it can be very effectively managed. Treatment involves identifying and avoiding triggers, appropriate topical therapy (corticosteroids, tacrolimus), moisturisation protocols, and treating secondary infections. Most patients achieve long periods of remission with consistent management." },
      { q: "Is melasma a skin condition or a cosmetic concern?", a: "Melasma is a genuine dermatological condition — not merely cosmetic. It is caused by melanocyte hyperactivation triggered by UV, hormones, and heat. It requires a structured, phased treatment approach: priming with depigmenting agents, then chemical peels or Q-switched laser, then maintenance with SPF 50+ PA+++ sunscreen. Without treatment, it persists and worsens." },
      { q: "How do I book an appointment for skin disease treatment?", a: "Call +91 73830 79825, WhatsApp +91 98380 00024, or fill the contact form at skinmantraa.in/contact. Consultation fee: ₹600. Walk-ins welcome during clinic hours (Mon–Fri 11AM–6PM, Saturday 12PM–6PM, Sunday 10AM–2PM)." }
    ]
  },
  "cosmetic": {
    title: "Cosmetic Enhancements",
    subtitle: "Refining Your Natural Beauty with Science",
    description: "Some concerns are not disease — they are refinement. This category is built for patients who want to even out skin tone, reduce visible pigmentation, soften stubborn spots, and improve overall complexion quality. The goal is not to bleach or over-treat the skin, but to make it look clearer, healthier, and more balanced.",
    candidateFor: [
      "Tattoo removal is suitable for patients with any tattoo they want partially or fully removed. Darker inks (black, dark blue) respond fastest to Q-switched Nd:YAG laser. Coloured inks (red, orange, yellow) require more sessions. All patients are patch-tested before treatment, and sun protection is mandatory throughout the removal process. Old, faded tattoos typically clear faster than fresh, saturated ones.",
      "Carbon laser facial (carbon peel) is suitable for patients with oily, congested, or enlarged-pore skin seeking a brightening and pore-refining treatment with zero downtime. It is safe for all Indian skin tones and can be done as a monthly maintenance treatment. Skin resurfacing procedures are appropriate for patients with photoageing, fine lines, sun damage, or dull, uneven complexion.",
      "Pigmentation and melasma treatments are suitable for patients with stable (non-spreading) melasma, post-acne dark spots, or sun-induced pigmentation. Active melasma triggered by ongoing sun exposure, pregnancy, or current hormonal therapy requires addressing the trigger before cosmetic treatment is started. All pigmentation treatments require strict sun protection (SPF 50+ PA+++) as ongoing maintenance.",
    ],
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
    expectedResults: "Carbon laser facial delivers visible brightening and pore-refinement immediately after each session, with optimal results after 3–4 monthly treatments. Tattoo removal produces noticeable fading after each session — most tattoos are cleared in 6–10 sessions spaced 6–8 weeks apart. Pigmentation and dark spot treatments produce visible lightening after 2–4 sessions. Skin resurfacing results — improved texture, reduced fine lines — are visible within 4–6 weeks and continue to improve over 3 months.",
    faqs: [
      { q: "How many sessions does tattoo removal take?", a: "Tattoo removal requires 5 to 10 sessions depending on the ink colours, depth, age of the tattoo, and skin type. Dark inks (black, dark blue) respond fastest to Q-switched Nd:YAG laser. Coloured inks (red, green, yellow) may require more sessions or specific wavelengths. Sessions are spaced 6 to 8 weeks apart." },
      { q: "Can melasma be permanently cleared?", a: "Melasma can be significantly lightened and kept clear with the right maintenance protocol, but it is not a one-time cure. After treatment (chemical peels or laser), daily SPF 50+ PA+++ sunscreen and maintenance topical agents are required to prevent recurrence. Without ongoing sun protection, melasma will return." },
      { q: "What is a carbon laser facial and what does it do?", a: "A carbon laser facial (sometimes called a Hollywood facial or black doll facial) involves applying a carbon lotion to the skin, which is then vaporised by Q-switched Nd:YAG laser. It removes dead skin cells, unclogs pores, reduces oil production, and leaves skin brighter and smoother. It is suitable for all skin tones including Indian skin." },
      { q: "Is skin resurfacing safe for dark Indian skin?", a: "Yes — when the correct technique is used. We do not use ablative CO2 laser resurfacing on Indian skin due to the high risk of post-inflammatory hyperpigmentation. Instead, we use Nd:YAG fractional laser, Dermapen 4 microneedling, and chemical peels — all of which produce skin resurfacing effects with a much lower pigmentation risk for Fitzpatrick Type III–V skin." },
      { q: "How is pigmentation treatment different from melasma treatment?", a: "Pigmentation treatment is a broader term that includes melasma, post-inflammatory hyperpigmentation (PIH from acne or injury), sun spots, and freckles. Each has a different cause and responds differently to treatment. Melasma requires a phased approach with priming. PIH responds well to chemical peels and targeted topicals. Sun spots often respond quickly to Q-switched laser." },
      { q: "How much do cosmetic treatments cost at SKIN@Mantraa?", a: "Tattoo removal is priced per session by tattoo size. Carbon laser facial, pigmentation treatment, and skin resurfacing are priced per session with package rates available. Book a consultation (₹600) for an assessment of your specific concern and personalised pricing." }
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

        {/* Who Is This For Section */}
        <section className="py-24 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-display font-semibold italic text-brand-espresso mb-8">Who Is This For?</h2>
            <div className="space-y-5">
              {detail.candidateFor.map((paragraph: string, i: number) => (
                <p key={i} className="text-brand-walnut text-lg leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
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

        {/* What to Expect Section */}
        <section style={{ background: "#3D2B1F", padding: "4rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, fontStyle: "italic", color: "#C78D6B", marginBottom: "1rem" }}>What to Expect</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "rgba(253,246,236,0.85)" }}>{detail.expectedResults}</p>
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

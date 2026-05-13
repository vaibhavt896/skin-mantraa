/* ─────────────────────────────────────────────────────────────
   SKIN ANALYSIS ENGINE
   Types, concern data, dermatological questions, condition
   database, and scoring algorithm for the Smart Skin Analysis tool.
   ───────────────────────────────────────────────────────────── */

// ── Types ────────────────────────────────────────────────────

export type ConcernId =
  | "acne"
  | "pigmentation"
  | "aging"
  | "hair-loss"
  | "rash"
  | "moles"
  | "dry-skin"
  | "scars"
  | "dark-circles"
  | "sun-damage";

export interface Concern {
  id: ConcernId;
  label: string;
  description: string;
  icon: string; // lucide-react icon name
  bodyAreas: string[];
}

export interface QuestionOption {
  label: string;
  value: string;
  severity: number; // 0–3
  urgency: number; // 0–3
  flags?: string[]; // condition IDs this answer points toward
}

export interface Question {
  id: string;
  text: string;
  helpText?: string;
  options: QuestionOption[];
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  concerns: ConcernId[];
  keySymptoms: string[];
  availableTreatments: string[];
  whyActNow: string;
}

export type SeverityLevel = "mild" | "moderate" | "significant" | "severe";
export type UrgencyLevel = "routine" | "soon" | "priority" | "urgent";

export interface ConditionMatch {
  condition: Condition;
  confidence: number; // 0–100
}

export interface AnalysisResult {
  skinScore: number; // 0–100 (higher = healthier)
  severity: SeverityLevel;
  urgency: UrgencyLevel;
  topConditions: ConditionMatch[];
  recommendations: string[];
  lifestyleTips: string[];
  bookingMessage: string;
}

export interface ImageMetrics {
  rednessIndex: number;
  colorVariance: number;
  brightness: number;
  darkSpotDensity: number;
}

// ── Concerns ─────────────────────────────────────────────────

export const CONCERNS: Concern[] = [
  {
    id: "acne",
    label: "Acne & Breakouts",
    description: "Pimples, blackheads, whiteheads, or cystic bumps",
    icon: "Droplets",
    bodyAreas: ["Face", "Forehead", "Cheeks", "Jawline", "Back", "Chest"],
  },
  {
    id: "pigmentation",
    label: "Pigmentation & Dark Spots",
    description: "Uneven skin tone, melasma, or dark patches",
    icon: "Palette",
    bodyAreas: ["Face", "Cheeks", "Forehead", "Neck", "Hands", "Arms"],
  },
  {
    id: "aging",
    label: "Aging & Fine Lines",
    description: "Wrinkles, sagging, loss of volume or elasticity",
    icon: "Clock",
    bodyAreas: ["Face", "Forehead", "Around Eyes", "Neck", "Hands"],
  },
  {
    id: "hair-loss",
    label: "Hair Loss & Thinning",
    description: "Receding hairline, bald patches, or overall thinning",
    icon: "Wind",
    bodyAreas: ["Scalp - Top", "Scalp - Front", "Scalp - Sides", "Eyebrows"],
  },
  {
    id: "rash",
    label: "Rash & Skin Allergy",
    description: "Redness, itching, hives, or irritated patches",
    icon: "AlertTriangle",
    bodyAreas: ["Face", "Neck", "Arms", "Legs", "Torso", "Hands"],
  },
  {
    id: "moles",
    label: "Moles & Skin Growths",
    description: "New or changing moles, skin tags, or unusual spots",
    icon: "Search",
    bodyAreas: ["Face", "Neck", "Back", "Arms", "Legs", "Torso"],
  },
  {
    id: "dry-skin",
    label: "Dry Skin & Eczema",
    description: "Flaking, rough texture, persistent dryness, or cracking",
    icon: "Snowflake",
    bodyAreas: ["Face", "Hands", "Elbows", "Legs", "Feet"],
  },
  {
    id: "scars",
    label: "Scars & Marks",
    description: "Acne scars, injury scars, or keloids",
    icon: "Layers",
    bodyAreas: ["Face", "Cheeks", "Back", "Arms", "Legs"],
  },
  {
    id: "dark-circles",
    label: "Dark Circles & Under-Eyes",
    description: "Under-eye darkness, puffiness, or hollowness",
    icon: "Eye",
    bodyAreas: ["Under Eyes"],
  },
  {
    id: "sun-damage",
    label: "Sun Damage & Tan",
    description: "Sunburn, persistent tan, or sun-induced spots",
    icon: "Sun",
    bodyAreas: ["Face", "Neck", "Arms", "Hands", "Back"],
  },
];

// ── Common (shared) questions ────────────────────────────────

const Q_DURATION: Question = {
  id: "duration",
  text: "How long have you noticed this concern?",
  options: [
    { label: "Less than 2 weeks", value: "lt2w", severity: 0, urgency: 0 },
    { label: "2 weeks – 3 months", value: "2w3m", severity: 1, urgency: 0 },
    { label: "3 – 12 months", value: "3m1y", severity: 2, urgency: 1 },
    { label: "Over a year", value: "gt1y", severity: 3, urgency: 1 },
  ],
};

const Q_PROGRESSION: Question = {
  id: "progression",
  text: "Is the condition getting better, stable, or worse?",
  options: [
    {
      label: "Getting better on its own",
      value: "improving",
      severity: 0,
      urgency: 0,
    },
    {
      label: "Staying about the same",
      value: "stable",
      severity: 1,
      urgency: 0,
    },
    {
      label: "Slowly getting worse",
      value: "slow-worse",
      severity: 2,
      urgency: 1,
    },
    {
      label: "Rapidly getting worse",
      value: "fast-worse",
      severity: 3,
      urgency: 3,
    },
  ],
};

const Q_PREV_TREATMENT: Question = {
  id: "prev-treatment",
  text: "Have you tried any treatments so far?",
  options: [
    {
      label: "No, this is my first step",
      value: "none",
      severity: 0,
      urgency: 0,
    },
    { label: "Home remedies only", value: "home", severity: 1, urgency: 0 },
    {
      label: "Over-the-counter products",
      value: "otc",
      severity: 1,
      urgency: 1,
    },
    {
      label: "Prescription treatments (didn\u2019t fully work)",
      value: "rx",
      severity: 2,
      urgency: 2,
    },
  ],
};

// ── Per-concern questions ────────────────────────────────────

const ACNE_QUESTIONS: Question[] = [
  Q_DURATION,
  {
    id: "acne-type",
    text: "What best describes your breakouts?",
    options: [
      {
        label: "Occasional small pimples",
        value: "mild",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Blackheads & whiteheads mostly",
        value: "comedonal",
        severity: 1,
        urgency: 0,
        flags: ["acne-vulgaris"],
      },
      {
        label: "Red, inflamed pimples",
        value: "inflammatory",
        severity: 2,
        urgency: 1,
        flags: ["acne-vulgaris"],
      },
      {
        label: "Deep, painful, cystic lumps",
        value: "cystic",
        severity: 3,
        urgency: 2,
        flags: ["cystic-acne"],
      },
    ],
  },
  {
    id: "acne-scarring",
    text: "Are your breakouts leaving marks or scars?",
    options: [
      { label: "No marks at all", value: "none", severity: 0, urgency: 0 },
      {
        label: "Temporary red/brown marks",
        value: "pih",
        severity: 1,
        urgency: 1,
        flags: ["pih"],
      },
      {
        label: "Visible dents or pitted scars",
        value: "pitted",
        severity: 2,
        urgency: 2,
        flags: ["acne-scars"],
      },
      {
        label: "Raised, bumpy scars",
        value: "raised",
        severity: 3,
        urgency: 2,
        flags: ["acne-scars", "keloid"],
      },
    ],
  },
  Q_PROGRESSION,
  {
    id: "acne-hormonal",
    text: "Do breakouts follow a pattern (e.g. menstrual cycle, stress)?",
    options: [
      {
        label: "No noticeable pattern",
        value: "none",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Worse around periods",
        value: "menstrual",
        severity: 1,
        urgency: 1,
        flags: ["hormonal-acne"],
      },
      {
        label: "Worse during stress",
        value: "stress",
        severity: 1,
        urgency: 0,
      },
      {
        label: "Constant regardless of timing",
        value: "constant",
        severity: 2,
        urgency: 1,
      },
    ],
  },
  Q_PREV_TREATMENT,
];

const PIGMENTATION_QUESTIONS: Question[] = [
  Q_DURATION,
  {
    id: "pigment-type",
    text: "How would you describe the discolouration?",
    options: [
      {
        label: "Small, scattered dark spots",
        value: "spots",
        severity: 1,
        urgency: 0,
        flags: ["solar-lentigo"],
      },
      {
        label: "Large patches on cheeks/forehead",
        value: "patches",
        severity: 2,
        urgency: 1,
        flags: ["melasma"],
      },
      {
        label: "Overall uneven skin tone",
        value: "uneven",
        severity: 1,
        urgency: 0,
        flags: ["pih"],
      },
      {
        label: "Darkening after inflammation or injury",
        value: "post-injury",
        severity: 2,
        urgency: 1,
        flags: ["pih"],
      },
    ],
  },
  {
    id: "pigment-sun",
    text: "How often are you exposed to sun without protection?",
    options: [
      {
        label: "Rarely - I always use sunscreen",
        value: "protected",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Sometimes - I forget sunscreen often",
        value: "sometimes",
        severity: 1,
        urgency: 0,
      },
      {
        label: "Frequently - outdoor work / lifestyle",
        value: "frequent",
        severity: 2,
        urgency: 1,
        flags: ["solar-lentigo", "photoaging"],
      },
      {
        label: "Daily prolonged exposure with no sunscreen",
        value: "heavy",
        severity: 3,
        urgency: 1,
        flags: ["solar-lentigo", "photoaging"],
      },
    ],
  },
  Q_PROGRESSION,
  {
    id: "pigment-hormonal",
    text: "Any hormonal changes recently (pregnancy, birth control, menopause)?",
    options: [
      { label: "No", value: "no", severity: 0, urgency: 0 },
      {
        label: "Currently pregnant or recently delivered",
        value: "pregnancy",
        severity: 1,
        urgency: 0,
        flags: ["melasma"],
      },
      {
        label: "Started / changed birth control",
        value: "bc",
        severity: 1,
        urgency: 0,
        flags: ["melasma"],
      },
      {
        label: "Perimenopause / menopause",
        value: "menopause",
        severity: 1,
        urgency: 0,
        flags: ["melasma"],
      },
    ],
  },
  Q_PREV_TREATMENT,
];

const AGING_QUESTIONS: Question[] = [
  {
    id: "aging-concern",
    text: "What bothers you the most?",
    options: [
      {
        label: "Fine lines around eyes/mouth",
        value: "fine-lines",
        severity: 1,
        urgency: 0,
        flags: ["photoaging"],
      },
      {
        label: "Deep wrinkles on forehead or frown",
        value: "deep-wrinkles",
        severity: 2,
        urgency: 0,
        flags: ["photoaging"],
      },
      {
        label: "Loss of volume - hollow cheeks or temples",
        value: "volume-loss",
        severity: 2,
        urgency: 0,
        flags: ["volume-loss"],
      },
      {
        label: "Overall skin laxity and sagging",
        value: "laxity",
        severity: 3,
        urgency: 1,
        flags: ["skin-laxity"],
      },
    ],
  },
  {
    id: "aging-age",
    text: "What is your age group?",
    helpText: "This helps calibrate our assessment to normal ageing patterns.",
    options: [
      { label: "Under 30", value: "lt30", severity: 1, urgency: 1 },
      { label: "30 – 40", value: "30-40", severity: 0, urgency: 0 },
      { label: "40 – 55", value: "40-55", severity: 0, urgency: 0 },
      { label: "55+", value: "gt55", severity: 0, urgency: 0 },
    ],
  },
  {
    id: "aging-sun-history",
    text: "How much cumulative sun exposure have you had over the years?",
    options: [
      {
        label: "Minimal - mostly indoors",
        value: "minimal",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Moderate - mixed indoor/outdoor",
        value: "moderate",
        severity: 1,
        urgency: 0,
      },
      {
        label: "Significant - years of outdoor activity",
        value: "high",
        severity: 2,
        urgency: 1,
        flags: ["photoaging"],
      },
      {
        label: "Very high - farming, sports, etc.",
        value: "very-high",
        severity: 3,
        urgency: 1,
        flags: ["photoaging"],
      },
    ],
  },
  Q_PROGRESSION,
  {
    id: "aging-skincare",
    text: "Do you currently use any anti-aging skincare?",
    options: [
      { label: "No skincare routine", value: "none", severity: 1, urgency: 0 },
      {
        label: "Basic moisturiser + sunscreen",
        value: "basic",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Active serums (retinol, vitamin C, etc.)",
        value: "actives",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Have had professional treatments before",
        value: "professional",
        severity: 0,
        urgency: 0,
      },
    ],
  },
  Q_PREV_TREATMENT,
];

const HAIR_LOSS_QUESTIONS: Question[] = [
  Q_DURATION,
  {
    id: "hair-pattern",
    text: "Where is the hair loss most noticeable?",
    options: [
      {
        label: "Overall thinning across the scalp",
        value: "diffuse",
        severity: 2,
        urgency: 1,
        flags: ["telogen-effluvium"],
      },
      {
        label: "Receding hairline / temples",
        value: "receding",
        severity: 2,
        urgency: 1,
        flags: ["androgenetic-alopecia"],
      },
      {
        label: "Thinning at the crown / parting",
        value: "crown",
        severity: 2,
        urgency: 1,
        flags: ["androgenetic-alopecia"],
      },
      {
        label: "Circular bald patches",
        value: "patchy",
        severity: 3,
        urgency: 2,
        flags: ["alopecia-areata"],
      },
    ],
  },
  {
    id: "hair-shedding",
    text: "How much hair do you notice falling daily?",
    options: [
      {
        label: "A few strands - seems normal",
        value: "normal",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Noticeably more than usual",
        value: "moderate",
        severity: 1,
        urgency: 0,
      },
      {
        label: "Clumps on pillow, in shower drain",
        value: "heavy",
        severity: 2,
        urgency: 1,
      },
      {
        label: "Visible scalp now where hair was thick",
        value: "severe",
        severity: 3,
        urgency: 2,
      },
    ],
  },
  Q_PROGRESSION,
  {
    id: "hair-family",
    text: "Do close family members (parents, siblings) have hair loss?",
    options: [
      { label: "No", value: "no", severity: 0, urgency: 0 },
      {
        label: "One parent",
        value: "one",
        severity: 1,
        urgency: 0,
        flags: ["androgenetic-alopecia"],
      },
      {
        label: "Both parents or multiple relatives",
        value: "both",
        severity: 2,
        urgency: 0,
        flags: ["androgenetic-alopecia"],
      },
      { label: "Not sure", value: "unsure", severity: 0, urgency: 0 },
    ],
  },
  Q_PREV_TREATMENT,
];

const RASH_QUESTIONS: Question[] = [
  Q_DURATION,
  {
    id: "rash-symptoms",
    text: "What symptoms accompany the rash?",
    options: [
      {
        label: "Mild redness, no itch",
        value: "mild",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Itching and redness",
        value: "itchy",
        severity: 1,
        urgency: 1,
        flags: ["contact-dermatitis", "eczema"],
      },
      {
        label: "Burning, stinging, or pain",
        value: "painful",
        severity: 2,
        urgency: 2,
        flags: ["contact-dermatitis"],
      },
      {
        label: "Blisters, oozing, or swelling",
        value: "severe",
        severity: 3,
        urgency: 3,
        flags: ["contact-dermatitis", "urticaria"],
      },
    ],
  },
  {
    id: "rash-trigger",
    text: "Did anything new trigger it (products, food, jewellery, medication)?",
    options: [
      {
        label: "No obvious trigger",
        value: "unknown",
        severity: 1,
        urgency: 1,
      },
      {
        label: "New skincare / cosmetic product",
        value: "product",
        severity: 1,
        urgency: 0,
        flags: ["contact-dermatitis"],
      },
      {
        label: "New food or medication",
        value: "food-med",
        severity: 2,
        urgency: 2,
        flags: ["urticaria"],
      },
      {
        label: "Seasonal / weather change",
        value: "seasonal",
        severity: 1,
        urgency: 0,
        flags: ["eczema"],
      },
    ],
  },
  Q_PROGRESSION,
  {
    id: "rash-recurring",
    text: "Has this happened before?",
    options: [
      { label: "First time ever", value: "first", severity: 0, urgency: 1 },
      {
        label: "Happened once or twice before",
        value: "occasional",
        severity: 1,
        urgency: 1,
      },
      {
        label: "Keeps coming back frequently",
        value: "recurrent",
        severity: 2,
        urgency: 1,
        flags: ["eczema", "psoriasis"],
      },
      {
        label: "It has never fully gone away",
        value: "chronic",
        severity: 3,
        urgency: 2,
        flags: ["psoriasis", "eczema"],
      },
    ],
  },
  Q_PREV_TREATMENT,
];

const MOLES_QUESTIONS: Question[] = [
  Q_DURATION,
  {
    id: "mole-change",
    text: "Has the mole or growth changed recently?",
    helpText:
      "Changes in size, shape, or colour can be important warning signs.",
    options: [
      {
        label: "No change at all",
        value: "stable",
        severity: 0,
        urgency: 0,
        flags: ["benign-nevi"],
      },
      {
        label: "Slight growth over years",
        value: "slow-growth",
        severity: 1,
        urgency: 1,
        flags: ["benign-nevi"],
      },
      {
        label: "Noticeable change in months",
        value: "recent-change",
        severity: 2,
        urgency: 2,
        flags: ["dysplastic-nevi"],
      },
      {
        label: "Rapid change in weeks",
        value: "rapid",
        severity: 3,
        urgency: 3,
        flags: ["dysplastic-nevi"],
      },
    ],
  },
  {
    id: "mole-abcde",
    text: "Does the mole have any of these features: asymmetric shape, irregular borders, multiple colours, larger than 6 mm?",
    helpText: "These are the ABCD criteria dermatologists use for screening.",
    options: [
      {
        label: "None of these",
        value: "none",
        severity: 0,
        urgency: 0,
        flags: ["benign-nevi"],
      },
      {
        label: "One of these features",
        value: "one",
        severity: 1,
        urgency: 1,
        flags: ["dysplastic-nevi"],
      },
      {
        label: "Two or three features",
        value: "multiple",
        severity: 2,
        urgency: 2,
        flags: ["dysplastic-nevi"],
      },
      {
        label: "Most or all of these",
        value: "all",
        severity: 3,
        urgency: 3,
        flags: ["dysplastic-nevi"],
      },
    ],
  },
  {
    id: "mole-symptoms",
    text: "Any itching, bleeding, or crusting from the spot?",
    options: [
      { label: "No symptoms", value: "none", severity: 0, urgency: 0 },
      { label: "Occasional mild itch", value: "itch", severity: 1, urgency: 1 },
      {
        label: "Bleeds easily when rubbed",
        value: "bleeds",
        severity: 2,
        urgency: 2,
        flags: ["dysplastic-nevi"],
      },
      {
        label: "Bleeds spontaneously or crusts over",
        value: "spontaneous",
        severity: 3,
        urgency: 3,
        flags: ["dysplastic-nevi"],
      },
    ],
  },
  Q_PROGRESSION,
  Q_PREV_TREATMENT,
];

const DRY_SKIN_QUESTIONS: Question[] = [
  Q_DURATION,
  {
    id: "dry-severity",
    text: "How would you describe the dryness?",
    options: [
      {
        label: "Slight tightness after washing",
        value: "mild",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Visible flaking and rough patches",
        value: "flaking",
        severity: 1,
        urgency: 0,
        flags: ["eczema"],
      },
      {
        label: "Cracking, peeling, or redness",
        value: "cracking",
        severity: 2,
        urgency: 1,
        flags: ["eczema"],
      },
      {
        label: "Painful cracks, bleeding, or infected areas",
        value: "severe",
        severity: 3,
        urgency: 2,
        flags: ["eczema"],
      },
    ],
  },
  {
    id: "dry-itch",
    text: "How much does it itch?",
    options: [
      { label: "No itch", value: "none", severity: 0, urgency: 0 },
      {
        label: "Mild, occasional itch",
        value: "mild",
        severity: 1,
        urgency: 0,
      },
      {
        label: "Moderate - disrupts daily activities",
        value: "moderate",
        severity: 2,
        urgency: 1,
        flags: ["eczema"],
      },
      {
        label: "Severe - disrupts sleep",
        value: "severe",
        severity: 3,
        urgency: 2,
        flags: ["eczema"],
      },
    ],
  },
  Q_PROGRESSION,
  {
    id: "dry-family",
    text: "Do you or family members have asthma, hay fever, or eczema history?",
    options: [
      { label: "No", value: "no", severity: 0, urgency: 0 },
      {
        label: "Yes - I have one of these",
        value: "self",
        severity: 1,
        urgency: 0,
        flags: ["eczema"],
      },
      {
        label: "Yes - in family",
        value: "family",
        severity: 1,
        urgency: 0,
        flags: ["eczema"],
      },
      {
        label: "Yes - both self and family",
        value: "both",
        severity: 2,
        urgency: 1,
        flags: ["eczema"],
      },
    ],
  },
  Q_PREV_TREATMENT,
];

const SCARS_QUESTIONS: Question[] = [
  {
    id: "scar-type",
    text: "What type of scars do you have?",
    options: [
      {
        label: "Flat discoloured marks",
        value: "flat",
        severity: 0,
        urgency: 0,
        flags: ["pih"],
      },
      {
        label: "Pitted / indented (ice-pick, boxcar)",
        value: "atrophic",
        severity: 2,
        urgency: 0,
        flags: ["acne-scars"],
      },
      {
        label: "Raised, firm scars",
        value: "hypertrophic",
        severity: 2,
        urgency: 1,
        flags: ["keloid"],
      },
      {
        label: "Large, growing keloid scars",
        value: "keloid",
        severity: 3,
        urgency: 1,
        flags: ["keloid"],
      },
    ],
  },
  {
    id: "scar-cause",
    text: "What caused the scars?",
    options: [
      {
        label: "Acne",
        value: "acne",
        severity: 1,
        urgency: 0,
        flags: ["acne-scars"],
      },
      { label: "Injury or surgery", value: "injury", severity: 1, urgency: 0 },
      { label: "Burns", value: "burns", severity: 2, urgency: 0 },
      {
        label: "Skin condition (chickenpox, etc.)",
        value: "disease",
        severity: 1,
        urgency: 0,
      },
    ],
  },
  Q_DURATION,
  {
    id: "scar-impact",
    text: "How much do the scars affect your confidence or daily life?",
    options: [
      {
        label: "Not much - minor cosmetic concern",
        value: "minor",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Somewhat - I notice them often",
        value: "moderate",
        severity: 1,
        urgency: 0,
      },
      {
        label: "Significantly - I avoid social situations",
        value: "significant",
        severity: 2,
        urgency: 1,
      },
      {
        label: "Severely - major impact on self-esteem",
        value: "severe",
        severity: 3,
        urgency: 2,
      },
    ],
  },
  Q_PREV_TREATMENT,
];

const DARK_CIRCLES_QUESTIONS: Question[] = [
  Q_DURATION,
  {
    id: "dc-appearance",
    text: "What do your dark circles look like?",
    options: [
      {
        label: "Bluish tint - visible veins",
        value: "vascular",
        severity: 1,
        urgency: 0,
        flags: ["vascular-dc"],
      },
      {
        label: "Brown or tan discolouration",
        value: "pigmented",
        severity: 1,
        urgency: 0,
        flags: ["pigmented-dc"],
      },
      {
        label: "Hollow / sunken with shadow",
        value: "hollow",
        severity: 2,
        urgency: 0,
        flags: ["volume-loss-dc"],
      },
      {
        label: "Puffy bags + dark colour",
        value: "combo",
        severity: 2,
        urgency: 0,
        flags: ["vascular-dc", "volume-loss-dc"],
      },
    ],
  },
  {
    id: "dc-sleep",
    text: "How is your sleep quality?",
    options: [
      {
        label: "Good - 7-8 hours most nights",
        value: "good",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Fair - 5-7 hours, sometimes broken",
        value: "fair",
        severity: 1,
        urgency: 0,
      },
      {
        label: "Poor - less than 5 hours regularly",
        value: "poor",
        severity: 2,
        urgency: 0,
      },
      {
        label: "Very poor - chronic insomnia or disruption",
        value: "very-poor",
        severity: 2,
        urgency: 0,
      },
    ],
  },
  {
    id: "dc-allergies",
    text: "Do you have nasal allergies or frequently rub your eyes?",
    options: [
      { label: "No", value: "no", severity: 0, urgency: 0 },
      {
        label: "Seasonal allergies",
        value: "seasonal",
        severity: 1,
        urgency: 0,
        flags: ["allergic-dc"],
      },
      {
        label: "Year-round allergies",
        value: "chronic",
        severity: 2,
        urgency: 0,
        flags: ["allergic-dc"],
      },
      {
        label: "Yes, and I rub my eyes a lot",
        value: "rubbing",
        severity: 2,
        urgency: 0,
        flags: ["pigmented-dc"],
      },
    ],
  },
  Q_PROGRESSION,
  Q_PREV_TREATMENT,
];

const SUN_DAMAGE_QUESTIONS: Question[] = [
  Q_DURATION,
  {
    id: "sun-type",
    text: "What do you notice most?",
    options: [
      {
        label: "Persistent tan that won\u2019t fade",
        value: "tan",
        severity: 1,
        urgency: 0,
        flags: ["solar-lentigo"],
      },
      {
        label: "Brown sun spots or freckles",
        value: "spots",
        severity: 1,
        urgency: 0,
        flags: ["solar-lentigo"],
      },
      {
        label: "Rough, scaly patches",
        value: "rough",
        severity: 2,
        urgency: 2,
        flags: ["actinic-keratosis"],
      },
      {
        label: "Leathery texture + deep wrinkles from sun",
        value: "photoaged",
        severity: 2,
        urgency: 1,
        flags: ["photoaging"],
      },
    ],
  },
  {
    id: "sun-protection",
    text: "What is your sun protection routine?",
    options: [
      {
        label: "Daily SPF 30+ without fail",
        value: "strict",
        severity: 0,
        urgency: 0,
      },
      {
        label: "Sunscreen when I remember",
        value: "occasional",
        severity: 1,
        urgency: 0,
      },
      { label: "Rarely use sunscreen", value: "rare", severity: 2, urgency: 1 },
      { label: "Never use sunscreen", value: "never", severity: 3, urgency: 1 },
    ],
  },
  Q_PROGRESSION,
  {
    id: "sun-history",
    text: "Have you had sunburns in the past?",
    options: [
      { label: "Rarely or never", value: "rarely", severity: 0, urgency: 0 },
      { label: "A few times", value: "few", severity: 1, urgency: 0 },
      {
        label: "Many times over the years",
        value: "many",
        severity: 2,
        urgency: 1,
        flags: ["photoaging"],
      },
      {
        label: "Severe blistering sunburns",
        value: "blistering",
        severity: 3,
        urgency: 2,
        flags: ["actinic-keratosis"],
      },
    ],
  },
  Q_PREV_TREATMENT,
];

// ── Question map ─────────────────────────────────────────────

export const QUESTIONS_BY_CONCERN: Record<ConcernId, Question[]> = {
  acne: ACNE_QUESTIONS,
  pigmentation: PIGMENTATION_QUESTIONS,
  aging: AGING_QUESTIONS,
  "hair-loss": HAIR_LOSS_QUESTIONS,
  rash: RASH_QUESTIONS,
  moles: MOLES_QUESTIONS,
  "dry-skin": DRY_SKIN_QUESTIONS,
  scars: SCARS_QUESTIONS,
  "dark-circles": DARK_CIRCLES_QUESTIONS,
  "sun-damage": SUN_DAMAGE_QUESTIONS,
};

// ── Condition database ───────────────────────────────────────

export const CONDITIONS: Condition[] = [
  {
    id: "acne-vulgaris",
    name: "Acne Vulgaris",
    description:
      "Inflammatory skin condition causing pimples, blackheads, and whiteheads due to clogged pores and bacteria.",
    concerns: ["acne"],
    keySymptoms: [
      "Recurring breakouts",
      "Oily skin",
      "Blackheads & whiteheads",
    ],
    availableTreatments: [
      "Chemical Peels",
      "LED Light Therapy",
      "Medical-Grade Facials",
      "Prescription Topicals",
    ],
    whyActNow:
      "Untreated acne can lead to permanent scarring. Early professional intervention prevents long-term skin damage.",
  },
  {
    id: "cystic-acne",
    name: "Cystic / Nodular Acne",
    description:
      "Severe form of acne with deep, painful lumps under the skin that are prone to scarring.",
    concerns: ["acne"],
    keySymptoms: ["Deep painful bumps", "Swelling", "Scarring tendency"],
    availableTreatments: [
      "Intralesional Injections",
      "Medical Management",
      "Advanced Chemical Peels",
      "Scar Prevention Protocol",
    ],
    whyActNow:
      "Cystic acne almost always scars without treatment. Professional management can prevent irreversible skin texture damage.",
  },
  {
    id: "hormonal-acne",
    name: "Hormonal Acne",
    description:
      "Breakouts driven by hormonal fluctuations, typically along the jawline and chin.",
    concerns: ["acne"],
    keySymptoms: [
      "Jawline/chin breakouts",
      "Cyclical pattern",
      "Deep under-skin bumps",
    ],
    availableTreatments: [
      "Hormonal Evaluation",
      "Targeted Topical Therapy",
      "Chemical Peels",
      "LED Therapy",
    ],
    whyActNow:
      "Hormonal acne rarely resolves with over-the-counter products alone. A targeted approach addressing the root cause is key.",
  },
  {
    id: "melasma",
    name: "Melasma",
    description:
      "Chronic pigmentation condition causing symmetrical brown or grey-brown patches, most common on the face.",
    concerns: ["pigmentation"],
    keySymptoms: [
      "Symmetrical dark patches",
      "Worsens with sun",
      "Cheeks, forehead, upper lip",
    ],
    availableTreatments: [
      "Customised Depigmenting Protocol",
      "Chemical Peels",
      "Laser Toning",
      "Medical-Grade Skincare",
    ],
    whyActNow:
      "Melasma deepens with continued sun exposure. Starting a professional protocol early gives the best chance of significant improvement.",
  },
  {
    id: "pih",
    name: "Post-Inflammatory Hyperpigmentation",
    description:
      "Dark marks left behind after acne, injury, or inflammation - the skin\u2019s exaggerated healing response.",
    concerns: ["pigmentation", "acne", "scars"],
    keySymptoms: [
      "Dark spots after breakouts",
      "Brown/purple marks",
      "Slow to fade",
    ],
    availableTreatments: [
      "Chemical Peels",
      "Microneedling",
      "Depigmenting Agents",
      "Laser Treatment",
    ],
    whyActNow:
      "PIH can take 6-24 months to fade naturally. Professional treatments can speed this up dramatically.",
  },
  {
    id: "solar-lentigo",
    name: "Sun Spots / Solar Lentigines",
    description:
      "Flat brown spots caused by cumulative UV exposure, commonly on face, hands, and arms.",
    concerns: ["pigmentation", "sun-damage"],
    keySymptoms: ["Flat brown spots", "Sun-exposed areas", "Increase with age"],
    availableTreatments: [
      "Laser Treatment",
      "Chemical Peels",
      "Cryotherapy",
      "Depigmenting Protocol",
    ],
    whyActNow:
      "Sun spots multiply without protection and can sometimes mask pre-cancerous changes. Professional assessment ensures nothing is missed.",
  },
  {
    id: "photoaging",
    name: "Photoaging (Sun-Induced Aging)",
    description:
      "Premature skin aging caused by chronic UV exposure - wrinkles, sagging, and pigment changes beyond your biological age.",
    concerns: ["aging", "sun-damage"],
    keySymptoms: [
      "Premature wrinkles",
      "Leathery texture",
      "Uneven pigmentation",
    ],
    availableTreatments: [
      "Anti-Aging Laser Treatments",
      "Chemical Peels",
      "Microneedling",
      "Medical-Grade Skincare Protocol",
    ],
    whyActNow:
      "Photoaging is cumulative and accelerates. Starting a reversal protocol now prevents years of additional damage.",
  },
  {
    id: "volume-loss",
    name: "Facial Volume Loss",
    description:
      "Natural loss of collagen and fat pads causing hollow cheeks, temples, and deepened folds.",
    concerns: ["aging"],
    keySymptoms: [
      "Hollow cheeks",
      "Deepened nasolabial folds",
      "Temple hollowing",
    ],
    availableTreatments: [
      "Dermal Fillers",
      "Collagen-Stimulating Treatments",
      "PRP Therapy",
      "Microneedling",
    ],
    whyActNow:
      "Collagen loss accelerates after 30. Early intervention stimulates your own collagen production for longer-lasting natural results.",
  },
  {
    id: "skin-laxity",
    name: "Skin Laxity",
    description:
      "Loss of skin firmness and elasticity leading to sagging, particularly along the jawline and neck.",
    concerns: ["aging"],
    keySymptoms: [
      "Sagging jawline",
      "Neck skin loosening",
      "Loss of definition",
    ],
    availableTreatments: [
      "Skin Tightening Treatments",
      "RF Therapy",
      "Thread Lifts",
      "Combination Protocols",
    ],
    whyActNow:
      "Skin tightening is most effective before laxity becomes severe. Early treatment gives the most noticeable lift.",
  },
  {
    id: "androgenetic-alopecia",
    name: "Androgenetic Alopecia (Pattern Hair Loss)",
    description:
      "Genetic hair loss causing progressive thinning at the crown, temples, or diffusely across the scalp.",
    concerns: ["hair-loss"],
    keySymptoms: ["Widening parting", "Temple recession", "Crown thinning"],
    availableTreatments: [
      "PRP Hair Therapy",
      "Mesotherapy",
      "Low-Level Laser Therapy",
      "Medical Management",
    ],
    whyActNow:
      "Hair follicles that miniaturise beyond a point cannot be revived. Treatment is most effective when started early.",
  },
  {
    id: "telogen-effluvium",
    name: "Telogen Effluvium",
    description:
      "Temporary but dramatic hair shedding triggered by stress, illness, nutritional deficiency, or hormonal shift.",
    concerns: ["hair-loss"],
    keySymptoms: [
      "Sudden heavy shedding",
      "Diffuse thinning",
      "Triggered by stress / illness",
    ],
    availableTreatments: [
      "Nutritional Assessment",
      "PRP Therapy",
      "Scalp Treatments",
      "Growth Factor Therapy",
    ],
    whyActNow:
      "While often self-limiting, identifying and correcting the trigger speeds recovery and prevents it from becoming chronic.",
  },
  {
    id: "alopecia-areata",
    name: "Alopecia Areata",
    description:
      "Autoimmune condition causing sudden, circular bald patches on the scalp or body.",
    concerns: ["hair-loss"],
    keySymptoms: [
      "Round bald patches",
      "Sudden onset",
      "Smooth hairless areas",
    ],
    availableTreatments: [
      "Intralesional Therapy",
      "Immunomodulatory Treatment",
      "PRP",
      "Topical Immunotherapy",
    ],
    whyActNow:
      "Early treatment of alopecia areata has the highest success rate. Delayed treatment can lead to larger areas of loss.",
  },
  {
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    description:
      "Chronic inflammatory skin condition causing itchy, red, cracked, and dry patches.",
    concerns: ["dry-skin", "rash"],
    keySymptoms: [
      "Intense itching",
      "Red, inflamed patches",
      "Dry, cracked skin",
    ],
    availableTreatments: [
      "Customised Topical Protocol",
      "Barrier Repair Therapy",
      "Light Therapy",
      "Trigger Identification",
    ],
    whyActNow:
      "Unmanaged eczema leads to a damaged skin barrier, recurrent infections, and sleep disruption. A proper management plan restores skin health.",
  },
  {
    id: "contact-dermatitis",
    name: "Contact Dermatitis",
    description:
      "Skin reaction caused by direct contact with an irritant or allergen.",
    concerns: ["rash"],
    keySymptoms: [
      "Localised rash at contact point",
      "Itching or burning",
      "Possible blistering",
    ],
    availableTreatments: [
      "Patch Testing",
      "Allergen Identification",
      "Anti-Inflammatory Protocol",
      "Barrier Repair",
    ],
    whyActNow:
      "Identifying the exact trigger prevents recurring flare-ups and chronic skin damage.",
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    description:
      "Chronic autoimmune condition causing thick, scaly, silvery-white patches on the skin.",
    concerns: ["rash", "dry-skin"],
    keySymptoms: [
      "Thick silvery scales",
      "Well-defined red plaques",
      "Possible joint pain",
    ],
    availableTreatments: [
      "Phototherapy",
      "Topical Therapy",
      "Systemic Management",
      "Combination Protocol",
    ],
    whyActNow:
      "Psoriasis is a systemic condition that can affect joints and cardiovascular health. Early management protects more than just your skin.",
  },
  {
    id: "urticaria",
    name: "Urticaria (Hives)",
    description:
      "Raised, itchy welts that appear suddenly and can move across the body.",
    concerns: ["rash"],
    keySymptoms: ["Raised red welts", "Intense itching", "Welts come and go"],
    availableTreatments: [
      "Trigger Investigation",
      "Antihistamine Protocol",
      "Immunological Workup",
      "Long-Term Management Plan",
    ],
    whyActNow:
      "Chronic hives lasting over 6 weeks need investigation. Finding the underlying cause leads to lasting relief.",
  },
  {
    id: "benign-nevi",
    name: "Benign Moles",
    description:
      "Common, non-cancerous skin growths that are typically uniform in colour and shape.",
    concerns: ["moles"],
    keySymptoms: ["Uniform colour", "Symmetrical shape", "Stable size"],
    availableTreatments: [
      "Dermoscopic Evaluation",
      "Cosmetic Removal",
      "Monitoring Plan",
    ],
    whyActNow:
      "Even benign-looking moles benefit from professional evaluation to establish a baseline for future monitoring.",
  },
  {
    id: "dysplastic-nevi",
    name: "Atypical / Dysplastic Moles",
    description:
      "Moles with irregular features that, while usually benign, warrant closer monitoring due to elevated risk.",
    concerns: ["moles"],
    keySymptoms: [
      "Irregular borders",
      "Multiple colours",
      "Larger than 6 mm",
      "Asymmetry",
    ],
    availableTreatments: [
      "Dermoscopy",
      "Biopsy if needed",
      "Regular Monitoring Plan",
      "Preventive Removal",
    ],
    whyActNow:
      "Atypical moles need professional evaluation. Early detection of changes is critical for the best outcomes.",
  },
  {
    id: "acne-scars",
    name: "Acne Scars",
    description:
      "Permanent texture changes from healed acne - pitted (ice-pick, boxcar, rolling) or raised scars.",
    concerns: ["scars"],
    keySymptoms: [
      "Pitted skin texture",
      "Uneven surface",
      "Visible indentations",
    ],
    availableTreatments: [
      "Microneedling",
      "Fractional Laser",
      "Chemical Peels",
      "Dermal Fillers for deep scars",
      "PRP Therapy",
    ],
    whyActNow:
      "Scar treatment technology has advanced dramatically. Modern combination protocols can achieve 50-80% improvement.",
  },
  {
    id: "keloid",
    name: "Keloid / Hypertrophic Scars",
    description:
      "Raised, firm scars that grow beyond the original wound boundaries due to excess collagen production.",
    concerns: ["scars"],
    keySymptoms: [
      "Raised, firm tissue",
      "Growing beyond wound area",
      "May itch or hurt",
    ],
    availableTreatments: [
      "Intralesional Injections",
      "Pressure Therapy",
      "Laser Treatment",
      "Combination Protocol",
    ],
    whyActNow:
      "Keloids grow over time and become harder to treat. Early intervention gives significantly better outcomes.",
  },
  {
    id: "actinic-keratosis",
    name: "Actinic Keratosis",
    description:
      "Rough, scaly pre-cancerous patches caused by years of sun exposure.",
    concerns: ["sun-damage"],
    keySymptoms: ["Rough scaly patches", "Sun-exposed skin", "Sandpaper feel"],
    availableTreatments: [
      "Cryotherapy",
      "Topical Treatment",
      "Photodynamic Therapy",
      "Regular Skin Checks",
    ],
    whyActNow:
      "Actinic keratoses are pre-cancerous. Treating them early prevents potential progression to skin cancer.",
  },
];

// ── Scoring engine ───────────────────────────────────────────

function severityFromScore(score: number): SeverityLevel {
  if (score <= 4) return "mild";
  if (score <= 8) return "moderate";
  if (score <= 13) return "significant";
  return "severe";
}

function urgencyFromScore(score: number): UrgencyLevel {
  if (score <= 2) return "routine";
  if (score <= 5) return "soon";
  if (score <= 8) return "priority";
  return "urgent";
}

function skinScoreFromSeverity(
  severityTotal: number,
  maxPossible: number,
): number {
  const ratio = severityTotal / maxPossible;
  return Math.max(10, Math.round(100 - ratio * 80));
}

const RECOMMENDATIONS_BY_CONCERN: Record<ConcernId, string[]> = {
  acne: [
    "A professional-grade treatment plan can reduce breakouts by 60-80% within 8 weeks",
    "Chemical peels and LED therapy target acne at a deeper level than topical products alone",
    "Preventing acne scars now saves you from needing expensive scar-revision treatments later",
  ],
  pigmentation: [
    "Medical-grade depigmenting protocols are 3-5x more effective than over-the-counter products",
    "A combination of peels + lasers + homecare achieves the fastest, most even results",
    "Sun protection is non-negotiable - even the best treatment fails without daily SPF 30+",
  ],
  aging: [
    "Modern anti-aging treatments stimulate your own collagen - results look natural, not artificial",
    "Starting a preventive protocol in your 30s-40s delays visible aging by years",
    "A customised combination approach outperforms any single treatment or product",
  ],
  "hair-loss": [
    "Hair follicles respond best to treatment within the first 2-5 years of noticeable thinning",
    "PRP therapy can increase hair density by 20-30% over 6 months",
    "A scalp and blood workup identifies treatable causes like deficiencies or hormonal imbalance",
  ],
  rash: [
    "Professional patch testing identifies the exact allergen so you can avoid future flare-ups",
    "Prescription-strength treatments resolve rashes faster and prevent the itch-scratch-damage cycle",
    "Chronic rashes need a management plan - not just short-term relief but long-term control",
  ],
  moles: [
    "Dermoscopic evaluation provides 10-30x magnification to assess features invisible to the naked eye",
    "A baseline mole map enables tracking of any future changes with precision",
    "The vast majority of moles are harmless - professional screening provides peace of mind",
  ],
  "dry-skin": [
    "A barrier-repair protocol restores your skin\u2019s natural moisture-retention ability",
    "Medical-grade moisturisers contain ceramides and lipids that OTC products lack in effective concentrations",
    "Identifying and treating the underlying cause (eczema, allergy, etc.) prevents recurring dryness",
  ],
  scars: [
    "Microneedling with PRP can improve acne scars by 50-70% over a series of sessions",
    "Combination therapy (laser + microneedling + peels) gives superior results to any single approach",
    "Newer scars respond faster to treatment - don\u2019t wait years to start",
  ],
  "dark-circles": [
    "Under-eye darkness has different causes (pigment, veins, volume loss) - the right treatment depends on the type",
    "Professional treatments achieve results that no amount of concealer or eye cream can match",
    "Addressing underlying causes (allergies, sleep, nutrition) amplifies treatment results",
  ],
  "sun-damage": [
    "Professional-grade sun damage reversal protocols combine peels, lasers, and retinoid therapy",
    "Rough or scaly sun-damaged patches should be evaluated to rule out pre-cancerous changes",
    "It\u2019s never too late to reverse sun damage - skin has remarkable repair capacity with the right protocol",
  ],
};

const LIFESTYLE_TIPS_BY_CONCERN: Record<ConcernId, string[]> = {
  acne: [
    "Change your pillowcase every 2-3 days to reduce bacterial buildup",
    "Avoid touching your face during the day - hands carry oils and bacteria",
    "Consider reducing dairy and high-glycemic foods, which can trigger breakouts",
  ],
  pigmentation: [
    "Apply SPF 30+ every single morning, even on cloudy days and indoors near windows",
    "Reapply sunscreen every 2 hours when outdoors",
    "Vitamin C serum in the morning boosts sun protection and fights pigment production",
  ],
  aging: [
    "Start retinol at night - it\u2019s the gold-standard anti-aging active with decades of evidence",
    "Sleep on your back to avoid sleep-crease wrinkles",
    "Antioxidant-rich diet (berries, leafy greens, nuts) supports skin repair from within",
  ],
  "hair-loss": [
    "Gentle scalp massage for 5 minutes daily improves blood circulation to follicles",
    "Ensure adequate protein, iron, zinc, and biotin in your diet",
    "Avoid tight hairstyles that pull on the hairline (traction alopecia)",
  ],
  rash: [
    "Switch to fragrance-free, hypoallergenic skincare and laundry products",
    "Keep a symptom diary to identify patterns and potential triggers",
    "Avoid hot showers - lukewarm water is gentler on irritated skin",
  ],
  moles: [
    "Perform a monthly self-check using the ABCDE method (Asymmetry, Border, Colour, Diameter, Evolution)",
    "Photograph moles you\u2019re monitoring so you can compare over time",
    "Use SPF 30+ daily - UV exposure is the main modifiable risk factor for mole changes",
  ],
  "dry-skin": [
    "Moisturise within 3 minutes of bathing while skin is still damp to lock in hydration",
    "Use a humidifier at home, especially during winter months",
    "Drink at least 2-3 litres of water daily for internal hydration",
  ],
  scars: [
    "Apply sunscreen on scars daily - UV exposure darkens and worsens scar appearance",
    "Silicone-based scar sheets can help flatten raised scars over time",
    "Gentle massage on healed scars improves blood flow and may soften tissue",
  ],
  "dark-circles": [
    "Aim for 7-8 hours of quality sleep - elevate your head slightly to reduce puffiness",
    "Cold compresses for 10 minutes in the morning reduce puffiness and constrict blood vessels",
    "Manage allergies proactively - antihistamines reduce the \u2018allergic shiner\u2019 effect",
  ],
  "sun-damage": [
    "Adopt the shadow rule - if your shadow is shorter than you, seek shade",
    "Wear a broad-brimmed hat and UV-protective clothing for outdoor activities",
    "Check and replace expired sunscreen - efficacy drops significantly after expiry",
  ],
};

const BOOKING_MESSAGES: Record<UrgencyLevel, string> = {
  routine:
    "A routine consultation with Dr. Mamta Bhura can help you stay ahead of this concern and build a personalised skincare strategy.",
  soon: "We recommend scheduling a consultation within the next 2-3 weeks. Dr. Mamta Bhura can create a targeted treatment plan for noticeable improvement.",
  priority:
    "Based on your responses, we strongly recommend seeing Dr. Mamta Bhura soon. Early professional intervention at this stage makes a significant difference in outcomes.",
  urgent:
    "Your responses indicate this needs prompt professional attention. Please book a consultation with Dr. Mamta Bhura at the earliest available slot.",
};

export function generateResults(
  concernId: ConcernId,
  answers: Record<string, string>,
  imageMetrics?: ImageMetrics | null,
): AnalysisResult {
  const questions = QUESTIONS_BY_CONCERN[concernId];
  let severityTotal = 0;
  let urgencyTotal = 0;
  let maxSeverity = 0;
  const flagCounts: Record<string, number> = {};

  for (const q of questions) {
    const chosen = answers[q.id];
    if (!chosen) continue;
    const opt = q.options.find((o) => o.value === chosen);
    if (!opt) continue;
    severityTotal += opt.severity;
    urgencyTotal += opt.urgency;
    maxSeverity += 3;
    if (opt.flags) {
      for (const f of opt.flags) {
        flagCounts[f] = (flagCounts[f] || 0) + 1;
      }
    }
  }

  // Supplement with image metrics if available
  if (imageMetrics) {
    if (imageMetrics.rednessIndex > 40) {
      severityTotal += 1;
      if (concernId === "acne" || concernId === "rash") {
        flagCounts["acne-vulgaris"] = (flagCounts["acne-vulgaris"] || 0) + 1;
        flagCounts["contact-dermatitis"] =
          (flagCounts["contact-dermatitis"] || 0) + 1;
      }
    }
    if (imageMetrics.colorVariance > 50) {
      severityTotal += 1;
      if (concernId === "pigmentation" || concernId === "sun-damage") {
        flagCounts["melasma"] = (flagCounts["melasma"] || 0) + 1;
        flagCounts["solar-lentigo"] = (flagCounts["solar-lentigo"] || 0) + 1;
      }
    }
    if (imageMetrics.darkSpotDensity > 30) {
      if (concernId === "pigmentation") {
        flagCounts["pih"] = (flagCounts["pih"] || 0) + 1;
      }
    }
  }

  const severity = severityFromScore(severityTotal);
  const urgency = urgencyFromScore(urgencyTotal);
  const skinScore = skinScoreFromSeverity(severityTotal, maxSeverity || 15);

  // Match conditions
  const relevantConditions = CONDITIONS.filter((c) =>
    c.concerns.includes(concernId),
  );
  const topConditions: ConditionMatch[] = relevantConditions
    .map((c) => {
      const hits = flagCounts[c.id] || 0;
      const maxFlags = questions.length;
      // Base confidence from flags + a baseline for being a relevant condition
      const confidence = Math.min(
        95,
        Math.round(20 + (hits / Math.max(maxFlags, 1)) * 300),
      );
      return { condition: c, confidence };
    })
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 3);

  // Ensure at least some confidence for top result
  if (topConditions.length > 0 && topConditions[0].confidence < 35) {
    topConditions[0].confidence = 35;
  }

  return {
    skinScore,
    severity,
    urgency,
    topConditions,
    recommendations: RECOMMENDATIONS_BY_CONCERN[concernId] || [],
    lifestyleTips: LIFESTYLE_TIPS_BY_CONCERN[concernId] || [],
    bookingMessage: BOOKING_MESSAGES[urgency],
  };
}

// ── Client-side image analysis ───────────────────────────────

export function analyzeImage(dataUrl: string): Promise<ImageMetrics> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 200; // downscale for performance
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;
      const total = data.length / 4;

      let sumR = 0,
        sumG = 0,
        sumB = 0;
      let rednessCount = 0;
      let darkCount = 0;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i],
          g = data[i + 1],
          b = data[i + 2];
        sumR += r;
        sumG += g;
        sumB += b;
        if (r > 140 && r > g * 1.25 && r > b * 1.25) rednessCount++;
        if ((r + g + b) / 3 < 85) darkCount++;
      }

      const avgR = sumR / total,
        avgG = sumG / total,
        avgB = sumB / total;

      // Color variance (sample every 4th pixel)
      let variance = 0;
      let sampleCount = 0;
      for (let i = 0; i < data.length; i += 16) {
        const r = data[i],
          g = data[i + 1],
          b = data[i + 2];
        variance += (r - avgR) ** 2 + (g - avgG) ** 2 + (b - avgB) ** 2;
        sampleCount++;
      }
      variance /= sampleCount;

      resolve({
        rednessIndex: Math.min(100, Math.round((rednessCount / total) * 350)),
        colorVariance: Math.min(100, Math.round(Math.sqrt(variance) / 2.2)),
        brightness: Math.round((avgR + avgG + avgB) / 7.65),
        darkSpotDensity: Math.min(100, Math.round((darkCount / total) * 280)),
      });
    };
    img.onerror = () =>
      resolve({
        rednessIndex: 0,
        colorVariance: 0,
        brightness: 50,
        darkSpotDensity: 0,
      });
    img.src = dataUrl;
  });
}

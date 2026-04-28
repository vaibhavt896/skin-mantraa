"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string };

interface Article {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: ArticleBlock[];
}

const ARTICLES: Record<string, Article> = {
  "sun-protection-guide": {
    title: "The Ultimate Guide to Sun Protection for Indian Skin",
    category: "Skin Care Basics",
    author: "Dr. Mamta Bhura",
    date: "April 15, 2024",
    readTime: "6 min read",
    content: [
      { type: "p", text: "Many believe that Indian skin is naturally protected from the sun due to its higher melanin content. While melanin does offer some protection, it doesn't make us immune to UV damage, photo-aging, or skin cancer." },
      { type: "h2", text: "Understanding SPF vs. PA Rating" },
      { type: "p", text: "SPF measures protection against UVB rays (burning), while PA rating measures protection against UVA rays (aging). For the Indian climate, look for a 'Broad Spectrum' sunscreen with at least SPF 30 and PA+++." },
      { type: "h2", text: "The Two-Finger Rule" },
      { type: "p", text: "Most people apply too little sunscreen. To get the SPF on the label, you need to apply two full fingers' worth of sunscreen to your face and neck alone. Reapplication every 3 hours is non-negotiable if you are outdoors." }
    ]
  },
  "adult-acne-causes": {
    title: "Why You're Still Getting Breakouts in Your 30s",
    category: "Treatments",
    author: "Dr. Mamta Bhura",
    date: "March 28, 2024",
    readTime: "5 min read",
    content: [
      { type: "p", text: "Adult acne is on the rise, particularly among women in their 20s, 30s, and 40s. Unlike teenage acne, which is often oil-driven, adult acne is frequently linked to hormones, stress, and lifestyle." },
      { type: "h2", text: "Hormonal Triggers" },
      { type: "p", text: "Fluctuations in androgens can cause sebaceous glands to overproduce oil. This often manifests as cystic breakouts along the jawline and chin, especially around the menstrual cycle." },
      { type: "h2", text: "The Role of Stress" },
      { type: "p", text: "When you're stressed, your body produces more cortisol, which in turn stimulates oil glands. Stress also slows down skin healing, making post-acne marks last longer." }
    ]
  },
  "laser-hair-removal-myths": {
    title: "Top 5 Myths About Laser Hair Removal Debunked",
    category: "Laser Science",
    author: "Dr. Mamta Bhura",
    date: "May 10, 2024",
    readTime: "4 min read",
    content: [
      { type: "p", text: "Laser hair removal is one of the most popular cosmetic procedures worldwide, yet it's surrounded by misinformation. Let's clear the air." },
      { type: "h2", text: "Myth 1: It's not safe for dark skin" },
      { type: "p", text: "Correction: Modern lasers like the Long-pulsed Nd:YAG are specifically designed to bypass surface melanin, making them incredibly safe and effective for darker skin tones." },
      { type: "h2", text: "Myth 2: It's 100% permanent after one session" },
      { type: "p", text: "Correction: It is 'permanent hair reduction.' You need multiple sessions (usually 6-8) to target hair in all its growth phases." }
    ]
  },
  "anti-aging-routine": {
    title: "A Minimalist Anti-Aging Routine That Actually Works",
    category: "Skin Care Basics",
    author: "Dr. Mamta Bhura",
    date: "June 02, 2024",
    readTime: "7 min read",
    content: [
      { type: "p", text: "You don't need a 10-step routine to prevent aging. In fact, over-complicating your skincare can lead to irritation and a compromised skin barrier." },
      { type: "h2", text: "The Morning Routine: Protect" },
      { type: "p", text: "Focus on Vitamin C (antioxidant) and Sunscreen. This combination neutralizes free radicals from pollution and UV rays before they can damage your collagen." },
      { type: "h2", text: "The Evening Routine: Repair" },
      { type: "p", text: "This is when you use Retinoids or Bakuchiol. These ingredients speed up cell turnover and stimulate collagen production while you sleep." }
    ]
  },
  "chemical-peel-benefits": {
    title: "What to Expect During Your First Chemical Peel",
    category: "Treatments",
    author: "Dr. Mamta Bhura",
    date: "February 14, 2024",
    readTime: "5 min read",
    content: [
      { type: "p", text: "Chemical peels sound intimidating, but they are simply a controlled way to exfoliate the skin deeply. They can treat everything from fine lines to stubborn melasma." },
      { type: "h2", text: "The Sensation" },
      { type: "p", text: "You will likely feel a warm, tingling, or itching sensation for 3-5 minutes during the peel application. We use neutralized peels to ensure the skin isn't damaged." },
      { type: "h2", text: "The Results" },
      { type: "p", text: "Your skin may look slightly red for a day, followed by subtle peeling. Once the old skin sheds, you'll see a brighter, smoother complexion underneath." }
    ]
  },
  "prp-hair-restoration": {
    title: "PRP for Hair Loss: Is It Right for You?",
    category: "Hair Care",
    author: "Dr. Mamta Bhura",
    date: "July 20, 2024",
    readTime: "6 min read",
    content: [
      { type: "p", text: "Platelet-Rich Plasma (PRP) therapy is a revolutionary treatment that uses your body's own growth factors to heal and rejuvenate." },
      { type: "h2", text: "How It Works" },
      { type: "p", text: "Platelets contain growth factors that 'wake up' dormant follicles. By injecting these into the scalp, we can significantly increase hair density and thickness." },
      { type: "h2", text: "Ideal Candidates" },
      { type: "p", text: "PRP works best for those in the early to middle stages of hair thinning. If a follicle has been dead for years, PRP cannot bring it back — which is why early intervention is key." }
    ]
  },
  "pigmentation-solutions": {
    title: "Modern Solutions for Melasma and Pigmentation",
    category: "Laser Science",
    author: "Dr. Mamta Bhura",
    date: "August 05, 2024",
    readTime: "5 min read",
    content: [
      { type: "p", text: "Pigmentation is the #1 skin concern in India. Whether it's post-inflammatory marks from acne or chronic melasma, we have tools to treat it." },
      { type: "h2", text: "The Q-Switch Advantage" },
      { type: "p", text: "Q-Switched lasers shatter pigment particles into tiny pieces that your body's immune system can then clear away naturally." },
      { type: "h2", text: "Don't Forget Topicals" },
      { type: "p", text: "In-clinic treatments must be supported by tyrosinase inhibitors (like kojic acid or tranexamic acid) to prevent new pigment from forming." }
    ]
  }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = ARTICLES[slug];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-terracotta z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <main style={{ background: "#FDF6EC" }}>
        <article className="pt-40 pb-24">
          {/* Header */}
          <header className="max-w-4xl mx-auto px-6 lg:px-8 mb-16">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                 <span className="px-3 py-1 bg-brand-champagne text-brand-terracotta text-xs uppercase tracking-widest font-semibold rounded-full">
                   {article.category}
                 </span>
                 <span className="text-brand-rosegold text-xs uppercase tracking-widest font-medium">
                   {article.date}
                 </span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-display font-semibold text-brand-espresso mb-8 leading-tight">
                {article.title}
              </motion.h1>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 border-y border-brand-champagne py-6">
                <div className="w-12 h-12 rounded-full bg-brand-rosegold flex items-center justify-center text-white font-display font-bold">
                  MB
                </div>
                <div>
                  <p className="text-brand-espresso font-display font-bold">{article.author}</p>
                  <p className="text-brand-walnut text-xs uppercase tracking-widest">{article.readTime}</p>
                </div>
              </motion.div>
            </motion.div>
          </header>

          {/* Body */}
          <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-lg prose-stone">
             {article.content.map((block, i) => {
               if (block.type === 'h2') return <h2 key={i} className="text-2xl font-display font-semibold text-brand-espresso mt-12 mb-6">{block.text}</h2>;
               return <p key={i} className="text-lg text-brand-walnut leading-relaxed mb-6">{block.text}</p>;
             })}
          </div>

          {/* Footer / Related */}
          <footer className="max-w-4xl mx-auto px-6 lg:px-8 mt-24 border-t border-brand-champagne pt-12">
            <div className="flex justify-between items-center">
               <Link href="/skin-guide" className="text-brand-terracotta font-medium hover:underline">← Back to Skin Guide</Link>
               <div className="flex gap-4">
                  <span className="text-brand-walnut text-sm">Share:</span>
                  {/* Social icons placeholder */}
               </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

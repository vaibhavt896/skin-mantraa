import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FDF6EC",
          champagne: "#F5E6D3",
          rosegold: "#C78D6B",
          terracotta: "#C4704E",
          espresso: "#3D2B1F",
          walnut: "#5C4033",
          ivory: "#FFFFF0",
          blush: "#F8E8E0",
          gold: "#D4A76A",
          sage: "#A8B5A0",
        },
        surface: {
          primary: "#FDF6EC",
          elevated: "#FFFFFF",
          dark: "#2C1810",
          muted: "#F5F0EB",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        accent: ["var(--font-outfit)", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 6vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        section: [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        card: ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
      },
      borderRadius: {
        organic: "62% 38% 46% 54% / 60% 45% 55% 40%",
      },
      boxShadow: {
        glow: "0 0 40px rgba(199, 141, 107, 0.15)",
        card: "0 4px 24px rgba(60, 43, 31, 0.06)",
        elevated: "0 12px 48px rgba(60, 43, 31, 0.1)",
      },
      backgroundImage: {
        "skin-gradient":
          "radial-gradient(ellipse at 30% 50%, #F8E8E0 0%, #FDF6EC 50%, #F5E6D3 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #FDF6EC 0%, #F5E6D3 40%, #F8E8E0 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #2C1810 0%, #3D2B1F 50%, #5C4033 100%)",
        "glow-radial":
          "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(199,141,107,0.06), transparent 40%)",
        "cta-gradient":
          "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(199, 141, 107, 0.1)",
          },
          "50%": { boxShadow: "0 0 40px rgba(199, 141, 107, 0.25)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

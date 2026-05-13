"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Droplets,
  Palette,
  Clock,
  Wind,
  AlertTriangle,
  Search,
  Snowflake,
  Layers,
  Eye,
  Sun,
  Camera,
  Upload,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Shield,
  Sparkles,
  CheckCircle,
  Activity,
  Heart,
  TrendingUp,
  Phone,
  MessageCircle,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";
import {
  CONCERNS,
  QUESTIONS_BY_CONCERN,
  generateResults,
  analyzeImage,
  type ConcernId,
  type AnalysisResult,
  type Concern,
  type ImageMetrics,
} from "@/lib/skin-analysis";
import { BRAND } from "@/lib/constants";

type Step =
  | "welcome"
  | "concern"
  | "photo"
  | "questionnaire"
  | "processing"
  | "results";

const CONCERN_ICONS: Record<string, React.ReactNode> = {
  Droplets: <Droplets size={24} />,
  Palette: <Palette size={24} />,
  Clock: <Clock size={24} />,
  Wind: <Wind size={24} />,
  AlertTriangle: <AlertTriangle size={24} />,
  Search: <Search size={24} />,
  Snowflake: <Snowflake size={24} />,
  Layers: <Layers size={24} />,
  Eye: <Eye size={24} />,
  Sun: <Sun size={24} />,
};

const CONCERN_TO_SERVICE: Record<ConcernId, string> = {
  acne: "acne-scars",
  pigmentation: "cosmetic",
  aging: "anti-aging",
  "hair-loss": "hair-restoration",
  rash: "skin-conditions",
  moles: "skin-conditions",
  "dry-skin": "skin-conditions",
  scars: "acne-scars",
  "dark-circles": "anti-aging",
  "sun-damage": "cosmetic",
};

// ── Animations ───────────────────────────────────────────────

const pageVariants = {
  enter: { opacity: 0, x: 60 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

const pageTrans = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

// ── Main Component ───────────────────────────────────────────

export default function SkinAnalysisTool() {
  const [step, setStep] = useState<Step>("welcome");
  const [selectedConcern, setSelectedConcern] = useState<ConcernId | null>(
    null,
  );
  const [photoData, setPhotoData] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [processingStep, setProcessingStep] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const questions = selectedConcern
    ? QUESTIONS_BY_CONCERN[selectedConcern]
    : [];

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  }, []);

  const resetAll = useCallback(() => {
    stopCamera();
    setStep("welcome");
    setSelectedConcern(null);
    setPhotoData(null);
    setAnswers({});
    setCurrentQ(0);
    setResults(null);
    setProcessingStep(0);
  }, [stopCamera]);

  // Cleanup camera on unmount
  useEffect(() => () => stopCamera(), [stopCamera]);

  // ── Processing animation ─────────────────────────────────

  const runProcessing = useCallback(async () => {
    if (!selectedConcern) return;
    setStep("processing");
    setProcessingStep(0);

    const steps = [
      "Analysing your responses\u2026",
      "Evaluating symptom patterns\u2026",
      "Checking dermatological criteria\u2026",
      "Cross-referencing conditions\u2026",
      "Generating personalised report\u2026",
    ];

    let metrics: ImageMetrics | null = null;
    if (photoData) {
      metrics = await analyzeImage(photoData);
    }

    for (let i = 0; i < steps.length; i++) {
      setProcessingStep(i);
      await new Promise((r) => setTimeout(r, 700 + Math.random() * 400));
    }

    const result = generateResults(selectedConcern, answers, metrics);
    setResults(result);
    setStep("results");
  }, [selectedConcern, answers, photoData]);

  // ── Step: Welcome ────────────────────────────────────────

  const WelcomeView = (
    <motion.div
      key="welcome"
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={pageTrans}
      style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #C4704E, #D4A76A)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          boxShadow: "0 8px 32px rgba(196,112,78,0.3)",
        }}
      >
        <Activity size={36} color="white" />
      </motion.div>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "#3D2B1F",
          lineHeight: 1.15,
          marginBottom: 12,
        }}
      >
        Smart Skin Analysis
      </h2>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.05rem",
          color: "#5C4033",
          lineHeight: 1.7,
          marginBottom: 36,
        }}
      >
        Get a preliminary assessment of your skin concern in under 3 minutes.
        Answer a few clinically-informed questions and receive personalised
        insights - completely free and private.
      </p>

      {/* How it works */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 40,
        }}
      >
        {[
          {
            icon: <Search size={22} />,
            title: "Select Concern",
            sub: "Choose your primary skin issue",
          },
          {
            icon: <MessageCircle size={22} />,
            title: "Answer Questions",
            sub: "5-6 clinically-informed questions",
          },
          {
            icon: <CheckCircle size={22} />,
            title: "Get Insights",
            sub: "Personalised assessment & advice",
          },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(212,167,106,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px",
                color: "#C4704E",
              }}
            >
              {s.icon}
            </div>
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#3D2B1F",
              }}
            >
              {s.title}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "#8B7355",
                marginTop: 2,
              }}
            >
              {s.sub}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setStep("concern")}
        style={{
          fontFamily: "var(--font-accent)",
          fontSize: "1rem",
          fontWeight: 600,
          padding: "16px 44px",
          borderRadius: 999,
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(135deg, #C4704E, #C78D6B)",
          color: "white",
          boxShadow: "0 6px 28px rgba(196,112,78,0.35)",
          letterSpacing: "0.03em",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 10px 36px rgba(196,112,78,0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 28px rgba(196,112,78,0.35)";
        }}
      >
        Start Free Analysis
        <ArrowRight size={18} />
      </button>

      {/* Trust badges */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          marginTop: 28,
          flexWrap: "wrap",
        }}
      >
        {[
          { icon: <Shield size={14} />, text: "Evidence-Based" },
          { icon: <Eye size={14} />, text: "100% Private" },
          { icon: <Zap size={14} />, text: "Instant Results" },
        ].map((b, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "#8B7355",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            {b.icon} {b.text}
          </span>
        ))}
      </div>
    </motion.div>
  );

  // ── Step: Concern Selection ──────────────────────────────

  const ConcernView = (
    <motion.div
      key="concern"
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={pageTrans}
    >
      <button
        onClick={() => setStep("welcome")}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "#8B7355",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 20,
          padding: 0,
        }}
      >
        <ArrowLeft size={16} /> Back
      </button>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "#3D2B1F",
          marginBottom: 8,
        }}
      >
        What concerns you most?
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          color: "#5C4033",
          marginBottom: 28,
        }}
      >
        Select the skin issue you&apos;d like us to assess.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 14,
        }}
      >
        {CONCERNS.map((c: Concern) => {
          const isSelected = selectedConcern === c.id;
          return (
            <motion.button
              key={c.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedConcern(c.id);
                setAnswers({});
                setCurrentQ(0);
                // Go straight to photo step
                setTimeout(() => setStep("photo"), 200);
              }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "18px 20px",
                borderRadius: 16,
                cursor: "pointer",
                border: isSelected
                  ? "2px solid #C4704E"
                  : "2px solid rgba(199,141,107,0.15)",
                background: isSelected
                  ? "rgba(196,112,78,0.06)"
                  : "rgba(255,255,255,0.7)",
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  flexShrink: 0,
                  background: isSelected
                    ? "linear-gradient(135deg, #C4704E, #D4A76A)"
                    : "rgba(212,167,106,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isSelected ? "white" : "#C4704E",
                  transition: "all 0.2s",
                }}
              >
                {CONCERN_ICONS[c.icon]}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#3D2B1F",
                    marginBottom: 3,
                  }}
                >
                  {c.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: "#8B7355",
                    lineHeight: 1.45,
                  }}
                >
                  {c.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );

  // ── Step: Photo Capture ──────────────────────────────────

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 },
        },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch {
      // Camera not available - user can still upload
    }
  }, []);

  const capturePhoto = useCallback(() => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(videoRef.current, 0, 0);
    setPhotoData(canvas.toDataURL("image/jpeg", 0.85));
    stopCamera();
  }, [stopCamera]);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setPhotoData(reader.result as string);
      reader.readAsDataURL(file);
    },
    [],
  );

  const PhotoView = (
    <motion.div
      key="photo"
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={pageTrans}
    >
      <button
        onClick={() => {
          stopCamera();
          setStep("concern");
        }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "#8B7355",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 20,
          padding: 0,
        }}
      >
        <ArrowLeft size={16} /> Back
      </button>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "#3D2B1F",
          marginBottom: 8,
        }}
      >
        Capture or upload a photo
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          color: "#5C4033",
          marginBottom: 24,
        }}
      >
        A photo helps enhance the analysis accuracy. You can also skip this
        step.
      </p>

      {photoData ? (
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: 360,
              margin: "0 auto",
              borderRadius: 20,
              overflow: "hidden",
              border: "3px solid rgba(199,141,107,0.2)",
              boxShadow: "0 8px 32px rgba(61,43,31,0.1)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoData}
              alt="Captured skin"
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <button
              onClick={() => {
                setPhotoData(null);
              }}
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.85rem",
                padding: "10px 24px",
                borderRadius: 999,
                cursor: "pointer",
                border: "1.5px solid rgba(199,141,107,0.3)",
                background: "white",
                color: "#5C4033",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <RotateCcw size={15} /> Retake
            </button>
            <button
              onClick={() => {
                stopCamera();
                setStep("questionnaire");
              }}
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.85rem",
                fontWeight: 600,
                padding: "10px 28px",
                borderRadius: 999,
                cursor: "pointer",
                border: "none",
                background: "linear-gradient(135deg, #C4704E, #C78D6B)",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 4px 16px rgba(196,112,78,0.3)",
              }}
            >
              Continue <ArrowRight size={15} />
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Camera preview */}
          <div
            style={{
              width: "100%",
              maxWidth: 360,
              margin: "0 auto",
              aspectRatio: "4/3",
              borderRadius: 20,
              overflow: "hidden",
              background: "#2c1810",
              position: "relative",
              border: "3px solid rgba(199,141,107,0.2)",
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Overlay guide circle */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: "70%",
                  height: "70%",
                  borderRadius: "50%",
                  border: "2px dashed rgba(255,255,255,0.3)",
                }}
              />
            </div>
            {/* Camera icon when no stream */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              <Camera size={48} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 20,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={startCamera}
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.85rem",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: 999,
                cursor: "pointer",
                border: "none",
                background: "linear-gradient(135deg, #C4704E, #C78D6B)",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 4px 16px rgba(196,112,78,0.3)",
              }}
            >
              <Camera size={15} /> Open Camera
            </button>
            <button
              onClick={capturePhoto}
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.85rem",
                padding: "10px 24px",
                borderRadius: 999,
                cursor: "pointer",
                border: "1.5px solid rgba(199,141,107,0.3)",
                background: "white",
                color: "#5C4033",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Capture
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.85rem",
                padding: "10px 24px",
                borderRadius: 999,
                cursor: "pointer",
                border: "1.5px solid rgba(199,141,107,0.3)",
                background: "white",
                color: "#5C4033",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Upload size={15} /> Upload
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="user"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </div>

          <div style={{ textAlign: "center", marginTop: 16 }}>
            <button
              onClick={() => {
                stopCamera();
                setStep("questionnaire");
              }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "#8B7355",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Skip - continue without photo
            </button>
          </div>
        </div>
      )}

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "#A89880",
          textAlign: "center",
          marginTop: 24,
          maxWidth: 400,
          margin: "24px auto 0",
        }}
      >
        Your photo is processed entirely on your device. It is never uploaded to
        any server or stored anywhere.
      </p>
    </motion.div>
  );

  // ── Step: Questionnaire ──────────────────────────────────

  const currentQuestion = questions[currentQ];
  const progress =
    questions.length > 0 ? ((currentQ + 1) / questions.length) * 100 : 0;

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
    } else {
      runProcessing();
    }
  };

  const QuestionnaireView = currentQuestion ? (
    <motion.div
      key="questionnaire"
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={pageTrans}
    >
      <button
        onClick={() => {
          if (currentQ > 0) setCurrentQ((q) => q - 1);
          else setStep("photo");
        }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "#8B7355",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 20,
          padding: 0,
        }}
      >
        <ArrowLeft size={16} /> {currentQ > 0 ? "Previous Question" : "Back"}
      </button>

      {/* Progress bar */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "#8B7355",
          }}
        >
          <span>
            Question {currentQ + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div
          style={{
            height: 4,
            borderRadius: 4,
            background: "rgba(199,141,107,0.12)",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              height: "100%",
              borderRadius: 4,
              background: "linear-gradient(90deg, #C4704E, #D4A76A)",
            }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#3D2B1F",
              marginBottom: currentQuestion.helpText ? 8 : 24,
              lineHeight: 1.3,
            }}
          >
            {currentQuestion.text}
          </h3>
          {currentQuestion.helpText && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "#8B7355",
                marginBottom: 24,
                lineHeight: 1.5,
              }}
            >
              {currentQuestion.helpText}
            </p>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {currentQuestion.options.map((opt) => {
              const isChosen = answers[currentQuestion.id] === opt.value;
              return (
                <motion.button
                  key={opt.value}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(opt.value)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 20px",
                    borderRadius: 14,
                    cursor: "pointer",
                    border: isChosen
                      ? "2px solid #C4704E"
                      : "2px solid rgba(199,141,107,0.12)",
                    background: isChosen
                      ? "rgba(196,112,78,0.06)"
                      : "rgba(255,255,255,0.7)",
                    textAlign: "left",
                    transition: "all 0.15s",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      flexShrink: 0,
                      border: isChosen
                        ? "2px solid #C4704E"
                        : "2px solid rgba(199,141,107,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.15s",
                    }}
                  >
                    {isChosen && (
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "#C4704E",
                        }}
                      />
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "#3D2B1F",
                    }}
                  >
                    {opt.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  ) : null;

  // ── Step: Processing ─────────────────────────────────────

  const processingLabels = [
    "Analysing your responses\u2026",
    "Evaluating symptom patterns\u2026",
    "Checking dermatological criteria\u2026",
    "Cross-referencing conditions\u2026",
    "Generating personalised report\u2026",
  ];

  const ProcessingView = (
    <motion.div
      key="processing"
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={pageTrans}
      style={{ textAlign: "center", padding: "60px 0" }}
    >
      {/* Pulsing circle */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(196,112,78,0.15), rgba(212,167,106,0.15))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 32px",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "3px solid rgba(199,141,107,0.2)",
            borderTopColor: "#C4704E",
          }}
        />
      </motion.div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          fontWeight: 700,
          fontStyle: "italic",
          color: "#3D2B1F",
          marginBottom: 20,
        }}
      >
        Analysing your skin
      </h3>

      <div style={{ maxWidth: 300, margin: "0 auto" }}>
        {processingLabels.map((label, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: processingStep >= i ? 1 : 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 0",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: processingStep >= i ? "#3D2B1F" : "#C0B0A0",
            }}
          >
            {processingStep > i ? (
              <CheckCircle size={16} color="#C4704E" />
            ) : processingStep === i ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Activity size={16} color="#C4704E" />
              </motion.div>
            ) : (
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  border: "1.5px solid #D5C8BC",
                }}
              />
            )}
            {label}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // ── Step: Results ────────────────────────────────────────

  const severityConfig: Record<
    string,
    { color: string; bg: string; label: string }
  > = {
    mild: { color: "#4CAF50", bg: "rgba(76,175,80,0.1)", label: "Mild" },
    moderate: {
      color: "#FF9800",
      bg: "rgba(255,152,0,0.1)",
      label: "Moderate",
    },
    significant: {
      color: "#F44336",
      bg: "rgba(244,67,54,0.1)",
      label: "Significant",
    },
    severe: { color: "#B71C1C", bg: "rgba(183,28,28,0.1)", label: "Severe" },
  };

  const urgencyConfig: Record<string, { label: string; color: string }> = {
    routine: { label: "Routine Check Recommended", color: "#4CAF50" },
    soon: { label: "Professional Evaluation Recommended", color: "#FF9800" },
    priority: { label: "Priority Consultation Advised", color: "#F44336" },
    urgent: { label: "Urgent Professional Attention Needed", color: "#B71C1C" },
  };

  const selectedConcernLabel = selectedConcern
    ? CONCERNS.find((c) => c.id === selectedConcern)?.label || "skin concern"
    : "skin concern";
  const primaryCondition = results?.topConditions[0]?.condition.name;
  const reportSummary = results
    ? [
        `Skin analysis report from SKIN@Mantraa website`,
        `Concern: ${selectedConcernLabel}`,
        `Skin health score: ${results.skinScore}/100`,
        `Concern level: ${severityConfig[results.severity].label}`,
        `Consultation guidance: ${urgencyConfig[results.urgency].label}`,
        primaryCondition ? `Top possible match: ${primaryCondition}` : "",
        "",
        "Please review this as a preliminary screening only. I understand this is not a medical diagnosis.",
      ]
        .filter(Boolean)
        .join("\n")
    : "";
  const prefilledService = selectedConcern
    ? CONCERN_TO_SERVICE[selectedConcern]
    : "";
  const bookingHref = `/contact?concern=${encodeURIComponent(prefilledService)}&message=${encodeURIComponent(reportSummary)}`;
  const whatsappHref = `https://wa.me/${BRAND.clinic.whatsapp}?text=${encodeURIComponent(
    `Hi Dr. Mamta Bhura, I completed the skin analysis on the SKIN@Mantraa website.\n\n${reportSummary}\n\nI would like to share this report with the clinic and understand whether I should book a consultation.`,
  )}`;

  const ResultsView = results ? (
    <motion.div
      key="results"
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={pageTrans}
    >
      {/* Score header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 36,
          padding: "36px 24px",
          borderRadius: 24,
          background:
            "linear-gradient(135deg, rgba(196,112,78,0.06), rgba(212,167,106,0.06))",
          border: "1px solid rgba(199,141,107,0.12)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 130,
            height: 130,
            margin: "0 auto 20px",
          }}
        >
          <svg width="130" height="130" viewBox="0 0 130 130">
            <circle
              cx="65"
              cy="65"
              r="58"
              fill="none"
              stroke="rgba(199,141,107,0.12)"
              strokeWidth="8"
            />
            <motion.circle
              cx="65"
              cy="65"
              r="58"
              fill="none"
              stroke="url(#scoreGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 58}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 58 }}
              animate={{
                strokeDashoffset:
                  2 * Math.PI * 58 * (1 - results.skinScore / 100),
              }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              transform="rotate(-90 65 65)"
            />
            <defs>
              <linearGradient
                id="scoreGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#C4704E" />
                <stop offset="100%" stopColor="#D4A76A" />
              </linearGradient>
            </defs>
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
                fontWeight: 700,
                fontStyle: "italic",
                color: "#3D2B1F",
                lineHeight: 1,
              }}
            >
              {results.skinScore}
            </motion.span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                color: "#8B7355",
                marginTop: 2,
              }}
            >
              / 100
            </span>
          </div>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#3D2B1F",
            marginBottom: 8,
          }}
        >
          Your Skin Health Score
        </h3>

        {/* Severity + Urgency badges */}
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              fontSize: "0.8rem",
              fontFamily: "var(--font-accent)",
              fontWeight: 600,
              background: severityConfig[results.severity].bg,
              color: severityConfig[results.severity].color,
            }}
          >
            {severityConfig[results.severity].label} Concern
          </span>
          <span
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              fontSize: "0.8rem",
              fontFamily: "var(--font-accent)",
              fontWeight: 600,
              background: "rgba(196,112,78,0.08)",
              color: urgencyConfig[results.urgency].color,
            }}
          >
            {urgencyConfig[results.urgency].label}
          </span>
        </div>
      </div>

      {/* Possible conditions */}
      {results.topConditions.length > 0 && (
        <div style={{ marginBottom: 32 }}>
          <h4
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#3D2B1F",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <TrendingUp size={20} color="#C4704E" />
            Possible Conditions
          </h4>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "#A89880",
              marginBottom: 14,
              fontStyle: "italic",
            }}
          >
            Based on your responses. This is not a medical diagnosis.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {results.topConditions.map(({ condition, confidence }, i) => (
              <motion.div
                key={condition.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                style={{
                  padding: "20px 22px",
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.8)",
                  border:
                    i === 0
                      ? "1.5px solid rgba(196,112,78,0.2)"
                      : "1.5px solid rgba(199,141,107,0.1)",
                  boxShadow:
                    i === 0 ? "0 4px 20px rgba(196,112,78,0.08)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#3D2B1F",
                    }}
                  >
                    {condition.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#C4704E",
                    }}
                  >
                    {confidence}% match
                  </span>
                </div>
                {/* Confidence bar */}
                <div
                  style={{
                    height: 4,
                    borderRadius: 4,
                    background: "rgba(199,141,107,0.1)",
                    marginBottom: 12,
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${confidence}%` }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
                    style={{
                      height: "100%",
                      borderRadius: 4,
                      background: "linear-gradient(90deg, #C4704E, #D4A76A)",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "#5C4033",
                    lineHeight: 1.55,
                    marginBottom: 10,
                  }}
                >
                  {condition.description}
                </p>
                <div style={{ marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#8B7355",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Available Treatments at {BRAND.name}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      flexWrap: "wrap",
                      marginTop: 6,
                    }}
                  >
                    {condition.availableTreatments.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "4px 10px",
                          borderRadius: 999,
                          fontSize: "0.73rem",
                          fontFamily: "var(--font-body)",
                          background: "rgba(212,167,106,0.12)",
                          color: "#5C4033",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "#C4704E",
                    fontWeight: 500,
                    marginTop: 8,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 6,
                  }}
                >
                  <AlertTriangle
                    size={14}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  {condition.whyActNow}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div style={{ marginBottom: 32 }}>
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#3D2B1F",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Sparkles size={20} color="#C4704E" />
          Professional Recommendations
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {results.recommendations.map((rec, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                padding: "14px 16px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(199,141,107,0.08)",
              }}
            >
              <ChevronRight
                size={16}
                color="#C4704E"
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "#3D2B1F",
                  lineHeight: 1.55,
                }}
              >
                {rec}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lifestyle tips */}
      <div style={{ marginBottom: 36 }}>
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#3D2B1F",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Heart size={20} color="#C4704E" />
          Lifestyle Tips
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {results.lifestyleTips.map((tip, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                padding: "14px 16px",
                borderRadius: 14,
                background: "rgba(212,167,106,0.06)",
                border: "1px solid rgba(199,141,107,0.08)",
              }}
            >
              <Star
                size={14}
                color="#D4A76A"
                style={{ flexShrink: 0, marginTop: 3 }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "#5C4033",
                  lineHeight: 1.55,
                }}
              >
                {tip}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lead handoff CTA */}
      <div
        style={{
          padding: "32px 28px",
          borderRadius: 24,
          textAlign: "center",
          background: "linear-gradient(135deg, #2c1810, #3D2B1F)",
          boxShadow: "0 12px 48px rgba(44,24,16,0.25)",
        }}
      >
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#FDF6EC",
            marginBottom: 12,
          }}
        >
          Share Your Report With the Clinic
        </h4>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.92rem",
            color: "rgba(253,246,236,0.75)",
            lineHeight: 1.65,
            marginBottom: 24,
            maxWidth: 480,
            margin: "0 auto 24px",
          }}
        >
          {results.bookingMessage}
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "0.95rem",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 999,
              textDecoration: "none",
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              color: "white",
              boxShadow: "0 6px 24px rgba(37,211,102,0.28)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "transform 0.2s",
            }}
          >
            <MessageCircle size={16} /> Send this report to the clinic on
            WhatsApp
          </a>
          <Link
            href={bookingHref}
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "0.95rem",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: 999,
              textDecoration: "none",
              background: "linear-gradient(135deg, #C4704E, #D4A76A)",
              color: "white",
              boxShadow: "0 6px 24px rgba(196,112,78,0.4)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "transform 0.2s",
            }}
          >
            <Phone size={16} /> Book with this concern pre-filled
          </Link>
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            color: "rgba(253,246,236,0.58)",
            marginTop: 20,
            lineHeight: 1.55,
          }}
        >
          This report is only a preliminary screening summary. It is not a
          diagnosis, prescription, or substitute for an in-person dermatology
          consultation.
        </p>
      </div>

      {/* Disclaimer */}
      <div
        style={{
          marginTop: 28,
          padding: "16px 20px",
          borderRadius: 14,
          background: "rgba(255,152,0,0.06)",
          border: "1px solid rgba(255,152,0,0.12)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "#8B7355",
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "#5C4033" }}>Important Disclaimer:</strong>{" "}
          This analysis is a preliminary screening tool and does not constitute
          a medical diagnosis. It is based on self-reported symptoms and general
          dermatological criteria. For an accurate diagnosis and treatment plan,
          please consult Dr. Mamta Bhura or a qualified dermatologist in person.
        </p>
      </div>

      {/* Restart */}
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <button
          onClick={resetAll}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "#8B7355",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <RotateCcw size={14} /> Start a new analysis
        </button>
      </div>
    </motion.div>
  ) : null;

  // ── Render ───────────────────────────────────────────────

  const stepViews: Record<Step, React.ReactNode> = {
    welcome: WelcomeView,
    concern: ConcernView,
    photo: PhotoView,
    questionnaire: QuestionnaireView,
    processing: ProcessingView,
    results: ResultsView,
  };

  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 24px",
        minHeight: "60vh",
      }}
    >
      {/* Step indicator (for non-welcome/processing/results) */}
      {!["welcome", "processing", "results"].includes(step) && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 28,
          }}
        >
          {(["concern", "photo", "questionnaire"] as Step[]).map((s, i) => (
            <div
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-accent)",
                  fontWeight: 600,
                  background:
                    step === s
                      ? "linear-gradient(135deg, #C4704E, #D4A76A)"
                      : ["concern", "photo", "questionnaire"].indexOf(step) > i
                        ? "rgba(196,112,78,0.15)"
                        : "rgba(199,141,107,0.08)",
                  color: step === s ? "white" : "#8B7355",
                  transition: "all 0.3s",
                }}
              >
                {["concern", "photo", "questionnaire"].indexOf(step) > i ? (
                  <CheckCircle size={14} />
                ) : (
                  i + 1
                )}
              </div>
              {i < 2 && (
                <div
                  style={{
                    width: 32,
                    height: 1.5,
                    background:
                      ["concern", "photo", "questionnaire"].indexOf(step) > i
                        ? "#C4704E"
                        : "rgba(199,141,107,0.15)",
                    transition: "background 0.3s",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">{stepViews[step]}</AnimatePresence>
    </div>
  );
}

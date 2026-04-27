"use client";

import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

const today = new Date().toISOString().split("T")[0];

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)."),
  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number (starting with 6–9)."
    ),
  email: z
    .union([z.email("Enter a valid email address."), z.literal("")])
    .optional(),
  concern: z.string().min(1, "Please select a treatment area."),
  preferredDate: z
    .string()
    .min(1, "Please choose a preferred date.")
    .refine((val) => val >= today, {
      message: "Please select a date from today onwards.",
    }),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof formSchema>;

interface ServiceItem {
  id: string;
  title: string;
}

interface BookingFormProps {
  services: ServiceItem[];
}

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.8125rem 1rem",
  borderRadius: "10px",
  border: "1.5px solid rgba(199,141,107,0.25)",
  background: "#FDFAF6",
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  color: "#3D2B1F",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const inputError: React.CSSProperties = {
  borderColor: "#C4704E",
  background: "#FFF8F5",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-accent)",
  fontSize: "0.8rem",
  fontWeight: 500,
  letterSpacing: "0.07em",
  textTransform: "uppercase" as const,
  color: "#5C4033",
  marginBottom: "0.5rem",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.8rem",
  color: "#C4704E",
  marginTop: "0.3rem",
};

function BookingFormInner({ services }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const defaultConcern = searchParams.get("concern") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      concern: defaultConcern,
      preferredDate: "",
      message: "",
      website: "", // honeypot — must remain empty
    },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          phone: data.phone,
          email: data.email,
          concern: data.concern,
          message: data.message,
          website: data.website, // honeypot
        }),
      });
      if (!res.ok) throw new Error("Server error");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleNewBooking = () => {
    reset();
    setSubmitted(false);
  };

  return (
    <div
      className="rounded-2xl"
      style={{
        background: "#FFFFFF",
        boxShadow: "0 12px 48px rgba(61,43,31,0.1)",
        overflow: "hidden",
      }}
    >
      {/* Card Header */}
      <div
        className="px-8 py-6"
        style={{
          background: "linear-gradient(135deg, #F5E6D3 0%, #FDF6EC 100%)",
          borderBottom: "1px solid rgba(199,141,107,0.15)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "0.6875rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C78D6B",
            marginBottom: "0.4rem",
          }}
        >
          Book Your Visit
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.875rem",
            fontStyle: "italic",
            fontWeight: 600,
            color: "#3D2B1F",
            lineHeight: 1.1,
          }}
        >
          Book Your Consultation
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "#5C4033",
            marginTop: "0.5rem",
            lineHeight: 1.6,
          }}
        >
          Fill in the details below and we&apos;ll confirm your appointment
          within a few hours.
        </p>
      </div>

      {/* Form body */}
      <div className="px-8 py-8">
        <AnimatePresence mode="wait">
          {submitted ? (
            /* ── Success State ── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center py-10 gap-6"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(196,112,78,0.15) 0%, rgba(199,141,107,0.1) 100%)",
                  border: "2px solid rgba(199,141,107,0.3)",
                }}
              >
                <motion.svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4704E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.polyline points="20 6 9 17 4 12" />
                </motion.svg>
              </motion.div>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    marginBottom: "0.625rem",
                  }}
                >
                  Request Received!
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "#5C4033",
                    lineHeight: 1.7,
                    maxWidth: "38ch",
                    margin: "0 auto",
                  }}
                >
                  Thank you. We&apos;ll confirm your appointment slot within a
                  few hours. If it&apos;s urgent, feel free to call or WhatsApp
                  us directly.
                </p>
              </div>

              <button
                onClick={handleNewBooking}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.75rem 1.75rem",
                  background: "transparent",
                  border: "1.5px solid rgba(199,141,107,0.4)",
                  borderRadius: "100px",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#3D2B1F",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(199,141,107,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#C78D6B";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(199,141,107,0.4)";
                }}
              >
                Submit Another Request
              </button>

              {/* WhatsApp hand-off CTA */}
              <a
                href="https://wa.me/919145899699?text=Hi%2C%20I%20just%20submitted%20an%20appointment%20request%20on%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  background: "#25D366",
                  borderRadius: "100px",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#fff",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.882l6.244-1.637A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.011-1.374l-.36-.213-3.707.972.988-3.61-.234-.37A9.818 9.818 0 0 1 2.182 12C2.182 6.568 6.568 2.182 12 2.182c5.432 0 9.818 4.386 9.818 9.818 0 5.432-4.386 9.818-9.818 9.818z"/>
                </svg>
                Confirm via WhatsApp
              </a>
            </motion.div>
          ) : (
            /* ── Form ── */
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Row 1: Full Name */}
              <div>
                <label htmlFor="fullName" style={labelStyle}>
                  Full Name <span style={{ color: "#C4704E" }}>*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  autoComplete="name"
                  {...register("fullName")}
                  style={{
                    ...inputBase,
                    ...(errors.fullName ? inputError : {}),
                  }}
                  onFocus={(e) => {
                    if (!errors.fullName) {
                      (e.target as HTMLInputElement).style.borderColor =
                        "#C78D6B";
                      (e.target as HTMLInputElement).style.boxShadow =
                        "0 0 0 3px rgba(199,141,107,0.12)";
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.fullName) {
                      (e.target as HTMLInputElement).style.borderColor =
                        "rgba(199,141,107,0.25)";
                      (e.target as HTMLInputElement).style.boxShadow = "none";
                    }
                  }}
                />
                {errors.fullName && (
                  <p style={errorStyle} role="alert">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Row 2: Phone + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" style={labelStyle}>
                    Phone Number <span style={{ color: "#C4704E" }}>*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    {...register("phone")}
                    style={{
                      ...inputBase,
                      ...(errors.phone ? inputError : {}),
                    }}
                    onFocus={(e) => {
                      if (!errors.phone) {
                        (e.target as HTMLInputElement).style.borderColor =
                          "#C78D6B";
                        (e.target as HTMLInputElement).style.boxShadow =
                          "0 0 0 3px rgba(199,141,107,0.12)";
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.phone) {
                        (e.target as HTMLInputElement).style.borderColor =
                          "rgba(199,141,107,0.25)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }
                    }}
                  />
                  {errors.phone && (
                    <p style={errorStyle} role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email{" "}
                    <span
                      style={{
                        color: "#C78D6B",
                        fontWeight: 400,
                        textTransform: "none",
                        letterSpacing: 0,
                        fontSize: "0.75rem",
                      }}
                    >
                      (optional)
                    </span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    {...register("email")}
                    style={{
                      ...inputBase,
                      ...(errors.email ? inputError : {}),
                    }}
                    onFocus={(e) => {
                      if (!errors.email) {
                        (e.target as HTMLInputElement).style.borderColor =
                          "#C78D6B";
                        (e.target as HTMLInputElement).style.boxShadow =
                          "0 0 0 3px rgba(199,141,107,0.12)";
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.email) {
                        (e.target as HTMLInputElement).style.borderColor =
                          "rgba(199,141,107,0.25)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }
                    }}
                  />
                  {errors.email && (
                    <p style={errorStyle} role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Concern + Date */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="concern" style={labelStyle}>
                    Treatment Interest{" "}
                    <span style={{ color: "#C4704E" }}>*</span>
                  </label>
                  <select
                    id="concern"
                    {...register("concern")}
                    style={{
                      ...inputBase,
                      appearance: "none",
                      cursor: "pointer",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23C78D6B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      paddingRight: "2.5rem",
                      ...(errors.concern ? inputError : {}),
                    }}
                  >
                    <option value="">Select a concern…</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {errors.concern && (
                    <p style={errorStyle} role="alert">
                      {errors.concern.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredDate" style={labelStyle}>
                    Preferred Date <span style={{ color: "#C4704E" }}>*</span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    min={today}
                    {...register("preferredDate")}
                    style={{
                      ...inputBase,
                      cursor: "pointer",
                      ...(errors.preferredDate ? inputError : {}),
                    }}
                    onFocus={(e) => {
                      if (!errors.preferredDate) {
                        (e.target as HTMLInputElement).style.borderColor =
                          "#C78D6B";
                        (e.target as HTMLInputElement).style.boxShadow =
                          "0 0 0 3px rgba(199,141,107,0.12)";
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.preferredDate) {
                        (e.target as HTMLInputElement).style.borderColor =
                          "rgba(199,141,107,0.25)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }
                    }}
                  />
                  {errors.preferredDate && (
                    <p style={errorStyle} role="alert">
                      {errors.preferredDate.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>
                  Additional Notes{" "}
                  <span
                    style={{
                      color: "#C78D6B",
                      fontWeight: 400,
                      textTransform: "none",
                      letterSpacing: 0,
                      fontSize: "0.75rem",
                    }}
                  >
                    (optional)
                  </span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your skin concern, any medications you're on, or anything else Dr. Bhura should know…"
                  {...register("message")}
                  style={{
                    ...inputBase,
                    resize: "vertical",
                    minHeight: "110px",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor =
                      "#C78D6B";
                    (e.target as HTMLTextAreaElement).style.boxShadow =
                      "0 0 0 3px rgba(199,141,107,0.12)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor =
                      "rgba(199,141,107,0.25)";
                    (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Honeypot — hidden from real users, filled by bots */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.625rem",
                  padding: "1rem 2rem",
                  background: loading
                    ? "rgba(196,112,78,0.55)"
                    : "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                  color: "white",
                  fontFamily: "var(--font-accent)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  borderRadius: "12px",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  boxShadow: loading
                    ? "none"
                    : "0 4px 24px rgba(196,112,78,0.32)",
                  transition: "all 0.3s ease",
                  marginTop: "0.25rem",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 32px rgba(196,112,78,0.42)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 24px rgba(196,112,78,0.32)";
                  }
                }}
              >
                {loading ? (
                  <>
                    <motion.span
                      className="block w-5 h-5 rounded-full border-2 border-white border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.75,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Appointment Request
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "#C78D6B",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                We respect your privacy. Your information is never shared with
                third parties.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function BookingForm({ services }: BookingFormProps) {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <BookingFormInner services={services} />
    </Suspense>
  );
}

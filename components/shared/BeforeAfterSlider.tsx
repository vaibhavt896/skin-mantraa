"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  concern?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  concern,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calcPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseUp = () => setDragging(false);
  const onMouseMove = useCallback((e: MouseEvent) => { if (dragging) calcPos(e.clientX); }, [dragging, calcPos]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    calcPos(e.touches[0].clientX);
  }, [calcPos]);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, onMouseMove]);

  return (
    <div className="flex flex-col gap-2">
      {concern && (
        <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4704E" }}>
          {concern}
        </p>
      )}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl select-none"
        style={{ aspectRatio: "4/5", cursor: dragging ? "grabbing" : "grab", touchAction: "none" }}
        onTouchMove={(e) => onTouchMove(e.nativeEvent)}
        onMouseDown={onMouseDown}
      >
        {/* After (full width behind) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before (clipped left portion) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(0,0,0,0.55)", color: "#fff", fontFamily: "var(--font-accent)", letterSpacing: "0.06em", backdropFilter: "blur(6px)" }}>Before</div>
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(0,0,0,0.55)", color: "#fff", fontFamily: "var(--font-accent)", letterSpacing: "0.06em", backdropFilter: "blur(6px)" }}>After</div>

        {/* Handle line */}
        <div
          className="absolute inset-y-0 flex items-center justify-center"
          style={{ left: `${pos}%`, transform: "translateX(-50%)", width: "3px", background: "rgba(255,255,255,0.9)", zIndex: 10, pointerEvents: "none" }}
        />

        {/* Handle circle */}
        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            left: `${pos}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "48px", height: "48px",
            background: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            zIndex: 11,
            pointerEvents: "none",
          }}
        >
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
            <path d="M1 6h18M1 6l4-4M1 6l4 4M19 6l-4-4M19 6l-4 4" stroke="#C4704E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "rgba(92,64,51,0.5)", textAlign: "center" }}>
        Individual results may vary. Consultation required.
      </p>
    </div>
  );
}

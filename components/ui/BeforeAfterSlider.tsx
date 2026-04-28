"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  category: string;
  treatment: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  category,
  treatment,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // If no images are provided, render the fallback placeholder
  if (!beforeImage || !afterImage) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: "4/3" }}
        aria-label={`Before and after placeholder for ${treatment}`}
      >
        {/* Before — left half */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 flex items-end justify-start p-3"
          style={{
            background: "linear-gradient(135deg, #c2b5a8 0%, #a89588 40%, #9c8577 100%)",
          }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-accent)",
              background: "rgba(0,0,0,0.28)",
              color: "rgba(255,255,255,0.92)",
              letterSpacing: "0.12em",
            }}
          >
            Before
          </span>
        </div>

        {/* After — right half */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 flex items-end justify-end p-3"
          style={{
            background: "linear-gradient(135deg, #f8e8e0 0%, #f5e6d3 40%, #fdf6ec 100%)",
          }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-accent)",
              background: "rgba(196,112,78,0.22)",
              color: "#7a3b1e",
              letterSpacing: "0.12em",
            }}
          >
            After
          </span>
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5"
          style={{ background: "#C78D6B" }}
        />

        {/* Handle circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center"
          style={{
            background: "#FDF6EC",
            borderColor: "#C78D6B",
            boxShadow: "0 2px 12px rgba(199,141,107,0.35)",
          }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5h12M4 2L1 5l3 3M10 2l3 3-3 3" stroke="#C4704E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Category badge top-left */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-accent)",
              background: "rgba(61,43,31,0.65)",
              color: "#F5E6D3",
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
            }}
          >
            {category}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl select-none"
      style={{ aspectRatio: "4/3", cursor: isDragging ? "grabbing" : "ew-resize" }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt={`${treatment} after treatment`}
        fill
        className="object-cover pointer-events-none"
      />
      <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
        <span
          className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded-full"
          style={{
            fontFamily: "var(--font-accent)",
            background: "rgba(196,112,78,0.72)",
            color: "white",
            letterSpacing: "0.12em",
          }}
        >
          After
        </span>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={beforeImage}
          alt={`${treatment} before treatment`}
          fill
          className="object-cover max-w-none w-[var(--slider-width)] pointer-events-none"
          style={{ "--slider-width": "100%" } as React.CSSProperties}
        />
        <div className="absolute bottom-3 left-3 z-10">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-accent)",
              background: "rgba(0,0,0,0.58)",
              color: "rgba(255,255,255,0.92)",
              letterSpacing: "0.12em",
            }}
          >
            Before
          </span>
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute inset-y-0 -ml-0.5 w-1 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          background: "#C78D6B",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-150"
          style={{
            background: "#FDF6EC",
            borderColor: "#C78D6B",
            boxShadow: "0 2px 12px rgba(199,141,107,0.35)",
            transform: `translate(-50%, -50%) ${isDragging ? "scale(1.1)" : "scale(1)"}`,
          }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M1 5h12M4 2L1 5l3 3M10 2l3 3-3 3"
              stroke="#C4704E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Category badge top-left */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            fontFamily: "var(--font-accent)",
            background: "rgba(61,43,31,0.65)",
            color: "#F5E6D3",
            fontSize: "0.7rem",
            letterSpacing: "0.06em",
          }}
        >
          {category}
        </span>
      </div>
    </div>
  );
}

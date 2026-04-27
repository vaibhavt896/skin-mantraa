"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceArticle({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    
    gsap.fromTo(ref.current, 
      {
        y: 120,
        rotateX: 10,
        opacity: 0,
      },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: ref });

  return (
    <article id={id} ref={ref} className={className}>
      {children}
    </article>
  );
}

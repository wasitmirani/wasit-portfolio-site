"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const hiddenByDirection = {
  up: "opacity-0 translate-y-4",
  left: "opacity-0 -translate-x-4",
  right: "opacity-0 translate-x-4",
  none: "opacity-0",
} as const;

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => setVisible(true), delay);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform,filter] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "opacity-100 translate-x-0 translate-y-0 blur-0" : `${hiddenByDirection[direction]} blur-[2px]`
      } ${className}`}
    >
      {children}
    </div>
  );
}

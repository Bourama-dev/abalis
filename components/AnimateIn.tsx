"use client";

import { useEffect, useRef, ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up";

interface AnimateInProps {
  children: ReactNode;
  variant?: Variant;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
  threshold?: number;
}

const delayClass: Record<number, string> = {
  0: "",
  100: "animate-delay-100",
  200: "animate-delay-200",
  300: "animate-delay-300",
  400: "animate-delay-400",
  500: "animate-delay-500",
};

export default function AnimateIn({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const variantClass =
    variant === "fade-up"
      ? "animate-on-scroll"
      : `animate-on-scroll ${variant}`;

  const classes = [variantClass, delay ? delayClass[delay] : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}


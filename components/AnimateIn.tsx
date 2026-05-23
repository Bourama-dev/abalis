"use client";

import { useEffect, useRef, ElementType, ReactNode, ComponentPropsWithRef } from "react";

type Variant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up";

interface AnimateInProps {
  children: ReactNode;
  variant?: Variant;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
  as?: ElementType;
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
  as: Tag = "div",
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

  const classes = [
    variantClass,
    delay ? delayClass[delay] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const props = { ref, className: classes } as ComponentPropsWithRef<typeof Tag>;

  return <Tag {...props}>{children}</Tag>;
}

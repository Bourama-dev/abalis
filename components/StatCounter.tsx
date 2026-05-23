"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

function useCountUp(target: number, duration = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
}: StatCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center group"
      style={{
        transition: "opacity 0.6s ease, transform 0.6s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      {/* Decorative top border accent (visible on navy bg) */}
      <div
        className="w-8 h-[2px] mx-auto mb-5 rounded-full"
        style={{ background: "linear-gradient(90deg, #D86030, #E07A50)" }}
        aria-hidden="true"
      />

      {/* Number */}
      <div className="flex items-end justify-center gap-1 mb-3">
        {prefix && (
          <span
            className="font-serif font-bold text-2xl mb-1"
            style={{
              background: "linear-gradient(135deg, #D86030 0%, #E07A50 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {prefix}
          </span>
        )}
        <span
          className="font-serif font-bold text-5xl lg:text-6xl tabular-nums"
          style={{
            background: "linear-gradient(135deg, #D86030 0%, #E07A50 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: isVisible
              ? "drop-shadow(0 0 16px rgba(216,96,48,0.4))"
              : "none",
            transition: "filter 0.6s ease",
          }}
          aria-live="polite"
          aria-label={`${prefix}${count}${suffix}`}
        >
          {count}
        </span>
        {suffix && (
          <span
            className="font-serif font-bold text-3xl mb-1"
            style={{
              background: "linear-gradient(135deg, #D86030 0%, #E07A50 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* Decorative line below number */}
      <div
        className="w-8 h-[2px] mx-auto mb-4 rounded-full"
        style={{ background: "linear-gradient(90deg, #D86030, rgba(216,96,48,0.2))" }}
        aria-hidden="true"
      />

      {/* Label */}
      <p className="font-semibold text-white text-base mb-1">{label}</p>

      {/* Description */}
      {description && (
        <p className="text-white/50 text-sm mt-1">{description}</p>
      )}
    </div>
  );
}

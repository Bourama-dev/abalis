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

export default function StatCounter({ value, suffix = "", prefix = "", label, description }: StatCounterProps) {
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
    <div ref={ref} className="text-center">
      <div className="flex items-end justify-center gap-1 mb-2">
        {prefix && (
          <span className="text-gold font-serif font-bold text-2xl mb-1">{prefix}</span>
        )}
        <span
          className="font-serif font-bold text-5xl text-gradient-gold tabular-nums"
          aria-live="polite"
          aria-label={`${prefix}${count}${suffix}`}
        >
          {count}
        </span>
        {suffix && (
          <span className="text-gold font-serif font-bold text-3xl mb-1">{suffix}</span>
        )}
      </div>
      <p className="font-semibold text-dark-text text-base">{label}</p>
      {description && (
        <p className="text-mid-gray text-sm mt-1">{description}</p>
      )}
    </div>
  );
}

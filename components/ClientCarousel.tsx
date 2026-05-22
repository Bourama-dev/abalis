"use client";

import { useRef, useEffect } from "react";

const clients = [
  { name: "Alstom", style: "font-bold text-[#E30613] tracking-tight" },
  { name: "BNP Paribas", style: "font-bold text-[#00965E] tracking-tight" },
  { name: "Capgemini", style: "font-bold text-[#0070AD] tracking-tight" },
  { name: "Engie", style: "font-bold text-[#00AAFF] tracking-tight" },
  { name: "Forvia", style: "font-bold text-[#003DA5] tracking-tight" },
  { name: "Sanofi", style: "font-bold text-[#7F2378] tracking-tight" },
  { name: "Thales", style: "font-bold text-[#00338D] tracking-tight" },
  { name: "LVMH", style: "font-bold text-[#1A1A1A] tracking-widest" },
  { name: "Michelin", style: "font-bold text-[#003189] tracking-tight" },
  { name: "Airbus", style: "font-bold text-[#00205B] tracking-tight" },
  { name: "Safran", style: "font-bold text-[#E2001A] tracking-tight" },
  { name: "Orange", style: "font-bold text-[#FF6600] tracking-tight" },
  { name: "Valeo", style: "font-bold text-[#007DC3] tracking-tight" },
  { name: "Schneider", style: "font-bold text-[#3DCD58] tracking-tight" },
];

export default function ClientCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    let pos = 0;
    const speed = 0.5;

    const step = () => {
      pos -= speed;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(step); };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const items = [...clients, ...clients];

  return (
    <section className="bg-white border-y border-gray-100 py-12 overflow-hidden" aria-labelledby="clients-carousel-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 id="clients-carousel-heading" className="font-serif font-semibold text-2xl text-navy mb-3">
          Nos références clients dans le monde
        </h2>
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-0">
          <div className="h-px bg-navy/20 w-32 sm:w-48" aria-hidden="true" />
          <div className="w-8 h-1 bg-gold rounded-full mx-1" aria-hidden="true" />
          <div className="h-px bg-navy/20 w-32 sm:w-48" aria-hidden="true" />
        </div>
      </div>

      {/* Carousel track */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-0 will-change-transform"
            style={{ width: "max-content" }}
            aria-hidden="true"
          >
            {items.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-10 py-2"
              >
                <span className={`text-xl sm:text-2xl uppercase ${client.style} opacity-60 hover:opacity-100 transition-opacity duration-300 select-none`}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screen-reader accessible list */}
      <ul className="sr-only">
        {clients.map((c) => (
          <li key={c.name}>{c.name}</li>
        ))}
      </ul>
    </section>
  );
}

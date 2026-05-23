"use client";

import { useRef, useEffect } from "react";

const clients = [
  { name: "Alstom",     color: "#E30613" },
  { name: "BNP Paribas",color: "#00965E" },
  { name: "Capgemini",  color: "#0070AD" },
  { name: "Engie",      color: "#009FE3" },
  { name: "Forvia",     color: "#003DA5" },
  { name: "Sanofi",     color: "#7F2378" },
  { name: "Thales",     color: "#00338D" },
  { name: "LVMH",       color: "#1A1A1A" },
  { name: "Michelin",   color: "#003189" },
  { name: "Airbus",     color: "#00205B" },
  { name: "Safran",     color: "#C8102E" },
  { name: "Orange",     color: "#FF6600" },
  { name: "Valeo",      color: "#007DC3" },
  { name: "Schneider",  color: "#3DCD58" },
];

export default function ClientCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId: number;
    let pos = 0;
    const speed = 0.6;

    const step = () => {
      pos -= speed;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);

    const pause  = () => cancelAnimationFrame(animId);
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
    <section
      className="py-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F7F5F0 0%, #FFFFFF 100%)" }}
      aria-labelledby="clients-carousel-heading"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="label-section justify-center mb-3">Références mondiales</p>
        <h2 id="clients-carousel-heading" className="font-serif font-semibold text-2xl sm:text-3xl text-navy">
          Nos références clients dans le monde
        </h2>
        {/* Divider matching screenshot */}
        <div className="flex items-center justify-center mt-5">
          <div className="flex-1 max-w-[200px] h-px bg-navy/15" aria-hidden="true" />
          <div className="w-10 h-1.5 bg-gold rounded mx-1" aria-hidden="true" />
          <div className="flex-1 max-w-[200px] h-px bg-navy/15" aria-hidden="true" />
        </div>
      </div>

      {/* Track */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #F9F8F5 0%, transparent 100%)" }}
          aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #F9F8F5 0%, transparent 100%)" }}
          aria-hidden="true" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center will-change-transform"
            style={{ width: "max-content" }}
            aria-hidden="true"
          >
            {items.map((client, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <span
                  className="px-8 py-2 text-xl sm:text-2xl font-bold uppercase tracking-tight select-none transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ color: client.color, opacity: 0.55 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
                >
                  {client.name}
                </span>
                {/* Separator dot */}
                <span className="text-navy/20 text-lg select-none" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SR list */}
      <ul className="sr-only">
        {clients.map(c => <li key={c.name}>{c.name}</li>)}
      </ul>
    </section>
  );
}

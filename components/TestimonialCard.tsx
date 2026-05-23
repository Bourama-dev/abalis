interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  sector: string;
  initials: string;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  company,
  sector,
  initials,
}: TestimonialCardProps) {
  return (
    <figure
      className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.12)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "#FEFCFA";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
      }}
    >
      {/* Left border accent — gradient from gold to transparent (top → bottom) */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[3px]"
        style={{
          background:
            "linear-gradient(180deg, #D86030 0%, rgba(216,96,48,0.3) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Large decorative quote mark top-right */}
      <div
        className="absolute top-2 right-5 font-serif text-[96px] leading-none select-none pointer-events-none"
        style={{ color: "rgba(216,96,48,0.07)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="pl-8 pr-7 pt-7 pb-7">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-5" aria-label="5 étoiles sur 5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#D86030" aria-hidden="true">
              <path d="M7 1l1.79 3.62 3.99.58-2.89 2.82.68 3.97L7 10.27l-3.57 1.72.68-3.97L1.22 5.2l3.99-.58L7 1z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="relative z-10 mb-6">
          <p className="text-dark-text text-base leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        {/* Author row */}
        <figcaption className="flex items-center gap-4">
          {/* Avatar with gradient ring */}
          <div className="relative flex-shrink-0" aria-hidden="true">
            {/* Gradient ring wrapper */}
            <div
              className="w-12 h-12 rounded-full p-[2px]"
              style={{
                background: "linear-gradient(135deg, #D86030, #2B5F6B)",
              }}
            >
              <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
                <span className="text-gold font-semibold text-sm">{initials}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-dark-text text-sm">{name}</p>
            <p className="text-mid-gray text-xs truncate">
              {title} ·{" "}
              <span className="text-navy font-medium">{company}</span>
            </p>
          </div>

          {/* Sector badge */}
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-gold text-xs font-semibold">
              <span
                className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                aria-hidden="true"
              />
              {sector}
            </span>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

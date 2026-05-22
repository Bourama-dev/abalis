interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  sector: string;
  initials: string;
}

export default function TestimonialCard({ quote, name, title, company, sector, initials }: TestimonialCardProps) {
  return (
    <figure className="relative bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Quote mark */}
      <div className="absolute top-5 right-6 text-7xl font-serif text-gold/15 leading-none select-none pointer-events-none" aria-hidden="true">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5" aria-label="5 étoiles sur 5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C8A951" aria-hidden="true">
            <path d="M7 1l1.79 3.62 3.99.58-2.89 2.82.68 3.97L7 10.27l-3.57 1.72.68-3.97L1.22 5.2l3.99-.58L7 1z"/>
          </svg>
        ))}
      </div>

      <blockquote>
        <p className="text-dark-text text-base leading-relaxed mb-6 relative z-10">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full bg-navy flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-gold font-semibold text-sm">{initials}</span>
        </div>
        <div>
          <p className="font-semibold text-dark-text text-sm">{name}</p>
          <p className="text-mid-gray text-xs">{title} · <span className="text-navy font-medium">{company}</span></p>
        </div>
        {/* Sector badge */}
        <div className="ml-auto flex-shrink-0">
          <span className="px-2.5 py-1 bg-cream rounded text-navy/60 text-xs font-medium">{sector}</span>
        </div>
      </figcaption>
    </figure>
  );
}

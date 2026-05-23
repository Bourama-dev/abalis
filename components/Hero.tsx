import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  cta?: { label: string; href: string };
}

export default function Hero({ title, subtitle, breadcrumb, cta }: HeroProps) {
  return (
    <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        {/* Radial glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(216,96,48,0.08) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(43,95,107,0.4) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="inner-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#inner-grid)"/>
        </svg>
        {/* Floating decorative circles */}
        <div className="animate-float absolute right-20 top-16 w-20 h-20 rounded-full border border-gold/15 opacity-60" />
        <div className="animate-float-delay absolute right-40 top-32 w-10 h-10 rounded-full border border-gold/20 opacity-40" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-white/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="mb-8"
            style={{ animation: "fade-up 0.5s ease-out forwards" }}>
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <Link href="/" className="hover:text-gold transition-colors duration-200">Accueil</Link>
              </li>
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {crumb.href && i < breadcrumb.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-gold transition-colors duration-200">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/80">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Content */}
        <div className="max-w-3xl">
          {/* Accent line */}
          <div
            className="w-14 h-[3px] rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, #D86030, #E07A50)", animation: "fade-up 0.5s ease-out forwards" }}
            aria-hidden="true"
          />

          <h1
            className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-5"
            style={{ animation: "fade-up 0.6s 0.1s ease-out both" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-white/65 text-lg leading-relaxed max-w-xl"
              style={{ animation: "fade-up 0.6s 0.2s ease-out both" }}
            >
              {subtitle}
            </p>
          )}

          {cta && (
            <div
              className="mt-8"
              style={{ animation: "fade-up 0.6s 0.35s ease-out both" }}
            >
              <Link href={cta.href} className="btn-primary">
                {cta.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom diagonal clip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        aria-hidden="true"
      />
    </section>
  );
}

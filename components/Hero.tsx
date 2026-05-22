import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  cta?: { label: string; href: string };
}

export default function Hero({ title, subtitle, breadcrumb, cta }: HeroProps) {
  return (
    <section className="relative bg-navy pt-28 pb-16 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-light/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-8 right-16 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Accueil</Link>
              </li>
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {crumb.href && i < breadcrumb.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-gold transition-colors">{crumb.label}</Link>
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
          <div className="section-divider mb-6" aria-hidden="true" />
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="mt-8">
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
    </section>
  );
}

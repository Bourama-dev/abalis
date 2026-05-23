import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import TestimonialCard from "@/components/TestimonialCard";
import ClientCarousel from "@/components/ClientCarousel";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Abalis Traduction – Agence de traduction professionnelle à Orléans",
  description:
    "Agence de traduction professionnelle certifiée ISO 17100 à Orléans. Traductions juridiques, médicales, techniques et financières en 50+ langues. Devis gratuit sous 2h.",
};

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Traduction Juridique",
    description: "Contrats, actes notariés, jugements et documents officiels traduits par des juristes bilingues certifiés.",
    href: "/services/traduction-juridique",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Traduction Médicale",
    description: "Dossiers cliniques, notices pharmaceutiques et études médicales traduits avec rigueur scientifique.",
    href: "/services/traduction-medicale",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: "Traduction Technique",
    description: "Manuels d'utilisation, brevets et documentation industrielle pour les secteurs aéronautique, énergie et automobile.",
    href: "/services/traduction-technique",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/>
      </svg>
    ),
    title: "Traduction Financière",
    description: "Rapports annuels, prospectus d'investissement et documents réglementaires traduits avec exactitude.",
    href: "/services",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    title: "Traduction Certifiée",
    description: "Traductions assermentées pour les administrations, ambassades et institutions internationales.",
    href: "/services",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Interprétation",
    description: "Interprétation simultanée et consécutive pour conférences, réunions d'affaires et négociations internationales.",
    href: "/services",
  },
];

const pillars = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Certification ISO 17100",
    text: "Nos processus sont certifiés ISO 17100, garantissant une qualité irréprochable à chaque étape — de la sélection du traducteur à la livraison.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Traducteurs natifs experts",
    text: "Chaque document est confié à un traducteur natif spécialisé dans votre domaine, sélectionné sur critères stricts d'expertise et d'expérience.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0114 0v4"/>
      </svg>
    ),
    title: "Confidentialité totale",
    text: "NDA systématique avant chaque mission. Vos documents sensibles sont traités dans un environnement sécurisé, avec chiffrement de bout en bout.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Délais garantis",
    text: "Devis sous 2h, service d'urgence 24h/7j. Nos chefs de projets s'engagent sur des délais fermes, même pour les missions les plus complexes.",
  },
];

const steps = [
  { number: "01", title: "Analyse",      desc: "Évaluation de votre projet, identification des besoins et sélection du traducteur expert" },
  { number: "02", title: "Affectation",  desc: "Attribution à un traducteur natif spécialisé dans votre domaine et vos langues" },
  { number: "03", title: "Traduction",   desc: "Traduction par un expert certifié respectant la terminologie spécifique à votre secteur" },
  { number: "04", title: "Révision",     desc: "Relecture et contrôle qualité par un second traducteur selon la norme ISO 17100" },
  { number: "05", title: "Livraison",    desc: "Envoi dans le format souhaité dans les délais convenus, avec rapport qualité" },
];

export default function HomePage() {
  return (
    <>
      {/* ────────────────── HERO ────────────────── */}
      <section
        className="relative min-h-screen flex items-center bg-navy overflow-hidden"
        aria-label="Bannière principale"
      >
        {/* Background layers */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
          {/* Orange radial glow */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(ellipse at 20% 55%, rgba(216,96,48,0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(43,95,107,0.35) 0%, transparent 50%)"
          }} />
          {/* Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
          {/* Decorative rings — floating */}
          <div className="animate-float absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full border border-gold/8 translate-x-1/3 opacity-60" />
          <div className="animate-float-delay absolute right-20 top-1/3 w-64 h-64 rounded-full border border-gold/10" />
          <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full border border-white/5 -translate-x-1/3 translate-y-1/3" />
          {/* Orange accent blob */}
          <div className="animate-float absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #D86030 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="max-w-3xl">
            {/* ISO badge */}
            <div className="flex items-center gap-3 mb-7"
              style={{ animation: "fade-up 0.6s ease-out both" }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/25 bg-gold/8">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true" />
                <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
                  Certifié ISO 17100 · Orléans, France
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="font-serif font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", animation: "fade-up 0.7s 0.1s ease-out both" }}
            >
              L&apos;excellence en{" "}
              <span className="text-gradient-orange">traduction</span>{" "}
              professionnelle
            </h1>

            <p
              className="text-white/65 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ animation: "fade-up 0.7s 0.2s ease-out both" }}
            >
              Depuis 25 ans, nous accompagnons les leaders mondiaux dans leur développement
              international. 50+ langues, traducteurs natifs experts, confidentialité garantie.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4 mb-14"
              style={{ animation: "fade-up 0.7s 0.3s ease-out both" }}
            >
              <Link href="/devis" className="btn-primary text-base px-8 py-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2.5 4h13v9.5a1 1 0 01-1 1h-11a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 4V2.5M12 4V2.5M2.5 7.5h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Devis gratuit sous 2h
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm rounded hover:border-white/70 hover:bg-white/8 transition-all duration-200"
              >
                Découvrir nos services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center gap-5 pt-8 border-t border-white/10"
              style={{ animation: "fade-up 0.7s 0.45s ease-out both" }}
            >
              {[
                { icon: "🏅", label: "ISO 17100" },
                { icon: "🕐", label: "25 ans d'expérience" },
                { icon: "🔒", label: "NDA systématique" },
                { icon: "🌍", label: "50+ langues" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-base" aria-hidden="true">{item.icon}</span>
                  <span className="text-white/55 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true"
          style={{ animation: "fade-up 1s 0.8s ease-out both" }}>
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/25 to-transparent" />
          <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">Découvrir</span>
        </div>
      </section>

      {/* ────────────────── CLIENT CAROUSEL ────────────────── */}
      <ClientCarousel />

      {/* ────────────────── SERVICES ────────────────── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-up" className="text-center mb-14">
            <p className="label-section justify-center mb-4">Nos expertises</p>
            <h2 id="services-heading" className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-5">
              Des solutions pour chaque domaine
            </h2>
            <p className="text-mid-gray text-lg max-w-2xl mx-auto">
              Chaque secteur possède sa terminologie, ses codes, ses exigences.
              Nos traducteurs spécialisés maîtrisent les nuances de votre domaine.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateIn key={service.title} variant="fade-up" delay={[0, 100, 200, 0, 100, 200][i] as 0 | 100 | 200}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  featured={i === 0}
                />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn variant="fade-up" delay={200} className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors">
              Voir tous nos services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ────────────────── WHY ABALIS ────────────────── */}
      <section className="py-20 lg:py-28 bg-cream pattern-bg" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <AnimateIn variant="fade-right">
              <p className="label-section mb-4">Pourquoi nous choisir</p>
              <h2 id="why-heading" className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-5">
                La qualité au cœur de chaque traduction
              </h2>
              <p className="text-mid-gray text-lg leading-relaxed mb-8">
                Chez Abalis, la traduction n&apos;est pas un simple exercice linguistique — c&apos;est
                un acte de communication précis qui engage votre réputation sur les marchés
                internationaux.
              </p>
              <Link href="/a-propos" className="btn-outline-gold">
                En savoir plus sur l&apos;agence
              </Link>
            </AnimateIn>

            {/* Right pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar, i) => (
                <AnimateIn key={pillar.title} variant="scale-up" delay={[0, 100, 200, 300][i] as 0 | 100 | 200 | 300}>
                  <div className="card-premium p-6 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-orange-50 flex items-center justify-center mb-4 text-navy group-hover:text-gold transition-all duration-300" aria-hidden="true">
                      {pillar.icon}
                    </div>
                    <h3 className="font-serif font-semibold text-dark-text text-base mb-2">{pillar.title}</h3>
                    <p className="text-mid-gray text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── STATS ────────────────── */}
      <section className="bg-navy py-20 relative overflow-hidden" aria-labelledby="stats-heading">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(216,96,48,0.07) 0%, transparent 60%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Nos chiffres clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { value: 25, suffix: "+", label: "Ans d'expérience", description: "Fondée en 1999 à Orléans" },
              { value: 50, suffix: "+", label: "Langues disponibles", description: "Traducteurs natifs experts" },
              { value: 98, suffix: "%", label: "Taux de satisfaction", description: "Mesuré par enquête annuelle" },
            ].map((stat, i) => (
              <AnimateIn key={stat.label} variant="scale-up" delay={[0, 200, 400][i] as 0 | 200 | 400} className="sm:px-10 py-4 sm:py-0 text-center">
                <StatCounter {...stat} />
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
      </section>

      {/* ────────────────── PROCESS ────────────────── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-up" className="text-center mb-16">
            <p className="label-section justify-center mb-4">Notre méthode</p>
            <h2 id="process-heading" className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-navy">
              Un processus rigoureux en 5 étapes
            </h2>
          </AnimateIn>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <AnimateIn key={step.number} variant="fade-up" delay={[0, 100, 200, 300, 400][i] as 0 | 100 | 200 | 300 | 400}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full bg-white flex flex-col items-center justify-center mb-5 z-10 shadow-[0_2px_12px_rgba(43,95,107,0.12)] border-2 border-gold/25 hover:border-gold/60 hover:shadow-[0_4px_20px_rgba(216,96,48,0.15)] transition-all duration-300 group">
                      <span className="text-gold/50 text-[9px] font-bold tracking-widest group-hover:text-gold transition-colors">{step.number}</span>
                      <span className="font-serif font-bold text-navy text-sm mt-0.5">{step.title}</span>
                    </div>
                    <p className="text-mid-gray text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── TESTIMONIALS ────────────────── */}
      <section className="py-20 lg:py-28 bg-cream" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-up" className="text-center mb-14">
            <p className="label-section justify-center mb-4">Témoignages</p>
            <h2 id="testimonials-heading" className="font-serif font-bold text-3xl md:text-4xl text-navy">
              Ce que nos clients disent
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimateIn variant="fade-up" delay={0}>
              <TestimonialCard
                quote="Abalis Traduction est notre partenaire de confiance depuis 8 ans pour la traduction de nos dossiers réglementaires. Leur expertise médicale et leur rigueur nous permettent d'accélérer nos soumissions à l'EMA en toute sérénité."
                name="Isabelle Maréchal"
                title="Directrice Affaires Réglementaires"
                company="Pharmagroup International"
                sector="Pharmaceutique"
                initials="IM"
              />
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <TestimonialCard
                quote="Nous avons confié à Abalis la traduction de nos contrats d'acquisition en 12 langues. La précision juridique et le respect des délais serrés ont été exemplaires. Une équipe véritablement professionnelle."
                name="Matthieu Fontaine"
                title="Directeur Juridique"
                company="Meridian Capital Group"
                sector="Finance"
                initials="MF"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ────────────────── CTA ────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden" aria-label="Appel à l'action">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(216,96,48,0.1) 0%, transparent 55%), radial-gradient(ellipse at 70% 50%, rgba(43,95,107,0.4) 0%, transparent 50%)"
          }} />
          <div className="animate-float absolute right-10 top-10 w-48 h-48 rounded-full border border-gold/10 opacity-50" />
          <div className="animate-float-delay absolute left-10 bottom-10 w-32 h-32 rounded-full border border-gold/10 opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn variant="scale-up">
            <div className="w-14 h-[3px] rounded-full mx-auto mb-8"
              style={{ background: "linear-gradient(90deg, #D86030, #E07A50)" }}
              aria-hidden="true" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Obtenez un devis personnalisé en moins de 2 heures. Notre équipe analyse votre
              projet et vous propose la solution la plus adaptée.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/devis" className="btn-primary text-base px-8 py-4">
                Demander un devis gratuit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm rounded hover:border-white/70 hover:bg-white/8 transition-all duration-200"
              >
                Nous contacter
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/35 text-sm">
              <span>Réponse sous 2h</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Aucun engagement</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Devis gratuit et détaillé</span>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

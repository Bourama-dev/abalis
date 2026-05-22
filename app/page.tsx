import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import TestimonialCard from "@/components/TestimonialCard";
import ClientCarousel from "@/components/ClientCarousel";

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
        <polyline points="10 9 9 9 8 9"/>
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
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3l2.5 5.5L22 9.5l-4 4 .9 5.5L14 16.5 9.1 19l.9-5.5-4-4 5.5-.5L14 3z"/>
      </svg>
    ),
    title: "Certification ISO 17100",
    text: "Nos processus de traduction sont certifiés ISO 17100, garantissant une qualité irréprochable à chaque étape — de la sélection du traducteur à la livraison finale.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <path d="M24 21v-2a4 4 0 00-3-3.87M17 4.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Traducteurs natifs experts",
    text: "Chaque document est confié à un traducteur natif spécialisé dans votre domaine. Nos 200+ traducteurs sont sélectionnés sur des critères stricts d'expertise et d'expérience.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="22" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0114 0v4"/>
      </svg>
    ),
    title: "Confidentialité totale",
    text: "Accord de confidentialité systématique. Vos documents sensibles sont traités dans un environnement sécurisé, avec chiffrement de bout en bout et accès restreint.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="14" cy="14" r="11"/>
        <polyline points="14 7 14 14 18 17"/>
      </svg>
    ),
    title: "Délais garantis",
    text: "Nous respectons vos délais, même en situation d'urgence. Notre service d'urgence 24h/7j vous garantit une réponse rapide pour les missions prioritaires.",
  },
];

const steps = [
  { number: "01", title: "Analyse", desc: "Évaluation de votre projet, identification des besoins et sélection du traducteur expert" },
  { number: "02", title: "Affectation", desc: "Attribution à un traducteur natif spécialisé dans votre domaine et vos langues" },
  { number: "03", title: "Traduction", desc: "Traduction par un expert certifié respectant la terminologie spécifique à votre secteur" },
  { number: "04", title: "Révision", desc: "Relecture et contrôle qualité par un second traducteur selon la norme ISO 17100" },
  { number: "05", title: "Livraison", desc: "Envoi dans le format souhaité dans les délais convenus, avec rapport qualité" },
];


export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden" aria-label="Bannière principale">
        {/* Background layers */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 15% 50%, rgba(200,169,81,0.12) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(200,169,81,0.08) 0%, transparent 50%)",
            }}
          />
          {/* Subtle grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
          {/* Decorative circles */}
          <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full border border-gold/8 translate-x-1/3" />
          <div className="absolute right-16 top-1/3 w-64 h-64 rounded-full border border-gold/6" />
          <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full border border-white/5 -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Agence certifiée ISO 17100 · Orléans
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-bold text-white leading-[1.05] mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              L&apos;excellence en{" "}
              <span className="text-gold">traduction</span>{" "}
              professionnelle
            </h1>

            <p className="text-white/65 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              Depuis 25 ans, nous accompagnons les leaders mondiaux dans leur développement international. 50+ langues, traducteurs natifs experts, confidentialité garantie.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-navy font-bold text-sm tracking-wide rounded hover:bg-gold-dark transition-all duration-200 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2.5 4h13v9.5a1 1 0 01-1 1h-11a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 4V2.5M12 4V2.5M2.5 7.5h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Devis gratuit sous 2h
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm tracking-wide rounded hover:border-white/80 hover:bg-white/10 transition-all duration-200"
              >
                Découvrir nos services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1l1.5 3.5H13l-2.8 2.2 1 3.3L8 8.2l-3.2 1.8 1-3.3L3 4.5h3.5L8 1z" fill="#C8A951"/>
                  </svg>
                </div>
                <span className="text-white/60 text-sm">ISO 17100</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1l1.5 3.5H12l-2.8 2.2 1 3.3L7 8.2l-3.2 1.8 1-3.3L2 4.5h3.5L7 1z" stroke="#C8A951" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <span className="text-white/60 text-sm">25 ans d&apos;expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1l6 4v4c0 3-2.5 5.3-6 6C3.5 14.3 1 12 1 9V5L7 1z" stroke="#C8A951" strokeWidth="1.2" fill="none"/>
                  </svg>
                </div>
                <span className="text-white/60 text-sm">NDA systématique</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Découvrir</span>
        </div>
      </section>

      {/* ── CLIENT CAROUSEL ── */}
      <ClientCarousel />

      {/* ── SERVICES GRID ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Nos expertises</span>
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
            </div>
            <h2 id="services-heading" className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
              Des solutions pour chaque domaine
            </h2>
            <p className="text-mid-gray text-lg max-w-2xl mx-auto">
              Chaque secteur possède sa terminologie, ses codes, ses exigences. Nos traducteurs spécialisés maîtrisent les nuances de votre domaine.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors">
              Voir tous nos services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ABALIS ── */}
      <section className="py-20 lg:py-28 bg-cream" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" aria-hidden="true" />
                <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Pourquoi nous choisir</span>
              </div>
              <h2 id="why-heading" className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-5">
                La qualité au cœur de chaque traduction
              </h2>
              <p className="text-mid-gray text-lg leading-relaxed mb-8">
                Chez Abalis, la traduction n&apos;est pas un simple exercice linguistique — c&apos;est un acte de communication précis qui engage votre réputation sur les marchés internationaux.
              </p>
              <Link href="/a-propos" className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-semibold text-sm rounded hover:bg-gold hover:text-navy transition-all duration-200">
                En savoir plus sur l&apos;agence
              </Link>
            </div>

            {/* Right pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-lg p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-4 text-navy">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif font-semibold text-dark-text text-base mb-2">{pillar.title}</h3>
                  <p className="text-mid-gray text-sm leading-relaxed">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 lg:py-24 bg-navy" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Nos chiffres clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <div className="text-center">
              <StatCounter value={25} suffix="+" label="ans d'expérience" description="Fondée en 1999 à Orléans" />
            </div>
            <div className="relative text-center md:border-x md:border-white/10">
              <StatCounter value={50} suffix="+" label="langues disponibles" description="Traducteurs natifs experts" />
            </div>
            <div className="text-center">
              <StatCounter value={98} suffix="%" label="taux de satisfaction" description="Mesuré par enquête annuelle" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Notre méthode</span>
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
            </div>
            <h2 id="process-heading" className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-navy">
              Un processus rigoureux en 5 étapes
            </h2>
          </div>

          {/* Steps — horizontal scroll on mobile */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="relative w-20 h-20 rounded-full border-2 border-gold/30 bg-white flex flex-col items-center justify-center mb-4 shadow-sm z-10">
                    <span className="text-gold/50 text-[10px] font-bold tracking-widest">{step.number}</span>
                    <span className="font-serif font-bold text-navy text-sm mt-0.5">{step.title}</span>
                  </div>
                  <p className="text-mid-gray text-sm leading-relaxed">{step.desc}</p>
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-10 left-full -translate-x-1/2 text-gold/40" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 lg:py-28 bg-cream" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Témoignages</span>
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
            </div>
            <h2 id="testimonials-heading" className="font-serif font-bold text-3xl md:text-4xl text-navy">
              Ce que nos clients disent
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Abalis Traduction est notre partenaire de confiance depuis 8 ans pour la traduction de nos dossiers réglementaires. Leur expertise médicale et leur rigueur nous permettent d'accélérer nos soumissions à l'EMA en toute sérénité."
              name="Isabelle Maréchal"
              title="Directrice Affaires Réglementaires"
              company="Pharmagroup International"
              sector="Pharmaceutique"
              initials="IM"
            />
            <TestimonialCard
              quote="Nous avons confié à Abalis la traduction de nos contrats d'acquisition en 12 langues. La précision juridique et le respect des délais serrés ont été exemplaires. Une équipe véritablement professionnelle."
              name="Matthieu Fontaine"
              title="Directeur Juridique"
              company="Meridian Capital Group"
              sector="Finance"
              initials="MF"
            />
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 lg:py-24 bg-navy relative overflow-hidden" aria-label="Appel à l'action">
        <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
          <div
            style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, rgba(200,169,81,0.12) 0%, transparent 55%), radial-gradient(circle at 70% 50%, rgba(200,169,81,0.08) 0%, transparent 50%)",
            }}
            className="absolute inset-0"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-10 h-px bg-gold mx-auto mb-6" aria-hidden="true" />
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto">
            Obtenez un devis personnalisé en moins de 2 heures. Notre équipe analyse votre projet et vous propose la solution la plus adaptée.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-navy font-bold text-sm tracking-wide rounded hover:bg-gold-dark transition-all duration-200 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Demander un devis gratuit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm rounded hover:border-white/80 hover:bg-white/10 transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/40 text-sm">
            <span>Réponse sous 2h</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Aucun engagement</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Devis gratuit et détaillé</span>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Nos Services de Traduction Professionnelle",
  description:
    "Découvrez l'ensemble de nos services : traduction juridique, médicale, technique, financière, certifiée et interprétation. Certifiés ISO 17100, 50+ langues.",
  alternates: {
    canonical: "https://www.abalis-traduction.fr/services",
  },
};

const services = [
  {
    href: "/services/traduction-juridique",
    title: "Traduction Juridique",
    label: "Droit & Justice",
    description:
      "Contrats internationaux, statuts d'entreprise, jugements, actes notariés, brevets et procédures d'arbitrage. Nos juristes-traducteurs maîtrisent les systèmes juridiques de droit civil et common law.",
    features: ["Contrats & accords", "Actes notariés", "Jugements & arrêts", "Droit des sociétés", "Propriété intellectuelle", "Procédures judiciaires"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 4H6a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V12z"/>
        <polyline points="18 4 18 12 28 12"/>
        <line x1="10" y1="18" x2="22" y2="18"/>
        <line x1="10" y1="22" x2="16" y2="22"/>
      </svg>
    ),
  },
  {
    href: "/services/traduction-medicale",
    title: "Traduction Médicale",
    label: "Santé & Pharma",
    description:
      "Notices de médicaments, protocoles cliniques, dossiers patients, publications scientifiques et documentation réglementaire pour les autorités sanitaires EMA, FDA et HAS.",
    features: ["Notices pharmaceutiques", "Études cliniques", "Dossiers AMM", "Publications médicales", "Dispositifs médicaux", "Pharmacovigilance"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M28 16h-4l-4 12L12 4 8 16H4"/>
      </svg>
    ),
  },
  {
    href: "/services/traduction-technique",
    title: "Traduction Technique",
    label: "Industrie & Tech",
    description:
      "Manuels d'utilisation, fiches techniques, procédures de maintenance, spécifications d'ingénierie et documentation de certification pour l'aéronautique, l'automobile et l'énergie.",
    features: ["Manuels techniques", "Brevets d'invention", "Normes & standards", "Fiches FDES", "Logiciels & UI", "Documentation CEI/ISO"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="16" cy="16" r="4"/>
        <path d="M16 2v4M16 26v4M2 16h4M26 16h4M5.64 5.64l2.83 2.83M23.54 23.54l2.83 2.83M5.64 26.36l2.83-2.83M23.54 8.46l2.83-2.83"/>
      </svg>
    ),
  },
  {
    href: "/services",
    title: "Traduction Financière",
    label: "Finance & Bourse",
    description:
      "Rapports annuels, prospectus d'émission, documents de fusion-acquisition, contrats de financement et rapports de conformité pour les acteurs des marchés financiers mondiaux.",
    features: ["Rapports annuels", "Prospectus IPO", "M&A documentation", "États financiers", "Contrats bancaires", "Rapports ESG"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="16" y1="2" x2="16" y2="30"/>
        <path d="M22 8H13a4 4 0 100 8h6a4 4 0 110 8H8"/>
      </svg>
    ),
  },
  {
    href: "/services",
    title: "Traduction Certifiée",
    label: "Administration",
    description:
      "Traductions officielles certifiées par des traducteurs assermentés auprès des tribunaux français. Documents d'état civil, diplômes, casiers judiciaires et documents d'immigration.",
    features: ["État civil", "Diplômes & relevés", "Actes de mariage", "Documents d'immigration", "Casier judiciaire", "Procurations"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 6H28a2 2 0 012 2v18a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h7"/>
      </svg>
    ),
  },
  {
    href: "/services",
    title: "Interprétation",
    label: "Événements & Réunions",
    description:
      "Interprétation simultanée et consécutive pour conférences internationales, assemblées générales, négociations commerciales et auditions judiciaires. Équipement technique fourni.",
    features: ["Conférences internationales", "Assemblées générales", "Négociations B2B", "Auditions judiciaires", "Formations", "Cabines & équipements"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15c0 3.87-3.13 7-7 7s-7-3.13-7-7v-4a7 7 0 0114 0v4z"/>
        <line x1="16" y1="22" x2="16" y2="28"/>
        <line x1="10" y1="28" x2="22" y2="28"/>
        <path d="M4 15h2M26 15h2"/>
      </svg>
    ),
  },
];

const languages = [
  "Anglais", "Allemand", "Espagnol", "Portugais", "Italien", "Néerlandais",
  "Arabe", "Chinois", "Japonais", "Coréen", "Russe", "Polonais",
  "Suédois", "Danois", "Norvégien", "Finnois", "Turc", "Grec",
  "Hébreu", "Hindi",
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Nos services de traduction"
        subtitle="Expertise sectorielle, traducteurs natifs et processus certifié ISO 17100 — pour chaque document, la traduction qu'il mérite."
        breadcrumb={[{ label: "Services" }]}
        cta={{ label: "Obtenir un devis", href: "/devis" }}
      />

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-list-heading" className="sr-only">Liste de nos services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative bg-white border border-gray-100 rounded-xl p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Label */}
                <span className="inline-block px-3 py-1 bg-cream text-navy/60 text-xs font-medium rounded mb-5 tracking-wide">
                  {service.label}
                </span>

                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center text-navy flex-shrink-0 group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-dark-text mb-2">{service.title}</h3>
                    <p className="text-mid-gray text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-y-2 gap-x-3 mb-6" role="list">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-dark-text/80">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="#C8A951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group/link"
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Quality section */}
      <section className="py-20 bg-cream" aria-labelledby="quality-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-2xl p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gold" aria-hidden="true" />
                  <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Qualité garantie</span>
                </div>
                <h2 id="quality-heading" className="font-serif font-bold text-3xl lg:text-4xl text-white mb-5">
                  La norme ISO 17100 comme standard minimum
                </h2>
                <p className="text-white/65 text-lg leading-relaxed mb-8">
                  La certification ISO 17100 est la norme internationale de référence pour les services de traduction. Elle garantit que chaque traduction est réalisée et contrôlée par deux traducteurs qualifiés, suivant un processus documenté et auditable.
                </p>
                <div className="space-y-3">
                  {[
                    "Sélection rigoureuse des traducteurs (diplôme + 5 ans d'expérience minimum)",
                    "Double révision systématique par un second expert",
                    "Contrôle qualité final avant livraison",
                    "Traçabilité complète du processus",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                        <circle cx="8" cy="8" r="6.5" stroke="#C8A951" strokeWidth="1.2"/>
                        <path d="M5 8l2 2 4-4" stroke="#C8A951" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="w-32 h-32 rounded-2xl border-2 border-gold/40 flex flex-col items-center justify-center bg-white/5">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <path d="M20 5l3 7.5L30 13l-5.5 5.5 1.5 8-6-3.5-6 3.5 1.5-8L10 13l7-.5L20 5z" fill="#C8A951"/>
                  </svg>
                  <span className="text-gold font-bold text-xl mt-1">ISO</span>
                  <span className="text-gold/70 text-sm font-medium">17100</span>
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold mb-1">Certifié depuis 2010</p>
                  <p className="text-white/50 text-sm">Renouvelé chaque année<br />par audit externe</p>
                </div>
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-navy font-semibold text-sm rounded hover:bg-gold-dark transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-white" aria-labelledby="languages-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="languages-heading" className="font-serif font-bold text-2xl md:text-3xl text-navy mb-3">
              Plus de 50 langues couvertes
            </h2>
            <p className="text-mid-gray">Traducteurs natifs spécialisés dans votre domaine</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 border border-gray-200 rounded-full text-dark-text text-sm hover:border-gold hover:text-gold transition-colors duration-200"
              >
                {lang}
              </span>
            ))}
            <span className="px-4 py-2 border border-gold/40 rounded-full text-gold text-sm font-medium bg-gold/5">
              +30 autres langues
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream" aria-label="Appel à l'action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl text-navy mb-4">
            Votre projet a une dimension internationale ?
          </h2>
          <p className="text-mid-gray text-lg mb-8">
            Contactez-nous pour discuter de vos besoins. Devis gratuit et personnalisé sous 2 heures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/devis" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-semibold text-sm rounded hover:bg-gold-dark transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              Demander un devis gratuit
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-navy text-navy font-semibold text-sm rounded hover:bg-navy hover:text-white transition-all duration-200">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

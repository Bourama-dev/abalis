import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Traduction Technique – Manuels, brevets, documentation industrielle",
  description:
    "Traduction technique professionnelle par des ingénieurs-traducteurs spécialisés. Manuels d'utilisation, brevets, fiches techniques, normes. ISO 17100.",
};

const useCases = [
  {
    title: "Manuels d'utilisation",
    desc: "Manuels opérateur, guides d'installation et de maintenance traduits avec exactitude terminologique pour les marchés internationaux.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    title: "Brevets & propriété intellectuelle",
    desc: "Traduction de brevets, demandes PCT et documents de propriété intellectuelle avec la précision exigée par les offices nationaux et internationaux.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    title: "Fiches techniques & datasheet",
    desc: "Datasheets, fiches produits et spécifications techniques pour vos équipes commerciales et distributeurs à l'international.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
      </svg>
    ),
  },
  {
    title: "Normes & réglementations",
    desc: "Traduction de normes ISO, EN, ASTM et documents réglementaires pour la mise en conformité sur les marchés étrangers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Documentation logicielle",
    desc: "Aide en ligne, interfaces utilisateur, documentation API et guides d'administration pour vos produits logiciels.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: "Appels d'offres & cahiers des charges",
    desc: "Traduction de réponses à appels d'offres internationaux, cahiers des charges techniques et dossiers de soumission.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
];

const sectors = [
  "Aéronautique & Défense", "Automobile & Mobilité", "Énergie & Pétrochimie",
  "Chimie & Matériaux", "Électronique & Semi-conducteurs", "BTP & Génie Civil",
  "Machines & Équipements industriels", "Environnement & Développement durable",
];

export default function TraductionTechniquePage() {
  return (
    <>
      <Hero
        title="Traduction Technique"
        subtitle="Des ingénieurs-traducteurs spécialisés dans votre domaine pour une terminologie précise et une documentation irréprochable."
        breadcrumb={[{ label: "Services", href: "/services" }, { label: "Traduction Technique" }]}
        cta={{ label: "Demander un devis", href: "/devis" }}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-divider mb-6" aria-hidden="true" />
              <h2 className="heading-section text-3xl text-dark-text mb-5">
                La terminologie technique, notre spécialité
              </h2>
              <p className="text-mid-gray leading-relaxed mb-4">
                La traduction technique exige bien plus qu&apos;une maîtrise linguistique : elle requiert
                une compréhension approfondie des concepts, des processus et de la terminologie propres
                à chaque secteur industriel.
              </p>
              <p className="text-mid-gray leading-relaxed mb-4">
                Chez Abalis, nos traducteurs techniques sont eux-mêmes issus de formations d&apos;ingénieurs
                ou de sciences appliquées. Ils maîtrisent les normes, les référentiels et le vocabulaire
                précis de votre industrie.
              </p>
              <p className="text-mid-gray leading-relaxed">
                Nous travaillons avec des mémoires de traduction et des glossaires terminologiques
                propres à chaque client, garantissant une cohérence absolue sur l&apos;ensemble de vos documents.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Secteurs couverts", value: "15+" },
                { label: "Langues techniques", value: "30+" },
                { label: "Brevets traduits / an", value: "500+" },
                { label: "Taux de satisfaction", value: "98%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-cream rounded-xl p-6 text-center border border-gray-100">
                  <div className="font-serif font-bold text-3xl text-gold mb-1">{stat.value}</div>
                  <div className="text-dark-text text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-cream" aria-labelledby="usecases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="usecases-heading" className="heading-section text-2xl sm:text-3xl text-dark-text mb-3">
              Documents techniques pris en charge
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 bg-navy/5 group-hover:bg-gold/10 rounded-lg flex items-center justify-center mb-4 text-navy group-hover:text-gold transition-colors" aria-hidden="true">
                  {uc.icon}
                </div>
                <h3 className="font-semibold text-dark-text mb-2">{uc.title}</h3>
                <p className="text-mid-gray text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-14 bg-white" aria-labelledby="sectors-tech-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="sectors-tech-heading" className="heading-section text-2xl text-center text-dark-text mb-8">
            Secteurs industriels couverts
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map((s) => (
              <span key={s} className="px-4 py-2 bg-cream border border-gray-200 rounded-full text-sm font-medium text-dark-text hover:border-gold/50 hover:text-navy transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4">
            Un projet de traduction technique ?
          </h2>
          <p className="text-white/60 mb-8">
            Envoyez-nous votre document pour une analyse gratuite et un devis sous 2 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary">Demander un devis gratuit</Link>
            <Link href="/contact" className="btn-secondary">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}

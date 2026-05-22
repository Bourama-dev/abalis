import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Traduction Juridique Professionnelle – Contrats, Actes, Jugements",
  description:
    "Traduction juridique par des juristes-traducteurs certifiés. Contrats internationaux, actes notariés, jugements, brevets et procédures judiciaires en 50+ langues. ISO 17100.",
  alternates: {
    canonical: "https://www.abalis-traduction.fr/services/traduction-juridique",
  },
};

const useCases = [
  {
    title: "Contrats internationaux",
    desc: "Contrats de distribution, d'exclusivité, de licence, de franchise et de joint-venture traduits avec une précision terminologique absolue.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="14" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/>
      </svg>
    ),
  },
  {
    title: "Droit des sociétés",
    desc: "Statuts, pactes d'actionnaires, procès-verbaux d'assemblées générales et résolutions de conseil d'administration.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7"/><rect x="12" y="3" width="7" height="7"/><rect x="3" y="12" width="7" height="7"/>
        <path d="M12 15.5h7M15.5 12v7"/>
      </svg>
    ),
  },
  {
    title: "Procédures judiciaires",
    desc: "Jugements, arrêts de cours d'appel, ordonnances et décisions arbitrales pour toutes juridictions et institutions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="9"/><polyline points="11 7 11 11 13 13"/>
      </svg>
    ),
  },
  {
    title: "Propriété intellectuelle",
    desc: "Brevets d'invention, marques déposées, droits d'auteur et contrats de cession de droits de propriété intellectuelle.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="9"/><path d="M9 9a3 3 0 015.12 2.12c0 1.66-3 2.5-3 2.5M11 17h.01"/>
      </svg>
    ),
  },
  {
    title: "Actes notariés",
    desc: "Actes de vente immobilière, donations, successions et testaments — avec certification si requise par l'administration.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 11 13 17 7"/><path d="M21 12v7a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    title: "Droit de l'immigration",
    desc: "Visa, permis de travail, regroupement familial et naturalisation — documentation officielle pour ambassades et préfectures.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h5.34"/>
        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"/>
      </svg>
    ),
  },
];

const languages = [
  ["Anglais (UK/US)", "Droit des contrats, common law"],
  ["Allemand", "Droit germanique, UE"],
  ["Espagnol", "Droit ibérique, Amérique latine"],
  ["Arabe", "Droit des pays du Golfe"],
  ["Mandarin", "Droit chinois des affaires"],
  ["Japonais", "Droit japonais des sociétés"],
  ["Russe", "Arbitrage international"],
  ["Portugais", "Droit brésilien, lusophone"],
];

const processSteps = [
  { step: "01", title: "Réception & analyse", desc: "Évaluation du document, identification du domaine juridique et estimation du délai." },
  { step: "02", title: "Sélection du traducteur", desc: "Attribution au juriste-traducteur natif spécialisé dans le système juridique concerné." },
  { step: "03", title: "Traduction", desc: "Traduction précise avec respect de la terminologie juridique et des conventions propres à chaque système." },
  { step: "04", title: "Révision juridique", desc: "Relecture par un second juriste-traducteur vérifiant la cohérence terminologique et la fidélité au texte source." },
  { step: "05", title: "Certification & livraison", desc: "Apostille si nécessaire, mise en forme officielle et livraison sécurisée dans les délais." },
];

export default function TraductionJuridiquePage() {
  return (
    <>
      <Hero
        title="Traduction juridique"
        subtitle="Contrats, actes et procédures judiciaires traduits par des juristes-traducteurs natifs. Précision terminologique absolue, certification disponible."
        breadcrumb={[{ label: "Services", href: "/services" }, { label: "Traduction Juridique" }]}
        cta={{ label: "Demander un devis", href: "/devis" }}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" aria-hidden="true" />
                <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Expertise</span>
              </div>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-navy mb-5">
                La terminologie juridique, une science à part entière
              </h2>
              <p className="text-mid-gray text-base leading-relaxed mb-5">
                Le droit est l&apos;un des domaines où la précision du langage est la plus critique. Un terme mal traduit dans un contrat peut entraîner des litiges, des pertes financières ou l&apos;invalidation d&apos;un acte.
              </p>
              <p className="text-mid-gray text-base leading-relaxed mb-8">
                Chez Abalis, nos traducteurs juridiques sont avant tout des juristes. Détenteurs d&apos;un double diplôme en droit et en langues, ils maîtrisent non seulement les deux langues de travail, mais aussi les deux systèmes juridiques concernés — civil law, common law, droit islamique ou droit coutumier.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Juridictions couvertes", value: "180+" },
                  { label: "Traducteurs juristes", value: "45+" },
                  { label: "Documents traduits/an", value: "12 000+" },
                  { label: "Délai moyen", value: "< 48h" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-cream rounded-lg p-4">
                    <p className="font-serif font-bold text-2xl text-navy">{stat.value}</p>
                    <p className="text-mid-gray text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-serif font-semibold text-xl text-dark-text mb-6">Pourquoi choisir Abalis pour le juridique ?</h3>
              <ul className="space-y-4">
                {[
                  { title: "Juristes-traducteurs", desc: "Double compétence juridique + linguistique. Pas de traducteurs généralistes sur vos documents sensibles." },
                  { title: "Connaissance des systèmes", desc: "Civil law, common law, droit islamique — nous connaissons les équivalences fonctionnelles entre systèmes juridiques." },
                  { title: "Confidentialité renforcée", desc: "NDA signé avant tout accès. Stockage sécurisé et destruction des documents selon vos instructions." },
                  { title: "Certification disponible", desc: "Traduction certifiée par traducteur assermenté pour les documents officiels et procédures judiciaires." },
                  { title: "Urgences traitées", desc: "Service 24h/7j pour les procédures urgentes. Réponse sous 1 heure garantie." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 flex-shrink-0" aria-hidden="true">
                      <circle cx="8" cy="8" r="6.5" stroke="#C8A951" strokeWidth="1.2"/>
                      <path d="M5 8l2 2 4-4" stroke="#C8A951" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="font-semibold text-dark-text text-sm">{item.title}</p>
                      <p className="text-mid-gray text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-cream" aria-labelledby="usecases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Domaines couverts</span>
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
            </div>
            <h2 id="usecases-heading" className="font-serif font-bold text-3xl lg:text-4xl text-navy">
              Tous types de documents juridiques
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                  {uc.icon}
                </div>
                <h3 className="font-serif font-semibold text-dark-text text-base mb-2">{uc.title}</h3>
                <p className="text-mid-gray text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Notre processus</span>
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
            </div>
            <h2 id="process-heading" className="font-serif font-bold text-3xl lg:text-4xl text-navy">
              De la réception à la livraison certifiée
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {processSteps.map((s, idx) => (
                <div key={s.step} className="flex gap-5 items-start p-6 rounded-xl border border-gray-100 hover:border-gold/20 hover:bg-cream/50 transition-all duration-200">
                  <div className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-sm">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-text mb-1">{s.title}</h3>
                    <p className="text-mid-gray text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="w-px h-4 bg-gold/20 absolute left-11 mt-16" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 bg-cream" aria-labelledby="languages-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="languages-heading" className="font-serif font-bold text-3xl text-navy mb-3">
              Langues et systèmes juridiques
            </h2>
            <p className="text-mid-gray">Nos traducteurs connaissent les spécificités de chaque système juridique</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {languages.map(([lang, speciality]) => (
              <div key={lang} className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:border-gold/30 transition-colors">
                <p className="font-semibold text-dark-text text-sm mb-1">{lang}</p>
                <p className="text-mid-gray text-xs">{speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden" aria-label="Appel à l'action">
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(200,169,81,0.15) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-5">
            Besoin d&apos;une traduction juridique ?
          </h2>
          <p className="text-white/65 text-lg mb-8">
            Envoyez votre document pour une analyse gratuite. Devis personnalisé sous 2 heures, livraison garantie dans les délais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold text-sm rounded hover:bg-gold-dark transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
              Demander un devis gratuit
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm rounded hover:border-white/70 hover:bg-white/10 transition-all duration-200">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

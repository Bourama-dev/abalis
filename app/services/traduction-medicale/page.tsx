import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Traduction Médicale & Pharmaceutique Certifiée ISO 17100",
  description:
    "Traduction médicale par des professionnels de santé bilingues. Notices pharmaceutiques, études cliniques, dossiers AMM, publications scientifiques. Certifié ISO 17100.",
  alternates: {
    canonical: "https://www.abalis-traduction.fr/services/traduction-medicale",
  },
};

const docTypes = [
  { title: "Notices & étiquetages", desc: "Notices de médicaments, étiquetages de conditionnement primaire et secondaire selon les exigences EMA, FDA et ICH." },
  { title: "Dossiers réglementaires", desc: "CTD, IMPD, NDA, MAA et dossiers d'homologation pour toutes autorités sanitaires nationales et internationales." },
  { title: "Études cliniques", desc: "Protocoles d'essai, rapports d'étude clinique (CSR), consentements éclairés et journaux de bord patients." },
  { title: "Publications scientifiques", desc: "Articles de recherche, revues systématiques, méta-analyses et communications pour journaux à comité de lecture." },
  { title: "Dispositifs médicaux", desc: "Instructions d'utilisation, déclarations de conformité et dossiers techniques pour la certification CE/FDA." },
  { title: "Pharmacovigilance", desc: "Rapports PSUR, ICSR, mises à jour RCP/PIL et communications de sécurité urgentes avec délais stricts." },
];

const regulatoryBodies = [
  { name: "EMA", full: "Agence européenne des médicaments" },
  { name: "FDA", full: "Food and Drug Administration (US)" },
  { name: "HAS", full: "Haute Autorité de Santé (France)" },
  { name: "ANSM", full: "Agence nationale de sécurité du médicament" },
  { name: "ICH", full: "Conférence internationale sur l'harmonisation" },
  { name: "WHO", full: "Organisation mondiale de la santé" },
];

export default function TraductionMedicalePage() {
  return (
    <>
      <Hero
        title="Traduction médicale & pharmaceutique"
        subtitle="Notices, études cliniques et dossiers réglementaires traduits par des professionnels de santé bilingues. Conformité EMA, FDA et ICH garantie."
        breadcrumb={[{ label: "Services", href: "/services" }, { label: "Traduction Médicale" }]}
        cta={{ label: "Demander un devis", href: "/devis" }}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" aria-hidden="true" />
                <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Santé & Life Sciences</span>
              </div>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-navy mb-5">
                Quand la précision peut sauver des vies
              </h2>
              <p className="text-mid-gray text-base leading-relaxed mb-5">
                La traduction médicale est sans doute le domaine où l&apos;erreur est la moins permise. Une notice pharmaceutique mal traduite, un dosage mal interprété, une contre-indication omise — les conséquences peuvent être irréparables.
              </p>
              <p className="text-mid-gray text-base leading-relaxed mb-8">
                Notre équipe de traducteurs médicaux est composée de médecins, pharmaciens, biologistes et infirmiers devenus traducteurs. Ils maîtrisent les nomenclatures INN, les codes CIM-10 et les exigences réglementaires ICH, EMA et FDA.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Traducteurs avec formation médicale ou pharmaceutique",
                  "Connaissance des guidelines ICH E3, Q4B, E6 (GCP)",
                  "Respect des formats CTD et Common Technical Document",
                  "Gestion des urgences pour les variations réglementaires",
                  "Équipe dédiée pour les grands comptes pharmaceutiques",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A951" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-dark-text text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold text-sm rounded hover:bg-gold-dark transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                Obtenir un devis médical
              </Link>
            </div>

            <div className="space-y-4">
              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="font-serif font-semibold text-lg mb-3">Nos chiffres Life Sciences</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: "8 000+", l: "Notices traduites" },
                    { v: "150+", l: "Essais cliniques" },
                    { v: "40+", l: "Langues ICH" },
                    { v: "24h/7j", l: "Service urgence" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/8 rounded-lg p-3">
                      <p className="font-serif font-bold text-gold text-xl">{s.v}</p>
                      <p className="text-white/60 text-xs mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-semibold text-dark-text text-base mb-4">Autorités réglementaires couvertes</h3>
                <div className="grid grid-cols-2 gap-3">
                  {regulatoryBodies.map((rb) => (
                    <div key={rb.name} className="flex items-start gap-2">
                      <span className="font-bold text-gold text-sm min-w-[40px]">{rb.name}</span>
                      <span className="text-mid-gray text-xs leading-tight">{rb.full}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M9 1.5l2 4.5 4.5.5-3.3 3.2.9 4.5L9 11.8l-4.1 2.4.9-4.5L2.5 6.5 7 6 9 1.5z" fill="#C8A951"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-dark-text text-sm">Certifié ISO 17100</span>
                </div>
                <p className="text-mid-gray text-sm">Processus certifié avec double révision par un expert médical indépendant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document types */}
      <section className="py-20 bg-cream" aria-labelledby="doctypes-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Types de documents</span>
              <div className="w-8 h-px bg-gold" aria-hidden="true" />
            </div>
            <h2 id="doctypes-heading" className="font-serif font-bold text-3xl lg:text-4xl text-navy">
              Tous vos documents médicaux et pharmaceutiques
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {docTypes.map((dt) => (
              <div key={dt.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-gold mb-4" aria-hidden="true" />
                <h3 className="font-serif font-semibold text-dark-text mb-2">{dt.title}</h3>
                <p className="text-mid-gray text-sm leading-relaxed">{dt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality process */}
      <section className="py-20 bg-white" aria-labelledby="quality-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="quality-heading" className="font-serif font-bold text-3xl text-navy mb-3">
              Contrôle qualité médical renforcé
            </h2>
            <p className="text-mid-gray">Notre processus dépasse les exigences de la norme ISO 17100</p>
          </div>
          <div className="space-y-4">
            {[
              { n: "1", t: "Pré-analyse du document", d: "Identification des termes techniques, des exigences réglementaires spécifiques et du public cible (HCP ou patient)." },
              { n: "2", t: "Traduction par expert du domaine", d: "Traducteur natif avec formation médicale ou pharmaceutique, utilisation de bases terminologiques validées (MedDRA, INN, CIM-10)." },
              { n: "3", t: "Révision médicale", d: "Relecture par un second expert médical vérifiant l'exactitude scientifique, les dosages et les terminologies." },
              { n: "4", t: "Contrôle réglementaire", d: "Vérification de la conformité avec les guidelines applicables (ICH, EMA, FDA) et les formats requis." },
              { n: "5", t: "Mise en page & livraison", d: "Respect du format source, intégration dans vos outils (Veeva Vault, Documentum) et livraison sécurisée." },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 p-5 rounded-xl border border-gray-100 hover:bg-cream/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-sm">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-1">{step.t}</h3>
                  <p className="text-mid-gray text-sm leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy" aria-label="Appel à l'action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl text-white mb-5">
            Un projet pharmaceutique ou médical ?
          </h2>
          <p className="text-white/65 text-lg mb-8">
            Nos experts médicaux analysent votre document et vous proposent un devis adapté à vos exigences réglementaires.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold text-sm rounded hover:bg-gold-dark transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
              Demander un devis
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm rounded hover:border-white/70 hover:bg-white/10 transition-all duration-200">
              Parler à un expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

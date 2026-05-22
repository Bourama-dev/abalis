import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "À propos – L'agence Abalis Traduction",
  description:
    "Découvrez Abalis Traduction : 25 ans d'expertise, certification ISO 17100, 200+ traducteurs natifs spécialisés, basés à Orléans.",
};

const values = [
  {
    title: "Expertise & spécialisation",
    text: "Chaque traducteur de notre réseau est spécialisé dans un domaine précis. Nous ne croyons pas aux généralistes : la qualité passe par l'expertise sectorielle.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: "Qualité certifiée",
    text: "Notre certification ISO 17100 n'est pas un label marketing. C'est un engagement quotidien sur nos processus, notre sélection de traducteurs et notre contrôle qualité.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Confidentialité",
    text: "Accord de confidentialité systématique avant chaque mission. Infrastructure certifiée, accès restreint, chiffrement des échanges. Vos secrets industriels restent les vôtres.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: "Réactivité",
    text: "Devis sous 2 heures, service d'urgence disponible. Nos chefs de projets sont joignables et s'engagent sur des délais fermes, même pour les missions complexes.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const timeline = [
  { year: "1999", event: "Fondation d'Abalis Traduction à Orléans par une équipe de traducteurs et linguistes." },
  { year: "2005", event: "Obtention de la première certification qualité. Développement des pôles juridique et médical." },
  { year: "2010", event: "Lancement de la plateforme extranet client pour le suivi en temps réel des projets." },
  { year: "2015", event: "Certification ISO 17100. Ouverture du pôle interprétation et extension à 50+ langues." },
  { year: "2019", event: "20e anniversaire. 1 000+ clients actifs, présence dans 45 pays." },
  { year: "2024", event: "Renouvellement ISO 17100. Déploiement des outils de mémoires de traduction nouvelle génération." },
];

export default function AProposPage() {
  return (
    <>
      <Hero
        title="À propos d'Abalis"
        subtitle="Depuis 1999, nous accompagnons les entreprises dans leur développement international avec une promesse simple : qualité irréprochable, confidentialité totale, délais respectés."
        breadcrumb={[{ label: "À propos" }]}
      />

      {/* Mission */}
      <section className="py-20 bg-white" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider mb-6" aria-hidden="true" />
              <h2 id="mission-heading" className="heading-section text-3xl sm:text-4xl text-dark-text mb-6">
                Notre mission
              </h2>
              <p className="text-mid-gray text-lg leading-relaxed mb-5">
                Chez Abalis, la traduction n&apos;est pas un simple exercice de substitution de mots.
                C&apos;est un acte de communication qui engage la crédibilité et la réputation de votre
                entreprise sur les marchés internationaux.
              </p>
              <p className="text-mid-gray leading-relaxed mb-5">
                Fondée à Orléans en 1999, Abalis Traduction s&apos;est imposée comme l&apos;une des agences
                de traduction professionnelle les plus exigeantes de France, grâce à une approche
                résolument qualitative et à une spécialisation sectorielle poussée.
              </p>
              <p className="text-mid-gray leading-relaxed">
                Nos 200+ traducteurs — tous traducteurs natifs vers leur langue maternelle, tous
                spécialisés dans leur domaine — forment un réseau d&apos;experts rigoureusement sélectionnés
                et continuellement évalués.
              </p>
            </div>

            {/* Stats */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { v: "25+", l: "ans d'expérience" },
                  { v: "200+", l: "traducteurs certifiés" },
                  { v: "50+", l: "langues disponibles" },
                  { v: "1 000+", l: "clients actifs" },
                ].map((s) => (
                  <div key={s.l} className="bg-cream rounded-xl p-6 text-center border border-gray-100">
                    <div className="font-serif font-bold text-3xl text-gold mb-1">{s.v}</div>
                    <div className="text-dark-text text-sm font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              {/* ISO badge */}
              <div id="certifications" className="bg-navy rounded-xl p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full border-2 border-gold/50 flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <div className="text-gold text-[10px] font-bold tracking-wider">ISO</div>
                    <div className="text-gold font-bold text-base leading-none">17100</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Certification ISO 17100</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Norme internationale pour les services de traduction — couvrant les compétences
                    des traducteurs, le processus de révision et les systèmes qualité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cream pattern-bg" id="qualite" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" aria-hidden="true" />
            <h2 id="values-heading" className="heading-section text-2xl sm:text-3xl text-dark-text mb-3">
              Nos engagements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-navy/5 group-hover:bg-gold/10 rounded-lg flex items-center justify-center mb-4 text-navy group-hover:text-gold transition-colors" aria-hidden="true">
                  {v.icon}
                </div>
                <h3 className="font-serif font-semibold text-dark-text mb-2">{v.title}</h3>
                <p className="text-mid-gray text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white" aria-labelledby="timeline-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="timeline-heading" className="heading-section text-2xl sm:text-3xl text-dark-text mb-3">
              Notre histoire
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gold/40 bg-cream flex items-center justify-center z-10">
                    <span className="font-serif font-bold text-gold text-sm">{item.year}</span>
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-dark-text leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-divider mb-6" aria-hidden="true" />
              <h2 className="heading-section text-2xl sm:text-3xl text-dark-text mb-5">
                Basés à Orléans, actifs partout
              </h2>
              <p className="text-mid-gray leading-relaxed mb-4">
                Notre siège à Orléans, au cœur de la région Centre-Val de Loire, nous place au carrefour
                des grands axes économiques français. Nos clients sont répartis dans toute la France
                et dans 45 pays à travers le monde.
              </p>
              <address className="not-italic space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="text-dark-text">Orléans, Loiret (45) · Région Centre-Val de Loire · France</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.63a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.18 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a href="tel:+33238000000" className="text-dark-text hover:text-gold transition-colors">+33 (0)2 38 XX XX XX</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:contact@abalis-traduction.fr" className="text-dark-text hover:text-gold transition-colors">contact@abalis-traduction.fr</a>
                </div>
              </address>
            </div>
            <div className="bg-navy rounded-xl p-8 text-center">
              <div className="text-gold font-serif font-bold text-5xl mb-2">45</div>
              <p className="text-white/80 font-medium mb-6">pays dans lesquels nos clients opèrent</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {["Europe", "Amériques", "Asie-Pacifique", "Moyen-Orient", "Afrique", "Océanie"].map((zone) => (
                  <div key={zone} className="bg-white/5 rounded-lg p-3">
                    <span className="text-white/70 text-xs font-medium">{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-white/60 mb-8">Contactez-nous pour discuter de vos besoins en traduction.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary">Demander un devis gratuit</Link>
            <Link href="/contact" className="btn-secondary">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}

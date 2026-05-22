import Link from "next/link";
import AbalisLogo from "@/components/AbalisLogo";

const services = [
  { href: "/services/traduction-juridique", label: "Traduction Juridique" },
  { href: "/services/traduction-medicale", label: "Traduction Médicale" },
  { href: "/services/traduction-technique", label: "Traduction Technique" },
  { href: "/services/traduction-financiere", label: "Traduction Financière" },
  { href: "/services/traduction-certifiee", label: "Traduction Certifiée" },
  { href: "/services/interpretation", label: "Interprétation" },
];

const company = [
  { href: "/a-propos", label: "À propos" },
  { href: "/a-propos#qualite", label: "Notre démarche qualité" },
  { href: "/a-propos#certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
  { href: "/devis", label: "Demande de devis" },
];

const languages = [
  "Anglais", "Allemand", "Espagnol", "Italien", "Portugais",
  "Arabe", "Japonais", "Chinois", "Russe", "Néerlandais",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Abalis Traduction - Accueil" className="inline-block mb-5">
              <AbalisLogo variant="dark" size="sm" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Agence de traduction professionnelle certifiée ISO 17100, au service des entreprises depuis 25 ans.
              50+ langues, traducteurs natifs, qualité garantie.
            </p>
            {/* Certifications */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 border border-gold/40 rounded text-gold text-xs font-semibold tracking-wider">
                ISO 17100
              </div>
              <div className="px-3 py-1.5 border border-white/20 rounded text-white/60 text-xs font-medium">
                25 ans
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/abalis-traduction"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-white/10 hover:bg-gold/20 flex items-center justify-center transition-colors"
                aria-label="Abalis Traduction sur LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 hover:text-gold" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Nos services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/0 group-hover:bg-gold transition-colors" aria-hidden="true" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              L&apos;agence
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/0 group-hover:bg-gold transition-colors" aria-hidden="true" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div className="text-white/60 text-sm leading-relaxed">
                  Orléans, Loiret<br />
                  Région Centre-Val de Loire<br />
                  France
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="tel:+33238000000" className="text-white/60 hover:text-gold text-sm transition-colors">
                  +33 (0)2 38 XX XX XX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:contact@abalis-traduction.fr" className="text-white/60 hover:text-gold text-sm transition-colors">
                  contact@abalis-traduction.fr
                </a>
              </div>
            </address>

            <div className="mt-6 p-3 bg-white/5 rounded border border-white/10">
              <p className="text-white/50 text-xs">
                <span className="text-gold font-medium">Horaires :</span><br />
                Lun–Ven : 8h30–18h30
              </p>
            </div>
          </div>
        </div>

        {/* Languages strip */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Langues disponibles</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span key={lang} className="px-2.5 py-1 bg-white/5 rounded text-white/50 text-xs">
                {lang}
              </span>
            ))}
            <span className="px-2.5 py-1 bg-gold/10 rounded text-gold text-xs font-medium">+40 autres</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              © 2026 Abalis Traduction. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

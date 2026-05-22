"use client";

import { useState } from "react";
import Hero from "@/components/Hero";

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    sourceLang: "",
    targetLang: "",
    volume: "",
    deadline: "",
    format: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
    urgent: false,
    nda: false,
  });

  const update = (key: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const services = [
    "Traduction Juridique", "Traduction Médicale", "Traduction Technique",
    "Traduction Financière", "Traduction Certifiée / Assermentée", "Interprétation",
    "Relecture / Révision", "Autre",
  ];

  const languages = [
    "Anglais", "Allemand", "Espagnol", "Italien", "Portugais", "Arabe",
    "Japonais", "Chinois (Mandarin)", "Russe", "Néerlandais", "Polonais",
    "Coréen", "Turc", "Suédois", "Danois", "Norvégien", "Autre",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Hero title="Devis gratuit" breadcrumb={[{ label: "Devis" }]} />
        <section className="py-24 bg-white">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h2 className="font-serif font-bold text-3xl text-dark-text mb-3">
              Demande reçue !
            </h2>
            <p className="text-mid-gray text-lg mb-2">
              Merci, <strong>{form.name}</strong>. Votre demande de devis a bien été enregistrée.
            </p>
            <p className="text-mid-gray mb-8">
              Un chef de projet vous contactera sur <strong>{form.email}</strong> dans les <strong>2 heures</strong> ouvrées avec une analyse détaillée et un devis personnalisé.
            </p>
            <div className="bg-cream rounded-xl p-6 text-left space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-mid-gray">Service :</span><span className="font-medium">{form.service}</span></div>
              <div className="flex justify-between"><span className="text-mid-gray">Langues :</span><span className="font-medium">{form.sourceLang} → {form.targetLang}</span></div>
              {form.urgent && <div className="text-gold font-medium text-center pt-2">⚡ Traitement en urgence demandé</div>}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Hero
        title="Demande de devis gratuit"
        subtitle="Obtenez une analyse de votre projet et un devis personnalisé en moins de 2 heures. Sans engagement."
        breadcrumb={[{ label: "Devis" }]}
      />

      <section className="py-16 bg-white" aria-labelledby="devis-form-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Progress steps */}
          <div className="flex items-center justify-center gap-3 mb-12" aria-label="Étapes du formulaire">
            {[
              { n: 1, label: "Votre projet" },
              { n: 2, label: "Vos coordonnées" },
            ].map(({ n, label }) => (
              <div key={n} className="flex items-center gap-3">
                <div className={`flex items-center gap-2 ${step >= n ? "text-gold" : "text-mid-gray"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= n ? "bg-gold text-white" : "bg-gray-100 text-mid-gray"}`}>
                    {step > n ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : n}
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">{label}</span>
                </div>
                {n < 2 && <div className="w-12 h-px bg-gray-200" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de demande de devis">
            {step === 1 && (
              <div className="space-y-7">
                <div>
                  <h2 id="devis-form-heading" className="font-serif font-bold text-2xl text-dark-text mb-1">
                    Votre projet de traduction
                  </h2>
                  <p className="text-mid-gray text-sm">Décrivez votre besoin pour recevoir un devis précis.</p>
                </div>

                {/* Service type */}
                <div>
                  <p className="form-label">Type de service *</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => update("service", s)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 text-left ${
                          form.service === s
                            ? "border-gold bg-gold/5 text-navy"
                            : "border-gray-200 text-dark-text hover:border-gold/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="sourceLang" className="form-label">Langue source *</label>
                    <select id="sourceLang" required className="form-input" value={form.sourceLang} onChange={(e) => update("sourceLang", e.target.value)}>
                      <option value="">Sélectionner</option>
                      {languages.map((l) => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="targetLang" className="form-label">Langue cible *</label>
                    <select id="targetLang" required className="form-input" value={form.targetLang} onChange={(e) => update("targetLang", e.target.value)}>
                      <option value="">Sélectionner</option>
                      {languages.map((l) => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                {/* Volume & deadline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="volume" className="form-label">Volume estimé</label>
                    <select id="volume" className="form-input" value={form.volume} onChange={(e) => update("volume", e.target.value)}>
                      <option value="">Non défini</option>
                      <option>Moins de 500 mots</option>
                      <option>500 – 2 000 mots</option>
                      <option>2 000 – 10 000 mots</option>
                      <option>10 000 – 50 000 mots</option>
                      <option>Plus de 50 000 mots</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="deadline" className="form-label">Délai souhaité</label>
                    <select id="deadline" className="form-input" value={form.deadline} onChange={(e) => update("deadline", e.target.value)}>
                      <option value="">Flexible</option>
                      <option>Urgent (24h)</option>
                      <option>2-3 jours</option>
                      <option>1 semaine</option>
                      <option>2 semaines</option>
                      <option>1 mois ou plus</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="format" className="form-label">Format du document</label>
                    <select id="format" className="form-input" value={form.format} onChange={(e) => update("format", e.target.value)}>
                      <option value="">Non défini</option>
                      <option>Word / PDF</option>
                      <option>PowerPoint</option>
                      <option>Excel</option>
                      <option>InDesign / XML</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                {/* Options */}
                <div className="flex flex-wrap gap-5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="accent-gold w-4 h-4"
                      checked={form.urgent}
                      onChange={(e) => update("urgent", e.target.checked)}
                    />
                    <span className="text-sm text-dark-text">⚡ Traitement en urgence</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="accent-gold w-4 h-4"
                      checked={form.nda}
                      onChange={(e) => update("nda", e.target.checked)}
                    />
                    <span className="text-sm text-dark-text">🔒 Accord de confidentialité requis</span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!form.service || !form.sourceLang || !form.targetLang}
                    className="btn-primary px-10 py-4 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    Étape suivante
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 9h12M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-7">
                <div>
                  <h2 className="font-serif font-bold text-2xl text-dark-text mb-1">Vos coordonnées</h2>
                  <p className="text-mid-gray text-sm">Pour que notre équipe puisse vous contacter avec votre devis.</p>
                </div>

                {/* Summary */}
                <div className="bg-cream rounded-xl p-5 border border-gray-100">
                  <p className="text-xs font-semibold text-mid-gray uppercase tracking-wider mb-3">Récapitulatif de votre projet</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                    <div><span className="text-mid-gray">Service : </span><span className="font-medium text-dark-text">{form.service}</span></div>
                    <div><span className="text-mid-gray">Langues : </span><span className="font-medium text-dark-text">{form.sourceLang} → {form.targetLang}</span></div>
                    {form.volume && <div><span className="text-mid-gray">Volume : </span><span className="font-medium text-dark-text">{form.volume}</span></div>}
                    {form.deadline && <div><span className="text-mid-gray">Délai : </span><span className="font-medium text-dark-text">{form.deadline}</span></div>}
                  </div>
                  <button type="button" onClick={() => setStep(1)} className="mt-3 text-xs text-gold hover:underline">Modifier</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="co-name" className="form-label">Nom complet *</label>
                    <input id="co-name" type="text" required className="form-input" placeholder="Jean Dupont" value={form.name} onChange={(e) => update("name", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="co-company" className="form-label">Entreprise</label>
                    <input id="co-company" type="text" className="form-input" placeholder="Votre entreprise" value={form.company} onChange={(e) => update("company", e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="co-email" className="form-label">Email professionnel *</label>
                    <input id="co-email" type="email" required className="form-input" placeholder="j.dupont@entreprise.fr" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="co-phone" className="form-label">Téléphone</label>
                    <input id="co-phone" type="tel" className="form-input" placeholder="+33 6 XX XX XX XX" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                  </div>
                </div>

                <div>
                  <label htmlFor="co-details" className="form-label">Informations complémentaires</label>
                  <textarea id="co-details" rows={4} className="form-input resize-none" placeholder="Précisions sur le document, contexte d'utilisation, exigences spécifiques..." value={form.details} onChange={(e) => update("details", e.target.value)} />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="co-rgpd" required className="mt-1 accent-gold" />
                  <label htmlFor="co-rgpd" className="text-mid-gray text-sm leading-relaxed">
                    J&apos;accepte que mes données soient traitées dans le cadre de ma demande de devis. Voir notre{" "}
                    <a href="/politique-confidentialite" className="text-navy hover:text-gold underline">politique de confidentialité</a>.
                  </label>
                </div>

                <div className="flex gap-4 pt-2">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-gray-200 text-dark-text font-medium rounded hover:border-gold/50 transition-colors">
                    ← Retour
                  </button>
                  <button
                    type="submit"
                    disabled={!form.name || !form.email}
                    className="btn-primary px-10 py-4 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    Envoyer ma demande
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </div>
                <p className="text-mid-gray text-xs">Réponse garantie sous 2h · Devis gratuit et sans engagement</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-cream border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-center">
          {[
            { icon: "🏅", label: "ISO 17100 certifié" },
            { icon: "⚡", label: "Réponse sous 2h" },
            { icon: "🔒", label: "NDA systématique" },
            { icon: "✓", label: "Sans engagement" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span aria-hidden="true">{item.icon}</span>
              <span className="text-sm font-medium text-dark-text">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

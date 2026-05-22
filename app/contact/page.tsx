"use client";

import { useState } from "react";
import Hero from "@/components/Hero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Hero
        title="Contactez-nous"
        subtitle="Notre équipe est disponible du lundi au vendredi de 8h30 à 18h30. Réponse garantie sous 2 heures en jours ouvrés."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="py-20 bg-white" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact info — left */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="section-divider mb-6" aria-hidden="true" />
                <h2 id="contact-heading" className="heading-section text-2xl text-dark-text mb-4">
                  Parlons de votre projet
                </h2>
                <p className="text-mid-gray leading-relaxed">
                  Que ce soit pour un projet urgent, une question sur nos tarifs
                  ou une demande de partenariat, notre équipe vous répond rapidement.
                </p>
              </div>

              {/* Info blocks */}
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.63a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.18 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    ),
                    label: "Téléphone",
                    value: "+33 (0)2 38 XX XX XX",
                    href: "tel:+33238000000",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    label: "Email",
                    value: "contact@abalis-traduction.fr",
                    href: "mailto:contact@abalis-traduction.fr",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    ),
                    label: "Adresse",
                    value: "Orléans, Loiret (45) · France",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-5 bg-cream rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-navy flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-mid-gray uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-dark-text font-medium hover:text-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-dark-text font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-navy rounded-xl p-6">
                <h3 className="text-gold font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Lun – Ven", hours: "8h30 – 18h30" },
                    { day: "Samedi", hours: "Sur rendez-vous" },
                    { day: "Urgences", hours: "Service 24h/7j" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between text-white/70">
                      <span>{h.day}</span>
                      <span className="text-white">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form — right */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-dark-text mb-2">Message envoyé !</h3>
                    <p className="text-mid-gray">Nous vous répondrons dans les 2 heures ouvrées.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Formulaire de contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="form-label">Nom complet *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="Jean Dupont"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email professionnel *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="form-input"
                        placeholder="j.dupont@entreprise.fr"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="form-label">Téléphone</label>
                      <input
                        id="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+33 6 XX XX XX XX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="form-label">Sujet *</label>
                      <select
                        id="subject"
                        required
                        className="form-input"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        <option value="">Choisir un sujet</option>
                        <option>Demande de devis</option>
                        <option>Traduction juridique</option>
                        <option>Traduction médicale</option>
                        <option>Traduction technique</option>
                        <option>Interprétation</option>
                        <option>Partenariat traducteur</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Décrivez votre projet, les langues concernées, le volume estimé et vos délais..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="rgpd" required className="mt-1 accent-gold" />
                    <label htmlFor="rgpd" className="text-mid-gray text-sm leading-relaxed">
                      J&apos;accepte que mes données soient utilisées pour traiter ma demande. Voir notre{" "}
                      <a href="/politique-confidentialite" className="text-navy hover:text-gold underline transition-colors">
                        politique de confidentialité
                      </a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary justify-center py-4 text-base"
                  >
                    Envoyer le message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                  <p className="text-mid-gray text-xs text-center">Réponse garantie sous 2h en jours ouvrés</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

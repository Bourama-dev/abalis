"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AbalisLogo from "@/components/AbalisLogo";

const navLinks = [
  { href: "/", label: "Accueil" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/traduction-juridique", label: "Traduction Juridique" },
      { href: "/services/traduction-medicale", label: "Traduction Médicale" },
      { href: "/services/traduction-technique", label: "Traduction Technique" },
    ],
  },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy shadow-lg shadow-navy/20 py-3"
            : "bg-navy/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="Abalis Traduction - Accueil">
              <AbalisLogo variant="dark" size="sm" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href} className="relative group">
                    <button
                      className={`nav-link flex items-center gap-1 text-white/90 hover:text-gold ${
                        isActive(link.href) ? "text-gold" : ""
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="transition-transform duration-200 group-hover:rotate-180" aria-hidden="true">
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </button>
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px] overflow-hidden">
                        <Link
                          href="/services"
                          className="block px-5 py-2.5 text-sm font-semibold text-navy border-b border-gray-100 hover:bg-cream transition-colors"
                        >
                          Tous les services →
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-5 py-2.5 text-sm transition-colors hover:bg-cream hover:text-gold ${
                              isActive(child.href) ? "text-gold font-medium" : "text-dark-text"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/devis"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-navy font-semibold text-sm rounded hover:bg-gold-dark transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 3h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                  <path d="M5 3V2M11 3V2M2 6h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Devis gratuit
              </Link>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileOpen}
              >
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(7, 21, 40, 0.97)" }}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
          <nav className="flex-1" aria-label="Navigation mobile">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3.5 text-lg font-medium border-b border-white/10 transition-colors ${
                      isActive(link.href) ? "text-gold" : "text-white hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block py-2.5 text-sm border-b border-white/5 transition-colors ${
                              isActive(child.href)
                                ? "text-gold"
                                : "text-white/70 hover:text-gold"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-3">
            <Link
              href="/devis"
              className="block w-full text-center px-6 py-4 bg-gold text-navy font-semibold rounded transition-all hover:bg-gold-dark"
            >
              Devis gratuit
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-4 border border-white/30 text-white font-medium rounded transition-all hover:border-white hover:bg-white/10"
            >
              Nous contacter
            </Link>
          </div>

          <p className="mt-6 text-center text-white/40 text-xs">
            +33 (0)2 38 XX XX XX · Orléans, France
          </p>
        </div>
      </div>
    </>
  );
}

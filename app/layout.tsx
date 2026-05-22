import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abalis-traduction.fr"),
  title: {
    default: "Abalis Traduction – Agence de traduction professionnelle à Orléans",
    template: "%s | Abalis Traduction",
  },
  description:
    "Agence de traduction professionnelle certifiée ISO 17100 à Orléans. Traductions juridiques, médicales, techniques et financières en 50+ langues. Devis gratuit sous 2h.",
  keywords: [
    "traduction professionnelle",
    "agence traduction Orléans",
    "traduction certifiée ISO 17100",
    "traduction juridique",
    "traduction médicale",
    "traduction technique",
    "traducteur assermenté",
  ],
  authors: [{ name: "Abalis Traduction" }],
  creator: "Abalis Traduction",
  publisher: "Abalis Traduction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.abalis-traduction.fr",
    siteName: "Abalis Traduction",
    title: "Abalis Traduction – Agence de traduction professionnelle à Orléans",
    description:
      "Agence de traduction professionnelle certifiée ISO 17100. Traductions juridiques, médicales, techniques et financières en 50+ langues.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abalis Traduction – Traduction professionnelle",
    description:
      "Agence de traduction certifiée ISO 17100 à Orléans. 50+ langues, 25 ans d'expérience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.abalis-traduction.fr",
    languages: {
      "fr-FR": "https://www.abalis-traduction.fr",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="alternate" hrefLang="fr" href="https://www.abalis-traduction.fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.abalis-traduction.fr" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

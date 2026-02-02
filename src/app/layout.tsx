import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boring Mais Cher - SaaS d'automatisation premium",
  description:
    "Boring Mais Cher automatise les taches les plus banales de l'entreprise avec un niveau de service outrageusement premium. Un SaaS minimaliste, assume et volontairement cher.",
  metadataBase: new URL("https://agentic-c3ebc821.vercel.app"),
  openGraph: {
    title: "Boring Mais Cher",
    description:
      "Le SaaS volontairement ennuyeux qui facture comme une fusee - support conciergerie, audits mensuels, integrations sur-mesure.",
    url: "https://agentic-c3ebc821.vercel.app",
    siteName: "Boring Mais Cher",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Boring Mais Cher - SaaS ennuyeux mais exorbitant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boring Mais Cher",
    description:
      "Automatisez vos process banals avec une conciergerie SaaS ultra-premium. Ennui garanti, prix stratospherique.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

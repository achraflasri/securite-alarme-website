import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PERSON } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(PERSON.siteUrl),
  title: {
    default: "Said Lasri | Installation d’alarmes et caméras au Maroc",
    template: "%s | Said Lasri",
  },
  description:
    "Said Lasri, expert avec plus de 30 ans d’expérience : installation d’alarmes, caméras de surveillance, contrôle d’accès, incendie et réseaux au Maroc.",
  keywords: [
    "Said Lasri",
    "alarme Maroc",
    "installation alarme Maroc",
    "caméra de surveillance Maroc",
    "installation caméra de surveillance Maroc",
    "vidéosurveillance Maroc",
    "sécurité électronique Maroc",
    "détection incendie Maroc",
    "installation réseau informatique Maroc",
  ],
  authors: [{ name: PERSON.name }],
  creator: PERSON.name,
  alternates: {
    canonical: PERSON.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: PERSON.siteUrl,
    siteName: PERSON.name,
    title: "Said Lasri | Alarmes et caméras de surveillance au Maroc",
    description:
      "Plus de 30 ans d’expérience en installation et maintenance de systèmes de sécurité électronique au Maroc.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white font-sans text-slate-950 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

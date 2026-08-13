import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IVI SYSTEM | Alarmes & vidéosurveillance à Casablanca",
    template: "%s | IVI SYSTEM",
  },
  description:
    "Installation et maintenance de systèmes d’alarme anti-intrusion et de vidéosurveillance à Casablanca pour entreprises, commerces et particuliers.",
  keywords: [
    "alarme Casablanca",
    "installation alarme Casablanca",
    "vidéosurveillance Casablanca",
    "sécurité électronique Maroc",
  ],
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "IVI SYSTEM",
    title: "IVI SYSTEM | Alarmes & vidéosurveillance à Casablanca",
    description:
      "Solutions de sécurité électronique pour les professionnels et les particuliers à Casablanca.",
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

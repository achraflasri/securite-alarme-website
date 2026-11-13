import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidéosurveillance professionnelle au Maroc",
  description:
    "IVI SYSTEME installe des caméras IP et systèmes d’enregistrement pour commerces, entreprises et particuliers partout au Maroc.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VideoSurveillancePage() {
  return (
    <main className="min-h-[60vh] bg-white px-4 py-16 text-slate-950 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Vidéosurveillance
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Caméras de vidéosurveillance professionnelles
        </h1>
        <p className="mt-5 leading-7 text-slate-600">
          Installation de caméras IP, enregistreurs NVR/DVR et solutions de
          vidéosurveillance connectées pour commerces, entreprises et
          particuliers.
        </p>
        <p className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-slate-600">
          Cette page sera développée lors de la prochaine phase. L’alarme
          anti-intrusion reste actuellement le service principal du site.
        </p>
      </div>
    </main>
  );
}

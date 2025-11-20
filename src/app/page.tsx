// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="max-w-2xl px-4">
        <p className="mb-2 text-sm font-semibold text-emerald-400 uppercase tracking-wide">
          Casablanca · 20+ ans d’expérience
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Systèmes d’alarme & vidéosurveillance professionnels
        </h1>
        <p className="mt-4 text-slate-300">
          Installation et maintenance de systèmes d’alarme anti-intrusion et de
          caméras de surveillance pour maisons, commerces, banques et
          entreprises au Maroc.
        </p>
      </div>
    </main>
  );
}

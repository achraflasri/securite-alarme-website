import { ProblemsAlarmeSection } from "@/components/sections/alarme/problems-alarme";
import { FeaturesAlarmeSection } from "@/components/sections/alarme/features-alarme";
import { BrandsAlarmeSection } from "@/components/sections/alarme/brands-alarme";
import { ProcessAlarmeSection } from "@/components/sections/alarme/process-alarme";
import { FaqAlarmeSection } from "@/components/sections/alarme/faq-alarme";


export default function AlarmePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-24">
        {/* HERO */}
        <section>
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
            Sécurité · Expert alarme
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Installation de systèmes d’alarme anti-intrusion à Casablanca
          </h1>

          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Protégez votre maison, votre commerce ou votre entreprise avec des
            alarmes professionnelles fiables, connectées et simples à utiliser.
            Plus de 20 ans d’expérience dans les systèmes de sécurité au Maroc.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/contact"
              className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-slate-900 hover:bg-emerald-400 transition"
            >
              Demander un devis
            </a>

            <a
              href="https://wa.me/2126XXXXXXXX"
              className="rounded-full border border-emerald-500/50 px-6 py-3 font-medium text-emerald-300 hover:bg-emerald-500/10 transition"
            >
              Contact WhatsApp
            </a>
          </div>
        </section>

        {/* PROBLÈMES RÉSOLUS PAR L’ALARME */}
        <ProblemsAlarmeSection />

        {/* FONCTIONNALITÉS D’UN SYSTÈME D’ALARME */}
        <FeaturesAlarmeSection />

        {/* TECHNOLOGIES & MARQUES */}
        <BrandsAlarmeSection />

        {/* PROCESS D’INSTALLATION */}
        <ProcessAlarmeSection />

        {/* TYPES D’ALARMES */}
        <section>
          <h2 className="text-3xl font-semibold">Types d’alarmes</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Alarme filaire",
              "Alarme sans-fil",
              "Alarme GSM / 4G",
              "Alarme connectée (App mobile)",
              "Alarme entreprise",
              "Alarme maison / villa",
            ].map((type) => (
              <div
                key={type}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
              >
                <h3 className="text-xl font-semibold">{type}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* SEGMENTS */}
        <section>
          <h2 className="text-3xl font-semibold">Pour qui ?</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Maisons & villas",
              "Commerces & magasins",
              "Entreprises",
              "Banques & agences",
              "Entrepôts & dépôts",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-800 bg-slate-900/40 p-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ ALARME */}
        <FaqAlarmeSection />

        {/* CTA Final */}
        <section className="text-center">
          <h2 className="text-3xl font-bold">Besoin d’un système d’alarme ?</h2>
          <p className="mt-4 text-slate-300">
            Nous intervenons rapidement à Casablanca et partout au Maroc.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-full bg-emerald-500 px-8 py-4 font-semibold text-slate-900 hover:bg-emerald-400 transition"
          >
            Obtenir un devis gratuit
          </a>
        </section>
      </div>
    </main>
  );
}

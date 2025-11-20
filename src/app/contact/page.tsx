export default function ContactPage() {
  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Contact & devis</h1>
        <p className="mt-4 text-slate-300">
          Parlez-nous de votre besoin en sécurité (alarme, vidéosurveillance,
          contrôle d’accès…). Nous intervenons à Casablanca et sur tout le
          Maroc.
        </p>

        <div className="mt-8 space-y-2 text-slate-200">
          <p>
            <span className="font-semibold">Téléphone :</span> +212 6 XX XX XX XX
          </p>
          <p>
            <span className="font-semibold">Email :</span>{" "}
            contact@securite-casablanca.ma
          </p>
          <p>
            <span className="font-semibold">Adresse :</span> Casablanca, Maroc
          </p>
        </div>
      </div>
    </main>
  );
}

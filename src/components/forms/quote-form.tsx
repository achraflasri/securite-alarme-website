"use client";

import type { FormEvent } from "react";
import { CONTACT } from "@/config/contact";

const inputClasses =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100";

const CLIENT_TYPES = [
  "Particulier",
  "Entreprise",
  "Banque / agence",
  "Commerce",
  "Entrepôt / industrie",
  "Autre",
];

const SERVICES = [
  "Alarme anti-intrusion",
  "Vidéosurveillance",
  "Contrôle d’accès",
  "Maintenance",
  "Diagnostic d’une installation",
  "Plusieurs services",
];

const BUILDING_TYPES = [
  "Maison / villa",
  "Appartement",
  "Commerce / magasin",
  "Bureaux",
  "Agence",
  "Entrepôt / dépôt",
  "Site industriel",
  "Autre",
];

function readField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function buildQuoteMessage(formData: FormData) {
  const name = readField(formData, "name");
  const company = readField(formData, "company");
  const phone = readField(formData, "phone");
  const email = readField(formData, "email");
  const clientType = readField(formData, "clientType");
  const city = readField(formData, "city");
  const service = readField(formData, "service");
  const buildingType = readField(formData, "buildingType");
  const message = readField(formData, "message");

  return {
    subject: `Demande de devis — ${service} — ${name}`,
    body: [
      "Bonjour IVI SYSTEM,",
      "",
      "Je souhaite demander un devis avec les informations suivantes :",
      "",
      `Nom : ${name}`,
      company ? `Société : ${company}` : "",
      `Téléphone : ${phone}`,
      email ? `Email : ${email}` : "",
      `Type de client : ${clientType}`,
      `Ville : ${city}`,
      `Service demandé : ${service}`,
      `Type de bâtiment : ${buildingType}`,
      message ? `Détails du projet : ${message}` : "",
      "",
      "Merci de me recontacter pour étudier mon projet.",
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

export function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { subject, body } = buildQuoteMessage(formData);
    const nativeEvent = event.nativeEvent as SubmitEvent;
    const submitter = nativeEvent.submitter as HTMLButtonElement | null;

    if (submitter?.value === "email") {
      window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    window.open(
      `${CONTACT.whatsappHref}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
          Formulaire de devis
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Parlez-nous de votre projet
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Les champs marqués d’un astérisque sont nécessaires pour préparer la
          demande.
        </p>
      </div>

      <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-800">
          Nom complet <span className="text-blue-600">*</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Votre nom"
            className={inputClasses}
          />
        </label>

        <label className="text-sm font-medium text-slate-800">
          Société
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nom de la société (optionnel)"
            className={inputClasses}
          />
        </label>

        <label className="text-sm font-medium text-slate-800">
          Téléphone <span className="text-blue-600">*</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="Ex. +212 6 XX XX XX XX"
            className={inputClasses}
          />
        </label>

        <label className="text-sm font-medium text-slate-800">
          Email
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="vous@entreprise.com"
            className={inputClasses}
          />
        </label>

        <label className="text-sm font-medium text-slate-800">
          Type de client <span className="text-blue-600">*</span>
          <select
            name="clientType"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Sélectionnez un profil
            </option>
            {CLIENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-800">
          Ville <span className="text-blue-600">*</span>
          <input
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            defaultValue="Casablanca"
            className={inputClasses}
          />
        </label>

        <label className="text-sm font-medium text-slate-800">
          Service demandé <span className="text-blue-600">*</span>
          <select
            name="service"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Sélectionnez un service
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-800">
          Type de bâtiment <span className="text-blue-600">*</span>
          <select
            name="buildingType"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Sélectionnez un bâtiment
            </option>
            {BUILDING_TYPES.map((building) => (
              <option key={building} value={building}>
                {building}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-800 sm:col-span-2">
          Détails du projet
          <textarea
            name="message"
            rows={5}
            placeholder="Surface, nombre d’accès, installation existante, contraintes ou informations utiles…"
            className={`${inputClasses} resize-y`}
          />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 accent-blue-600"
        />
        <span>
          J’autorise IVI SYSTEM à utiliser ces informations uniquement pour me
          recontacter au sujet de cette demande. <span className="text-blue-600">*</span>
        </span>
      </label>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          name="channel"
          value="whatsapp"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Envoyer via WhatsApp
        </button>
        <button
          type="submit"
          name="channel"
          value="email"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Envoyer par email
        </button>
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Le bouton choisi ouvre WhatsApp ou votre application email avec le
        message prérempli. Aucune donnée n’est stockée par ce site.
      </p>
    </form>
  );
}

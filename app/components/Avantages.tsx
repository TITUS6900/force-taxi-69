const AVANTAGES = [
  {
    title: "Véhicules relais",
    description: "En cas d'immobilisation de votre véhicule.",
  },
  {
    title: "MFA Mutuelle Fraternelle Assurance",
    badge: "-8%",
  },
  {
    title: "NEO Santé Facturation Taxi",
    badge: "-30%",
  },
  {
    title: "Contestation de contraventions",
    description: "Accompagnement dans vos démarches.",
  },
  {
    title: "LogiTax",
    badge: "-10%",
  },
  {
    title: "Médiateur Consommation CM2C",
    badge: "Inclus",
  },
  {
    title: "ISACOM Comptabilité & Fiscalité",
    badge: "Conditions préférentielles",
  },
  {
    title: "Recyclage TAXI",
    badge: "-22%",
  },
  {
    title: "Société Point Plus",
    description: "Récupération de points.",
    badge: "-22%",
  },
  {
    title: "Application Caree",
    badge: "-20%",
  },
  {
    title: "Contrôle Technique Sécuritest",
    badge: "50€",
  },
];

export default function Avantages() {
  return (
    <section id="avantages" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            Vos avantages
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            En adhérant à Force Taxi 69, vous bénéficiez d&apos;un ensemble
            d&apos;avantages négociés pour simplifier votre quotidien et
            réduire vos charges.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AVANTAGES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-navy-900/5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-base font-semibold text-navy-900">
                  {item.title}
                </h3>
                {item.badge && (
                  <span className="shrink-0 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-bold text-gold-600">
                    {item.badge}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

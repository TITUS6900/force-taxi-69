const OFFRES = [
  {
    title: "Adhésion annuelle – paiement en 3 fois",
    src: "https://www.helloasso.com/associations/ft69/adhesions/adhesion-annuelle-paiement-en-3-fois/widget",
  },
  {
    title: "Adhésion annuelle – paiement en une fois",
    src: "https://www.helloasso.com/associations/ft69/adhesions/adhesion-ft69-fndt/widget",
  },
];

export default function Adherer() {
  return (
    <section id="adherer" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            Adhérer
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Choisissez la formule de paiement qui vous convient et rejoignez
            Force Taxi 69.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {OFFRES.map((offre) => (
            <div
              key={offre.title}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm shadow-navy-900/5"
            >
              <h3 className="border-b border-slate-200 bg-white px-6 py-4 font-serif text-lg font-semibold text-navy-900">
                {offre.title}
              </h3>
              <iframe
                src={offre.src}
                title={offre.title}
                className="h-[760px] w-full border-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-lg border border-gold-500/30 bg-gold-500/10 px-5 py-4 text-sm leading-relaxed text-navy-800">
          Pour activer vos avantages, transmettez une copie de votre carte
          professionnelle de taxi à{" "}
          <a
            href="mailto:contact@forcetaxi69.com"
            className="font-semibold text-navy-900 underline underline-offset-2"
          >
            contact@forcetaxi69.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

import { IconScale, IconShield, IconUsers } from "./icons";

const POINTS = [
  {
    icon: IconScale,
    title: "Défense des droits",
    text: "Nous défendons au quotidien les droits des chauffeurs de taxi lyonnais, individuellement et collectivement.",
  },
  {
    icon: IconShield,
    title: "Conditions équitables",
    text: "Nous œuvrons pour des conditions de travail équitables et la reconnaissance du métier de chauffeur de taxi.",
  },
  {
    icon: IconUsers,
    title: "Concurrence loyale",
    text: "Nous luttons contre la concurrence déloyale pour protéger l'activité et les revenus de nos adhérents.",
  },
];

export default function Syndicat() {
  return (
    <section id="syndicat" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            Le syndicat
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Force Taxi 69 (FT69) est un syndicat de chauffeurs de taxi basé à
            Lyon, affilié à la Fédération Nationale des Taxis (FNDT). Notre
            mission : défendre les droits des chauffeurs, promouvoir des
            conditions de travail équitables et lutter contre la concurrence
            déloyale qui fragilise notre profession.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex flex-col gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900/5 text-navy-800">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-900">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

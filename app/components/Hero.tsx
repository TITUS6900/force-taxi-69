export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-10%,rgba(201,162,39,0.25),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <span className="rounded-full border border-gold-500/50 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Affilié FNDT
        </span>
        <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          La force du collectif
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-100 sm:text-xl">
          Syndicat de chauffeurs de taxi à Lyon – affilié FNDT
        </p>
        <a
          href="#adherer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-navy-950 shadow-lg shadow-navy-950/30 transition-colors hover:bg-gold-400"
        >
          Adhérer
        </a>
      </div>
    </section>
  );
}

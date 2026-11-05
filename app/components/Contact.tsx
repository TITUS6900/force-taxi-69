import { IconMail, IconPhone, IconWhatsapp } from "./icons";

const CONTACTS = [
  {
    icon: IconMail,
    label: "Email",
    value: "contact@forcetaxi69.com",
    href: "mailto:contact@forcetaxi69.com",
  },
  {
    icon: IconPhone,
    label: "Téléphone",
    value: "06 67 63 82 84",
    href: "tel:+33667638284",
  },
  {
    icon: IconWhatsapp,
    label: "WhatsApp",
    value: "Discuter avec nous",
    href: "https://api.whatsapp.com/send?phone=33667638284",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Contact
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-100">
            Une question sur le syndicat ou votre adhésion ? Contactez-nous.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {CONTACTS.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {contact.label}
                  </p>
                  <p className="mt-1 text-base font-medium text-white">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

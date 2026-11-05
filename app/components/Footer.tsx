import { IconMapPin, IconPhone, IconWhatsapp } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-8 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6">
        <p className="text-sm">© 2026 Force Taxi 69</p>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
          <span className="flex items-center gap-1.5">
            <IconMapPin className="h-4 w-4" />
            Lyon
          </span>
          <a
            href="tel:+33667638284"
            className="flex items-center gap-1.5 hover:text-white"
          >
            <IconPhone className="h-4 w-4" />
            06 67 63 82 84
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=33667638284"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Force Taxi 69 sur WhatsApp"
            className="hover:text-white"
          >
            <IconWhatsapp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl = "https://forcetaxi69.com";
const title = "Force Taxi 69 — Syndicat de chauffeurs de taxi à Lyon";
const description =
  "Force Taxi 69 (FT69), syndicat de chauffeurs de taxi à Lyon affilié à la FNDT. Défense des droits des chauffeurs, lutte contre la concurrence déloyale et avantages adhérents exclusifs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Force Taxi 69",
  },
  description,
  keywords: [
    "taxi Lyon",
    "syndicat taxi",
    "FNDT",
    "chauffeur de taxi",
    "Force Taxi 69",
    "FT69",
    "adhésion taxi",
  ],
  authors: [{ name: "Force Taxi 69" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Force Taxi 69",
    title: "Force Taxi 69 — La force du collectif",
    description:
      "Syndicat de chauffeurs de taxi à Lyon, affilié FNDT. Adhérez pour défendre vos droits et bénéficier d'avantages exclusifs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Force Taxi 69 — La force du collectif",
    description:
      "Syndicat de chauffeurs de taxi à Lyon, affilié FNDT. Adhérez pour défendre vos droits et bénéficier d'avantages exclusifs.",
  },
  icons: {
    icon: "/logo-ft69-final.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        {children}
      </body>
    </html>
  );
}

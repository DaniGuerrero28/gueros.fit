import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import {
  SITE_URL,
  SITE_ICON,
  SITE_APPLE_ICON,
  SITE_THEME_COLOR,
} from "./constants";

/* fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const TITLE_DEFAULT =
  "Entrenamiento Personal Online y Nutrición | GUEROS Fitness";

const DESCRIPTION_DEFAULT =
  "Entrenamiento personal online, nutrición personalizada y seguimiento mensual con app exclusiva. Transforma tu físico y tu estilo de vida con GUEROS Fitness.";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE_DEFAULT,
    template: "%s | GUEROS Fitness",
  },

  description: DESCRIPTION_DEFAULT,

  keywords: [
    "gueros",
    "gueros fitness",
    "entrenamiento personal online",
    "entrenador personal",
    "nutrición personalizada",
    "plan de entrenamiento",
    "plan de nutrición",
    "cambio físico",
    "fitness online",
    "coaching fitness",
  ],

  openGraph: {
    title: TITLE_DEFAULT,
    description: DESCRIPTION_DEFAULT,
    url: "/",
    siteName: "GUEROS Fitness",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "GUEROS Fitness – Entrenamiento personal y nutrición online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION_DEFAULT,
    images: ["/images/insta-Gueros-logo-gold.png"],
  },

  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  themeColor: SITE_THEME_COLOR,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      >
        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_ICON,
  SITE_APPLE_ICON,
  SITE_THEME_COLOR,
} from "./constants";

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

const TITLE_DEFAULT = "Entrenamiento Personal Online y Nutrición | GUEROS Fitness";
const DESCRIPTION_DEFAULT =
  "Entrenamiento personal online, nutrición personalizada y seguimiento mensual con app muy exclusiva. Transforma tu físico y tu estilo de vida con GUEROS Fitness.";

export const metadata = {
  // Hace que todas las URLs relativas se resuelvan desde tu dominio
  metadataBase: new URL(SITE_URL),

  // Título base + plantilla para futuras páginas (SEO friendly)
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
        url: `${SITE_URL}/images/og-home.png`,
        width: 1200,
        height: 630,
        alt: "GUEROS Fitness – Entrenamiento personal y nutrición online",
      },
    ],
    logo: `${SITE_URL}/images/logo256x256.png`,
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION_DEFAULT,
    images: [`${SITE_URL}/images/og-home.png`],
    site: "@gueros_official",
  },

  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON,
  },

  alternates: {
    canonical: "/", // con metadataBase ya se convierte en https://gueros.fit/
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
      </body>
    </html>
  );
}

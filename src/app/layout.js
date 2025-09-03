import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_ICON, SITE_APPLE_ICON, SITE_THEME_COLOR } from "./constants";

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

export const metadata = {
  title: "GUEROS Fitness | Entrenamiento Personal y Nutrición",
  description: "Transforma tu vida con GUEROS: entrenamiento personalizado, nutrición, comunidad y app exclusiva. ¡Descubre nuestros planes y servicios!",
  keywords: [
    "gueros", "fitness", "entrenamiento personal", "nutrición", "app fitness", "planes", "comunidad", "bienestar"
  ],
  openGraph: {
    title: "GUEROS Fitness | Entrenamiento Personal y Nutrición",
    description: "Transforma tu vida con GUEROS: entrenamiento personalizado, nutrición, comunidad y app exclusiva.",
    url: SITE_URL + "/",
    images: [
      {
        url: SITE_URL + "/images/insta-logo.png",
        width: 1200,
        height: 630,
        alt: "GUEROS Hero"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GUEROS Fitness | Entrenamiento Personal y Nutrición",
    description: "Transforma tu vida con GUEROS: entrenamiento personalizado, nutrición, comunidad y app exclusiva.",
    images: [SITE_URL + "/images/insta-logo.png"]
  },
  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON
  },
  alternates: {
    canonical: SITE_URL + "/"
  },
  robots: {
    index: true,
    follow: true
  },
  themeColor: SITE_THEME_COLOR
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}

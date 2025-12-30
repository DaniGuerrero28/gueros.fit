import { SITE_URL, SITE_ICON, SITE_APPLE_ICON, SITE_THEME_COLOR } from "../constants";

export const metadata = {
  title: "¿Que ofrecemos? | GUEROS Fitness",
  description: "Descubre nuestros servicios de entrenamiento personalizado, nutrición y motivación. ¡Transforma tu vida con GUEROS!",
  keywords: [
    "servicios", "entrenamiento", "nutrición", "motivación", "personalizado", "gueros"
  ],
  openGraph: {
    title: "¿Que ofrecemos? | GUEROS Fitness",
    description: "Descubre nuestros servicios de entrenamiento personalizado, nutrición y motivación.",
    url: SITE_URL + "/services",
    images: [
      {
        url: SITE_URL + "/images/insta-Gueros-logo-gold.png",
        width: 1200,
        height: 630,
        alt: "Servicios GUEROS"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Que ofrecemos? | GUEROS Fitness",
    description: "Descubre nuestros servicios de entrenamiento personalizado, nutrición y motivación.",
    images: [SITE_URL + "/images/insta-Gueros-logo-gold.png"]
  },
  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON
  },
  alternates: {
    canonical: SITE_URL + "/services"
  },
  robots: {
    index: true,
    follow: true
  },
  themeColor: SITE_THEME_COLOR
};

export default function ServicesLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

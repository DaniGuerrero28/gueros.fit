import { SITE_URL, SITE_ICON, SITE_APPLE_ICON, SITE_THEME_COLOR } from "../constants";

export const metadata = {
  title: "Planes | GUEROS Fitness",
  description: "Compara nuestros planes de entrenamiento y nutrición. Elige el que mejor se adapte a ti y empieza tu transformación.",
  keywords: [
    "planes", "suscripción", "precios", "ofertas", "gueros", "entrenamiento", "nutrición"
  ],
  openGraph: {
    title: "Planes | GUEROS Fitness",
    description: "Compara nuestros planes de entrenamiento y nutrición.",
    url: SITE_URL + "/plans",
    images: [
      {
        url: SITE_URL + "/images/og_image_home.webp",
        height: 630,
        alt: "Planes GUEROS"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Planes | GUEROS Fitness",
    description: "Compara nuestros planes de entrenamiento y nutrición.",
    images: [SITE_URL + "/images/og_image_home.webp"]
  },
  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON
  },
  alternates: {
    canonical: SITE_URL + "/plans"
  },
  robots: {
    index: true,
    follow: true
  },
  themeColor: SITE_THEME_COLOR
};

export default function PlansLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

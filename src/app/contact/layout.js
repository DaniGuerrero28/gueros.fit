import { SITE_URL, SITE_ICON, SITE_APPLE_ICON, SITE_THEME_COLOR } from "../constants";

export const metadata = {
  title: "Contáctanos | GUEROS Fitness",
  description: "¿Tienes dudas o quieres empezar tu transformación? Contacta con el equipo GUEROS y recibe asesoramiento personalizado.",
  keywords: [
    "contacto", "consulta", "asesoramiento", "gueros", "formulario", "ayuda"
  ],
  openGraph: {
    title: "Contáctanos | GUEROS Fitness",
    description: "¿Tienes dudas o quieres empezar tu transformación? Contacta con el equipo GUEROS.",
    url: SITE_URL + "/contact",
    images: [
      {
        url: SITE_URL + "/images/og_image_home.webp",
        width: 1200,
        height: 630,
        alt: "Contacto GUEROS"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contáctanos | GUEROS Fitness",
    description: "¿Tienes dudas o quieres empezar tu transformación? Contacta con el equipo GUEROS.",
    images: [SITE_URL + "/images/og_image_home.webp"]
  },
  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON
  },
  alternates: {
    canonical: SITE_URL + "/contact"
  },
  robots: {
    index: true,
    follow: true
  },
  themeColor: SITE_THEME_COLOR
};

export default function ContactLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

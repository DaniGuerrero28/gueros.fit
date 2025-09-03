import { SITE_URL, SITE_ICON, SITE_APPLE_ICON, SITE_THEME_COLOR } from "../constants";

export const metadata = {
  title: "Sobre Nosotros | GUEROS Fitness",
  description: "Conoce al equipo de GUEROS, nuestra misión, visión y valores. Descubre cómo te ayudamos a transformar tu vida.",
  keywords: [
    "gueros", "equipo", "sobre nosotros", "staff", "misión", "visión", "fitness"
  ],
  openGraph: {
    title: "Sobre Nosotros | GUEROS Fitness",
    description: "Conoce al equipo de GUEROS, nuestra misión, visión y valores.",
    url: SITE_URL + "/about",
    images: [
      {
        url: SITE_URL + "/images/insta-logo.png",
        width: 1200,
        height: 630,
        alt: "Equipo GUEROS"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | GUEROS Fitness",
    description: "Conoce al equipo de GUEROS, nuestra misión, visión y valores.",
    images: [SITE_URL + "/images/insta-logo.png"]
  },
  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON
  },
  alternates: {
    canonical: SITE_URL + "/about"
  },
  robots: {
    index: true,
    follow: true
  },
  themeColor: SITE_THEME_COLOR
};

export default function AboutLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

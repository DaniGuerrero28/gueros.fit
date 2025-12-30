import { SITE_URL, SITE_ICON, SITE_APPLE_ICON, SITE_THEME_COLOR } from "../constants";

export const metadata = {
  title: "Socios | GUEROS Fitness",
  description: "Descubre las marcas y partners que colaboran con GUEROS. Accede a descuentos exclusivos y ventajas para la comunidad.",
  keywords: [
    "partners", "socios", "marcas", "descuentos", "colaboraciones", "gueros"
  ],
  openGraph: {
    title: "Socios | GUEROS Fitness",
    description: "Descubre las marcas y partners que colaboran con GUEROS.",
    url: SITE_URL + "/partners",
    images: [
      {
        url: SITE_URL + "/images/insta-Gueros-logo-gold.png",
        height: 630,
        alt: "Partners GUEROS"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Socios | GUEROS Fitness",
    description: "Descubre las marcas y partners que colaboran con GUEROS.",
    images: [SITE_URL + "/images/insta-Gueros-logo-gold.png"]
  },
  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON
  },
  alternates: {
    canonical: SITE_URL + "/partners"
  },
  robots: {
    index: true,
    follow: true
  },
  themeColor: SITE_THEME_COLOR
};

export default function PartnersLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

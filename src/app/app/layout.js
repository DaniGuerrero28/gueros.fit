import { SITE_URL, SITE_ICON, SITE_APPLE_ICON, SITE_THEME_COLOR } from "../constants";

export const metadata = {
  title: "App GUEROS | Fitness en tu móvil",
  description: "Descarga la app de GUEROS y lleva tu entrenamiento, nutrición y comunidad siempre contigo. Disponible en iOS y Android.",
  keywords: [
    "app", "fitness", "descarga", "móvil", "gueros", "rutinas", "nutrición", "comunidad"
  ],
  openGraph: {
    title: "App GUEROS | Fitness en tu móvil",
    description: "Descarga la app de GUEROS y lleva tu entrenamiento, nutrición y comunidad siempre contigo.",
    url: SITE_URL + "/app",
    images: [
      {
        url: SITE_URL + "/images/app_full.png",
        width: 1200,
        height: 630,
        alt: "App GUEROS"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "App GUEROS | Fitness en tu móvil",
    description: "Descarga la app de GUEROS y lleva tu entrenamiento, nutrición y comunidad siempre contigo.",
    images: [SITE_URL + "/images/app_full.png"]
  },
  icons: {
    icon: SITE_ICON,
    apple: SITE_APPLE_ICON
  },
  alternates: {
    canonical: SITE_URL + "/app"
  },
  robots: {
    index: true,
    follow: true
  },
  themeColor: SITE_THEME_COLOR
};

export default function AppLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

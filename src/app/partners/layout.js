import {  SITE_URL, SITE_ICON, SITE_APPLE_ICON, SITE_THEME_COLOR, PAGES_CONFIG, SEO_CONFIG } from "../config";

const pageConfig = PAGES_CONFIG.partners;

export const metadata = {
  title: pageConfig.title,
  description: pageConfig.description,
  keywords: pageConfig.keywords,
  openGraph: {
    title: pageConfig.title,
    description: pageConfig.description,
    url: SITE_URL + "/partners",
    images: [
      {
        url: SITE_URL + pageConfig.ogImage,
        width: SEO_CONFIG.ogImageWidth,
        height: SEO_CONFIG.ogImageHeight,
        alt: pageConfig.ogImageAlt
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: pageConfig.title,
    description: pageConfig.description,
    images: [SITE_URL + pageConfig.ogImage]
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

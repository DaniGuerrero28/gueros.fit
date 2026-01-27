import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SITE_URL,
  SITE_ICON,
  SITE_APPLE_ICON,
  SITE_THEME_COLOR,
  SEO_CONFIG, 
  SITE_CONFIG } from "./config";

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

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },

  description: SEO_CONFIG.defaultDescription,

  keywords: SEO_CONFIG.globalKeywords,

  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    url: "/",
    siteName: SITE_CONFIG.companyFullName,
    locale: SITE_CONFIG.locale,
    type: "website",
    images: [
      {
        url: SEO_CONFIG.ogImage,
        width: SEO_CONFIG.ogImageWidth,
        height: SEO_CONFIG.ogImageHeight,
        alt: SEO_CONFIG.ogImageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.twitterImage],
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
    <html lang={SITE_CONFIG.language}>
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

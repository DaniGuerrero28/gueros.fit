/**
 * ========================================
 * CONFIGURACIÓN CENTRAL DEL SITIO
 * ========================================
 * 
 * Este archivo centraliza toda la configuración del sitio.
 * Edita estos valores para personalizar el sitio para cada cliente.
 */

import { FaInstagram, FaTiktok, FaFacebookF, FaXTwitter } from "react-icons/fa6";

// ============================================
// INFORMACIÓN BÁSICA DE LA EMPRESA
// ============================================

export const SITE_CONFIG = {
  // Nombre de la empresa/marca
  companyName: "GUEROS",
  companyFullName: "GUEROS Fitness",
  
  // Descripción breve del negocio
  businessType: "Entrenamiento personal online y nutrición",
  
  // URLs y dominios
  siteUrl: "https://gueros.fit",
  
  // Idioma y localización
  language: "es",
  locale: "es_ES",
  
  // Nombre de la app móvil (si existe)
  appName: "GUEROS",
  
  // Año de fundación
  foundedYear: new Date().getFullYear(),
};

// ============================================
// METADATOS Y SEO
// ============================================
export const SEO_CONFIG = {
  // Título por defecto para la home
  defaultTitle: "Entrenamiento Personal Online y Nutrición | GUEROS Fitness",
  
  // Template para títulos de páginas internas
  titleTemplate: "%s | GUEROS Fitness",
  
  // Descripción por defecto
  defaultDescription: "Entrenamiento personal online, nutrición personalizada y seguimiento mensual con app exclusiva. Transforma tu físico y tu estilo de vida con GUEROS Fitness.",
  
  // Keywords globales (apareceran en todas las páginas)
  globalKeywords: [
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
  
  // Imágenes para Open Graph y redes sociales
  ogImage: "/images/og-home.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "GUEROS Fitness – Entrenamiento personal y nutrición online",
  
  // Imagen para Twitter/X
  twitterImage: "/images/insta-Gueros-logo-gold.png",
};

// ============================================
// PÁGINAS Y RUTAS
// ============================================
export const PAGES_CONFIG = {
  about: {
    title: "Sobre Nosotros",
    description: "Conoce al equipo de GUEROS, nuestra misión, visión y valores. Descubre cómo te ayudamos a transformar tu vida.",
    keywords: ["gueros", "equipo", "sobre nosotros", "staff", "misión", "visión", "fitness"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Equipo GUEROS",
  },
  
  contact: {
    title: "Contáctanos",
    description: "¿Tienes dudas o quieres empezar tu transformación? Contacta con el equipo GUEROS y recibe asesoramiento personalizado.",
    keywords: ["contacto", "consulta", "asesoramiento", "gueros", "formulario", "ayuda"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Contacto GUEROS",
  },
  
  services: {
    title: "¿Que ofrecemos?",
    description: "Descubre nuestros servicios de entrenamiento personalizado, nutrición y motivación. ¡Transforma tu vida con GUEROS!",
    keywords: ["servicios", "entrenamiento", "nutrición", "motivación", "personalizado", "gueros"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Servicios GUEROS",
  },
  
  plans: {
    title: "Planes",
    description: "Compara nuestros planes de entrenamiento y nutrición. Elige el que mejor se adapte a ti y empieza tu transformación.",
    keywords: ["planes", "suscripción", "precios", "ofertas", "gueros", "entrenamiento", "nutrición"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Planes GUEROS",
  },
  
  partners: {
    title: "Socios",
    description: "Descubre las marcas y partners que colaboran con GUEROS. Accede a descuentos exclusivos y ventajas para la comunidad.",
    keywords: ["partners", "socios", "marcas", "descuentos", "colaboraciones", "gueros"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Partners GUEROS",
  },
  
  app: {
    title: "App GUEROS | Fitness en tu móvil",
    description: "Descarga la app de GUEROS y lleva tu entrenamiento, nutrición y comunidad siempre contigo. Disponible en iOS y Android.",
    keywords: ["app", "fitness", "descarga", "móvil", "gueros", "rutinas", "nutrición", "comunidad"],
    ogImage: "/images/app_phone_mockup.webp",
    ogImageAlt: "App GUEROS",
  },
};

// ============================================
// DISEÑO Y TEMA
// ============================================
export const THEME_CONFIG = {
  // Color principal del tema
  themeColor: "#005bc9",
  
  // Iconos del sitio
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
  
  // Logos
  logo: "/images/logo.png",
  logoAlt: "Logo de Gueros Fitness",
};

// ============================================
// REDES SOCIALES
// ============================================
export const SOCIAL_CONFIG = {
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/gueros_official/",
    handle: "gueros_official",
  },
  
  tiktok: {
    name: "TikTok",
    url: "https://www.tiktok.com/@gueros_official",
    handle: "@gueros_official",
  },
  
  twitter: {
    name: "X",
    url: "https://x.com/dgfit_",
    handle: "@dgfit_",
  },
  
  facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/Gueros.oficial",
    handle: "Gueros.oficial",
  },
};

// Array de redes sociales con iconos (para usar en componentes)
export const COMPANY_SOCIALS = [
  { name: SOCIAL_CONFIG.instagram.name, url: SOCIAL_CONFIG.instagram.url, icon: <FaInstagram /> },
  { name: SOCIAL_CONFIG.tiktok.name, url: SOCIAL_CONFIG.tiktok.url, icon: <FaTiktok /> },
  { name: SOCIAL_CONFIG.twitter.name, url: SOCIAL_CONFIG.twitter.url, icon: <FaXTwitter /> },
  { name: SOCIAL_CONFIG.facebook.name, url: SOCIAL_CONFIG.facebook.url, icon: <FaFacebookF /> },
];

// ============================================
// CONTENIDO PERSONALIZADO
// ============================================
export const CONTENT_CONFIG = {
  // Historia de la empresa (para la sección "Sobre Nosotros")
  companyHistory: "Gueros Fitness surge de la experiencia personal de nuestro fundador, quien tras superar el bullying y la inseguridad, decidió dedicar su vida a ayudar a otros a transformar su físico y su salud. Cada transformación es una historia de superación y confianza.",
  
  // Descripción de la empresa (para FAQs y otras secciones)
  companyDescription: "Gueros es una empresa dedicada al entrenamiento personal y asesoramiento fitness, enfocada en ayudarte a alcanzar tus objetivos físicos y mejorar tu bienestar.",
  
  // Descripción de la app
  appDescription: "La app de GUEROS reúne todo: entrenamiento, dieta y comunidad. Es tu herramienta central para avanzar y mantenerte motivado/a.",
  
  // Imagen de fondo para contacto
  contactBackgroundImage: "/images/contact_background.webp",
};

// ============================================
// CONFIGURACIÓN DEL SITEMAP
// ============================================
export const SITEMAP_CONFIG = {
  pages: [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/plans", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services", priority: 0.8, changeFrequency: "monthly" },
    { url: "/app", priority: 0.8, changeFrequency: "monthly" },
    { url: "/history", priority: 0.7, changeFrequency: "yearly" },
    { url: "/about", priority: 0.6, changeFrequency: "yearly" },
    { url: "/contact", priority: 0.5, changeFrequency: "yearly" },
    { url: "/partners", priority: 0.5, changeFrequency: "yearly" },
  ],
};

// ============================================
// EXPORTACIONES LEGACY (para compatibilidad)
// ============================================
// Estas exportaciones mantienen compatibilidad con el código existente
export const SITE_URL = SITE_CONFIG.siteUrl;
export const SITE_ICON = THEME_CONFIG.favicon;
export const SITE_APPLE_ICON = THEME_CONFIG.appleTouchIcon;
export const SITE_THEME_COLOR = THEME_CONFIG.themeColor;
export const CONTACT_URL = CONTENT_CONFIG.contactBackgroundImage;

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
// INFORMACIÓN BÁSICA DE LA VECTOR
// ============================================

export const SITE_CONFIG = {
  // Nombre de la empresa/marca
  companyName: "VECTOR",
  companyFullName: "VECTOR COMPLETA S.L.",
  
  // Descripción breve del negocio
  businessType: "Empresa especializada en ...",
  
  // URLs y dominios
  siteUrl: "https://VECTOR.com",
  
  // Idioma y localización
  language: "es",
  locale: "es_ES",
  
  // Nombre de la app móvil (si existe)
  appName: "VECTOR",
  
  // Año de fundación
  foundedYear: new Date().getFullYear(),
};

// ============================================
// METADATOS Y SEO
// ============================================
export const SEO_CONFIG = {
  // Título por defecto para la home
  defaultTitle: "VECTOR - Soluciones Innovadoras para tu Negocio",
  
  // Template para títulos de páginas internas
  titleTemplate: "%s | VECTOR",
  
  // Descripción por defecto
  defaultDescription: "En VECTOR ofrecemos soluciones innovadoras para impulsar tu negocio. Descubre nuestros servicios y cómo podemos ayudarte a crecer.",
  
  // Keywords globales (apareceran en todas las páginas)
  globalKeywords: [
    "palabras",
    "clave",
    "VECTOR"
  ],
  
  // Imágenes para Open Graph y redes sociales
  ogImage: "/images/og-home.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "VECTOR – Soluciones Innovadoras para tu Negocio",
  
  // Imagen para Twitter/X
  twitterImage: "/images/insta-Gueros-logo-gold.png",
  
  // Contenido SEO para home (h1 y párrafos ocultos)
  homeH1: "VECTOR - Soluciones Innovadoras para tu Negocio",
  homeDescription: [
    "En VECTOR te acompañamos con soluciones innovadoras para impulsar tu negocio y alcanzar el éxito. Diseñamos estrategias personalizadas según tus necesidades y objetivos.",
    "No solo ofrecemos servicios: brindamos seguimiento continuo, ajustes estratégicos, soporte directo y una plataforma donde ves tu progreso, tus resultados y tu planificación completa.",
  ],
};

// ============================================
// PÁGINAS Y RUTAS
// ============================================

// Navegación principal del sitio
export const NAVIGATION_LINKS = [
  { name: 'App', href: '/app' },
  { name: 'Servicios', href: '/services' },
  { name: 'Sobre nosotros', href: '/about' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Socios', href: '/partners' },
];

export const PAGES_CONFIG = {
  about: {
    title: "Sobre Nosotros",
    description: "Conoce al equipo de VECTOR, nuestra misión, visión y valores. Descubre cómo te ayudamos a transformar tu vida.",
    keywords: ["VECTOR", "equipo", "sobre nosotros", "staff", "misión", "visión", "negocio"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Equipo VECTOR",
  },
  
  contact: {
    title: "Contáctanos",
    description: "¿Tienes dudas? Contacta con el equipo VECTOR y recibe asesoramiento personalizado.",
    keywords: ["contacto", "consulta", "asesoramiento", "VECTOR", "formulario", "ayuda"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Contacto VECTOR",
  },
  
  services: {
    title: "¿Que ofrecemos?",
    description: "Descubre nuestros servicios de personalizados a tu servicio. Somos VECTOR",
    keywords: ["servicios", "entrenamiento", "nutrición", "motivación", "personalizado", "VECTOR"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Servicios VECTOR",
  },
  
  plans: {
    title: "Planes",
    description: "Compara nuestros distintos planes. Elige el que mejor se adapte a ti.",
    keywords: ["planes", "suscripción", "precios", "ofertas", "VECTOR", "entrenamiento", "nutrición"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Planes VECTOR",
  },
  
  partners: {
    title: "Socios",
    description: "Descubre las marcas y partners que colaboran con VECTOR. Accede a descuentos exclusivos y ventajas para la comunidad.",
    keywords: ["partners", "socios", "marcas", "descuentos", "colaboraciones", "VECTOR"],
    ogImage: "/images/og_image_home.webp",
    ogImageAlt: "Partners VECTOR",
  },
  
  app: {
    title: "App VECTOR | Fitness en tu móvil",
    description: "Descarga la app de VECTOR y ten todo en la palma de tu mano. Disponible en iOS y Android.",
    keywords: ["app", "fitness", "descarga", "móvil", "VECTOR", "rutinas", "nutrición", "comunidad"],
    ogImage: "/images/app_phone_mockup.webp",
    ogImageAlt: "App VECTOR",
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

// ============================================
// CONTENIDO PERSONALIZADO
// ============================================
export const CONTENT_CONFIG = {
  // Historia de la empresa (para la sección "Sobre Nosotros")
  companyHistory: "VECTOR surge de la pasión por ofrecer soluciones innovadoras que impulsen el crecimiento de negocios de todos los tamaños. Desde nuestros inicios, hemos trabajado con dedicación para brindar un servicio excepcional y resultados tangibles a nuestros clientes.",
  
  // Descripción de la empresa (para FAQs y otras secciones)
  companyDescription: "VECTOR es una compañía comprometida con la excelencia y la innovación. Nuestro equipo de expertos trabaja incansablemente para desarrollar estrategias personalizadas que ayuden a nuestros clientes a alcanzar sus objetivos comerciales.",
  
  // Descripción de la app
  appDescription: "La app de VECTOR reúne todo lo que necesitas para gestionar y hacer crecer tu negocio desde la palma de tu mano. Disponible en iOS y Android.",
  
  // Imagen de fondo para contacto
  contactBackgroundImage: "/images/contact_background.webp",
};

// ============================================
// CONFIGURACIÓN DEL SITEMAP
// ============================================
export const SITEMAP_CONFIG = {
  pages: [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/about", priority: 0.9, changeFrequency: "yearly" },
    { url: "/services", priority: 0.8, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.7, changeFrequency: "yearly" },
    // { url: "/cases", priority: 0.6, changeFrequency: "monthly" }, // Si se añaden casos de éxito o testimonios, se puede incluir esta ruta
    // { url: "/partners", priority: 0.5, changeFrequency: "yearly" },
    // { url: "/history", priority: 0.7, changeFrequency: "yearly" },
    // { url: "/app", priority: 0.8, changeFrequency: "monthly" },
    // { url: "/plans", priority: 0.9, changeFrequency: "monthly" },
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

// Array de redes sociales con iconos (para usar en componentes)
export const COMPANY_SOCIALS = [
  { name: SOCIAL_CONFIG.instagram.name, url: SOCIAL_CONFIG.instagram.url, icon: <FaInstagram /> },
  { name: SOCIAL_CONFIG.tiktok.name, url: SOCIAL_CONFIG.tiktok.url, icon: <FaTiktok /> },
  { name: SOCIAL_CONFIG.twitter.name, url: SOCIAL_CONFIG.twitter.url, icon: <FaXTwitter /> },
  { name: SOCIAL_CONFIG.facebook.name, url: SOCIAL_CONFIG.facebook.url, icon: <FaFacebookF /> },
];

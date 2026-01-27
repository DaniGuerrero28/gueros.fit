# 🎨 Guía de Configuración de Plantilla Web

Este proyecto está configurado como plantilla reutilizable para crear sitios web para diferentes clientes de manera rápida y eficiente.

## 📋 Configuración Rápida para Nuevo Cliente

### 1. **Archivo Principal: `src/app/config.js`**

Este es el **único archivo** que debes editar para personalizar el 90% del sitio.

#### Información Básica
```javascript
export const SITE_CONFIG = {
  companyName: "GUEROS",              // Cambiar por nombre del cliente
  companyFullName: "GUEROS Fitness",  // Nombre completo
  siteUrl: "https://gueros.fit",      // URL del cliente
  language: "es",                      // Idioma
  locale: "es_ES",                     // Localización
  appName: "GUEROS",                   // Nombre de la app móvil
}
```

#### SEO y Metadatos
```javascript
export const SEO_CONFIG = {
  defaultTitle: "...",           // Título de la home
  titleTemplate: "%s | ...",     // Template para páginas internas
  defaultDescription: "...",     // Descripción SEO
  globalKeywords: [...],         // Keywords globales
  ogImage: "/images/og-home.png", // Imagen para redes sociales
}
```

#### Configuración de Páginas
```javascript
export const PAGES_CONFIG = {
  about: {
    title: "Sobre Nosotros",
    description: "...",
    keywords: [...],
    ogImage: "/images/og_image_home.webp",   // Imagen OG específica
    ogImageAlt: "Equipo GUEROS",             // Alt text de la imagen
  },
  // ... resto de páginas
}
```

#### Redes Sociales
```javascript
export const SOCIAL_CONFIG = {
  instagram: {
    url: "https://...",
    handle: "@usuario",
  },
  // ... resto de redes
}
```

#### Contenido Personalizado
```javascript
export const CONTENT_CONFIG = {
  companyHistory: "...",        // Historia de la empresa
  companyDescription: "...",    // Descripción para FAQs
  appDescription: "...",        // Descripción de la app
}
```

---

## 📁 Otros Archivos a Personalizar

### 2. **`package.json`**
```json
{
  "name": "gueros_web",  // ← Cambiar por nombre del cliente
  "version": "0.1.0"
}
```

### 3. **`src/app/site.webmanifest`**
```json
{
  "name": "Nombre de la App",           // ← Añadir
  "short_name": "NombreCorto",          // ← Añadir
  "theme_color": "#005bc9",             // ← Actualizar
  "background_color": "#ffffff"
}
```

### 4. **Componentes con Contenido Hardcodeado**

Los siguientes componentes tienen contenido específico de GUEROS que deberás actualizar manualmente:

#### 📄 `src/app/components/TestimonialsSection.js`
- Testimonios de clientes (líneas ~15-40)
- Cambiar nombres, textos y fotos

#### 📄 `src/app/components/SocialPromoSection.js`
- Handles de redes sociales (gueros_official)
- URLs de posts/reels específicos

#### 📄 `src/app/components/ServicesSection.js`
- Descripción de servicios (línea ~28)
- Texto de la app

#### 📄 `src/app/components/PlanSection.js`
- Nombres de planes
- Referencias a "app GUEROS" (líneas ~58-96)
- Precios y features de cada plan

#### 📄 `src/app/components/Header.js`
- Alt text del logo (línea ~61)

#### 📄 `src/app/components/Footer.js`
- Copyright (línea ~55)

#### 📄 `src/app/components/FAQs.js`
- Pregunta "¿Qué es Gueros?" (líneas ~29-31)
- Todas las FAQs específicas del negocio

#### 📄 `src/app/components/ExtendedServicesPanel.js`
- Descripción de la app (línea ~38)

#### 📄 `src/app/components/AppPromo.js` y `AppPromoExtended.js`
- Referencias a "app de GUEROS"
- Descripción de comunidad

#### 📄 `src/app/components/AboutUsSection.js`
- Historia de la empresa (línea ~71)

---

## 🖼️ Archivos de Imágenes

### Logos y Favicons
- `/favicon.ico`
- `/apple-touch-icon.png`
- `/android-chrome-192x192.png`
- `/android-chrome-512x512.png`
- `/images/logo.png`

### Imágenes de Contenido
- `/images/og-home.png` - Open Graph (1200x630px)
- `/images/og_image_home.webp` - Imagen para páginas internas
- `/images/insta-Gueros-logo-gold.png` - Logo para Twitter/X
- `/images/contact_background.webp` - Fondo del formulario de contacto

### Otras Imágenes
Revisa la carpeta `/public/images/` y `/public/caps/` para identificar otras imágenes específicas de GUEROS.

---

## ✅ Checklist de Configuración para Nuevo Cliente

### Archivos de Configuración
- [ ] `src/app/config.js` - **Configuración completa**
- [ ] `package.json` - Cambiar nombre del proyecto
- [ ] `src/app/site.webmanifest` - Añadir name, short_name, colors

### Componentes
- [ ] `TestimonialsSection.js` - Actualizar testimonios
- [ ] `SocialPromoSection.js` - Actualizar handles y URLs
- [ ] `PlanSection.js` - Actualizar planes y precios
- [ ] `FAQs.js` - Actualizar todas las preguntas
- [ ] `AboutUsSection.js` - Actualizar historia de la empresa
- [ ] `Footer.js` - Actualizar copyright
- [ ] `Header.js` - Actualizar alt del logo
- [ ] Otros componentes con referencias a GUEROS

### Imágenes y Assets
- [ ] Favicon e iconos de app
- [ ] Logo principal
- [ ] Imágenes Open Graph
- [ ] Fondo de contacto
- [ ] Fotos de testimonios
- [ ] Otras imágenes específicas

### Testing
- [ ] Verificar metadata en cada página
- [ ] Probar enlaces de redes sociales
- [ ] Revisar sitemap.xml
- [ ] Revisar robots.txt
- [ ] Testear Open Graph con herramientas (Facebook Debugger, Twitter Card Validator)

---

## 🎯 Ventajas de esta Estructura

✅ **Configuración centralizada** - 90% de cambios en un solo archivo  
✅ **Consistencia** - Todos los layouts usan la misma configuración  
✅ **Fácil mantenimiento** - Cambios globales desde un punto  
✅ **SEO optimizado** - Metadata consistente en todo el sitio  
✅ **Escalable** - Fácil añadir nuevas páginas con la misma estructura  

---

## 🔧 Próximas Mejoras Recomendadas

1. **Crear data files para componentes**: Extraer el contenido de PlanSection, FAQs, etc. a archivos JSON/JS separados
2. **Internacionalización (i18n)**: Si necesitas multi-idioma, usar next-intl o similar
3. **CMS Headless**: Para clientes que quieran editar contenido sin código (Contentful, Strapi, etc.)
4. **Variables de entorno**: Para datos sensibles o específicos de ambiente (.env)

---

## 📞 Soporte

Si tienes dudas sobre cómo configurar la plantilla, revisa los comentarios en `src/app/config.js` o contacta al equipo de desarrollo.

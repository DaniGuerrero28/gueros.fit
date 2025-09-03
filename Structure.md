# GUEROS Web Project – Structure

Este archivo define la **estructura de páginas** y secciones de la web

## Páginas y Rutas

1. **Home** (`/`)
   - Header fijo con logo, menú y botón CTA
   - Hero: fotografía a pantalla completa + título, subtítulo y botón "Ver planes"
   - Sección Servicios: 3 cards con iconos lineales y foto de fondo blanqueada
   - Planes Destacados: cards con foto de cada plan y CTA "Ver planes"
   - Sección App: mockup grande + botones Play Store y App Store
   - Testimonios: slider sobre fondo claro con marcos suaves
   - Footer: enlaces legales, redes sociales, newsletter

2. **Servicios** (`/services`)
   - Hero de sección con imagen grande
   - Título, descripción y beneficios en bullet points
   - CTA "Quiero este servicio" → formulario de contacto

3. **Planes** (`/plans`)
   - Cards comparativas con foto ilustrativa pequeña arriba
   - Selector de modalidad (tabs) que actualiza precios inline
   - Botones de pago (links Stripe)
   - Nota legal discreta al pie

4. **App** (`/app`)
   - Hero con mockup de móvil grande
   - Características (tracking, rutinas, chat) con iconos y fotos de la app
   - Botones descarga destacados

5. **Sobre Nosotros** (`/about`)
   - Hero con gran foto de equipo
   - Misión/visión centrada
   - Fotos circulares y bio del staff

6. **Contacto** (`/contact-us`)
   - Hero con foto de sala de entrenamiento
   - Formulario (nombre, email, teléfono, interés, mensaje)
   - Mapa incrustado abajo

7. **Error 404** (`/404`)
   - Diseño coherente con botón "Volver a Home"

# Imágenes necesarias para los layout.js y SEO/social sharing

Para optimizar los metadatos de cada página y compartir en redes sociales, necesitas las siguientes imágenes (tamaño recomendado: 1200x630px, formato JPG o WebP):

- **Home**  
  - `/public/images/og-home.jpg`  
  - Imagen principal de la web, puede ser el hero con el logo y personas entrenando.

- **Sobre Nosotros**  
  - `/public/images/og-about.jpg`  
  - Foto del equipo GUEROS, preferiblemente grupal y profesional.

- **Servicios**  
  - `/public/images/og-services.jpg`  
  - Imagen representativa de los servicios (entrenamiento, nutrición, motivación).

- **Planes**  
  - `/public/images/og-plans.jpg`  
  - Imagen con las cards de los planes o una comparativa visual de los mismos.

- **App**  
  - `/public/images/og-app.jpg`  
  - Mockup de la app en móvil, mostrando la interfaz y funcionalidades.

- **Contacto**  
  - `/public/images/og-contact.jpg`  
  - Imagen de contacto, puede ser una persona atendiendo, formulario, o sala de entrenamiento.

- **Partners**  
  - `/public/images/og-partners.jpg`  
  - Imagen con los logos de los partners o una composición de marcas colaboradoras.

**Recomendaciones:**
- Todas las imágenes deben ser claras, profesionales y alineadas con la identidad visual de GUEROS.
- Añade texto alternativo descriptivo en los metadatos y en las etiquetas `<img>` para accesibilidad y SEO.
- Guarda las imágenes en `/public/images/` y usa la ruta absoluta en los metadatos.

**Ejemplo de uso en metadata:**
```js
images: [
  {
    url: "https://gueros.com/images/og-home.jpg",
    width: 1200,
    height: 630,
    alt: "GUEROS Hero"
  }
]
```
# Web Base project – Tecnologías y Funcionalidades

## Frontend
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Optimización**:
  - `next/image` para lazy-load y WebP
  - Meta tags dinámicos para SEO
  - Validación WCAG AA (contraste mínimo 4.5:1)
- **Animaciones**: Framer Motion (fade + slide, duration 0.4s)
- **Tracking**: Google Analytics, Facebook Pixel

## Backend / API
- **Routes**: API route `/api/contact` para formularios
  - Validación de datos
  - Envío de email con NodeMailer o SendGrid

## Infraestructura
- **Hosting**: Vercel (SSG/SSR según conveniencia)
- **Variables de entorno**: STRIPE_SECRET_KEY, EMAIL_API_KEY, DB_URL

## Performance & Accesibilidad
- Imágenes optimizadas, carga perezosa
- Componentes reutilizables y modulables
- Menu sticky y scroll suave
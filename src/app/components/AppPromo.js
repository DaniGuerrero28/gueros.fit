import { FaApple } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

export default function AppPromo() {
  return (
    <div id="app-section" className="flex flex-1 flex-col items-center justify-center px-4 py-12">
      <SectionHeader
        eyebrow="La app"
        title="Descarga nuestra app"
        description="Lleva tu entrenamiento y nutrición al siguiente nivel con la app de GUEROS. Accede a rutinas personalizadas, seguimiento de progreso, comunidad exclusiva y mucho más, TODO desde tu móvil."
      />

      <div className="flex flex-col sm:flex-row gap-8 mt-6">
        {/* App Store Button */}
        <a
          href="https://www.apple.com/app-store/"
          className="inline-flex items-center gap-2 px-5 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 hover:scale-110 hover:shadow-xl transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaApple className="text-background" size="42"/>
          <span className="flex flex-col leading-tight text-left">
            <span className="text-xs text-primary-foreground">Consíguelo en el</span>
            <span className="text-lg font-semibold text-primary-foreground">App Store</span>
          </span>
        </a>

        {/* Google Play Button */}
        <a
          href="https://play.google.com/store"
          className="inline-flex items-center gap-2 px-5 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 hover:scale-110 hover:shadow-xl transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/store_google_play.webp"
            alt="Logo de Google Play"
            width={42}
            height={42}
          />
          <span className="flex flex-col leading-tight text-left">
            <span className="text-xs uppercase text-primary-foreground">Disponible en</span>
            <span className="text-lg font-semibold text-primary-foreground">Google Play</span>
          </span>
        </a>
      </div>

      <img
        src="/images/app_phone_mockup.webp"
        alt="Mockup de teléfono con la aplicación"
        className="w-full max-w-sm md:max-w-lg rounded-xl mt-8"
      />
    </div>
  );
}

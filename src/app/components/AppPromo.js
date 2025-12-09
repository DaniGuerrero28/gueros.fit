import { FaApple } from "react-icons/fa";

export default function AppPromo() {
  return (
    <div id="app-section" className="flex flex-1 flex-col items-center justify-center px-4 py-12">
      <h2 className="text-4xl md:text-6xl font-semibold leading-tight font-montserrat max-w-2xl text-center">Descarga nuestra app</h2>
      <p className="w-10/12 md:w-full text-md text-center mb-8 max-w-xl">
        Lleva tu entrenamiento y nutrición al siguiente nivel con la app de GUEROS. Accede a rutinas personalizadas, seguimiento de progreso, comunidad exclusiva y mucho más, <span className="font-bold uppercase">TODO</span> desde tu móvil.
      </p>

      <div className="flex flex-col sm:flex-row gap-8">
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
            src="/images/google-play.png"
            alt="Google Play Logo"
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
        src="/images/app_full.png"
        alt="App de GUEROS"
        className="w-full max-w-sm md:max-w-lg rounded-xl mt-8"
      />
    </div>
  );
}

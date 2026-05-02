import PromoPopup from "./PromoPopup";

export default function HeroSection() {
  return (
    <>
      <PromoPopup />
      <section id="hero-section" className="w-full min-h-11/12 flex flex-col lg:flex-row items-stretch bg-background text-foreground mb-20 md:mb-28">
        {/* Mobile: imagen arriba, luego contenido */}
        <div className="w-full lg:w-1/2 flex flex-col lg:justify-center items-center px-4 lg:px-16 gap-8 mx-auto order-2 lg:order-1">
          <h2 className="text-4xl xl:text-6xl font-semibold leading-tight font-montserrat max-w-xl text-center lg:text-left" style={{fontFamily: 'Montserrat, var(--font-montserrat), sans-serif'}}>
            {/* Cuida tu cuerpo, transforma tu vida */}
            Cambia tu cuerpo,{" "}
            <span className="relative inline-block whitespace-nowrap">
              transforma
              <svg
                aria-hidden="true"
                className="absolute left-0 w-full overflow-visible"
                style={{ bottom: "-2px", height: "8px" }}
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 C18,2 40,7 58,4.5 C76,2 90,6 100,4"
                  stroke="var(--color-accent)"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1,7.5 C22,5.5 48,8 70,6 C84,4.5 94,7 99,6"
                  stroke="var(--color-accent)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
            </span>
            {" "}tu vida
          </h2>
          <p className="text-base xl:text-xl text-primary max-w-xl text-center lg:text-left">
            Ayudamos a personas a verse fuertes e increíbles frente al espejo sin dietas estrictas ni rutinas extremas.
          </p>
          <div className="w-full max-w-xl flex justify-center lg:justify-start">
            <a
              href="https://wa.me/34601435524"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full text-lg font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-all inline-block text-white py-4 px-8 relative overflow-hidden focus:outline-none"
              style={{ position: "relative", background: "var(--color-accent-gradient)" }}
            >
              <span className="relative z-10 text-background">¡Empieza ahora!</span>
              {/* Brillo animado */}
              <span
                className="absolute top-0 left-0 h-full w-full pointer-events-none"
                style={{
                  zIndex: 5,
                  overflow: "hidden",
                }}
              >
                <span
                  className="block h-full w-2/3 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80 blur-sm animate-shine-bounce"
                />
              </span>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center relative order-1 lg:order-2 mb-2 lg:mb-0">
          <div className="relative w-full flex items-center justify-center">
            <img
              src="/images/hero_man_training_outside.webp"
              alt="Hombre entrenando al aire libre"
              className="object-contain"
              style={{
                height: '100%',
                width: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            />
            <div
              className="pointer-events-none absolute left-0 right-0 bottom-0"
              style={{
                height: '4%',
                background: 'linear-gradient(to top, var(--color-background) 90%, transparent 100%)',
                zIndex: 2,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

// Agrega este CSS a tu global.css o tailwind.css
/*
@keyframes shine {
  0% { left: -75%; }
  100% { left: 120%; }
}
.animate-shine {
  animation: shine 1.8s cubic-bezier(0.4,0,0.2,1) infinite;
}
*/

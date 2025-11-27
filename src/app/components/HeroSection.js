import BlackFridayPopup from "./BlackFridayPopup";

export default function HeroSection() {
  return (
    <>
      <BlackFridayPopup />
      <section id="hero-section" className="w-full min-h-11/12 flex flex-col md:flex-row items-stretch bg-background text-foreground mb-36 md:mb-28">
        {/* Mobile: imagen arriba, luego contenido */}
        <div className="w-full md:w-1/2 flex flex-col md:justify-center md:items-center px-4 md:px-16 gap-8 mx-auto order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight font-montserrat max-w-xl text-center md:text-left" style={{fontFamily: 'Montserrat, var(--font-montserrat), sans-serif'}}>
            Cuida tu cuerpo, transforma tu vida
          </h1>
          <p className="text-base md:text-xl text-primary max-w-xl text-center md:text-left">
            Somos una empresa de asesoramiento fitness y entrenamiento personal. Te ayudamos a alcanzar tus objetivos físicos con un enfoque profesional y personalizado.
          </p>
          <div className="w-full max-w-xl flex justify-center md:justify-start">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("planes-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 bg-gradient-to-br from-[#005bc9] from-40% to-90% to-[#00e79e] rounded-full text-lg font-semibold shadow-lg hover:scale-110 hover:shadow-xl hover:bg-[#005bc9]/80 transition-all inline-block text-white py-4 px-8 relative overflow-hidden focus:outline-none"
              style={{ position: "relative" }}
            >
              <span className="relative z-10">¡Empieza ahora!</span>
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
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center relative order-1 md:order-2 mb-2 md:mb-0">
          <div className="relative w-full flex items-center justify-center" style={{maxHeight: '90%'}}>
            <img
              src="/images/fitMan-hero.png"
              alt="Fit man hero"
              className="object-contain"
              style={{
                height: '100%',
                width: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            />
            <div
              className="pointer-events-none absolute left-0 right-0 -bottom-1"
              style={{
                height: '8%',
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

import React, { useRef, useState, useEffect } from "react";
import ExtendedService from "./ExtendedService";

const EXTENDED_SERVICES = [
  {
    title: "Entrenamiento",
    image: "/images/1.jpg",
    description: `Proporcionamos rutinas personalizadas adaptadas a tus objetivos, necesidades, restricciones físicas, dolores o lesiones previas. Cada entrenamiento es único para ti.

- Rutinas adaptadas a lesiones y dolencias
- Seguimiento continuo
- Modificaciones según evolución y feedback`,
    imgContain: false
  },
  {
    title: "Dieta",
    image: "/images/2.jpg",
    description: `Recibirás una dieta y guía nutricional personalizada, flexible y modificable según tus necesidades y evolución. Nos adaptamos a ti en todo momento.

- Dieta flexible y personalizada
- Cambios según tus objetivos
- Guía y soporte nutricional continuo`,
    imgContain: false
  },
  {
    title: "Motivación",
    image: "/images/3.jpg",
    description: `Nuestros entrenadores personales y la comunidad te motivarán día a día para que no pierdas el foco y sigas adelante con tus objetivos.

- Apoyo de entrenadores
- Comunidad activa
- Motivación constante y seguimiento`,
    imgContain: false
  },
  {
    title: "App",
    image: "/images/app_full.png",
    description: `La app de GUEROS reúne todo: entrenamiento, dieta y comunidad. Es tu herramienta central para avanzar y mantenerte motivado/a.

- Acceso a rutinas y dieta
- Comunidad y motivación
- Todo en un solo lugar`,
    imgContain: true
  },
];

export default function ExtendedServicesPanel() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const serviceRefs = useRef([]);

  // Scroll al servicio seleccionado
  const handleSelect = (idx) => {
    setSelectedIdx(idx);
    setTimeout(() => {
      serviceRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Sincroniza el seleccionado con el scroll usando Intersection Observer
  useEffect(() => {
    const rightCol = document.querySelector('.no-scrollbar');
    if (!rightCol) return;
    const options = {
      root: rightCol,
      rootMargin: '0px 0px -0% 0px', // Menos margen negativo para que detecte mejor el último elemento
      threshold: 0.2
    };
    const observer = new window.IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length > 0) {
        // El primero visible es el que está "arriba"
        const idx = serviceRefs.current.findIndex(ref => ref === visible[0].target);
        if (idx !== -1 && idx !== selectedIdx) setSelectedIdx(idx);
      }
    }, options);
    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      observer.disconnect();
    };
  }, [selectedIdx]);

  return (
    <section className="w-10/12 md:w-full flex flex-col md:flex-row items-start py-16 px-4 md:px-16 bg-background text-foreground gap-12 max-w-7xl mx-auto md:mb-28">
      {/* Desktop: dos columnas */}
      <div className="hidden md:flex w-full">
        {/* Columna izquierda */}
        <div className="max-w-sm flex flex-col gap-8 sticky top-24 self-start">
          <h2 className="text-5xl font-bold mb-4">¿Qué ofrecemos?</h2>
          <p className="text-lg mb-8 text-primary ">
            Conoce en profundidad cómo te ayudamos: personalización, flexibilidad, motivación y tecnología para transformar tu vida.
          </p>
          <ul className="flex flex-col gap-2">
            {EXTENDED_SERVICES.map((service, idx) => (
              <li key={service.title}>
                <button
                  className={` text-left text-lg px-2 py-2 rounded font-semibold transition-all border-b border-primary-foreground/10 ${
                    selectedIdx === idx
                      ? "text-primary bg-primary-foreground/30 border-accent"
                      : "text-secondary hover:scale-110 hover:text-primary/50"
                  }`}
                  onClick={() => setSelectedIdx(idx)}
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Columna derecha */}
        <div className="flex-1 max-w-4xl overflow-y-auto h-[80vh] px-2">
          <div className="flex-1 max-w-4xl overflow-y-auto h-[80vh] px-2 pb-32 no-scrollbar relative">
            <div ref={el => (serviceRefs.current[selectedIdx] = el)} className="mb-32">
              <ExtendedService
                title={EXTENDED_SERVICES[selectedIdx].title}
                image={EXTENDED_SERVICES[selectedIdx].image}
                description={EXTENDED_SERVICES[selectedIdx].description}
                imgContain={EXTENDED_SERVICES[selectedIdx].imgContain}
              />
            </div>
            {/* Fade inferior */}
          </div>
          <div className="pointer-events-none absolute left-0 bottom-24 w-full h-12 bg-gradient-to-t from-background to-transparent z-10" />
        </div>
        <div className="w-min flex flex-col gap-8 sticky top-24 self-start">
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;} .no-scrollbar{scrollbar-width:none;}`}</style>
        </div>
      </div>
      {/* Mobile: una columna */}
      <div className="md:hidden w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4 text-center">¿Qué ofrecemos?</h2>
        <p className="text-md mb-8 text-primary text-center max-w-xl">
          Conoce en profundidad cómo te ayudamos: personalización, flexibilidad, motivación y tecnología para transformar tu vida.
        </p>
        <div className="flex flex-col gap-16 w-full max-w-2xl">
          {EXTENDED_SERVICES.map((service) => (
            <ExtendedService
              key={service.title}
              title={service.title}
              image={service.image}
              description={service.description}
              imgContain={service.imgContain}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

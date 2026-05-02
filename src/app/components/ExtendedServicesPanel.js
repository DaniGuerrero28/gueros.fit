import React, { useRef, useState, useEffect } from "react";
import ExtendedService from "./ExtendedService";

const EXTENDED_SERVICES = [
  {
    title: "Rutina 100% Personalizada",
    image: "/images/service_motivation_training.webp",
    description: "Tu entrenamiento lo construimos desde cero pensando en ti: tus objetivos, tu nivel, tu disponibilidad y tus limitaciones físicas. Cada semana revisamos tu progreso y ajustamos cargas y ejercicios para que sigas avanzando sin estancarte.",
    itemList: [
      "Diseño inicial basado en tu historial y objetivos",
      "Ajustes semanales según tu evolución y feedback",
      "Alternativas ante lesiones o falta de equipamiento",
      "Periodización progresiva para maximizar resultados",
    ],
    imgContain: false
  },
  {
    title: "Dieta a Medida",
    image: "/images/service_nutrition_plate.webp",
    description: "Creamos un plan nutricional flexible adaptado a tus gustos, intolerancias y horarios. Sin restricciones extremas: comerás rico y de forma sostenible mientras alcanzas tu objetivo, ya sea perder grasa, ganar músculo o simplemente sentirte mejor.",
    itemList: [
      "Plan calórico y de macros ajustado a tu meta",
      "Menús con opciones y sustituciones",
      "Adaptación ante viajes o eventos sociales",
      "Revisiones periódicas según tu progreso",
    ],
    imgContain: false
  },
  {
    title: "Contacto 24/7",
    image: "/images/contact_man_holding_phone.webp",
    description: "Tienes acceso directo a tu coach en todo momento: resuelve dudas sobre tu rutina, pide ajustes en tu dieta o busca apoyo cuando lo necesites. Respondemos rápido porque los pequeños bloqueos del día a día son los que marcan la diferencia.",
    itemList: [
      "Chat directo con tu entrenador personal",
      "Respuesta en menos de 24h cualquier día",
      "Corrección de técnica mediante vídeo",
      "Sin límite de consultas",
    ],
    imgContain: false
  },
  {
    title: "Comunidad Gueros",
    image: "/images/service_community.webp",
    description: "Un espacio privado donde conviven personas con tus mismos objetivos: transformar su cuerpo y vivir con más energía. Compartimos resultados, dudas, recetas y retos porque rodearte de personas que ganan te empuja a ganar tú también.",
    itemList: [
      "Grupo privado activo con actualizaciones diarias",
      "Retos grupales para mantener la motivación",
      "Contenido exclusivo: consejos, vídeos y directos",
    ],
    imgContain: false
  },
  {
    title: "Acceso a la App",
    image: "/images/app_phone_mockup.webp",
    description: "La app de Gueros centralizará toda tu experiencia: rutinas, dieta, seguimiento de progreso y comunicación con tu entrenador en un solo lugar. Sé de los primeros en acceder y disfruta de los primeros meses completamente gratis.",
    itemList: [
      "Rutinas con vídeos demostrativos por ejercicio",
      "Registro de pesos y progreso por sesión",
      "Chat integrado con tu entrenador",
      "Notificaciones para no saltarte ningún entreno",
    ],
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
                itemList={EXTENDED_SERVICES[selectedIdx].itemList}
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
              itemList={service.itemList}
              imgContain={service.imgContain}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

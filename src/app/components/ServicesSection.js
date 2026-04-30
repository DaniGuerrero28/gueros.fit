const SERVICES = [
  {
    title: "Rutina 100% Personalizada",
    description:
      "Tu entrenamiento evoluciona contigo. Rutinas diseñadas según tus objetivos y ajustadas semana a semana para que nunca te estanques y sigas avanzando sin límites.",
    image: "/images/service_motivation_training.webp",
    colSpan: "col-span-2",
  },
  {
    title: "Dieta a Medida",
    description:
      "Come rico y transforma tu cuerpo. Un plan nutricional completamente personalizado, flexible y sostenible para que disfrutes del camino mientras consigues los mejores resultados.",
    image: "/images/service_nutrition_plate.webp",
    colSpan: "col-span-1",
  },
  {
    title: "Contacto 24/7",
    description:
      "Resuelve cualquier duda al instante. Acceso directo a tu entrenador personal por chat, siempre disponible para orientarte, ajustar tu plan y mantenerte en el camino.",
    image: "/images/hero_man_holding_plate.webp",
    colSpan: "col-span-1",
  },
  {
    title: "Comunidad Gueros",
    description:
      "En la comunidad Team Gueros rodéate de personas con tus mismos objetivos. Comparte resultados, dudas y estilo de vida con todos los integrantes de Gueros. Gana con ganadores.",
    image: "/images/about_gallery_workout.webp",
    colSpan: "col-span-1",
  },
  {
    title: "Acceso a la App",
    description:
      "Tu progreso, métricas y rutinas en la palma de tu mano. Sé el primero en acceder a la futura app de entrenamiento y nutrición de Gueros.",
    image: "/images/app_phone_mockup.webp",
    colSpan: "col-span-1",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios-section" className="w-full flex flex-col items-center py-16 bg-background text-foreground mb-36 md:mb-28">
      <h2 className="text-4xl xl:text-6xl font-semibold leading-tight font-montserrat max-w-xl text-center">¿Qué ofrecemos?</h2>
      <p className="md:w-full w-10/12 text-md text-center mb-10 max-w-2xl">
        Descubre cómo podemos ayudarte a transformar tu vida: entrenamiento personalizado, dieta flexible, motivación constante y una app que lo une todo.
      </p>

      {/* Desktop: Bento Grid con Flip Cards */}
      <div className="hidden md:grid grid-cols-2 gap-4 w-full max-w-4xl px-4">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className={`group relative h-64 ${service.colSpan} perspective-[1000px] cursor-pointer`}
          >
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-3d group-hover:transform-[rotateY(180deg)]">
              {/* Cara delantera */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{ background: "linear-gradient(to bottom, transparent 30%, var(--color-background) 100%)" }}
                />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-xl font-bold text-foreground font-montserrat drop-shadow">{service.title}</h3>
                </div>
              </div>
              {/* Cara trasera */}
              <div
                className="absolute inset-0 backface-hidden transform-[rotateY(180deg)] rounded-xl flex flex-col justify-end items-start p-6"
                style={{ background: "var(--color-secondary-mute)" }}
              >
                <h3
                  className="text-xl font-bold mb-4 font-montserrat text-primary"
                >
                  {service.title}
                </h3>
                <p className="text-sm text-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Lista de Cards */}
      <div className="md:hidden flex flex-col gap-5 w-10/12">
        {SERVICES.map((service) => (
          <div key={service.title} className="rounded-xl overflow-hidden">
            <div
              className="w-full aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div
              className="px-4 py-4"
              style={{ background: "var(--color-secondary-mute)" }}
            >
              <h3
                className="text-2xl font-bold mb-1 font-montserrat text-primary"
              >
                {service.title}
              </h3>
              <p className="text-sm text-foreground leading-relaxed text-secondary">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

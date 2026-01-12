import Service from "./Service";

const SERVICES = [
  {
    title: "Entrenamiento",
    description:
      "Proporcionamos rutinas personalizadas adaptadas a tus objetivos, necesidades, restricciones físicas, dolores o lesiones previas. Cada entrenamiento es único para ti.",
    image: "/images/hero_man_holding_plate.webp",
    imgContain: false,
  },
  {
    title: "Dieta",
    description:
      "Recibirás una dieta y guía nutricional personalizada, flexible y modificable según tus necesidades y evolución. Nos adaptamos a ti en todo momento.",
    image: "/images/service_nutrition_plate.webp",
    imgContain: false,
  },
  {
    title: "Motivación",
    description:
      "Nuestros entrenadores personales y la comunidad te motivarán día a día para que no pierdas el foco y sigas adelante con tus objetivos.",
    image: "/images/service_motivation_training.webp",
    imgContain: false,
  },
  {
    title: "App",
    description:
      "La app de GUEROS reúne todo: entrenamiento, dieta y comunidad. Es tu herramienta central para avanzar y mantenerte motivado/a.",
    image: "/images/app_phone_mockup.webp",
    imgContain: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios-section" className="w-full flex flex-col items-center py-16 bg-background text-foreground mb-36 md:mb-28">
      <h2 className="text-4xl xl:text-6xl font-semibold leading-tight font-montserrat max-w-xl text-center">¿Qué ofrecemos?</h2>
      <p className="md:w-full w-10/12 text-md text-center mb-8 max-w-2xl">
        Descubre cómo podemos ayudarte a transformar tu vida: entrenamiento personalizado, dieta flexible, motivación constante y una app que lo une todo.
      </p>
      <div className="flex flex-col flex-wrap gap-8 justify-center item-center w-full max-w-4xl">
        {SERVICES.map((service, idx) => (
          <Service
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            imageSide={idx % 2 === 0 ? "left" : "right"}
            buttonText="Descubre más"
            buttonHref="/services"
            buttonClassName="transition-all duration-200 hover:bg-accent/80 hover:scale-110 hover:shadow-xl"
            imgContain={service.imgContain}
          />
        ))}
      </div>
    </section>
  );
}

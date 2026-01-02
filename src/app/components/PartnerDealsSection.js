const PARTNERS = [
  {
    name: "HSN",
    logo: "/images/partner_hsn_logo.svg",
    image: "/images/partner_hsn_logo.svg",
    text: "Ver mis descuentos",
    description: "Nutrición deportiva y suplementación de calidad. Descubre los mejores productos para tu entrenamiento y salud.",
    url: "https://www.hsnstore.com/nutricion-deportiva?utm_source=hsnaffiliate&utm_medium=DGUERRERO&utm_campaign=category_3"
  },
  {
    name: "Pandeck",
    logo: "/images/partner_pandeck_logo.webp",
    image: "/images/partner_pandeck_logo.webp",
    text: "Descurbrir ofertas",
    description: "Todo complemento que puedas necesitar para tu viaje fitness. Desde scoops de proteína hasta soportes para el movil.",
    url: "https://pandeck.com/"
  }
];

export default function PartnerDealsSection() {
  return (
    <section id="partners-section" className="w-full flex flex-col items-center py-16 bg-background text-foreground">
      <h2 className="text-3xl font-bold mb-4 text-center w-10/12 md:w-full">Descuentos exclusivos para la comunidad</h2>
      <p className="text-md mb-10 text-center w-10/12 md:w-full max-w-2xl">Accede a ofertas especiales y ventajas únicas en marcas líderes de nutrición, ropa deportiva y accesorios fitness. ¡Aprovecha estos beneficios pensados para tu progreso!</p>
      {/* Logos row */}
      {/*}
      <div className="flex flex-row justify-center items-center gap-8 mb-12 w-full max-w-3xl mx-auto">
        {PARTNERS.map(partner => (
          <img
            key={partner.name}
            src={partner.logo}
            alt={partner.name + ' logo'}
            className={`h-12 w-auto object-contain`}
            style={{ maxWidth: 120 }}
          />
        ))}
      </div>
      */}
      {/* Listado de partners */}
      <div className="flex flex-col gap-8 md:w-full w-10/12 max-w-2xl mx-auto">
        {PARTNERS.map(partner => (
          <div key={partner.name} className="flex flex-col md:flex-row items-center bg-primary rounded-xl shadow p-6 gap-6">
            <img
              src={partner.image}
              alt={partner.name + ' foto'}
              className="h-32 w-32 object-contain rounded-lg md:mb-0"
            />
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-accent-contrast">
              <p className="text-md text-primary-foreground mb-4">{partner.description}</p>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full text-accent-contrast font-semibold shadow hover:scale-110 hover:shadow-xl transition-all"
                style={{ background: 'var(--color-accent-gradient)' }}
              >
                {partner.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

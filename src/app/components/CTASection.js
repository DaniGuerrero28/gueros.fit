export default function CTASection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-background text-foreground mb-20 md:mb-28">
      <div className="flex flex-col items-center gap-4 w-10/12 max-w-2xl text-center">
        <p className="text-2xl md:text-3xl font-semibold font-montserrat leading-snug">
          ¿Listo para dar el primer paso?
        </p>
        <p className="text-base text-secondary-foreground max-w-lg">
          Escríbenos y en menos de 24 h te contamos cómo empezar. Sin compromiso, solo resultados.
        </p>
        <a
          href="https://wa.me/34601435524"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full text-base font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-all inline-block py-3 px-8 relative overflow-hidden"
          style={{ background: "var(--color-accent-gradient)", color: "var(--color-accent-contrast)" }}
        >
          Contactar
        </a>
      </div>
    </section>
  );
}

import { COMPANY_SOCIALS } from "../config";

export default function Footer() {
  const handleJoinClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        // Ya en home, scroll directo
        const el = document.getElementById("planes-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Marca intención y redirige
        localStorage.setItem("scrollToPlanes", "1");
        window.location.href = "/";
      }
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href = "/contact";
    }
  };

  return (
    <footer className="w-full bg-primary-foreground border-t border-primary-foreground/10 py-8 mt-16 flex flex-col items-center gap-6">
      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto mb-2 px-4 gap-4">
        {/* Botones arriba en mobile, a la derecha en desktop */}
        <div className="w-full flex flex-row justify-center md:justify-end gap-4 order-1 md:order-2 mb-4 md:mb-0">
          <button
            onClick={handleJoinClick}
            className="px-6 py-3 text-accent-contrast rounded-full font-bold text-md shadow hover:scale-110 hover:shadow-xl transition-all"
            style={{ background: 'var(--color-accent-gradient)' }}
          >
            ¡Únete ahora!
          </button>
          <button
            onClick={handleContactClick}
            className="px-6 py-3 bg-primary text-background rounded-full font-bold text-md shadow hover:bg-primary/80 hover:scale-110 hover:shadow-xl transition-all"
          >
            Contáctanos
          </button>
        </div>
        {/* Socials debajo de los botones en mobile, a la izquierda en desktop */}
        <div className="w-full flex flex-row justify-center md:justify-start gap-6 order-2 md:order-1">
          {COMPANY_SOCIALS.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary hover:scale-150 hover:shadow-xl transition-all">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <hr className="w-full max-w-3xl border-t border-primary/10" />
      <div className="text-xs text-secondary">© {new Date().getFullYear()} GUEROS. Todos los derechos reservados.</div>
    </footer>
  );
}

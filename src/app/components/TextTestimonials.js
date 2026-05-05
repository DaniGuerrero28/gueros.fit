"use client";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import SectionHeader from "./SectionHeader";

const TESTIMONIALS = [
  {
    id: 1,
    text: "Llevo 8 kilos menos. Pero lo que de verdad me cambió fue entrar a una reunión importante y pensar 'estoy listo' por primera vez en mucho tiempo.",
    name: "Carlos M.",
    role: "Cliente desde 2024"
  },
  {
    id: 2,
    text: "Esta semana se me marcaron los abdominales por primera vez en mi vida. Cuarenta y un años. Cuarenta y uno. Lloré un poco, no voy a mentir.",
    name: "Laura S.",
    role: "Cliente desde 2024",
  },
  {
    id: 3,
    text: "Bajé 6 kilos en 10 semanas. Pero el momento que no olvido es cuando mi mejor amigo me miró y me dijo 'tío, ¿qué te has hecho? Estás diferente'. Eso no tiene precio.",
    name: "Álvaro R.",
    role: "Cliente desde 2025",
  },
  {
    id: 4,
    text: "Perdí 5 kilos y por fin me compré ropa que me gusta de verdad, no ropa para taparme. Eso llevaba años sin hacerlo.",
    name: "Marta T.",
    role: "Cliente desde 2024",
  },
  {
    id: 5,
    text: "Me hicieron un cumplido en el gym esta semana. Una cosa pequeña, pero yo sé lo que hay detrás de eso. Meses de trabajo, de no rendirme, de confiar en el proceso.",
    name: "David P.",
    role: "Cliente desde 2025",
  },
  {
    id: 6,
    text: "Menos 7 kilos y ya se me nota en la cara, en la ropa, en cómo me muevo. Pero sobre todo en cómo hablo con la gente. Eso no me lo esperaba.",
    name: "Sofía N.",
    role: "Cliente desde 2025",
  },
  {
    id: 7,
    text: "Llevaba años intentándolo solo con videos de redes y no llegaba a ningún lado. En 12 semanas perdí 9 kilos y entendí por qué antes nunca funcionaba.",
    name: "Jorge L.",
    role: "Cliente desde 2024",
  },
  {
    id: 8,
    text: "Esta mañana fui a la playa y no pensé ni una vez en si alguien me miraba. Fui y ya está. Suena simple pero para mí es enorme.",
    name: "Cristina V.",
    role: "Cliente desde 2025",
  },
  {
    id: 9,
    text: "Menos 6 kilos y mi jefa me preguntó si estaba haciendo algo diferente. Le dije que sí, que por fin me estaba poniendo a mí primero.",
    name: "Andrés G.",
    role: "Cliente desde 2025",
  },
  {
    id: 10,
    text: "Se me empiezan a ver los abdominales. Tengo 43 años y trabajo 10 horas al día. Si yo pude, cualquiera puede.",
    name: "Patricia H.",
    role: "Cliente desde 2024",
  },
  {
    id: 11,
    text: "Perdí 4 kilos en un mes pero lo que más me impactó fue mirarme al espejo un martes por la mañana, sin ocasión especial, y pensar 'me gusta lo que veo'. Llevaba años sin sentir eso.",
    name: "Miguel R.",
    role: "Cliente desde 2025",
  },
  {
    id: 12,
    text: "Una chica del trabajo me dijo la semana pasada que estaba muy bien. Me fui al baño y me reí solo. Yo sé todo lo que hay detrás de ese comentario.",
    name: "Elena F.",
    role: "Cliente desde 2024",
  },
];

const ROW_1 = TESTIMONIALS.slice(0, 6);
const ROW_2 = TESTIMONIALS.slice(6, 12);

function TestimonialCard({ text, name, role }) {
  return (
    <div
      className="shrink-0 w-72 rounded-2xl p-6 flex flex-col gap-4 mx-2"
      style={{ background: "var(--color-secondary-mute)" }}
    >
      <BiSolidQuoteAltLeft style={{ color: "var(--color-accent)", fontSize: "2rem" }} />
      <p className="text-foreground text-sm leading-relaxed flex-1">{text}</p>
      <div className="flex items-center gap-3 mt-2">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{ background: "var(--color-accent)", color: "var(--color-accent-contrast)" }}
        >
          {name.charAt(0)}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-foreground">{name}</span>
        </div>
      </div>
    </div>
  );
}

// Desktop: pure CSS animation, no user interaction possible
function AutoScrollRow({ items, direction = "left" }) {
  const doubled = [...items, ...items];
  const animName = direction === "left" ? "tt-scroll-left" : "tt-scroll-right";

  return (
    <div className="overflow-hidden w-full" style={{ pointerEvents: "none" }}>
      <div
        className="flex"
        style={{
          width: "max-content",
          animation: `${animName} 25s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.id}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}

// Mobile: native scroll + CSS snap, first card centered
function DraggableRow({ items }) {
  // w-72 = 288px, mx-2 = 8px each side → card slot = 304px, half = 152px
  const spacer = <div style={{ flexShrink: 0, width: "calc(50% - 152px)" }} />;
  return (
    <div
      className="overflow-x-auto no-scrollbar"
      style={{
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="flex">
        {spacer}
        {items.map((item) => (
          <div key={item.id} style={{ scrollSnapAlign: "center", flexShrink: 0 }}>
            <TestimonialCard {...item} />
          </div>
        ))}
        {spacer}
      </div>
    </div>
  );
}

export default function TextTestimonials() {
  return (
    <>
      <style>{`
        @keyframes tt-scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes tt-scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
      <section className="w-full py-16 bg-background text-foreground mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center">
          <SectionHeader
            eyebrow="Resultados reales"
            title="Transformaciones Reales"
          />
        </div>

        {/* Desktop: dos filas con auto-scroll continuo, sin interacción */}
        <div className="hidden md:block">
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
              style={{ background: "linear-gradient(to right, var(--color-background) 0%, transparent 100%)" }} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
              style={{ background: "linear-gradient(to left, var(--color-background) 0%, transparent 100%)" }} />
            <div className="flex flex-col gap-6 py-2">
              <AutoScrollRow items={ROW_1} direction="left" />
              <AutoScrollRow items={ROW_2} direction="right" />
            </div>
          </div>
        </div>

        {/* Mobile: carousel deslizable manualmente */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10"
              style={{ background: "linear-gradient(to right, var(--color-background) 0%, transparent 100%)" }} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10"
              style={{ background: "linear-gradient(to left, var(--color-background) 0%, transparent 100%)" }} />
            <div className="py-2">
              <DraggableRow items={TESTIMONIALS} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


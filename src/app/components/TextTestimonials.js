"use client";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import SectionHeader from "./SectionHeader";

const TESTIMONIALS = [
  {
    id: 1,
    text: "En 10 semanas perdí 8 kg de grasa y me siento con más energía que nunca. El plan se adaptó a mi trabajo y mi familia.",
    name: "Carlos M.",
    role: "Cliente desde 2024",
  },
  {
    id: 2,
    text: "Nunca pensé que podría comer bien y disfrutarlo. La dieta flexible de Gueros cambió mi relación con la comida.",
    name: "Laura S.",
    role: "Cliente desde 2024",
  },
  {
    id: 3,
    text: "El seguimiento semanal marca la diferencia. Sabes que alguien está pendiente de ti y eso te mantiene enfocado.",
    name: "Álvaro R.",
    role: "Cliente desde 2025",
  },
  {
    id: 4,
    text: "Gané 6 kg de músculo en 3 meses. Las rutinas son exigentes pero siempre adaptadas a mi nivel y mis horarios.",
    name: "Marta T.",
    role: "Cliente desde 2024",
  },
  {
    id: 5,
    text: "La comunidad me dio el empujón que necesitaba. Ver los progresos de otros me motiva a seguir cada día.",
    name: "David P.",
    role: "Cliente desde 2025",
  },
  {
    id: 6,
    text: "Tenía una lesión de rodilla y aun así construyeron mi rutina sin problema. Cero dolor y muchísimos resultados.",
    name: "Sofía N.",
    role: "Cliente desde 2025",
  },
  {
    id: 7,
    text: "Estaba esceptico al principio, pero los resultados hablan solos. He transformado mi cuerpo y mi mentalidad.",
    name: "Jorge L.",
    role: "Cliente desde 2024",
  },
  {
    id: 8,
    text: "Bajé 12 kg en 4 meses sin pasar hambre. Lo que más valoro es que el plan ha sido 100% mío, no una plantilla.",
    name: "Cristina V.",
    role: "Cliente desde 2025",
  },
];

const ROW_1 = TESTIMONIALS.slice(0, 4);
const ROW_2 = TESTIMONIALS.slice(4, 8);

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
          <span className="text-xs" style={{ color: "var(--color-secondary)" }}>{role}</span>
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


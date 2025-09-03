import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa6";
import Plan from "./Plan";

const PERIODS = [
  { label: "Mensualmente", value: "mes", discount: 0 },
  { label: "Trimestralmente", value: "trimestre", discount: 5 },
  { label: "Semestralmente", value: "semestre", discount: 10 },
  { label: "Anualmente", value: "año", discount: 15 },
];

const PLANS = [
  {
    title: "Esencial",
    basePrice: 64,
    description: "Essential fit",
    features: [
      "Entrenamiento totalmente personalizado",
      "Guía nutricional",
      "1 revisión mensual",
      "1 consulta gratuita",
    ],
    image: "/images/fitMan-hero.png",
    highlight: false,
    badge: null,
    custom: false,
    links: {
      mensual: "https://buy.stripe.com/7sI9DveXN3rYaJycN3",
      trim: "https://buy.stripe.com/7sI9DvaHx0fM7xm9AA",
      seme: "https://buy.stripe.com/00gbLD8zpgeK7xm4gi",
      anu: "https://buy.stripe.com/7sI2b38zpfaGaJyfZ1"
    }
  },
  {
    title: "Pro",
    basePrice: 99,
    description: "Performance Pro",
    features: [
      "Entrenamiento totalmente personalizado",
      "Guía nutricional",
      "1 revisión mensual",
      "2 consultas gratuitas",
      "Acceso app 'GUEROS'",
      "Acceso grupo 'GUEROS'",
    ],
    image: "/images/fitMan-hero.png",
    highlight: true,
    badge: "Más vendido",
    custom: false,
    links: {
      mensual: "https://buy.stripe.com/bIY16Z6rh9QmcRGaEW",
      trim: "https://buy.stripe.com/fZe7vn2b1e6CaJybIM",
      seme: "https://buy.stripe.com/bIY6rj9Dt6EaeZOaER",
      anu: "https://buy.stripe.com/8wMaHzg1R9Qm2d25ky"
    }
  },
  {
    title: "VIP",
    basePrice: 199,
    description: "Elite mastery",
    features: [
      "Entrenamiento totalmente personalizado",
      "Nutricionista a tu disposición",
      "Contacto exclusivo todos los días del año",
      "Consultas ilimitadas",
      "Acceso app 'GUEROS'",
      "Acceso grupo privado con toda la comunidad VIP",
    ],
    image: "/images/fitMan-hero.png",
    highlight: false,
    badge: null,
    custom: false,
    links: {
      mensual: "https://buy.stripe.com/bIYdTL7vl6Ea7xm8wP",
      trim: "http://buy.stripe.com/aEUeXPbLB6Ea4la9AK",
      seme: "https://buy.stripe.com/6oE3f7aHx3rY18Y00b",
      anu: "https://buy.stripe.com/5kAg1TeXNe6CaJyfZa"
    }
  },
];

function getPrices(base, discount, custom) {
  if (custom) return { original: 'Precio personalizado', final: 'Precio personalizado' };
  const original = Math.round(base);
  const final = discount ? Math.round(base * (1 - discount / 100)) : original;
  return { original: `${original}€`, final: `${final}€` };
}

export default function PlanSection() {
  const [selected, setSelected] = useState(3); // Anualmente por defecto

  // Centrar el plan del medio al montar (solo móvil)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    setTimeout(() => {
      if (window._plansScroll && window._planRefs && window._planRefs[1]) {
        const parent = window._plansScroll;
        const child = window._planRefs[1];
        const parentRect = parent.getBoundingClientRect();
        const childRect = child.getBoundingClientRect();
        const scrollLeft = parent.scrollLeft + (childRect.left - parentRect.left) - (parentRect.width/2 - childRect.width/2);
        parent.scrollTo({ left: scrollLeft, behavior: 'auto' });
      }
    }, 1);
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <section id="planes-section" className="w-full flex flex-col items-center relative bg-background text-foreground mb-36 md:mb-28">
      <h1 className="text-4xl lg:text-6xl font-semibold leading-tight font-montserrat max-w-xl text-center">Nuestros planes</h1>
      <p className="w-10/12 md:w-full mb-12 text-base lg:text-lg text-center max-w-md">Escoge el plan que mejor se adapte a ti para conseguir un cambio increíble</p>

      {/* Switch de periodos: custom dropdown solo mobile, toggle desktop */}
      <div className="w-full flex flex-col items-center mb-6">
        {/* Mobile: custom dropdown */}
        <div className="w-full lg:hidden flex flex-col items-center gap-2">
          <label className="text-base  mb-2">Selecciona tu frecuencia de pago:</label>
          <div className="relative w-full max-w-xs">
            <button
              type="button"
              className="w-full rounded-full bg-primary-foreground text-primary px-6 py-3 font-semibold text-base shadow-inner border border-primary-foreground flex items-center justify-between hover:bg-primary-foreground/80 hover:scale-110 hover:shadow-xl transition-all"
              onClick={() => setDropdownOpen(o => !o)}
            >
              <span className="flex items-center gap-2">
                {PERIODS[selected].label}
              </span>
              <span className="flex items-center gap-2">
                {PERIODS[selected].discount > 0 && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/80 text-white animate-fade-in">
                    -{PERIODS[selected].discount}%
                  </span>
                )}
                <span className={`ml-1 flex flex-col transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                  <FaChevronDown size={18} />
                </span>
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-primary-foreground rounded-2xl shadow-lg z-20 flex flex-col gap-2 p-2 border border-primary-foreground">
                {PERIODS.map((p, i) => (
                  <div
                    key={p.value}
                    className={`flex items-center justify-between px-6 py-3 rounded-full font-semibold text-base cursor-pointer transition-all ${selected === i ? 'bg-foreground text-primary-foreground' : 'bg-transparent text-primary hover:bg-primary-foreground/40 hover:scale-110 hover:shadow-xl'}`}
                    onClick={() => { setSelected(i); setDropdownOpen(false); }}
                  >
                    <span className="flex items-center gap-2">
                      {p.label}
                    </span>
                    {p.discount > 0 && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/80 text-white animate-fade-in">
                        -{p.discount}%
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Desktop: toggle */}
        <div className="hidden lg:flex relative items-center justify-center w-fit mx-auto bg-primary-foreground rounded-full p-1 shadow-inner">
          <div className="flex flex-row relative z-10 p-2 gap-0">
            {PERIODS.map((p, i) => (
              <button
                key={p.value}
                className={`relative mx-auto flex items-center text-center gap-2 px-6 py-2 font-semibold text-base rounded-full transition-all duration-300 focus:outline-none select-none
                  ${selected === i ? 'bg-foreground text-primary-foreground' : 'bg-transparent text-primary hover:scale-110 hover:shadow-xl'}`}
                style={{ zIndex: 2 }}
                onClick={() => setSelected(i)}
              >
                {p.label}
                {p.discount > 0 && (
                  <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-bold bg-accent/60 text-primary-foreground animate-fade-in">
                    -{p.discount}%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Planes mobile */}
      <div
        className="w-full flex lg:hidden overflow-x-auto no-scrollbar py-8"
        style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
        ref={el => (window._plansScroll = el)}
      >
        <div className="min-w-[10vw]" />
        {PLANS.map((plan, idx) => {
          const prices = getPrices(plan.basePrice, PERIODS[selected].discount, plan.custom);
          let ctaHref = "#";
          if (!plan.custom && plan.links) {
            if (selected === 0) ctaHref = plan.links.mensual;
            else if (selected === 1) ctaHref = plan.links.trim;
            else if (selected === 2) ctaHref = plan.links.seme;
            else if (selected === 3) ctaHref = plan.links.anu;
          }
          return (
            <div
              key={plan.title}
              className="w-[80vw] max-w-[80vw] flex-shrink-0 px-2"
              style={{ scrollSnapAlign: 'center' }}
              ref={el => {
                if (!window._planRefs) window._planRefs = [];
                window._planRefs[idx] = el;
              }}
              onClick={() => {
                if (window._plansScroll && window._planRefs && window._planRefs[idx]) {
                  const parent = window._plansScroll;
                  const child = window._planRefs[idx];
                  const parentRect = parent.getBoundingClientRect();
                  const childRect = child.getBoundingClientRect();
                  const scrollLeft = parent.scrollLeft + (childRect.left - parentRect.left) - (parentRect.width/2 - childRect.width/2);
                  parent.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                }
              }}
            >
              <Plan
                title={plan.title}
                price={prices.final}
                originalPrice={prices.original}
                description={plan.description}
                features={plan.features}
                image={plan.image}
                ctaLabel={plan.custom ? 'Contactar' : 'Elegir este plan'}
                ctaHref={ctaHref}
                highlight={plan.highlight}
                badge={plan.badge}
                custom={plan.custom}
                paymentText={
                  plan.custom
                    ? ''
                    : selected === 0
                      ? 'facturado mensualmente'
                      : selected === 1
                        ? 'facturado trimestralmente'
                        : selected === 2
                          ? 'facturado semestralmente'
                          : 'facturado anualmente'
                }
              />
            </div>
          );
        })}
        <div className="min-w-[10vw]" />
        <style>{`.no-scrollbar::-webkit-scrollbar{display:none;} .no-scrollbar{scrollbar-width:none;}`}</style>
      </div>

      {/* Flechas para móvil */}
      <div className="flex lg:hidden w-full justify-center items-center gap-8 mt-2">
        <button
          aria-label="Anterior"
          className="p-3 rounded-full bg-primary-foreground text-primary shadow hover:bg-primary hover:text-background hover:scale-110 hover:shadow-xl transition-all disabled:opacity-40"
          disabled={false}
          onClick={() => {
            if (window._plansScroll && window._planRefs) {
              const parent = window._plansScroll;
              const parentRect = parent.getBoundingClientRect();
              let closestIdx = 0;
              let minDist = Infinity;
              window._planRefs.forEach((el, idx) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const dist = Math.abs(rect.left + rect.width/2 - (parentRect.left + parentRect.width/2));
                if (dist < minDist) {
                  minDist = dist;
                  closestIdx = idx;
                }
              });
              const prevIdx = Math.max(closestIdx - 1, 0);
              const child = window._planRefs[prevIdx];
              if (child) {
                const childRect = child.getBoundingClientRect();
                const scrollLeft = parent.scrollLeft + (childRect.left - parentRect.left) - (parentRect.width/2 - childRect.width/2);
                parent.scrollTo({ left: scrollLeft, behavior: 'smooth' });
              }
            }
          }}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          aria-label="Siguiente"
          className="p-3 rounded-full bg-primary-foreground text-primary shadow hover:bg-primary hover:text-background hover:scale-110 hover:shadow-xl transition-all disabled:opacity-40"
          disabled={false}
          onClick={() => {
            if (window._plansScroll && window._planRefs) {
              const parent = window._plansScroll;
              const parentRect = parent.getBoundingClientRect();
              let closestIdx = 0;
              let minDist = Infinity;
              window._planRefs.forEach((el, idx) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const dist = Math.abs(rect.left + rect.width/2 - (parentRect.left + parentRect.width/2));
                if (dist < minDist) {
                  minDist = dist;
                  closestIdx = idx;
                }
              });
              const nextIdx = Math.min(closestIdx + 1, window._planRefs.length - 1);
              const child = window._planRefs[nextIdx];
              if (child) {
                const childRect = child.getBoundingClientRect();
                const scrollLeft = parent.scrollLeft + (childRect.left - parentRect.left) - (parentRect.width/2 - childRect.width/2);
                parent.scrollTo({ left: scrollLeft, behavior: 'smooth' });
              }
            }
          }}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Planes desktop */}
      <div className="hidden lg:flex flex-row gap-8 items-stretch justify-center w-full max-w-6xl">
        {PLANS.map((plan, idx) => {
          const prices = getPrices(plan.basePrice, PERIODS[selected].discount, plan.custom);
          let ctaHref = "#";
          if (!plan.custom && plan.links) {
            if (selected === 0) ctaHref = plan.links.mensual;
            else if (selected === 1) ctaHref = plan.links.trim;
            else if (selected === 2) ctaHref = plan.links.seme;
            else if (selected === 3) ctaHref = plan.links.anu;
          }
          return (
            <Plan
              key={plan.title}
              title={plan.title}
              price={prices.final}
              originalPrice={prices.original}
              description={plan.description}
              features={plan.features}
              image={plan.image}
              ctaLabel={plan.custom ? 'Contactar' : 'Elegir este plan'}
              ctaHref={ctaHref}
              highlight={plan.highlight}
              badge={plan.badge}
              custom={plan.custom}
              paymentText={
                plan.custom
                  ? ''
                  : selected === 0
                    ? 'facturado mensualmente'
                    : selected === 1
                      ? 'facturado trimestralmente'
                      : selected === 2
                        ? 'facturado semestralmente'
                        : 'facturado anualmente'
              }
            />
          );
        })}
      </div>
      {/* CTA final: contacto */}
      <div className="mt-16 w-full flex flex-col items-center">
        <p className="text-center text-base mb-6 w-11/12 lg:w-full max-w-xl">
          ¿Tienes ganas de un cambio pero no tienes claro si podemos ayudarte o no sabes qué plan se adapta más a ti? 
        </p>
        <p className="text-left text-base mb-2 w-10/12 lg:w-full max-w-sm">
          Deja tu correo y te contactamos
        </p>
        <EmailContactForm />
      </div>
    </section>
  );
}

import { useRef } from "react";
function EmailContactForm() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef();

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleChange(e) {
    setEmail(e.target.value);
    setTouched(true);
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Introduce un correo válido");
      inputRef.current?.focus();
      return;
    }
    setError("");
    setSubmitted(true);
    // Aquí podrías enviar el email a tu backend o servicio
  }

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-row items-center gap-2 rounded-full bg-primary-foreground p-2 w-11/12 lg:w-full max-w-xl mx-auto">
        <input
          ref={inputRef}
          type="email"
          className={`flex-1 px-4 py-2 rounded-full border border-primary-foreground text-primary focus:outline-none focus:ring-2 focus:ring-accent transition text-ellipsis ${error ? 'border-red-500' : ''}`}
          placeholder="Tu correo electrónico"
          value={email}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          required
          aria-label="Correo electrónico"
          style={{ minWidth: 0 }}
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent/80 hover:scale-110 hover:shadow-xl transition-all whitespace-nowrap"
        >
          Enviar
        </button>
      </div>
      {/*{error && (
        <span className="ml-2 text-sm text-red-500">{error}</span>
      )}
      {submitted && !error && (
        <span className="ml-2 text-sm text-green-600">¡Gracias! Te contactaremos pronto.</span>
      )}*/}
    </form>
  );
}


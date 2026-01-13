"use client"

import { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Alex O.",
    beforeImage: "/images/testimonials_alex_before.jpeg",
    afterImage: "/images/testimonials_alex_after.jpeg",
    text: "He perdido 5 kg de grasa y he ganado músculo en tan solo 8 semanas."
  },
  {
    id: 2,
    name: "Anas",
    beforeImage: "/images/testimonials_anas_before.jpeg",
    afterImage: "/images/testimonials_anas_after.jpeg",
    text: "Siempre me había costado mantener el peso, con GUEROS he conseguido mantener e incluso ganar peso, ganando mucho músculo en el proceso."
  },
  {
    id: 3,
    name: "Dani G.",
    beforeImage: "/images/testimonials_dani_before.jpeg",
    afterImage: "/images/testimonials_dani_after.jpeg",
    text: "Gracias a GUEROS estoy construyendo el cuerpo que siempre quise."
  }
];

export default function TestimonialsSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;
    // Centrar el primer testimonio en mobile
    setTimeout(() => {
      if (window._testimonialsScroll && window._testimonialRefs && window._testimonialRefs[0]) {
        const parent = window._testimonialsScroll;
        const child = window._testimonialRefs[0];
        const parentRect = parent.getBoundingClientRect();
        const childRect = child.getBoundingClientRect();
        const scrollLeft = parent.scrollLeft + (childRect.left - parentRect.left) - (parentRect.width/2 - childRect.width/2);
        parent.scrollTo({ left: scrollLeft, behavior: 'auto' });
      }
    }, 1);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-background text-foreground overflow-hidden mb-36 md:mb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 items-center">
        <h2 className="text-4xl xl:text-6xl font-semibold leading-tight font-montserrat max-w-3xl text-center mx-auto mb-4">
          Transformaciones Reales
        </h2>
        <p className="text-md text-center max-w-2xl mx-auto">
          Estos son algunos de los cambios físicos que han conseguido nuestros clientes con dedicación y acompañamiento personalizado.
        </p>
      </div>

      {/* Mobile: Carousel manual con flechas */}
      <div className="lg:hidden">
        <div
          className="w-full flex overflow-x-auto no-scrollbar py-8"
          style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
          ref={el => (window._testimonialsScroll = el)}
        >
          <div className="min-w-[5vw]" />
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="max-w-3/4 flex-shrink-0 px-2"
              style={{ scrollSnapAlign: 'center' }}
              ref={el => {
                if (!window._testimonialRefs) window._testimonialRefs = [];
                window._testimonialRefs[idx] = el;
              }}
              onClick={() => {
                if (window._testimonialsScroll && window._testimonialRefs && window._testimonialRefs[idx]) {
                  const parent = window._testimonialsScroll;
                  const child = window._testimonialRefs[idx];
                  const parentRect = parent.getBoundingClientRect();
                  const childRect = child.getBoundingClientRect();
                  const scrollLeft = parent.scrollLeft + (childRect.left - parentRect.left) - (parentRect.width/2 - childRect.width/2);
                  parent.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                }
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
          <div className="min-w-[5vw]" />
        </div>

        {/* Flechas para móvil */}
        <div className="flex w-full justify-center items-center gap-8 mt-2">
          <button
            aria-label="Anterior"
            className="p-3 rounded-full bg-primary-foreground text-primary shadow hover:bg-primary hover:text-background hover:scale-110 hover:shadow-xl transition-all"
            onClick={() => {
              if (window._testimonialsScroll && window._testimonialRefs) {
                const parent = window._testimonialsScroll;
                const parentRect = parent.getBoundingClientRect();
                let closestIdx = 0;
                let minDist = Infinity;
                window._testimonialRefs.forEach((el, idx) => {
                  if (!el) return;
                  const rect = el.getBoundingClientRect();
                  const dist = Math.abs(rect.left + rect.width/2 - (parentRect.left + parentRect.width/2));
                  if (dist < minDist) {
                    minDist = dist;
                    closestIdx = idx;
                  }
                });
                const prevIdx = Math.max(closestIdx - 1, 0);
                const child = window._testimonialRefs[prevIdx];
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
            className="p-3 rounded-full bg-primary-foreground text-primary shadow hover:bg-primary hover:text-background hover:shadow-xl transition-all"
            onClick={() => {
              if (window._testimonialsScroll && window._testimonialRefs) {
                const parent = window._testimonialsScroll;
                const parentRect = parent.getBoundingClientRect();
                let closestIdx = 0;
                let minDist = Infinity;
                window._testimonialRefs.forEach((el, idx) => {
                  if (!el) return;
                  const rect = el.getBoundingClientRect();
                  const dist = Math.abs(rect.left + rect.width/2 - (parentRect.left + parentRect.width/2));
                  if (dist < minDist) {
                    minDist = dist;
                    closestIdx = idx;
                  }
                });
                const nextIdx = Math.min(closestIdx + 1, window._testimonialRefs.length - 1);
                const child = window._testimonialRefs[nextIdx];
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

        <style>{`.no-scrollbar::-webkit-scrollbar{display:none;} .no-scrollbar{scrollbar-width:none;}`}</style>
      </div>

      {/* Desktop: Carousel automático */}
      <div className="hidden lg:block relative">
        {/* Gradientes en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Carousel */}
        <div className="flex animate-scroll-left hover:pause-animation">
          {/* Renderizamos los testimonios dos veces para crear el efecto de loop infinito */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

"use client"

import { useEffect, useState } from 'react';

export default function TestimonialCard({ testimonial }) {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter(prev => !prev);
    }, 3000); // Alterna cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-shrink-0 w-full md:w-60 lg:w-80 mx-4 bg-primary-foreground rounded-2xl shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Columna izquierda - Imagen */}
        <div className="relative h-full min-h-[300px] overflow-hidden bg-secondary-mute">
          <img
            src={testimonial.beforeImage}
            alt={`${testimonial.name} - Antes`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              showAfter ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={testimonial.afterImage}
            alt={`${testimonial.name} - Después`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              showAfter ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Indicador de antes/después */}
          <div className="absolute bottom-4 left-4 bg-background/90 text-accent px-3 py-1 rounded-full text-sm font-medium">
            {showAfter ? 'Después' : 'Antes'}
          </div>
        </div>

        {/* Columna derecha - Texto */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-primary mb-4 h-8">{testimonial.name}</h3>
          <p className="text-secondary-foreground leading-relaxed h-44">{testimonial.text}</p>
        </div>
      </div>
    </div>
  );
}

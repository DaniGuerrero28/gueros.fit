import { useEffect, useState } from "react";

export default function Plan({ title, price, originalPrice, description, features, image, ctaLabel, ctaHref, highlight = false, badge = null, custom = false, paymentText = '' }) {
  return (
    <>
      <div
        className={`relative rounded-3xl p-8 flex flex-col items-stretch w-full max-w-sm transition-all duration-200 gap-4
          ${highlight ? 'bg-foreground text-primary-foreground shadow-2xl scale-105 z-10 max-w-md' : (title === 'VIP' ? 'shadow' : ' bg-primary-foreground text-primary  shadow' )}
          ${custom ? 'bg-white text-black' : ''}
        `}
        style={{ 
          minHeight: 520, 
          position: 'relative', 
          overflow: 'hidden',
          ...(title === 'VIP' && { background: 'var(--color-accent-gradient)' })
        }}
      >
      {/* Efecto brillo dorado solo para VIP */}
      {title === 'VIP' && (
        <span className="absolute top-0 left-0 h-full w-full pointer-events-none z-10">
          <span className="block h-full w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 blur-sm animate-shine-bounce" />
        </span>
      )}
      {/* Badge tipo punto de libro en la esquina superior derecha */}
      {badge && (
        <div 
          className={`absolute right-8 top-8 px-4 py-2 rounded-full text-xs font-semibold ${highlight ? 'text-accent-contrast' : 'text-foreground'}`}
          style={highlight ? { background: 'var(--color-accent-gradient)' } : { background: 'var(--color-accent-gradient)', opacity: 0.5 }}
        >
          {badge}
        </div>
      )}
      {/* Título */}
      <h2 className={`text-2xl font-bold font-montserrat ${title === 'VIP' ? 'text-primary' : highlight ? 'text-primary-foreground' : 'text-primary' }`}>{title}</h2>
      {/* Descripción */}
      <p className={`text-base ${title === 'VIP' ? 'text-secondary' : highlight ?  'text-secondary' : 'text-secondary-foreground'}`}>{description}</p>
      {/* Features */}
      <ul className={`text-sm space-y-2 w-full h-60 md:h-64 lg:h-52 xl:h-44 max-w-xs mx-auto ${title === 'VIP' ? 'text-primary' : highlight ? 'text-primary-foreground' :  'text-primary'}`}>
        {features && features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className={`font-bold ${highlight ? 'text-accent' : 'text-accent'}`}>✔</span> <span>{f}</span>
          </li>
        ))}
      </ul>
      {/* Precio */}
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-start gap-2">
          {originalPrice && originalPrice !== price && (
            <div className={`text-lg mb-2 line-through ${highlight ? 'text-secondary-foreground' : 'text-secondary' }`}>{originalPrice}</div>
          )}
          <div className={`text-4xl mb-2 ${highlight ? 'text-primary-foreground' : 'text-primary'}`}>{price}</div>
          <div className={`flex text-sm w-32 ${highlight ?  'text-secondary-foreground' : 'text-secondary'}`}> / al mes</div>
        </div>
        {paymentText && (
            <div className={`flex text-sm flex-grow w-full text-right ${highlight ?  'text-secondary-foreground': 'text-secondary'}`}> {paymentText} </div>
        )}
      </div>
      {/* CTA */}
      {ctaLabel && ctaHref && (
        <div className={`w-full flex ${highlight ? 'text-foreground' :  'text-background' }`}>
        <a
          href={ctaHref}
          className={`mt-4 px-0 py-3 rounded-full font-semibold  w-full text-center text-lg
            ${highlight ? 'bg-primary-foreground hover:bg-primary-foreground/80' : 'bg-primary hover:bg-primary/80'}
            hover:scale-110 hover:shadow-xl transition-all`}
            style={{ minHeight: 48 }}
            >
          {ctaLabel}
        </a>
            </div>
      )}
      {/* Nota inferior */}
      {custom && (
        <div className="mt-2 text-xs text-center text-gray-500">Individual</div>
      )}
    </div>
    </>
  );
}

import { useEffect, useState } from "react";

export default function Plan({ 
  title, 
  price, 
  originalPrice, 
  description, 
  features, 
  image, 
  git,
  ctaLabel, 
  ctaHref, 
  badge = null, 
  custom = false, 
  paymentText = '',
  styles = {}
}) {
  const {
    containerClasses = 'bg-primary-foreground text-primary shadow',
    containerStyle = {},
    showShineEffect = false,
    badgeClasses = 'text-foreground',
    badgeStyle = {},
    titleClasses = 'text-primary',
    descriptionClasses = 'text-secondary-foreground',
    featuresClasses = 'text-primary',
    priceClasses = 'text-primary',
    originalPriceClasses = 'text-secondary',
    paymentTextClasses = 'text-secondary',
    ctaContainerClasses = 'text-background',
    ctaClasses = 'bg-primary hover:bg-primary/80'
  } = styles;

  return (
    <>
      <div
        className={`relative rounded-3xl p-8 flex flex-col items-stretch w-full max-w-sm transition-all duration-200 gap-4 ${containerClasses} ${custom ? 'bg-white text-black' : ''}`}
        style={{ 
          minHeight: 520, 
          position: 'relative', 
          overflow: 'hidden',
          ...containerStyle
        }}
      >
      {/* Efecto brillo */}
      {showShineEffect && (
        <span className="absolute top-0 left-0 h-full w-full pointer-events-none z-10">
          <span className="block h-full w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 blur-sm animate-shine-bounce" />
        </span>
      )}
      {/* Badge tipo punto de libro en la esquina superior derecha */}
      {badge && (
        <div 
          className={`absolute right-8 top-8 px-4 py-2 rounded-full text-xs font-semibold ${badgeClasses}`}
          style={badgeStyle}
        >
          {badge}
        </div>
      )}
      {/* Título */}
      <h2 className={`text-2xl font-bold font-montserrat ${titleClasses}`}>{title}</h2>
      {/* Descripción */}
      <p className={`text-base ${descriptionClasses}`}>{description}</p>
      {/* Features */}
      <ul className={`text-sm space-y-2 w-full h-60 md:h-64 lg:h-52 xl:h-44 max-w-xs mx-auto ${featuresClasses}`}>
        {features && features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="font-bold text-accent">✔</span> <span>{f}</span>
          </li>
        ))}
      </ul>
      {/* Precio */}
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-start gap-2">
          {originalPrice && originalPrice !== price && (
            <div className={`text-lg mb-2 line-through ${originalPriceClasses}`}>{originalPrice}</div>
          )}
          <div className={`text-4xl mb-2 ${priceClasses}`}>{price}</div>
          <div className={`flex text-sm w-32 ${paymentTextClasses}`}> / al mes</div>
        </div>
        {paymentText && (
            <div className={`flex text-sm flex-grow w-full text-right ${paymentTextClasses}`}> {paymentText} </div>
        )}
      </div>
      {/* CTA */}
      {ctaLabel && ctaHref && (
        <div className={`w-full flex ${ctaContainerClasses}`}>
        <a
          href={ctaHref}
          className={`mt-4 px-0 py-3 rounded-full font-semibold w-full text-center text-lg ${ctaClasses} hover:scale-110 hover:shadow-xl transition-all`}
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

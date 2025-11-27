import { useEffect, useState } from "react";

function BlackFridayPopup() {
  const [show, setShow] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showClose, setShowClose] = useState(true);
  // Eliminar el temporizador de autocierre
  useEffect(() => {
    return () => {};
  }, [show]);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);
  if (!show) return null;
  // Handler para cerrar al pulsar fuera del modal
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) setShow(false);
  }
  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-2 sm:px-0" onClick={handleOverlayClick}>
        <div className="relative bg-green-900 text-white px-4 sm:px-10 py-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 animate-fade-in w-full max-w-lg mx-auto overflow-hidden text-center">
          {/* Toques navideños en las esquinas */}
          <span className="absolute top-2 left-4 text-3xl select-none">🎄</span>
          <span className="absolute bottom-2 left-4 text-3xl select-none">❄️</span>
          <span className="absolute bottom-2 right-4 text-3xl select-none">🎅</span>
          <span className="absolute top-0 left-0 h-full w-full pointer-events-none z-10">
            <span className="block h-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 blur-sm animate-shine-bounce" />
          </span>
          <div className="flex flex-col items-center gap-2 z-20 w-full text-center">
            <span className="text-base font-extrabold uppercase tracking-widest bg-green-700 text-white px-4 py-1 rounded-full mb-2 shadow font-sans mx-auto">OFERTA EXCLUSIVA</span>
            <span className="text-4xl font-extrabold mb-2 font-sans mx-auto">¡DESCUENTO BLACKFRIDAY!</span>
            <span className="text-lg font-sans mx-auto">Usa el código <span className="font-mono select-all text-2xl tracking-widest text-yellow-300 font-bold">BLACKFRIDAY</span> en cualquier plan</span>
          </div>
          <button
            className="mt-4 px-8 py-3 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition shadow-lg z-20 font-sans mx-auto"
            onClick={() => {
              navigator.clipboard.writeText("BLACKFRIDAY");
              setCopied(true);
              setShow(false);
            }}
          >
            Copiar código
          </button>
          {showClose && (
            <button
              className="absolute top-4 right-6 text-white hover:text-green-300 text-2xl font-bold z-20"
              onClick={() => setShow(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
          )}
        </div>
      </div>
      {copied && (
        <div className="fixed bottom-8 right-8 z-[9999] bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in text-base font-semibold font-sans">
          Código copiado
        </div>
      )}
    </>
  );
}

export default function Plan({ title, price, originalPrice, description, features, image, ctaLabel, ctaHref, highlight = false, badge = null, custom = false, paymentText = '' }) {
  return (
    <>
      {title === 'Esencial' && <BlackFridayPopup />}
      <div
        className={`relative rounded-3xl p-8 flex flex-col items-stretch w-full max-w-sm transition-all duration-200 gap-4
          ${highlight ? 'bg-foreground text-primary-foreground shadow-2xl scale-105 z-10 max-w-md' : (title === 'VIP' ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 shadow' : ' bg-primary-foreground text-primary  shadow' )}
          ${custom ? 'bg-white text-black' : ''}
        `}
        style={{ minHeight: 520, position: 'relative', overflow: 'hidden' }}
      >
      {/* Efecto brillo dorado solo para VIP */}
      {title === 'VIP' && (
        <span className="absolute top-0 left-0 h-full w-full pointer-events-none z-10">
          <span className="block h-full w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 blur-sm animate-shine-bounce" />
        </span>
      )}
      {/* Badge tipo punto de libro en la esquina superior derecha */}
      {badge && (
        <div className={`absolute right-8 top-8 px-4 py-2 rounded-full text-xs font-semibold ${highlight ? 'text-white bg-accent' : 'text-foreground bg-accent/50'}`}>
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

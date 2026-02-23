import { useEffect, useState } from "react";

// Configuración de la promoción
const DISCOUNT_PERCENTAGE = 40;
const PROMO_CODE = "2026";
const PROMO_END_DATE = new Date("2026-02-24T23:59:59"); // Fecha de finalización

export default function PromoPopup() {
  const [show, setShow] = useState(new Date() < PROMO_END_DATE);
  const [copied, setCopied] = useState(false);
  const [showClose, setShowClose] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);
  
  // Calcular tiempo restante
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = PROMO_END_DATE - now;
      
      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      // Solo mostrar cuenta atrás si quedan menos de 7 días
      if (days < 14) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft(null);
      }
    };
    
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);
  
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) setShow(false);
  }
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setShow(false);
  };
  
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-2 sm:px-0" onClick={handleOverlayClick}>
          <div className="relative bg-background text-primary px-4 sm:px-10 py-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 animate-fade-in w-full max-w-lg mx-auto overflow-hidden text-center">
            {/* Toques navideños en las esquinas */}
            <span className="absolute top-0 left-0 h-full w-full pointer-events-none z-10">
              <span className="block h-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 blur-sm animate-shine-bounce" />
            </span>
            <div className="flex flex-col items-center gap-2 z-20 w-full text-center">
              <span className="text-base font-extrabold uppercase tracking-widest bg-accent text-white px-4 py-1 rounded-full mb-2 shadow font-sans mx-auto">OFERTA EXCLUSIVA</span>
              <span className="text-4xl font-extrabold mb-2 font-sans mx-auto">¡DESCUENTO {DISCOUNT_PERCENTAGE}%!</span>
              <span className="text-lg font-sans mx-auto">
                Usa el código <span className="font-mono select-all text-2xl tracking-widest text-accent font-bold">{PROMO_CODE}</span> para obtener un descuento del {DISCOUNT_PERCENTAGE}% en cualquier plan
              </span>
              
              {/* Cuenta atrás (solo si quedan menos de 7 días) */}
              {timeLeft && (
                <div className="mt-4 flex flex-col items-center gap-2">
                  <span className="text-sm text-secondary-foreground"> La oferta termina en:</span>
                  <div className="flex gap-2 text-center">
                    {timeLeft.days > 0 && (
                      <div className="flex flex-col items-center bg-primary-foreground rounded-lg px-3 py-2 min-w-[60px]">
                        <span className="text-2xl font-bold text-accent">{timeLeft.days}</span>
                        <span className="text-xs text-secondary-foreground">{timeLeft.days === 1 ? 'día' : 'días'}</span>
                      </div>
                    )}
                    <div className="flex flex-col items-center bg-primary-foreground rounded-lg px-3 py-2 min-w-[60px]">
                      <span className="text-2xl font-bold text-accent">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-xs text-secondary-foreground">horas</span>
                    </div>
                    <div className="flex flex-col items-center bg-primary-foreground rounded-lg px-3 py-2 min-w-[60px]">
                      <span className="text-2xl font-bold text-accent">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-xs text-secondary-foreground">min</span>
                    </div>
                    <div className="flex flex-col items-center bg-primary-foreground rounded-lg px-3 py-2 min-w-[60px]">
                      <span className="text-2xl font-bold text-accent">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-xs text-secondary-foreground">seg</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              className="mt-4 px-8 py-3 text-accent-contrast rounded-full font-bold text-lg transition shadow-lg z-20 font-sans mx-auto hover:scale-110 hover:shadow-xl"
              style={{ background: 'var(--color-accent-gradient)' }}
              onClick={handleCopyCode}
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
      )}
      {copied && (
        <div className="fixed bottom-8 right-8 z-[9999] bg-background text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in text-base font-semibold font-sans">
          Código copiado al portapapeles
        </div>
      )}
    </>
  );
}

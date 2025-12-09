import { useEffect, useState } from "react";

export default function BlackFridayPopup() {
  const [show, setShow] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showClose, setShowClose] = useState(true);
  
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);
  
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) setShow(false);
  }
  
  return (
    <>
      {show && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-2 sm:px-0" onClick={handleOverlayClick}>
          <div className="relative bg-background text-primary px-4 sm:px-10 py-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 animate-fade-in w-full max-w-lg mx-auto overflow-hidden text-center">
            {/* Toques navideños en las esquinas */}
            <span className="absolute top-2 left-4 text-3xl select-none">🎄</span>
            <span className="absolute bottom-2 left-4 text-3xl select-none">❄️</span>
            <span className="absolute bottom-2 right-4 text-3xl select-none">🎅</span>
            <span className="absolute top-0 left-0 h-full w-full pointer-events-none z-10">
              <span className="block h-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 blur-sm animate-shine-bounce" />
            </span>
            <div className="flex flex-col items-center gap-2 z-20 w-full text-center">
              <span className="text-base font-extrabold uppercase tracking-widest bg-green-800 text-white px-4 py-1 rounded-full mb-2 shadow font-sans mx-auto">OFERTA EXCLUSIVA</span>
              <span className="text-4xl font-extrabold mb-2 font-sans mx-auto">¡DESCUENTO 40%!</span>
              <span className="text-lg font-sans mx-auto">Usa el código <span className="font-mono select-all text-2xl tracking-widest text-accent font-bold">NAVIDAD</span> para obtener un descuento del 40% en cualquier plan</span>
            </div>
            <button
              className="mt-4 px-8 py-3 bg-accent text-white rounded-full font-bold text-lg hover:bg-green-700 transition shadow-lg z-20 font-sans mx-auto"
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
      )}
      {copied && (
        <div className="fixed bottom-8 right-8 z-[9999] bg-background text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in text-base font-semibold font-sans">
          Código copiado al portapapeles
        </div>
      )}
    </>
  );
}

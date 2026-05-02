"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function AppPromo() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "waitlist_app" }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="app-section" className="flex flex-1 flex-col items-center justify-center px-4 py-12">
      <SectionHeader
        eyebrow="La app"
        title="Nuestra app está en camino"
      />

        <p className="text-primary text-center mt-4 max-w-2xl">
          Lleva tu entrenamiento y nutrición al siguiente nivel con la app de GUEROS. Accede a rutinas personalizadas, seguimiento de progreso, comunidad exclusiva y mucho más, TODO desde tu móvil. 
        </p>
        <p className="text-primary text-center mt-4 max-w-2xl">
          Estamos trabajando duro para lanzarla pronto. ¡Únete a la lista de espera y sé de los primeros en acceder! Los primeros usuarios disfrutarán de los primeros meses <strong>completamente gratis</strong>.
        </p>

      {/* <div className="flex flex-col sm:flex-row gap-8 mt-6">
        <a
          href="https://www.apple.com/app-store/"
          className="inline-flex items-center gap-2 px-5 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 hover:scale-110 hover:shadow-xl transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaApple className="text-background" size="42"/>
          <span className="flex flex-col leading-tight text-left">
            <span className="text-xs text-primary-foreground">Consíguelo en el</span>
            <span className="text-lg font-semibold text-primary-foreground">App Store</span>
          </span>
        </a>

        <a
          href="https://play.google.com/store"
          className="inline-flex items-center gap-2 px-5 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 hover:scale-110 hover:shadow-xl transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/store_google_play.webp"
            alt="Logo de Google Play"
            width={42}
            height={42}
          />
          <span className="flex flex-col leading-tight text-left">
            <span className="text-xs uppercase text-primary-foreground">Disponible en</span>
            <span className="text-lg font-semibold text-primary-foreground">Google Play</span>
          </span>
        </a>
      </div> */}

      {/* En desarrollo */}
      <div className="mt-4 mb-2 flex flex-col items-center gap-1 text-center">
        <p className="text-primary text-sm max-w-md mt-2">
                  </p>
      </div>

      {/* Waitlist form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
        <input
          type="email"
          required
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          className="flex-1 px-4 py-3 rounded-full border border-primary/30 bg-background text-foreground placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 rounded-full font-semibold text-background transition-all hover:scale-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: "var(--color-accent-gradient)" }}
        >
          {status === "loading" ? "Enviando..." : status === "success" ? "¡Apuntado!" : "Apúntame"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-sm text-green-500 font-medium">
          ¡Genial! Te avisaremos en cuanto la app esté lista.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-500 font-medium">
          Algo salió mal. Inténtalo de nuevo.
        </p>
      )}

      <img
        src="/images/app_phone_mockup.webp"
        alt="Mockup de teléfono con la aplicación"
        className="w-full max-w-sm md:max-w-lg rounded-xl mt-8"
      />
    </div>
  );
}

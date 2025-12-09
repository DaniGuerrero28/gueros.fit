"use client"

import { useEffect } from "react";
import AppPromo from "./components/AppPromo";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FAQs from "./components/FAQs";
import PlanSection from "./components/PlanSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("scrollToPlanes") === "1") {
        localStorage.removeItem("scrollToPlanes");
        setTimeout(() => {
          const el = document.getElementById("planes-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 400); // Espera a que la página y el DOM estén listos
      }
    }
  }, []);

  return (
    <div className="min-h-screen text-foreground items-center mx-auto flex flex-col">
      {/* Hidden for SEO purposes */}
      <h1 className="text-4xl md:text-5xl font-light hidden">
        Entrenamiento personal online y nutrición a medida con GUEROS
      </h1>
      <section className="mt-12 max-w-3xl space-y-4 hidden">
        <p>
          En GUEROS Fitness te acompañamos con entrenamiento personal online y
          nutrición personalizada para que consigas un cambio físico real y
          sostenible. Diseñamos tu plan según tu nivel, tu tiempo y tu estilo de
          vida.
        </p>
        <p>
          No solo recibes una rutina de gimnasio: tienes seguimiento mensual,
          ajustes de dieta, soporte directo y una app donde ves tu progreso,
          tus entrenamientos y tu planificación completa.
        </p>
      </section>
      <Header/>
      <HeroSection />
      <PlanSection />
      <ServicesSection />
      <FAQs />
      <AppPromo />
      <Footer />
    </div>
  );
}

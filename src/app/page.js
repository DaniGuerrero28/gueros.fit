"use client"

import { useEffect } from "react";
import SEOContent from "./components/SEOContent";
import AppPromo from "./components/AppPromo";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FAQs from "./components/FAQs";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
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
      <SEOContent />
      <Header/>
      <div className="w-full pt-20">
      <HeroSection />
      {/* <PlanSection /> */}
      <ServicesSection />
      <TestimonialsSection />
      <FAQs />
      <AppPromo />
      </div>
      <Footer />
    </div>
  );
}

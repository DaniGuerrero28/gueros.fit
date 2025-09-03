import { useState } from "react";
import AboutBlock from "./AboutBlock";
import TeamSection from "./TeamSection";

const aboutImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg"
];

export const TEAM = [
  {
    name: "Dani Guerrero",
    role: "Fundador & CEO",
    img: "/images/dani_guerrero.jpg",
    socials: {
      instagram: "https://www.instagram.com/dani.guerreroo_?igsh=ZDdncmRpdXRxcmdp&utm_source=qr",
      tiktok: "https://www.tiktok.com/@daniiiii.gc",
      x: "https://x.com/23guerrero_",
      email: "dani.guerrero.camacho@gmail.com"
    }
  },
  {
    name: "Carles Moya",
    role: "Chief technical officer",
    img: "/images/carles.png",
    socials: {
      email: "carlesmg.cmg@gmail.com",
      github: "https://github.com/CarlesMG6",
      linkedin: "https://www.linkedin.com/in/carles-moya-guerrero?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  {
    name: "Mauricio Carletti",
    role: "Fotógrafo & Videógrafo",
    img: "/images/mau.jpg",
    socials: {
      instagram: "https://www.instagram.com/mauriciocarlettii/#",
      tiktok: "https://www.tiktok.com/@bycarletti"
    }
  }
];

export default function AboutUsSection() {
  return (
    <section id="about-section" className="w-full flex flex-col items-center pt-8 bg-background text-foreground">

      {/* Nuestra misión */}
      <AboutBlock
        title="Nuestra misión"
        text="Nuestra misión es inspirar y acompañar a cada persona en su transformación física y personal, ayudando a descubrir el poder de cuidarse y vivir con más salud, energía y confianza. Queremos que cada logro sea un paso hacia una vida más plena y feliz."
        imgMain={aboutImages[0]}
        imgMini={aboutImages[1]}
        reverse={false}
      />

      {/* Nuestra visión */}
      <AboutBlock
        title="Nuestra visión"
        text="Queremos ser referentes en bienestar integral, demostrando que el cambio físico es solo el inicio de una vida más saludable, longeva y feliz. Apostamos por la personalización, la cercanía y la motivación constante para que cada persona logre su mejor versión."
        imgMain={aboutImages[2]}
        imgMini={aboutImages[3]}
        reverse={true}
      />

      {/* Nuestra historia */}
      <AboutBlock
        title="Nuestra historia"
        text="Gueros Fitness surge de la experiencia personal de nuestro fundador, quien tras superar el bullying y la inseguridad, decidió dedicar su vida a ayudar a otros a transformar su físico y su salud. Cada transformación es una historia de superación y confianza."
        imgMain={aboutImages[4]}
        imgMini={aboutImages[0]}
        reverse={false}
        hasButton={true}
        buttonText="Ver historia completa"
        buttonHref="/history"
      />

      {/* Cómo trabajamos */}
      <AboutBlock
        title="Cómo trabajamos"
        text="Trabajamos de forma cercana y personalizada, escuchando tus necesidades y adaptando cada plan a tu realidad. Nuestro equipo te acompaña en cada paso, resolviendo dudas, motivando y celebrando tus avances. El éxito de nuestros clientes es nuestra mayor satisfacción."
        imgMain={aboutImages[1]}
        imgMini={aboutImages[2]}
        reverse={true}
      />

          {/* Botones finales */}
      <div className="flex flex-col md:flex-row gap-6 mb-32 w-10/12 md:w-full max-w-3xl justify-center">
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.location.href = "/#planes-section";
            }
          }}
          className="px-8 py-3 rounded-full bg-accent text-white font-bold text-lg shadow hover:bg-accent/80 hover:scale-110 hover:shadow-xl transition-all"
        >
          Empezar ahora
        </button>
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.location.href = "/contact";
            }
          }}
          className="px-8 py-3 rounded-full bg-primary text-background font-bold text-lg shadow hover:bg-primary-dark hover:scale-110 hover:shadow-xl transition-all"
        >
          Contáctanos
        </button>
      </div>

      {/* Quiénes somos */}
      <TeamSection team={TEAM} />

    </section>
  );
}

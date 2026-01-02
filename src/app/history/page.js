"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <section className="w-full max-w-3xl mx-auto py-12 px-4 flex flex-col gap-8 text-primary bg-background rounded-xl">
          <h2 className="text-4xl font-bold mb-4">De dónde sale GUEROS?</h2>
          <p>
            Esta conmovedora historia es la de nuestro fundador y CEO, quien, inspirado por su propia lucha para superar el bullying y mejorar su físico, decidió dedicar su vida a ayudar a otros a transformar su físico, salud y bienestar. A través de este relato, descubrirás cómo Gueros Fitness nació con la misión de cambiar vidas, no solo cuerpos, y cómo cada transformación es un paso hacia una vida más saludable, llena de energía y confianza.
          </p>
          <Image src="/images/team_dani_guerrero.webp" alt="Fundador Gueros" width={600} height={400} className="mx-auto rounded-2xl shadow mb-6 object-cover" />
          <h2 className="text-2xl font-bold mt-8 mb-2">Sobre Nosotros</h2>
          <p>
            Todo comenzó con un niño que, debido a su físico, fue víctima de bullying. Esas experiencias marcaron su vida de una manera profunda, generando una sensación constante de querer ser mejor, de transformar lo que sentía como su debilidad en una fortaleza. Desde joven, la lucha fue clara: mejorar cada día, no solo físicamente, sino en todos los aspectos de su vida. Fue entonces cuando entendió que un cuerpo sano y fuerte no solo se refleja en un físico atractivo, sino en una confianza inquebrantable, en una energía imparable para afrontar los retos, y en la capacidad de relacionarse mejor, tanto en su vida personal como profesional.
          </p>
          <p>
            Con el tiempo, se dio cuenta de que al cuidar su cuerpo, no solo mejoraba su apariencia, sino también su salud, y con ella, la posibilidad de vivir más años con su familia, de tener más energía para disfrutar de cada momento y hacer todo aquello que antes parecía un reto. Este proceso de transformación no solo fue físico, sino también mental, emocional y espiritual. Decidió que su misión sería ayudar a las personas a tomar control de su vida, a ver en el espejo a una persona que admiraran, y a demostrarles que, con esfuerzo y constancia, todo era posible.
          </p>
          {/*<Image src="/images/app_phone_mockup.webp" alt="Transformación Gueros" width={400} height={300} className="mx-auto rounded-xl shadow mb-6 object-cover" />
          */}
          <p>
            La realidad es que muchas personas no son completamente conscientes del poder que tiene el cuidarse, de lo que significa tener un cuerpo saludable, fuerte y lleno de energía. Aquí es donde Gueros Fitness entra en juego. Queremos que todo aquel que pase por nuestras puertas (o vea nuestro contenido) se sienta impulsado a comenzar su propia transformación. Queremos que se miren al espejo y digan, “¡guau, esto soy yo!”, que se sientan orgullosos de lo que han conseguido. Porque más allá de un físico trabajado, lo que importa es el impacto en la salud y en la vida de una persona. Un cuerpo fuerte es una vida más plena, más feliz y más longeva.
          </p>
          <p>
            Desde ese primer cliente que vio resultados y no podía dejar de agradecer, hasta cada historia que hemos vivido en el camino, lo que más nos motiva es ver que no solo transformamos cuerpos, transformamos vidas. Ver cómo las personas, al principio llenas de dudas, comienzan a ganar confianza, a sentirse más felices con su cuerpo, a mejorar su salud y, lo más bonito de todo, a inspirar a sus seres queridos. Cada vez que alguien nos dice que su familia o sus hijos están orgullosos de lo que ha logrado, nos llena de una satisfacción inmensa. Porque eso no solo es un cambio físico, es un cambio de mentalidad, de estilo de vida. Y ese es el mayor regalo que podemos darles: la posibilidad de vivir más años, más felices y más saludables.
          </p>
          </section>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from "react";

const FAQS = [
	{
		q: "¿Cómo funciona el orden del programa y los pagos?",
		a: "Preparamos un programa personalizado según la cuota que elijas. Por ejemplo, si eliges la opción semestral, tras el pago comenzamos a planificar tu camino para esos meses. El equipo ajustará el plan según tu evolución, cambiando lo necesario para que progreses. Así funciona también con los planes trimestral y anual.",
	},
	{
		q: "¿Si tengo algún impedimento físico, puedo hacer el plan?",
		a: "¡Por supuesto! Analizamos tu caso y adaptamos el plan a tus necesidades y limitaciones. Te explicamos qué ejercicios puedes hacer y cuáles evitar. No te preocupes, solo tienes que consultarnos y nos encargamos de todo.",
	},
	{
		q: "¿Serán todos los meses del plan iguales?",
		a: "No, el objetivo es que sigas mejorando con el tiempo. Según tu evolución y el plan inicial, iremos ajustando rutinas y pautas para que progreses de la forma más cómoda y sostenible posible.",
	},
	{
		q: "¿Puedo hacer el plan con poco tiempo o desde casa?",
		a: "¡Claro! Te ayudamos tengas el tiempo o material que tengas. No necesitas un gran gimnasio ni entrenar horas al día para lograr grandes resultados. Con organización y el conocimiento adecuado, puedes mejorar tu salud y físico desde casa.",
	},
	{
		q: "¿Cómo cancelo?",
		a: "Solo tienes que avisar con al menos 10 días de antelación para que podamos organizar el equipo y evitar el siguiente cobro. Ten en cuenta que, al cancelar y dejar de hacer los pagos, se eliminarán todos los materiales y rutinas proporcionados de tu cuenta.",
	},
	{
		q: "¿Es demasiado para principiantes?",
		a: "¡Al contrario! Empezar con un plan personalizado y el apoyo de profesionales te permitirá avanzar mucho más rápido y seguro que si lo intentas solo. Crearás una base sólida, reducirás el riesgo de lesión y conseguirás en meses lo que otros logran en años. ¡Anímate e invierte en ti!",
	},
	{
		q: "¿Qué es Gueros?",
		a: "Gueros es una empresa dedicada al entrenamiento personal y asesoramiento fitness, enfocada en ayudarte a alcanzar tus objetivos físicos y mejorar tu bienestar.",
	},
	{
		q: "¿Qué tiene de diferente respecto a otras opciones?",
		a: "Ofrecemos atención personalizada, seguimiento cercano y planes adaptados a tu situación y metas. Nuestro equipo está formado por profesionales con experiencia real en el sector.",
	},
	{
		q: "¿Qué tipo de ejercicio se incluye?",
		a: "Nuestros programas incluyen rutinas de fuerza, cardio, movilidad y flexibilidad, adaptadas a tu nivel y preferencias.",
	},
	{
		q: "¿Qué programas de ejercicio ofrecéis?",
		a: "Tenemos programas para pérdida de peso, ganancia muscular, recomposición corporal, salud general y rendimiento deportivo.",
	},
	{
		q: "¿Incluís asesoramiento en alimentación?",
		a: "Sí, te ayudamos a mejorar tu alimentación con pautas sencillas y adaptadas a tu estilo de vida, sin dietas extremas.",
	},
	{
		q: "¿Hay comunidad?",
		a: "Sí, formarás parte de una comunidad motivadora donde compartir avances, dudas y recibir apoyo.",
	},
	{
		q: "¿Esto es una suscripción? ¿Cómo funciona?",
		a: "Sí, funciona como una suscripción mensual sin permanencia. Puedes cancelar cuando quieras, sin penalizaciones.",
	},
	{
		q: "¿Hay garantía o devoluciones?",
		a: "Si no estás satisfecho, puedes solicitar la devolución en los primeros 7 días. Queremos que estés contento con tu experiencia.",
	},
	{
		q: "¿Cómo selecciono el plan de entrenamiento?",
		a: "Te ayudamos a elegir el plan que mejor se adapta a ti tras una consulta inicial gratuita.",
	},
	{
		q: "¿Tenéis aplicación móvil? ¿Para qué sirve?",
		a: "Sí, nuestra app te permite acceder a tus rutinas, registrar progresos y comunicarte con tu entrenador.",
	},
	{
		q: "Ya estoy en forma, ¿esto es para mí?",
		a: "¡Por supuesto! Adaptamos los planes para todos los niveles, desde principiantes hasta avanzados.",
	},
	{
		q: "Todavía no tengo el cuerpo que quiero, ¿esto es para mí?",
		a: "Sí, nuestro objetivo es ayudarte a conseguir el cambio que buscas, sea cual sea tu punto de partida.",
	},
	{
		q: "¿Durante cuánto tiempo disfrutaré el precio de la oferta?",
		a: "El precio promocional se mantiene durante el periodo que dure tu suscripción activa.",
	},
	{
		q: "¿Hay aviso médico?",
		a: "Recomendamos consultar con tu médico antes de iniciar cualquier programa de entrenamiento si tienes alguna condición de salud.",
	},
	{
		q: "¿Puedo entrenar en casa?",
		a: "Sí, diseñamos rutinas tanto para gimnasio como para casa, con o sin material.",
	},
	{
		q: "¿Qué métodos de pago aceptáis?",
		a: "Aceptamos tarjeta, PayPal y otros métodos seguros.",
	},
	{
		q: "¿Cómo contacto con mi entrenador?",
		a: "Puedes contactar por chat en la app, email o WhatsApp.",
	},
	{
		q: "¿Hay límite de consultas?",
		a: "No, puedes preguntar todas las dudas que tengas.",
	},
	{
		q: "¿Puedo pausar mi suscripción?",
		a: "Sí, puedes pausar tu suscripción si lo necesitas y retomarla más adelante.",
	},
];

function FAQItem({ q, a, open, onClick }) {
	return (
		<div className="w-10/12 md:w-full mx-auto rounded-xl bg-primary-foreground shadow mb-4  transition-all hover:bg-primary-foreground/80 hover:scale-105 hover:shadow-xl">
			<button
				className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-primary focus:outline-none"
				onClick={onClick}
				aria-expanded={open}
			>
				<span>{q}</span>
				<span
					className={`ml-4 transition-transform ${
						open ? "rotate-90" : ""
					}`}
				>
					▶
				</span>
			</button>
			{open && (
				<div className="px-6 py-4 text-base text-primary border-t border-primary/10">
					{a}
				</div>
			)}
		</div>
	);
}

export default function FAQs() {
	const [openIdx, setOpenIdx] = useState(null);
	const [showAll, setShowAll] = useState(false);
	const visibleFaqs = showAll ? FAQS : FAQS.slice(0, 8);

	return (
		<section
			id="faqs-section"
			className="w-full max-w-3xl mx-auto py-16 relative"
		>
			<h2 className="text-3xl font-bold mb-8 text-center">
				Preguntas frecuentes
			</h2>
			<div className="relative">
				{visibleFaqs.map((faq, idx) => (
					<FAQItem
						key={idx}
						q={faq.q}
						a={faq.a}
						open={openIdx === idx}
						onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
					/>
				))}
				{!showAll && FAQS.length > 8 && (
					<div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-background via-background/80 to-transparent rounded-b-xl" />
				)}
			</div>
			{!showAll && FAQS.length > 8 && (
				<div className="flex justify-center mt-2">
					<button
						className="px-6 py-2 rounded-full bg-primary text-background font-semibold shadow hover:bg-primary/80 hover:scale-110 hover:shadow-xl transition-all"
						onClick={() => setShowAll(true)}
					>
						Mostrar más
					</button>
				</div>
			)}
		</section>
	);
}

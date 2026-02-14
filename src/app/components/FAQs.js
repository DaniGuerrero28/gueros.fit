import { useState } from "react";

const FAQS = [
	{
		q: "¿Qué tipo de servicios ofrecéis?",
		a: "Trabajamos en diferentes tipos de casos dentro de nuestra especialidad. Si no tienes claro si podemos ayudarte, escríbenos sin compromiso y te orientamos encantados."
	},
	{
		q: "¿Tengo que pedir cita antes de ir?",
		a: "Sí, preferimos trabajar con cita previa para poder dedicarte el tiempo que necesitas y evitar esperas innecesarias."
	},
	{
		q: "¿Cuánto cuesta el servicio?",
		a: "El precio depende de cada caso, ya que no todos requieren lo mismo. Podemos darte una estimación o presupuesto una vez sepamos exactamente qué necesitas."
	},
	{
		q: "¿Cuánto tiempo estaré allí?",
		a: "Depende del servicio y de tu situación concreta. Siempre intentamos ajustarnos al tiempo necesario sin prisas, pero siendo eficientes."
	},
	{
		q: "¿Ofrecéis garantía?",
		a: "Sí. Nos gusta hacer las cosas bien y responder si algo no queda como debería. Si surge cualquier problema, estaremos ahí para solucionarlo."
	},
	{
		q: "¿Tengo que preparar algo antes de acudir?",
		a: "En algunos casos puede ser útil traer documentación, pruebas anteriores o simplemente venir con ropa cómoda. Si necesitas preparar algo específico, te lo avisaremos antes."
	},
	{
		q: "¿Puedo cambiar o cancelar mi cita?",
		a: "Claro. Solo te pedimos que nos avises con la mayor antelación posible para poder reorganizar la agenda."
	},
	{
		q: "¿Cómo puedo contactar con vosotros?",
		a: "Puedes escribirnos, llamarnos o rellenar el formulario de la web. Intentamos responder lo antes posible, normalmente el mismo día."
	},
	{
		q: "¿Qué tipo de servicios ofrecéis?",
		a: "Trabajamos en diferentes tipos de casos dentro de nuestra especialidad. Si no tienes claro si podemos ayudarte, escríbenos sin compromiso y te orientamos encantados."
	},
	{
		q: "¿Tengo que pedir cita antes de ir?",
		a: "Sí, preferimos trabajar con cita previa para poder dedicarte el tiempo que necesitas y evitar esperas innecesarias."
	},
	{
		q: "¿Cuánto cuesta el servicio?",
		a: "El precio depende de cada caso, ya que no todos requieren lo mismo. Podemos darte una estimación o presupuesto una vez sepamos exactamente qué necesitas."
	},
	{
		q: "¿Cuánto tiempo estaré allí?",
		a: "Depende del servicio y de tu situación concreta. Siempre intentamos ajustarnos al tiempo necesario sin prisas, pero siendo eficientes."
	},
]
;

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

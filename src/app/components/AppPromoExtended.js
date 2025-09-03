import Image from "next/image";
import AppPromo from "./AppPromo";

const FEATURES = [
	{
		title: "Nutrición",
		img: "/images/app-nutri.png",
		desc: "Lleva el control de tus calorías, registra tus comidas, recibe consejos nutricionales y descubre recetas recomendadas para alcanzar tus objetivos de forma saludable.",
	},
	{
		title: "Ejercicio",
		img: "/images/app-ejercicio.png",
		desc: "Accede a planes de ejercicio personalizados de tu entrenador, anota tus ejercicios, busca rutinas, sigue tus progresos y aprende la forma correcta de cada movimiento.",
	},
	{
		title: "Recetas",
		img: "/images/app-recetas.png",
		desc: "Explora una amplia variedad de recetas saludables, filtra por tus objetivos y preferencias, guarda tus favoritas y comparte tus propias creaciones con la comunidad.",
	},
	{
		title: "Comunidad",
		img: "/images/app-nutri.png",
		desc: "Participa en foros, comparte tus logros, resuelve dudas y motívate con otros usuarios. La comunidad Gueros te acompaña en cada paso de tu transformación.",
	},
];

export default function AppPromoExtended() {
	return (
		<section className="w-full flex flex-col items-center py-16 bg-background text-foreground px-8">
			<h2 className="text-3xl font-bold mb-4 text-center">App de Gueros</h2>
			<p className="text-lg text-primary/80 mb-8 text-center max-w-2xl">
				Lleva tu transformación física y bienestar al siguiente nivel con nuestra
				app exclusiva. <span className="font-bold uppercase">TODO</span> lo que necesitas para entrenar, comer mejor y
				conectar con la comunidad, en tu bolsillo.
			</p>
			{/*<div className="w-full flex justify-center mb-12">
				<video
					src="/videos/app-promo.mp4"
					poster="/images/app-promo-poster.jpg"
					controls
					className="rounded-2xl shadow-lg w-full max-w-2xl bg-black"
				>
					Tu navegador no soporta el video.
				</video>
			</div>
			*/}
			<div className="flex flex-col gap-16 w-full max-w-5xl">
				{FEATURES.map((f, idx) => (
					<div
						key={f.title}
						className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
							idx % 2 === 1 ? "md:flex-row-reverse" : ""
						}`}
					>
						<div className="w-full flex justify-center">
							<div className="w-10/12 aspect-square md:w-96 rounded-2xl overflow-hidden">
								<Image
									src={f.img}
									alt={f.title}
									width={320}
									height={320}
									className="object-contain w-full h-full"
								/>
							</div>
						</div>
						<div className="w-full flex flex-col items-start ">
							<h3 className="font-bold text-2xl text-primary mb-3">
								{f.title}
							</h3>
							<p className="text-primary/80 text-lg">{f.desc}</p>
						</div>
					</div>
				))}
			</div>
			{/* AppPromo al final */}
			<div className="w-full mt-20">
				<AppPromo />
			</div>
		</section>
	);
}

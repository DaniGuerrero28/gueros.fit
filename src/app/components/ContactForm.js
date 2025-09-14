import { useState } from "react";
import { CONTACT_URL } from "../constants";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!form.email.trim()) newErrors.email = "El correo es obligatorio";
        return newErrors;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }
        setSubmitted(true);
        // Aquí iría la lógica de envío real
    };

    return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-6xl mx-auto rounded-xl px-8 pb-8 flex flex-col md:flex-row items-center bg-background">
        {/* Mobile: imagen arriba con difuminado, luego contenido. Desktop: dos columnas */}
        <div className="w-full md:hidden flex flex-col items-center relative">
          <div className="relative w-full flex items-center mb-8">
            <img
              src={CONTACT_URL}
               alt="Consulta GUEROS"
                className="object-cover w-full h-52 rounded-xl object-[50%_43%] md:object-[50%_35%]"
                  style={{ position: 'relative', zIndex: 1 }}
         />
          </div>
        </div>
        {/* Columna izquierda: formulario (desktop) o contenido (mobile) */}
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 text-center">¿Tienes preguntas?</h2>
          <p className="text-lg mb-8 text-center text-primary">
            Da el primer paso y agenda tu consulta gratuita. Recibe asesoramiento personalizado para resolver tus dudas y definir tu objetivo. ¡Consigue un 25% de descuento en tu primer pago si solicitas tu consulta!
          </p>
          {submitted ? (
            <div className="text-green-600 font-semibold text-center">¡Gracias! Te contactaremos pronto.</div>
          ) : (
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-full bg-primary-foreground focus:outline-none ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                  required
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Correo electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-full bg-primary-foreground focus:outline-none ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                  required
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-primary-foreground focus:outline-none"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-full bg-accent text-white font-bold text-lg shadow hover:bg-accent/80 hover:scale-110 hover:shadow-xl transition-all"
              >
                Te contactamos
              </button>
            </form>
          )}
        </div>
        {/* Columna derecha: imagen simpática solo en desktop */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <img
            src={CONTACT_URL}
            alt="Contacto Gueros"
            className="w-96 h-full object-contain rounded-4xl"
            style={{ minWidth: 200 }}
          />
        </div>
      </section>
    </div>
    );
}

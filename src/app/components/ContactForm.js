import { useState } from "react";
import { CONTACT_URL } from "../constants";

function SuccessPopup({ show, message }) {
  if (!show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in">
      {message}
    </div>
  );
}

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async e => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "complete",
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setForm({ name: "", email: "", message: "" });
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 4000);
            } else {
                setErrors({ api: data.error || "Error al enviar" });
            }
        } catch (err) {
            setErrors({ api: "Error de red" });
        }
        setLoading(false);
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
                className="object-cover w-full h-52 rounded-xl object-[50%_55%] md:object-[50%_35%]"
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
                className="w-full px-8 py-3 rounded-full bg-accent text-white font-bold text-lg shadow hover:bg-accent/80 hover:scale-110 hover:shadow-xl transition-all flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="inline-block w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Te contactamos"
                )}
              </button>
            </form>
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
      <SuccessPopup show={showPopup} message="¡Correo enviado correctamente!" />
    </div>
    );
}

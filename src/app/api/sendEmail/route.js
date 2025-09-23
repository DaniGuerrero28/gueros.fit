import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, type } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Faltan campos" },
        { status: 400 }
      );
    }

    const TYPE_LITERAL =
      type === "simple"
        ? "Formulario Simple"
        : type === "complete"
        ? "Formulario Completo"
        : "Formulario";

    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: TYPE_LITERAL,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message || "Error desconocido" },
      { status: 500 }
    );
  }
}

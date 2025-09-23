import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, type } = await req.json();
    console.log("Received data:", { name, email, message, type });
    if (
      (type === "simple" && !email) ||
      (type === "complete" && (!name || !email || !message))
    ) {
      return NextResponse.json(
        { success: false, error: "Faltan campos" },
        { status: 400 }
      );
    }

    if (type === "simple") {
        await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Formulario Simple",
      html: `Alguien ha enviado un formulario simple:<br/>
             <p><strong>Email:</strong> ${email}</p>`,
    });
    } else if (type === "complete") {
        await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Formulario Completo",
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
    });
    } else {
        return NextResponse.json(
        { success: false, error: "Tipo de formulario inválido" },
        { status: 400 }
      );
    }
    

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message || "Error desconocido" },
      { status: 500 }
    );
  }
}

import {Resend} from "resend"
// Instancia de Resend con tu API key del .env
const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Email de verificación para Clientes ─────────────────────────────────────
// Recibe el email y el token JWT generado en el controller
export const sendVerificacionCliente = async (email, token) => {
  // Construimos el link que el cliente va a clickear
  // El front recibe el token y llama al back para verificarlo
  const link = `${process.env.FRONTEND_URL}/auth/cliente/verify?token=${token}`;
  await resend.emails.send({
    from: "FidelX <onboarding@resend.dev>", // dominio gratuito de Resend
    to: email,
    subject: "Verifica tu cuenta de FidelX",
    html: `
      <h2>Bienvenido a FidelX</h2>
      <p>Gracias por registrarte. Haz click en el botón para verificar tu cuenta:</p>
      <a href="${link}" style="
        background-color: #4F46E5;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        display: inline-block;
      ">
        Verificar cuenta
      </a>
      <p>Este link expira en <strong>24 horas</strong>.</p>
      <p>Si no creaste una cuenta, ignora este correo.</p>
    `,
  });
};

// ─── Email de verificación para Tiendas ──────────────────────────────────────
export const sendVerificacionTienda = async (email, token) => {
  const link = `${process.env.FRONTEND_URL}/tiendas/verificar-cuenta?token=${token}`;

  await resend.emails.send({
    from: "FidelX <onboarding@resend.dev>",
    to: email,
    subject: "Verifica tu cuenta de tienda en FidelX",
    html: `
      <h2>Bienvenido a FidelX</h2>
      <p>Tu tienda ha sido registrada. Haz click en el botón para verificar tu cuenta:</p>
      <a href="${link}" style="
        background-color: #4F46E5;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        display: inline-block;
      ">
        Verificar cuenta
      </a>
      <p>Este link expira en <strong>24 horas</strong>.</p>
      <p>Si no registraste tu tienda, ignora este correo.</p>
    `,
  });
};
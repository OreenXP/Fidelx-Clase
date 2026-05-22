import { prisma } from "../../../config/db.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { sendVerificacionCliente } from "../../email/email.service.js";
import { sendVerificacionTienda } from "../../email/email.service.js";

export async function registrarCliente(
  nombre,
  apellido,
  email,
  password,
  telefono,
  fechaNacimiento,
) {
  const clienteExistente = await prisma.cliente.findFirst({
    where: {
      email: email,
      estado: "activo",
    },
  });
  if (clienteExistente) {
    throw new Error("El email ya está registrado");
  }
  await prisma.cliente.deleteMany({
    where: {
      email: email,
      estado: "pendiente",
    },
  });
  const passwordHasheada = await bcrypt.hash(password, 10);

  const nuevoCliente = await prisma.cliente.create({
    data: {
      nombre: nombre,
      apellido: apellido,
      email: email,
      password_hash: passwordHasheada,
      telefono: telefono || null,
      fechaNacimiento: fechaNacimiento ? new Date(fechaNacimiento) : null,
      estado: "pendiente",
    },
  });

  const tokenVerificacion = crypto.randomBytes(32).toString("hex");

  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await prisma.token.create({
    data: {
      token: tokenVerificacion,
      tipo: "verificacion_email",
      clienteId: nuevoCliente.id,
      expiresAt: expiresAt,
    },
  });

  await sendVerificacionCliente(nuevoCliente.email, tokenVerificacion);
  return {
    mensaje: "Registro exitoso, revisa tu correo para verificar tu cuenta",
    clienteId: nuevoCliente.id,
  };
}
export async function verificarCliente(token) {
  const tokenExistente = await prisma.token.findFirst({
    where: {
      token: token,
      tipo: "verificacion_email",
    },
  });

  if (!tokenExistente) {
    throw new Error("Token inválido");
  }

  const cliente = await prisma.cliente.findFirst({
    where: {
      id: tokenExistente.clienteId,
    },
  });

  if (!cliente) {
    throw new Error("Cliente no encontrado");
  }

  if (cliente.estado === "activo") {
    throw new Error("El cliente ya está verificado");
  }

  if (tokenExistente.expiresAt < new Date()) {
    throw new Error("Token expirado");
  }

  await prisma.cliente.update({
    where: { id: cliente.id },
    data: {
      estado: "activo",
    },
  });

  await prisma.token.delete({
    where: { id: tokenExistente.id },
  });

  return { mensaje: "Cuenta verificada exitosamente" };
}

//====================REGISTER PARA TIENDAS====================== //
export async function registrarTienda(
  nombre,
  descripcion,
  logo_url,
  email,
  password,
) {
  const tiendaExistente = await prisma.tienda.findFirst({
    where: {
      email: email,
      estado: "activo",
    },
  });
  if (tiendaExistente) {
    throw new Error("El email ya está registrado");
  }
  await prisma.tienda.deleteMany({
    where: {
      email: email,
      estado: "pendiente",
    },
  });

  const passwordHasheada = await bcrypt.hash(password, 10);

  const nuevaTienda = await prisma.tienda.create({
    data: {
      nombre: nombre,
      descripcion: descripcion,
      logo_url: logo_url,
      email: email,
      password_hash: passwordHasheada,
      estado: "pendiente",
    },
  });

  const tokenVerificacion = crypto.randomBytes(32).toString("hex");

  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await prisma.token.create({
    data: {
      token: tokenVerificacion,
      tipo: "verificacion_email",
      tiendaId: nuevaTienda.id,
      expiresAt: expiresAt,
    },
  });
  await sendVerificacionTienda(nuevaTienda.email, tokenVerificacion);

  return {
    mensaje: "Registro exitoso, revisa tu correo para verificar tu cuenta",
    tiendaId: nuevaTienda.id,
  };
}

export async function verificarTienda(token) {
  const tokenExistente = await prisma.token.findFirst({
    where: {
      token: token,
      tipo: "verificacion_email",
    },
  });

  if (!tokenExistente) {
    throw new Error("Token inválido");
  }

  const tienda = await prisma.tienda.findFirst({
    where: {
      id: tokenExistente.tiendaId,
    },
  });

  if (!tienda) {
    throw new Error("Tienda no encontrada");
  }

  if (tienda.estado === "activo") {
    throw new Error("La tienda ya está verificada");
  }

  if (tokenExistente.expiresAt < new Date()) {
    throw new Error("Token expirado");
  }

  await prisma.tienda.update({
    where: { id: tienda.id },
    data: {
      estado: "activo",
    },
  });

  await prisma.token.delete({
    where: { id: tokenExistente.id },
  });

  return { mensaje: "Cuenta verificada exitosamente" };
}

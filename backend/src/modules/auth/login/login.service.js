import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "../../../config/db.js";

//====================LOGIN PARA CLIENTES====================== //

export async function loginCliente(email, password) {
  const cliente = await prisma.cliente.findFirst({
    where: {
      email: email,
      estado: "activo",
    },
  });

  if (!cliente) {
    throw new Error("Credenciales incorrectas");
  }

  const passwordValida = await bcrypt.compare(password, cliente.password_hash);

  if (!passwordValida) {
    throw new Error("Credenciales incorrectas");
  }
  const token = jwt.sign(
    { id: cliente.id, email: cliente.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" },
  );

  await prisma.token.create({
    data: {
      token: token,
      tipo: "sesion",
      clienteId: cliente.id,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  return {
    token: token,
    cliente: {
      id: cliente.id,
      nombre: cliente.nombre,
      email: cliente.email,
    },
  };
}


//====================LOGIN PARA TIENDAS====================== //
export async function loginTienda(email, password) {
  const tienda = await prisma.tienda.findFirst({
    where: {
      email: email,
      estado: "activo",
    },
  });

  if (!tienda) {
    throw new Error("Credenciales incorrectas");
  }
  const passwordValida = await bcrypt.compare(password, tienda.password_hash);

  if (!passwordValida) {
    throw new Error("Credenciales incorrectas");
  }
  const token = jwt.sign(
    { id: tienda.id, email: tienda.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" },
  );

  await prisma.token.create({
    data: {
      token: token,
      tipo: "sesion",
      tiendaId: tienda.id,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  });

  return {
    token: token,
    tienda: {
      id: tienda.id,
      nombre: tienda.nombre,
      email: tienda.email,
    },
  };
}
import { logger } from "../../../config/logger.js";
import {
  registrarCliente,
  verificarCliente,
  registrarTienda,
  verificarTienda,
} from "./register.service.js";

export const registerClient = async (req, res) => {
  const { nombre, apellido, email, password, telefono } = req.validatedBody;

  try {
    const resultado = await registrarCliente(
      nombre,
      apellido,
      email,
      password,
      telefono,
    );

    // 201 significa Created
    return res.status(201).json(resultado);
  } catch (error) {
    // Si el service lanzó el error de email duplicado respondemos con 409 Conflict
    if (error.message === "El email ya está registrado") {
      return res.status(409).json({
        error: error.message,
      });
    }
    logger.error("Error en register controller:", {
      error: error.message,
      stack: error.stack,
    });
    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};
export const verifyClient = async (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: "Token requerido" });
  }

  try {
    const resultado = await verificarCliente(token);
    return res.status(200).json(resultado);
  } catch (error) {
    if (
      error.message === "Token inválido" ||
      error.message === "Token expirado" ||
      error.message === "Cliente no encontrado" ||
      error.message === "El cliente ya está verificado"
    ) {
      return res.status(400).json({ error: error.message });
    }
    logger.error("Error en verify controller:", {
      error: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const registerTienda = async (req, res) => {
  const { nombre, descripcion, logo_url, email, password } = req.validatedBody;

  try {
    const resultado = await registrarTienda(
      nombre,
      descripcion,
      logo_url,
      email,
      password,
    );

    return res.status(201).json(resultado);
  } catch (error) {
    if (error.message === "El email ya está registrado") {
      return res.status(409).json({
        error: error.message,
      });
    }

    logger.error("Error en register controller:", {
      error: error.message,
      stack: error.stack,
    });
    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

export const verifyTienda = async (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: "Token requerido" });
  }

  try {
    const resultado = await verificarTienda(token);
    return res.status(200).json(resultado);
  } catch (error) {
    if (
      error.message === "Token inválido" ||
      error.message === "Token expirado" ||
      error.message === "Tienda no encontrada" ||
      error.message === "La tienda ya está verificada"
    ) {
      return res.status(400).json({ error: error.message });
    }
    logger.error("Error en verify controller:", {
      error: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

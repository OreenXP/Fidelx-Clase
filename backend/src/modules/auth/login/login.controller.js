import { logger } from "../../../config/logger.js";
import { loginCliente, loginTienda } from "./login.service.js";

export async function loginClient(req, res) {
  const { email, password_hash: password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "email y password son obligatorios",
    });
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    return res.status(400).json({
      error: "El formato del email no es válido",
    });
  }

  try {
    const resultado = await loginCliente(email, password);

    return res.status(200).json(resultado);
  } catch (error) {
    if (error.message === "Credenciales incorrectas") {
      return res.status(401).json({
        error: error.message,
      });
    }

    logger.error("Error en login controller:", {
      error: error.message,
      stack: error.stack,
    });
    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
}

export async function loginTienda(req, res) {
  const { email, password_hash: password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "email y password son obligatorios",
    });
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    return res.status(400).json({
      error: "El formato del email no es válido",
    });
  }

  try {
    const resultado = await loginTienda(email, password);

    return res.status(200).json(resultado);
  } catch (error) {
    if (error.message === "Credenciales incorrectas") {
      return res.status(401).json({
        error: error.message,
      });
    }

    logger.error("Error en login controller:", {
      error: error.message,
      stack: error.stack,
    });
    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
}

import { Router } from "express";
import {
  crear,
  listar,
  obtenerPorId,
  obtenerPorTienda,
  actualizar,
  eliminar,
} from "./products.controller.js";
import { validate } from "../../middleware/validate.js";
import { authMiddleware } from "../../middleware/auth.js";
import {
  createProductsSchema,
  editProductoSchema,
  uuidSchema,
} from "./products.validator.js";
import { z } from "zod";
const paramsIdSchema = z.object({ id: uuidSchema }).strict();
const paramsTiendaIdSchema = z.object({ tiendaId: uuidSchema }).strict();
export const router = Router();
router.get("/", listar);
router.get(
  "/tienda/:tiendaId",
  validate(paramsTiendaIdSchema, "params"),
  obtenerPorTienda,
);
router.get("/:id", validate(paramsIdSchema, "params"), obtenerPorId);
router.post("/", authMiddleware, validate(createProductsSchema), crear);
router.put(
  "/:id",
  authMiddleware,
  validate(paramsIdSchema, "params"),
  validate(editProductoSchema),
  actualizar,
);
router.delete("/:id", authMiddleware, validate(paramsIdSchema, "params"), eliminar);


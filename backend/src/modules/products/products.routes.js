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
  validate(paramsTiendaIdSchema),
  obtenerPorTienda,
);
router.get("/:id", validate(paramsIdSchema), obtenerPorId);
router.post("/", validate(createProductsSchema), crear);
router.put(
  "/:id",
  validate(paramsIdSchema),
  validate(editProductoSchema),
  actualizar,
);
router.delete("/:id", validate(paramsIdSchema), eliminar);


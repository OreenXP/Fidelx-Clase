import { validate } from "../../../middleware/validate.js";
import { Router } from "express";
import { registerClienteSchema, registerTiendaSchema } from "./register.validator.js";
import { registerClient, verifyClient, registerTienda, verifyTienda } from "./register.controller.js";

export const router = Router();

router.post("/register-client", validate(registerClienteSchema), registerClient);

router.get("/verify-client", verifyClient);

router.post("/register-tienda", validate(registerTiendaSchema), registerTienda);

router.get("/verify-tienda", verifyTienda);


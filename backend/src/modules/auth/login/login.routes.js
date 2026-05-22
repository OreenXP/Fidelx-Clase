import { validate } from "../../../middleware/validate.js";
import { Router } from "express";
import { loginClienteSchema, loginTiendaSchema } from "./login.validator.js";
import { loginClient, loginTienda } from "./login.controller.js";

export const router = Router();

router.post("/login-cliente", validate(loginClienteSchema), loginClient);

router.post("/login-tienda", validate(loginTiendaSchema), loginTienda);

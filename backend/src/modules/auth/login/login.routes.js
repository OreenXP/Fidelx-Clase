import { validate } from "../../../middleware/validate.js";
import { Router } from "express";
import { loginClienteSchema, loginTiendaSchema } from "./login.validator.js";
import { loginClientController, loginTiendaController } from "./login.controller.js";

export const router = Router();

router.post("/login-cliente", validate(loginClienteSchema), loginClientController);

router.post("/login-tienda", validate(loginTiendaSchema), loginTiendaController);

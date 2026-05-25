import { z } from "zod";

//===============TIENDA===============//
export const loginTiendaSchema = z.object({
  password_hash: z.string().min(1, "Contrasena requerida."),
  email: z.string().email("Email requerida."),
});
//===============CLIENTE===============//
export const loginClienteSchema = z.object({
  password_hash: z.string().min(1, "Contrasena requerida."),
  email: z.string().email("Contrasena requerida."),
});

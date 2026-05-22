import * as z from "zod";
//===============CLIENTES===============//
export const registerClienteSchema = z.object({
  nombre: z.string().min(1, "Nombre requerido."),
  apellido: z.string().min(1, "Apellido requerido."),
  telefono: z.string().optional(),
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .regex(/[A-Z]/, "Debe tener una mayúscula")
    .regex(/\d/, "Debe tener un número"),
});
//===============TIENDAS===============//
export const registerTiendaSchema = z.object({
  nombre: z.string().min(1, "Nombre requerido."),
  descripcion: z.string().optional(),
  logo_url: z.string().optional(),
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .regex(/[A-Z]/, "Debe tener una mayúscula")
    .regex(/\d/, "Debe tener un número"),
});
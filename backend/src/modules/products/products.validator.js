import { z } from "zod";
export const uuidSchema = z.string().uuid("ID inválido");

export const createProductsSchema = z.object({
  nombre: z.string().trim().min(1, "Nombre requerido").max(150),
  idCategoria: z.string().uuid("ID de categoría inválido").optional(),
  idTienda: z.string().uuid("ID de tienda inválido"),
  descripcion: z.string().max(1000, "Máximo 1000 caracteres").optional(),
  precio: z.number().positive("El precio debe ser mayor a 0"),
  imagen_url: z.string().url("URL inválida").max(255).optional(),
  estado: z.string().max(20).optional(),
});

export const editProductoSchema = z.object({
  nombre: z.string().trim().min(1, "Nombre requerido").max(150).optional(),
  idCategoria: z.string().uuid("ID de categoría inválido").optional(),
  descripcion: z.string().max(1000, "Máximo 1000 caracteres").optional(),
  precio: z.number().positive("El precio debe ser mayor a 0").optional(),
  imagen_url: z.string().url("URL inválida").max(255).optional(),
  estado: z.string().max(20).optional(),
});

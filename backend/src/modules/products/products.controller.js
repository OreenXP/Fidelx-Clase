import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  obtenerProductoPorTienda,
  actualizarProducto,
  eliminarProducto,
} from "./products.service.js";
// CREATE - Crear producto
export const crear = async (req, res) => {
  try {
    const data = req.body;
    const tiendaId = req.tiendaId; // Del middleware verificarTienda
    const resultado = await crearProducto(data, tiendaId);
    return res.status(201).json({
      success: true,
      ...resultado,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      mensaje: error.message,
    });
  }
};
// READ PUBLIC - Listar solo productos publicados (activos) con tienda
export const listarPublicos = async (req, res) => {
  try {
    const productos = await obtenerProductos({ estado: "activo" });
    return res.status(200).json({
      success: true,
      total: productos.length,
      data: productos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      mensaje: error.message,
    });
  }
};

// READ ALL - Listar productos con filtros
export const listar = async (req, res) => {
  try {
    const filtros = {
      tiendaId: req.query.tiendaId,
      categoriaId: req.query.categoriaId,
      estado: req.query.estado,
      nombre: req.query.nombre,
      precioMin: req.query.precioMin,
      precioMax: req.query.precioMax,
    };
    Object.keys(filtros).forEach((key) => {
      if (!filtros[key]) delete filtros[key];
    });
    const productos = await obtenerProductos(filtros);
    return res.status(200).json({
      success: true,
      total: productos.length,
      data: productos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      mensaje: error.message,
    });
  }
};
// READ ONE - Obtener producto por ID
export const obtenerPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await obtenerProductoPorId(id);
    return res.status(200).json({
      success: true,
      data: producto,
    });
  } catch (error) {
    if (error.message === "Producto no encontrado") {
      return res.status(404).json({
        success: false,
        mensaje: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      mensaje: error.message,
    });
  }
};
// READ BY TIENDA - Obtener productos por tienda
export const obtenerPorTienda = async (req, res) => {
  try {
    const { tiendaId } = req.params;
    const productos = await obtenerProductoPorTienda(tiendaId);
    return res.status(200).json({
      success: true,
      total: productos.length,
      data: productos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      mensaje: error.message,
    });
  }
};
// UPDATE - Actualizar producto
export const actualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const tiendaId = req.tiendaId;
    const producto = await actualizarProducto(id, data, tiendaId);
    return res.status(200).json({
      success: true,
      mensaje: "Producto actualizado correctamente",
      data: producto,
    });
  } catch (error) {
    if (
      error.message.includes("no encontrado") ||
      error.message.includes("no asociado")
    ) {
      return res.status(404).json({
        success: false,
        mensaje: error.message,
      });
    }
    return res.status(400).json({
      success: false,
      mensaje: error.message,
    });
  }
};
// DELETE - Eliminar producto (soft delete)
export const eliminar = async (req, res) => {
  try {
    const { id } = req.params;
    const tiendaId = req.tiendaId;
    const resultado = await eliminarProducto(id, tiendaId);
    return res.status(200).json({
      success: true,
      ...resultado,
    });
  } catch (error) {
    if (
      error.message.includes("no encontrado") ||
      error.message.includes("no asociado")
    ) {
      return res.status(404).json({
        success: false,
        mensaje: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      mensaje: error.message,
    });
  }
};

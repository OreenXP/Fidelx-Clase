import { prisma } from "../../config/db.js";

export async function obtenerProductos(filtros = {}) {
  // Construir el objeto where dinámicamente
  const where = {};

  // Filtrar por tienda
  if (filtros.tiendaId) {
    where.tienda = {
      is: {
        id: filtros.tiendaId,
      },
    };
  }

  // Filtrar por categoría
  if (filtros.categoriaId) {
    where.categoria = {
      is: {
        id: filtros.categoriaId,
      },
    };
  }

  // Filtrar por estado
  if (filtros.estado) {
    where.estado = filtros.estado;
  }

  // Búsqueda por nombre (parcial)
  if (filtros.nombre) {
    where.nombre = {
      contains: filtros.nombre,
      mode: "insensitive", // Búsqueda case-insensitive
    };
  }

  // Filtrar por rango de precio
  if (filtros.precioMin || filtros.precioMax) {
    where.precio = {};
    if (filtros.precioMin) {
      where.precio.gte = parseFloat(filtros.precioMin); // Mayor o igual
    }
    if (filtros.precioMax) {
      where.precio.lte = parseFloat(filtros.precioMax); // Menor o igual
    }
  }

  // Ejecutar consulta
  const productos = await prisma.producto.findMany({
    where,
    include: {
      tienda: {
        select: {
          id: true,
          nombre: true,
          logo_url: true,
        },
      },
      categoria: {
        select: {
          id: true,
          nombre: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return productos;
}

export async function obtenerProductoPorId(id) {
  const producto = await prisma.producto.findFirst({
    where: {
      id: id,
      estado: "activo",
    },
    include: {
      tienda: {
        select: {
          id: true,
          nombre: true,
          logo_url: true,
        },
      },
      categoria: {
        select: {
          id: true,
          nombre: true,
        },
      },
    },
  });
  if (!producto) {
    throw new Error("Producto no encontrado");
  }

  return producto;
}

export async function obtenerProductoPorTienda(tiendaId) {
  const productos = await prisma.producto.findMany({
    where: {
      tienda: {
        is: {
          id: tiendaId,
        },
      },
    },
    include: {
      categoria: {
        select: {
          id: true,
          nombre: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return productos;
}

export async function crearProducto(data, tiendaId) {
  //datos para crear el producto
  const { nombre, descripcion, precio, estado, categoriaId, imagenUrl } = data;

  if (!nombre || !precio) {
    throw new Error("Nombre y precio son requeridos");
  }

  if (precio <= 0) {
    throw new Error("El precio debe ser mayor a 0");
  }

  const nuevoProducto = await prisma.producto.create({
    data: {
      nombre: nombre,
      descripcion: descripcion,
      estado: estado || "activo",
      precio: precio,
      imagen_url: imagenUrl || null,
      tienda: {
        connect: { id: tiendaId },
      },
      ...(categoriaId && {
        categoria: {
          connect: { id: categoriaId },
        },
      }),
    },
    include: {
      tienda: true,
      categoria: true,
    },
  });
  return {
    mensaje: "Producto creado correctamente.",
    productoId: nuevoProducto.id,
    producto: nuevoProducto,
  };
}

export async function actualizarProducto(id, data, tiendaId) {
  const { nombre, descripcion, precio, estado, categoriaId, imagenUrl } = data;
  const productoExistente = await prisma.producto.findFirst({
    where: {
      id: id,
      tienda: {
        is: {
          id: tiendaId,
        },
      },
    },
  });

  if (!productoExistente) {
    throw new Error("Producto no encontrado o no asociado a tu tienda.");
  }
  const dataActualizar = {};
  if (nombre !== undefined) dataActualizar.nombre = nombre;
  if (descripcion !== undefined) dataActualizar.descripcion = descripcion;
  if (precio !== undefined) dataActualizar.precio = parseFloat(precio);
  if (estado !== undefined) dataActualizar.estado = estado;
  if (imagenUrl !== undefined) dataActualizar.imagen_url = imagenUrl;
  if (categoriaId !== undefined) {
    dataActualizar.categoria = {
      connect: { id: categoriaId },
    };
  }
  const productoActualizado = await prisma.producto.update({
    where: { id },
    data: dataActualizar,
    include: {
      tienda: {
        select: {
          id: true,
          nombre: true,
        },
      },
      categoria: {
        select: {
          id: true,
          nombre: true,
        },
      },
    },
  });

  return productoActualizado;
}

export async function eliminarProducto(id, tiendaId) {
  const productoExistente = await prisma.producto.findFirst({
    where: {
      id: id,
      tienda: {
        is: {
          id: tiendaId,
        },
      },
    },
  });
  if (!productoExistente) {
    throw new Error("Producto no encontrado o no asociado con tu tienda.");
  }
  const productoEliminado = await prisma.producto.update({
    where: { id },
    data: {
      estado: "inactivo", //  Soft delete
    },
  });
  return {
    mensaje: "Producto eliminado correctamente.",
    productoId: productoEliminado.id,
  };
}

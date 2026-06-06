# Módulo: `products`

Este módulo gestiona toda la lógica de negocio y las rutas de la aplicación relacionadas con el catálogo de productos. Sigue la arquitectura de *separación de preocupaciones* (Controller, Service, Routes), asegurando que la capa de presentación (Controller) no interactúe directamente con la lógica de negocio (Service).

**Ubicación en el proyecto:** `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products`

***

## 📁 Estructura de Archivos (File Structure)

El módulo está dividido en varios archivos especializados para mantener la modularidad y la mantenibilidad del código.

| Archivo | Tipo | Propósito General |
| :--- | :--- | :--- |
| `products.controller.js` | JavaScript | Maneja las peticiones HTTP entrantes. Implementa la capa de presentación, recibiendo la solicitud y llamando al servicio correspondiente. |
| `products.routes.js` | JavaScript | Define las rutas de la API (endpoints). Conecta los verbos HTTP y los paths con las funciones del controlador. |
| `products.service.js` | JavaScript | Contiene la lógica de negocio principal. Interactúa con la capa de datos (implícitamente) y realiza las transacciones de productos. |
| `products.validator.js` | JavaScript | Almacena los esquemas de validación (usando bibliotecas como Joi o similar) para asegurar que los datos de entrada sean válidos antes de procesarlos. |

***

## 🚀 Funcionalidades (Functions)

Esta sección detalla las funciones implementadas dentro de los archivos, separando claramente las responsabilidades entre el controlador y el servicio.

### ⚙️ `products.controller.js` (Controlador - Lógica de Peticiones)

| Nombre | Tipo | Asíncrono | Función (Rol) |
| :--- | :--- | :--- | :--- |
| `crear` | arrow | Sí | Maneja la creación de un producto (requiere validación y llamada al servicio). |
| `listarPublicos` | arrow | Sí | Recupera y lista todos los productos visibles al público en general. |
| `listar` | arrow | Sí | Lista productos con parámetros de paginación o filtrado avanzado. |
| `obtenerPorId` | arrow | Sí | Recupera un producto específico utilizando su ID único. |
| `obtenerPorTienda` | arrow | Sí | Recupera productos filtrados o disponibles específicamente para una tienda dada. |
| `actualizar` | arrow | Sí | Implementa la lógica para modificar un producto existente. |
| `eliminar` | arrow | Sí | Maneja la eliminación lógica o física de un producto por ID. |

### 💼 `products.service.js` (Servicio - Lógica de Negocio)

| Nombre | Tipo | Asíncrono | Función (Rol) |
| :--- | :--- | :--- | :--- |
| `obtenerProductos` | function | Sí | Obtiene la colección de productos. |
| `obtenerProductoPorId` | function | Sí | Busca un producto individual por su identificador. |
| `obtenerProductoPorTienda` | function | Sí | Busca productos específicos de una tienda dada. |
| `crearProducto` | function | Sí | Ejecuta la creación de un nuevo registro de producto. |
| `actualizarProducto` | function | Sí | Ejecuta la actualización de los datos de un producto existente. |
| `eliminarProducto` | function | Sí | Ejecuta la eliminación de un producto. |

***

## ✨ Exportaciones (Exports)

Aquí se listan los módulos y constantes que pueden ser importados desde el proyecto.

| Nombre | Tipo | Archivo Origen | Tipo de Exportación | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| `crear` | `const` | `products.controller.js` | Función | Exporta la lógica para crear un producto en la capa de presentación. |
| `listarPublicos` | `const` | `products.controller.js` | Función | Exporta la lógica para obtener productos públicos. |
| `listar` | `const` | `products.controller.js` | Función | Exporta la lógica de listado de productos general. |
| `obtenerPorId` | `const` | `products.controller.js` | Función | Obtiene productos por ID en el controlador. |
| `obtenerPorTienda` | `const` | `products.controller.js` | Función | Obtiene productos filtrados por ID de tienda en el controlador. |
| `actualizar` | `const` | `products.controller.js` | Función | Controlador para actualizar un producto. |
| `eliminar` | `const` | `products.controller.js` | Función | Controlador para eliminar un producto. |
| `router` | `const` | `products.routes.js` | Objeto | Exporta el enrutador principal para el módulo de productos. |
| `obtenerProductos` | `function` | `products.service.js` | Función | Función de servicio para obtener productos. |
| `obtenerProductoPorId` | `function` | `products.service.js` | Función | Servicio para obtener producto por ID. |
| `obtenerProductoPorTienda` | `function` | `products.service.js` | Función | Servicio para obtener producto por tienda. |
| `crearProducto` | `function` | `products.service.js` | Función | Servicio para crear un producto. |
| `actualizarProducto` | `function` | `products.service.js` | Función | Servicio para actualizar un producto. |
| `eliminarProducto` | `function` | `products.service.js` | Función | Servicio para eliminar un producto. |
| `uuidSchema` | `const` | `products.validator.js` | Constante | Esquema de validación para UUIDs. |
| `createProductsSchema` | `const` | `products.validator.js` | Constante | Esquema de validación para la creación de un producto. |
| `editProductoSchema` | `const` | `products.validator.js` | Constante | Esquema de validación para la edición de un producto. |

***

## 🌐 Rutas de la API (Routes)

Este módulo define los puntos de acceso (endpoints) de la API para la gestión de productos. Cada ruta está asociada a un método HTTP y está definida en `products.routes.js`.

| Método HTTP | Path (URL) | Archivo | Descripción de la Acción |
| :--- | :--- | :--- | :--- |
| `GET` | `/public` | `products.routes.js` | Obtiene la lista de productos disponibles para cualquier usuario (Público). |
| `GET` | `/` | `products.routes.js` | Endpoint base para listar todos los productos (puede incluir filtros/paginación). |
| `GET` | `/tienda/:tiendaId` | `products.routes.js` | Lista productos de una tienda específica, utilizando `tiendaId` como parámetro. |
| `GET` | `/:id` | `products.routes.js` | Obtiene un producto específico utilizando su identificador único (`id`). |
| `POST` | `/` | `products.routes.js` | Permite crear un nuevo producto. |
| `PUT` | `/:id` | `products.routes.js` | Actualiza completamente un producto existente usando su ID. |
| `DELETE` | `/:id` | `products.routes.js` | Elimina un producto específico por su ID. |
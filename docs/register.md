# Módulo: Gestión de Registro de Usuarios (`register`)

Este módulo está diseñado para encapsular y gestionar todas las funcionalidades relacionadas con el proceso de registro y verificación de usuarios, tanto clientes como tiendas, dentro del sistema de autenticación. Su estructura separa claramente las responsabilidades de la capa de controladores (manejo de peticiones HTTP), la capa de servicios (lógica de negocio) y la capa de validación.

**Ubicación:** `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/register`

---

## 📁 Estructura de Archivos

El módulo `register` se compone de cuatro archivos JavaScript especializados, cada uno con un propósito bien definido dentro del flujo de autenticación.

| Archivo | Propósito | Descripción |
| :--- | :--- | :--- |
| `register.controller.js` | Manejo de peticiones HTTP | Contiene la lógica inicial de la capa de presentación, recibiendo peticiones y llamando a la capa de servicios. |
| `register.routes.js` | Definición de rutas | Define los endpoints RESTful para el registro y la verificación de usuarios. |
| `register.service.js` | Lógica de Negocio | Aloja la lógica principal de negocio (ej. hashear contraseñas, interactuar con la base de datos) para los procesos de registro. |
| `register.validator.js` | Validación de Esquemas | Define los esquemas de validación (schemas) para asegurar la integridad de los datos de entrada antes de su procesamiento. |

---

## ⚙️ Funciones Disponibles

Las funciones están agrupadas según la capa de la arquitectura en la que operan:

### 💡 Controlador (`register.controller.js`)
Estas funciones manejan la interacción directa con el protocolo HTTP y orquestan la llamada a la lógica de negocio.

| Nombre | Tipo | Asíncrono | Descripción |
| :--- | :--- | :--- | :--- |
| `registerClient` | *Arrow Function* | Sí | Controla el proceso de registro de un nuevo cliente. |
| `verifyClient` | *Arrow Function* | Sí | Controla la verificación de credenciales de un cliente existente. |
| `registerTienda` | *Arrow Function* | Sí | Controla el proceso de registro de una nueva tienda. |
| `verifyTienda` | *Arrow Function* | Sí | Controla la verificación de credenciales de una tienda existente. |

### 🛠️ Servicio (`register.service.js`)
Estas funciones encapsulan la lógica de negocio central, interactuando con los datos sin conocer el contexto de una petición HTTP.

| Nombre | Tipo | Asíncrono | Descripción |
| :--- | :--- | :--- | :--- |
| `registrarCliente` | Función | Sí | Ejecuta la lógica para registrar un cliente en el sistema. |
| `verificarCliente` | Función | Sí | Compara y verifica las credenciales de un cliente contra los datos almacenados. |
| `registrarTienda` | Función | Sí | Ejecuta la lógica para registrar una tienda en el sistema. |
| `verificarTienda` | Función | Sí | Compara y verifica las credenciales de una tienda contra los datos almacenados. |

---

## 📦 Exportaciones Principales

Esta tabla detalla las constantes y funciones que pueden ser importadas y utilizadas por otros módulos de la aplicación.

| Nombre | Tipo | Módulo de Origen | Uso/Propósito |
| :--- | :--- | :--- | :--- |
| `registerClient` | `const` | `register.controller.js` | Exporta el controlador para el registro de clientes. |
| `verifyClient` | `const` | `register.controller.js` | Exporta el controlador para la verificación de clientes. |
| `registerTienda` | `const` | `register.controller.js` | Exporta el controlador para el registro de tiendas. |
| `verifyTienda` | `const` | `register.controller.js` | Exporta el controlador para la verificación de tiendas. |
| `router` | `const` | `register.routes.js` | Exporta el router principal que agrupa todos los endpoints de este módulo. |
| `registrarCliente` | Función | `register.service.js` | Acceso a la función de negocio para registrar clientes. |
| `verificarCliente` | Función | `register.service.js` | Acceso a la función de negocio para verificar clientes. |
| `registrarTienda` | Función | `register.service.js` | Acceso a la función de negocio para registrar tiendas. |
| `verificarTienda` | Función | `register.service.js` | Acceso a la función de negocio para verificar tiendas. |
| `registerClienteSchema` | `const` | `register.validator.js` | Esquema de validación para datos de clientes. |
| `registerTiendaSchema` | `const` | `register.validator.js` | Esquema de validación para datos de tiendas. |

---

## 🌐 Rutas de Acceso (Endpoints)

Este módulo expone los siguientes endpoints de la API para manejar el flujo de registro y verificación.

| Método | Ruta | Archivo de Definición | Descripción |
| :--- | :--- | :--- | :--- |
| **`POST`** | `/register-client` | `register.routes.js` | Endpoint para ejecutar el registro de un nuevo cliente. |
| **`GET`** | `/verify-client` | `register.routes.js` | Endpoint para verificar la identidad de un cliente. |
| **`POST`** | `/register-tienda` | `register.routes.js` | Endpoint para ejecutar el registro de una nueva tienda. |
| **`GET`** | `/verify-tienda` | `register.routes.js` | Endpoint para verificar la identidad de una tienda. |
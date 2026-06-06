# 🔐 Módulo: Autenticación (Login)

## 📋 Resumen del Módulo

Este módulo es responsable de gestionar la lógica de autenticación y el proceso de inicio de sesión para diferentes tipos de usuarios dentro de la aplicación (clientes individuales y tiendas/puntos de venta). Implementa una arquitectura de capas (Controller, Service, Validator) para asegurar la separación de responsabilidades y mantener la lógica de negocio limpia y reutilizable.

**Ubicación del Código:** `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/login`

---

## 📂 Estructura de Archivos (File Structure)

El módulo está dividido en varios archivos, cada uno cumpliendo un rol específico dentro del ciclo de petición-respuesta, siguiendo una estructura de arquitectura en capas (MVC).

| Archivo | Propósito | Descripción |
| :--- | :--- | :--- |
| `login.controller.js` | Controlador | Maneja la recepción de peticiones HTTP (rutas). Se encarga de validar la petición inicial y de delegar la lógica de negocio al `Service`. |
| `login.routes.js` | Rutas | Define los *endpoints* de la API. Es el punto de entrada que mapea una URL a la función del controlador correspondiente. |
| `login.service.js` | Servicio | Contiene la lógica de negocio principal. Implementa la lógica de autenticación (ej. verificar credenciales, generar tokens) sin preocuparse por detalles HTTP. |
| `login.validator.js` | Validador | Define los esquemas de validación de entrada de datos (schemas). Asegura que los datos recibidos cumplan con el formato y requisitos esperados antes de procesarse. |

---

## ⚙️ Funcionalidades Expostas (Functions)

Este panel lista las funciones clave definidas en el módulo, indicando su tipo y su naturaleza asíncrona.

| Nombre | Tipo | Asíncrono | Archivo | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| `loginClientController` | Función | Sí | `login.controller.js` | Controlador responsable de gestionar el flujo de inicio de sesión para clientes. |
| `loginTiendaController` | Función | Sí | `login.controller.js` | Controlador responsable de gestionar el flujo de inicio de sesión para tiendas/puntos de venta. |
| `loginCliente` | Función | Sí | `login.service.js` | Lógica de negocio para autenticar a un cliente (servicio principal). |
| `loginTienda` | Función | Sí | `login.service.js` | Lógica de negocio para autenticar a una tienda (servicio principal). |

---

## 📤 Exportaciones Clave (Exports)

Los siguientes elementos son las constantes, objetos o funciones que el módulo hace disponibles para otros módulos de la aplicación.

| Nombre | Tipo | Archivo | Descripción |
| :--- | :--- | :--- | :--- |
| `loginClientController` | Función | `login.controller.js` | Exporta la función del controlador para clientes. |
| `loginTiendaController` | Función | `login.controller.js` | Exporta la función del controlador para tiendas. |
| `router` | Constante | `login.routes.js` | Exporta el *router* configurado, que agrupa todas las rutas de login. |
| `loginCliente` | Función | `login.service.js` | Exporta la función de servicio para el login de clientes. |
| `loginTienda` | Función | `login.service.js` | Exporta la función de servicio para el login de tiendas. |
| `loginTiendaSchema` | Constante | `login.validator.js` | Esquema de validación de datos requerido para el login de tiendas. |
| `loginClienteSchema` | Constante | `login.validator.js` | Esquema de validación de datos requerido para el login de clientes. |

---

## 🛣️ Rutas de la API (Routes)

Definen los *endpoints* HTTP accesibles para ejecutar la lógica de autenticación del módulo.

| Método | Ruta (Path) | Archivo | Descripción |
| :--- | :--- | :--- | :--- |
| `POST` | `/login-cliente` | `login.routes.js` | Endpoint para procesar el inicio de sesión de un usuario cliente. |
| `POST` | `/login-tienda` | `login.routes.js` | Endpoint para procesar el inicio de sesión de un punto de venta o tienda. |
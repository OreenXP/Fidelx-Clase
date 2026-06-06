# 🚪 Módulo de Logout

Este módulo gestiona la funcionalidad de cierre de sesión (logout) de la aplicación. Su responsabilidad principal es manejar la invalidación de sesiones y asegurar que el usuario no esté autenticado después de completar el proceso de salida.

**Ubicación en el Código:**
`/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/logout`

---

## 📂 Estructura de Archivos

El módulo está dividido en tres archivos clave, siguiendo las buenas prácticas de arquitectura de capas (Controller, Service, Routes).

| Archivo | Propósito | Descripción |
| :--- | :--- | :--- |
| `logout.controller.js` | Controlador de Lógica | Contiene la lógica de presentación para manejar las peticiones entrantes (`request`) y orquestar la llamada al servicio. |
| `logout.routes.js` | Rutas API | Define el endpoint HTTP (`POST /`) y lo mapea al controlador correspondiente. |
| `logout.service.js` | Servicio de Negocio | Implementa la lógica de negocio real, como la eliminación de tokens de sesión o la invalidación de la sesión en la base de datos. |

---

## ⚙️ Definición de Componentes

### Funciones Implementadas

Estas tablas detallan las funciones accesibles dentro del módulo.

| Nombre | Tipo | Asíncrono | Archivo | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| `logoutController` | Arrow | Sí | `logout.controller.js` | Función de control utilizada para manejar el flujo HTTP del logout. |
| `logout` | Arrow | Sí | `logout.service.js` | Función principal del servicio de negocio encargada de procesar la invalidación de la sesión. |

### Exportaciones de Módulo

Detalla cómo los componentes son expuestos a otros módulos de la aplicación.

| Nombre | Tipo de Exportación | Archivo Fuente |
| :--- | :--- | :--- |
| `logoutController` | Nombrada | `logout.controller.js` |
| `default` | Por Defecto | `logout.routes.js` |
| `logout` | Nombrada | `logout.service.js` |

---

## 🌐 Rutas API

Define cómo el módulo es accesible a través de las peticiones HTTP.

| Método HTTP | Path | Archivo de Configuración | Propósito |
| :--- | :--- | :--- | :--- |
| `POST` | `/` | `logout.routes.js` | Endpoint para enviar una petición de cierre de sesión, lo que desencadena la lógica de invalidez de la sesión. |
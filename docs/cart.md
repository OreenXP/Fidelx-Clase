# Módulo: Carrito de Compras (`cart`)

Este módulo es responsable de gestionar toda la lógica de negocio relacionada con el carrito de compras de los usuarios. Aborda el ciclo de vida completo del carrito, desde la adición de productos hasta el cálculo del total y la persistencia de los datos en la base de datos.

**Ubicación Física (Location):** `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/cart`

---

## 📜 Estructura de Archivos y Responsabilidades

El módulo `cart` sigue el patrón de diseño de arquitectura en capas (Controller-Service-Validator) para garantizar una separación limpia de responsabilidades (SoC).

| Archivo | Tipo | Propósito | Descripción Detallada |
| :--- | :--- | :--- | :--- |
| `cart.controller.js` | JavaScript | Controlador de peticiones (Request Handler) | Gestiona la entrada y salida de datos HTTP. Recibe la petición, delega la tarea al servicio y formatea la respuesta para el cliente. Es la capa de interfaz del módulo. |
| `cart.routes.js` | JavaScript | Definición de Rutas (Endpoints) | Define los *endpoints* API. Conecta las URLs específicas (ej: `GET /cart`, `POST /cart/add`) con los métodos apropiados del controlador. |
| `cart.service.js` | JavaScript | Lógica de Negocio (Business Logic) | Contiene la lógica central del módulo. Este archivo interactúa directamente con la capa de datos (Base de Datos) para procesar acciones como calcular subtotales, actualizar cantidades o eliminar artículos. |
| `cart.validator.js` | JavaScript | Validación de Entrada (Input Validation) | Se encarga de validar la integridad y el formato de los datos recibidos (p. ej., asegurando que un `itemId` sea un entero o que la cantidad sea positiva) antes de que la lógica de negocio pueda ejecutarse. |

---

## 🧩 Resumen Arquitectónico (Flujo de Operación)

El proceso de manejo de un artículo en el carrito sigue el siguiente flujo conceptual:

1.  **Rutas (`cart.routes.js`):** Capturan una petición HTTP entrante.
2.  **Controlador (`cart.controller.js`):** Recibe la petición y llama a la función correspondiente del servicio.
3.  **Validación (`cart.validator.js`):** **(Paso Crítico)** Verifica que los parámetros de la petición cumplan con las reglas de negocio. Si la validación falla, se detiene el proceso y se devuelve un error 400.
4.  **Servicio (`cart.service.js`):** Si la validación es exitosa, la lógica de negocio se ejecuta. Aquí se interactúa con la fuente de datos para manipular el estado del carrito.
5.  **Respuesta:** El controlador captura el resultado del servicio y devuelve la respuesta final (JSON) al cliente.
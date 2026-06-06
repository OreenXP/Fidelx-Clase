```markdown
# Módulo de Lógica del Cliente (JavaScript)

Este módulo centraliza la lógica de negocio del *frontend*, manejando interacciones con la API, validaciones de datos de usuario y la manipulación del estado de la interfaz de usuario (UI).

**Ubicación del Código:** `/home/tadeofed/Escritorio/Fidelx-Clase/frontend/js`

---

## 📂 Estructura de Archivos

Esta sección detalla los archivos que componen la lógica de cliente.

| Archivo | Propósito | Descripción |
| :--- | :--- | :--- |
| `main.js` | Módulo JavaScript principal | Contiene la mayor parte de las funciones de lógica y utilidades necesarias para el funcionamiento del componente. |

---

## ⚙️ Funcionalidades (JavaScript)

La siguiente tabla lista todas las funciones disponibles dentro del módulo, junto con sus características y áreas de uso.

| Nombre | Tipo | Asíncrono | Archivo | Propósito/Descripción |
| :--- | :--- | :--- | :--- | :--- |
| `apiRequest` | Función | Sí | `main.js` | Gestiona la comunicación con la API. Se utiliza para realizar llamadas de datos que requieren espera (promesas). |
| `showAlert` | Función | No | `main.js` | Muestra mensajes informativos o de éxito al usuario (ej. alertas de sesión). |
| `hideAlert` | Función | No | `main.js` | Oculta cualquier alerta de mensaje visible previamente. |
| `setLoading` | Función | No | `main.js` | Controla la visibilidad del estado de carga (deshabilita/activa indicadores de espera). |
| `togglePassword` | Función | No | `main.js` | Alterna la visibilidad de un campo de contraseña (mostrar/ocultar). |
| `validateEmail` | Función | No | `main.js` | Valida el formato de una cadena de texto para asegurar que cumple con el patrón de un correo electrónico. |
| `validatePassword` | Función | No | `main.js` | Ejecuta la validación de la fuerza o los requisitos de una contraseña ingresada por el usuario. |
| `showFieldError` | Función | No | `main.js` | Muestra un mensaje de error específico en un campo de formulario cuando la validación falla. |
| `clearFieldError` | Función | No | `main.js` | Elimina o limpia cualquier mensaje de error previamente mostrado en los campos de formulario. |

***

**Nota de Experto:** Se recomienda utilizar `apiRequest` dentro de bloques `try...catch` al consumirlo, dada su naturaleza asíncrona (`yes`). Las funciones de validación (`validateEmail`, `validatePassword`) son críticas para la capa de experiencia de usuario (UX) y deben ser llamadas antes de cualquier intento de `apiRequest`.
```
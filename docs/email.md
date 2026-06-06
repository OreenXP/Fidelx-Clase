# Módulo: Gestión de Correos Electrónicos (Email Service)

Este módulo centraliza toda la lógica de negocio relacionada con el envío de correos electrónicos de notificación dentro de la aplicación. Su objetivo es garantizar una capa de abstracción clara para la gestión de la comunicación por email, separando esta preocupación de otros servicios.

---

**Ubicación del Módulo:**
```
/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/email
```

## 📁 Estructura de Archivos

Este módulo contiene una única unidad de servicio encargada de ejecutar las funcionalidades de envío.

| Archivo | Descripción | Propósito Principal |
| :--- | :--- | :--- |
| `email.service.js` | Módulo JavaScript principal. | Aloja todas las funciones de envío, encapsulando la lógica de las verificaciones de cliente y tienda. |

## 🚀 Funcionalidades Exportables (Functions)

La siguiente tabla detalla las funciones internas que componen el servicio de email. Estas funciones son responsables de crear y enviar correos específicos basados en eventos de la aplicación.

| Nombre de Función | Tipo | Sincrónico/Asíncrono | Archivo | Descripción Contextual |
| :--- | :--- | :--- | :--- | :--- |
| `sendVerificacionCliente` | Arrow Function | Asíncrono (yes) | `email.service.js` | Procesa y envía el correo electrónico de verificación destinado a un cliente específico. |
| `sendVerificacionTienda` | Arrow Function | Asíncrono (yes) | `email.service.js` | Procesa y envía el correo electrónico de verificación destinado a una tienda o negocio. |

## 📦 Exportaciones Públicas (Exports)

Las exportaciones representan las funcionalidades que deben ser consumidas o utilizadas por otros módulos o partes del *backend*. Al exportar estas funciones, se asegura que el resto de la aplicación pueda acceder a la funcionalidad de envío sin conocer la implementación interna.

| Nombre Exportado | Tipo de Exportación | Archivo Fuente | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| `sendVerificacionCliente` | Const (`const`) | `email.service.js` | Debería ser llamado por servicios que requieran verificar la cuenta de un cliente. |
| `sendVerificacionTienda` | Const (`const`) | `email.service.js` | Debería ser llamado por servicios que requieran verificar la identidad de una tienda. |
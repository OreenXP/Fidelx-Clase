# Módulo: `config`

**Ubicación:** `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/config`

## 📝 Descripción del Módulo

El módulo `config` es un repositorio centralizado de la configuración del backend de la aplicación. Su propósito principal es encapsular la lógica de inicialización de servicios críticos (como la conexión a bases de datos y el manejo de *logging*), asegurando que estas dependencias puedan ser importadas y gestionadas de manera uniforme en todo el código de la aplicación.

## 📂 Estructura de Archivos

El módulo contiene los siguientes archivos responsables de distintas áreas de configuración:

| Archivo | Tipo | Propósito Detallado |
| :--- | :--- | :--- |
| `db.js` | Módulo JavaScript | Gestiona y exporta la configuración de conexión a la base de datos. Contiene la lógica de inicialización y el cliente de Prisma. |
| `logger.js` | Módulo JavaScript | Proporciona una instancia de *logger* configurado. Este módulo es responsable de estandarizar el registro de eventos y errores de la aplicación. |

## ⚙️ Exportaciones Disponibles

La configuración del módulo expone varias utilidades y clientes de conexión. Estos son los puntos de acceso (exports) que otros módulos pueden importar:

| Nombre | Tipo de Exportación | Origen del Archivo | Descripción |
| :--- | :--- | :--- | :--- |
| `default` | Exportación por Defecto | `db.js` | Proporciona la configuración o instancia predeterminada relacionada con la base de datos. |
| `prisma` | Exportación Nombrada | `db.js` | Exporta la instancia del cliente ORM de Prisma, permitiendo interactuar directamente con la base de datos. |
| `logger` | Constante (`const`) | `logger.js` | Exporta la instancia del *logger* configurado, que debe ser utilizado para todas las tareas de registro de información (logs). |
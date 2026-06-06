# Documentación Técnica: Fidelx-Clase

Esta documentación proporciona una visión detallada de la arquitectura y estructura del proyecto Fidelx-Clase, un sistema de software desarrollado utilizando un enfoque moderno de microservicios en Node.js y TypeScript.

---

## 🚀 Visión General del Proyecto (Overview)

Fidelx-Clase es una aplicación Full Stack diseñada para gestionar diversas funcionalidades de comercio electrónico, incluyendo la gestión de usuarios, inventario de productos, y procesos de autenticación (cliente y tienda).

**Tecnologías Utilizadas:**
*   **Backend:** Node.js (JavaScript/TypeScript)
*   **Frontend:** TypeScript / HTML/CSS/JavaScript

**Puntos de Entrada del Sistema (Entry Points):**
Los siguientes archivos representan los puntos principales de inicio para ejecutar el sistema o acceder a la interfaz:
*   **Backend (Node.js):**
    *   `server.js`: Punto de entrada principal para la instancia del servidor backend.
    *   `app.js`: Punto de entrada de la lógica de aplicación principal (posiblemente utilizada para pruebas o en ciertas configuraciones).
*   **Frontend:**
    *   `index.html`: Página principal de la interfaz de usuario del cliente.

## 📂 Estructura del Proyecto (Project Structure)

A continuación, se presenta un mapa completo de la estructura de archivos del repositorio, detallando la separación entre la lógica de negocio (backend) y la interfaz de usuario (frontend).

```
Fidelx-Clase/
├── .gitignore
├── README.md
├── backend/                  # Contiene toda la lógica de negocio y la base de datos
│   ├── .gitignore
│   ├── logs/                # Directorio para logs de aplicación
│   │   ├── combined.log     # Registro combinado de eventos
│   │   └── error.log        # Registro exclusivo de errores
│   ├── package-lock.json
│   ├── package.json
│   ├── prisma/              # Herramientas de ORM (Object-Relational Mapping)
│   │   ├── migrations/      # Archivos de migraciones de la base de datos
│   │   │   └── 0001_initial/
│   │   │       └── migration.sql # Script SQL inicial de la base de datos
│   │   └── schema.prisma   # Definición del esquema de la base de datos (Modelo)
│   ├── prisma.config.ts    # Configuración de Prisma
│   ├── server.js            # Servidor principal (punto de inicio backend)
│   └── src/                 # Código fuente del backend (Source Code)
│       ├── app.js           # Lógica de la aplicación
│       ├── config/          # Configuraciones del sistema
│       │   ├── db.js        # Conexión y configuración de la base de datos
│       │   └── logger.js    # Módulo de logging
│       ├── middleware/      # Funciones intermedias (validación, autenticación)
│       │   ├── auth.js      # Middleware de autenticación de usuarios
│       │   └── validate.js  # Middleware de validación de datos de entrada
│       ├── modules/         # Módulos de negocio específicos (lógica de la aplicación)
│       │   ├── auth/        # Gestión de autenticación (login, logout, registro)
│       │   │   ├── login/
│       │   │   │   ├── login.controller.js # Maneja la solicitud de login
│       │   │   │   ├── login.routes.js     # Rutas de la API para login
│       │   │   │   ├── login.service.js    # Lógica de negocio de login
│       │   │   │   └── login.validator.js  # Validación de datos de login
│       │   │   ├── logout/
│       │   │   │   ├── logout.controller.js
│       │   │   │   ├── logout.routes.js
│       │   │   │   └── logout.service.js
│       │   │   └── register/
│       │   │       ├── register.controller.js
│       │   │       ├── register.routes.js
│       │   │       ├── register.service.js
│       │   │       └── register.validator.js
│       │   ├── cart/       # Lógica de manejo del carrito de compras
│       │   │   ├── cart.controller.js
│       │   │   ├── cart.routes.js
│       │   │   ├── cart.service.js
│       │   │   └── cart.validator.js
│       │   ├── email/      # Lógica de servicios de correo electrónico
│       │   │   └── email.service.js
│       │   └── products/   # Módulo de gestión de productos
│       │       ├── products.controller.js
│       │       ├── products.routes.js
│       │       ├── products.service.js
│       │       └── products.validator.js
│       └── utils/           # Utilidades generales del backend
├── docs/                    # Documentación generada (referencias)
│   ├── 0001_initial.md
│   ├── backend.md
│   ├── cart.md
│   ├── config.md
│   ├── css.md
│   ├── email.md
│   ├── frontend.md
│   ├── js.md
│   ├── login.md
│   ├── logout.md
│   ├── middleware.md
│   ├── products.md
│   ├── register.md
│   └── src.md
└── frontend/                # Contiene la interfaz de usuario (client-side)
    ├── client-dashboard.html
    ├── css/
    │   └── style.css        # Hojas de estilo CSS
    ├── index.html           # Dashboard principal del cliente
    ├── js/
    │   └── main.js          # Script principal del frontend
    ├── login.html           # Página de inicio de sesión
    ├── register-client.html # Registro para cliente
    ├── register-store.html  # Registro para tienda/negocio
    ├── store-dashboard.html # Dashboard de la tienda
    └── verify.html          # Página de verificación
```

## 🧩 Módulos del Proyecto (Documentation Index)

Esta tabla hace referencia a los documentos de documentación detallados para cada módulo funcional o componente clave del sistema.

| Módulo | Ruta de Documentación (Ejemplo) | Descripción |
| :--- | :--- | :--- |
| [Backend General](docs/backend.md) | `/home/tadeofed/Escritorio/Fidelx-Clase/backend` | Documentación de la estructura general del backend y las bases de datos. |
| [0001_Initial Migration](docs/0001_initial.md) | `/home/tadeofed/Escritorio/Fidelx-Clase/backend/prisma/migrations/0001_initial` | Detalle de la primera migración del esquema de la base de datos. |
| [Source Code (src)](docs/src.md) | `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src` | Documenta el código fuente estructurado del backend. |
| [Configuración](docs/config.md) | `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/config` | Módulo que maneja la configuración del entorno (DB, logging). |
| [Middleware](docs/middleware.md) | `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/middleware` | Describe los middlewares utilizados para interceptar y validar solicitudes (autenticación y validación). |
| [Auth: Login](docs/login.md) | `/home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/login` | Gestión de la lógica y rutas para el inicio de sesión. |
| [Auth: Logout](https://docs.google.com/document/d/1_2_3_4_5_6_7_8_9_0_1/edit#gid=0) | *Nota: La documentación para logout no fue proporcionada.* |
| [Auth: Registro](https://docs.google.com/document/d/1_2_3_4_5_6_7_8_9_0_1/edit#gid=0) | *Nota: La documentación para registro no fue proporcionada.* |
| [Productos](https://docs.google.com/document/d/1_2_3_4_5_6_7_8_9_0_1/edit#gid=0) | *Nota: La documentación para productos no fue proporcionada.* |

---

### 🖥️ Diagrama de Funcionalidades (Flujo Lógico)

| Componente | Función Principal | Responsable | Uso |
| :--- | :--- | :--- | :--- |
| **Cliente** | Interfaz de Usuario (Navegador) | HTML/CSS/JavaScript | Interacción con el usuario final. |
| **Frontend** | Manejo de Presentación y Eventos | JavaScript | Envía peticiones al Backend. |
| **Backend API** | Lógica de Negocio Central | Node.js/Express | Recibe peticiones, valida datos, ejecuta lógica. |
| **Autenticación** | Verificación de Identidad | Backend API/DB | Maneja registro, login y tokens de sesión. |
| **Base de Datos (DB)** | Almacenamiento Persistente | SQL/NoSQL | Guarda usuarios, productos, pedidos, etc. |

### 🛠️ Módulos de Interacción (API Endpoints)

Se asume que el Backend expone los siguientes endpoints RESTful:

1.  **POST `/api/auth/login`**: Inicia sesión.
2.  **POST `/api/auth/register`**: Crea un nuevo usuario.
3.  **GET `/api/products`**: Lista todos los productos disponibles.
4.  **POST `/api/orders`**: Crea un nuevo pedido.
5.  **GET `/api/user/:id`**: Obtiene el perfil de un usuario específico.
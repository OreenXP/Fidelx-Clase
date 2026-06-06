# Fidelx-Clase


## Overview

**Technologies:** Node.js, TypeScript, Frontend

**Entry points:**
- Node.js → server.js
- Node.js → app.js
- Frontend → index.html

## Project Structure

```
Fidelx-Clase/
├── .gitignore
├── backend
│   ├── .gitignore
│   ├── logs
│   │   ├── combined.log
│   │   └── error.log
│   ├── package-lock.json
│   ├── package.json
│   ├── prisma
│   │   ├── migrations
│   │   │   └── 0001_initial
│   │   │       └── migration.sql
│   │   └── schema.prisma
│   ├── prisma.config.ts
│   ├── server.js
│   └── src
│       ├── app.js
│       ├── config
│       │   ├── db.js
│       │   └── logger.js
│       ├── middleware
│       │   ├── auth.js
│       │   └── validate.js
│       ├── modules
│       │   ├── auth
│       │   │   ├── login
│       │   │   │   ├── login.controller.js
│       │   │   │   ├── login.routes.js
│       │   │   │   ├── login.service.js
│       │   │   │   └── login.validator.js
│       │   │   ├── logout
│       │   │   │   ├── logout.controller.js
│       │   │   │   ├── logout.routes.js
│       │   │   │   └── logout.service.js
│       │   │   └── register
│       │   │       ├── register.controller.js
│       │   │       ├── register.routes.js
│       │   │       ├── register.service.js
│       │   │       └── register.validator.js
│       │   ├── cart
│       │   │   ├── cart.controller.js
│       │   │   ├── cart.routes.js
│       │   │   ├── cart.service.js
│       │   │   └── cart.validator.js
│       │   ├── email
│       │   │   └── email.service.js
│       │   └── products
│       │       ├── products.controller.js
│       │       ├── products.routes.js
│       │       ├── products.service.js
│       │       └── products.validator.js
│       └── utils
└── frontend
    ├── client-dashboard.html
    ├── css
    │   └── style.css
    ├── index.html
    ├── js
    │   └── main.js
    ├── login.html
    ├── register-client.html
    ├── register-store.html
    ├── store-dashboard.html
    └── verify.html```

## Modules

| Module | Path | Files |
|--------|------|-------|
| [backend](docs/backend.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend | 2 |
| [0001_initial](docs/0001_initial.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/prisma/migrations/0001_initial | 1 |
| [src](docs/src.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src | 1 |
| [config](docs/config.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/config | 2 |
| [middleware](docs/middleware.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/middleware | 2 |
| [login](docs/login.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/login | 4 |
| [logout](docs/logout.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/logout | 3 |
| [register](docs/register.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/register | 4 |
| [cart](docs/cart.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/cart | 4 |
| [email](docs/email.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/email | 1 |
| [products](docs/products.md) | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products | 4 |
| [frontend](docs/frontend.md) | /home/tadeofed/Escritorio/Fidelx-Clase/frontend | 7 |
| [css](docs/css.md) | /home/tadeofed/Escritorio/Fidelx-Clase/frontend/css | 1 |
| [js](docs/js.md) | /home/tadeofed/Escritorio/Fidelx-Clase/frontend/js | 1 |

## API Endpoints

| Method | Path | File |
|--------|------|------|
| GET | /health | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/app.js |
| POST | /login-cliente | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/login/login.routes.js |
| POST | /login-tienda | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/login/login.routes.js |
| POST | / | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/logout/logout.routes.js |
| POST | /register-client | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/register/register.routes.js |
| GET | /verify-client | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/register/register.routes.js |
| POST | /register-tienda | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/register/register.routes.js |
| GET | /verify-tienda | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/auth/register/register.routes.js |
| GET | /public | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products/products.routes.js |
| GET | / | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products/products.routes.js |
| GET | /tienda/:tiendaId | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products/products.routes.js |
| GET | /:id | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products/products.routes.js |
| POST | / | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products/products.routes.js |
| PUT | /:id | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products/products.routes.js |
| DELETE | /:id | /home/tadeofed/Escritorio/Fidelx-Clase/backend/src/modules/products/products.routes.js |
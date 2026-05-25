import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { router as authRegisterRouter } from "./modules/auth/register/register.routes.js";
import logoutRoutes from "./modules/auth/logout/logout.routes.js";
import { router as authLoginRouter } from "./modules/auth/login/login.routes.js";
import { router as productsRouter } from "./modules/products/products.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../../frontend")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRegisterRouter);
app.use("/api/logout", logoutRoutes);
app.use("/login", authLoginRouter);
app.use("/products", productsRouter);
export default app;

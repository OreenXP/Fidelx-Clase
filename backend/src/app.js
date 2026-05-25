import express from "express";
import { router as authRegisterRouter } from "./modules/auth/register/register.routes.js";
import logoutRoutes from "./modules/auth/logout/logout.routes.js";
import { router as authLoginRouter } from "./modules/auth/login/login.routes.js";
import { router as productsRouter } from "./modules/products/products.routes.js";
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRegisterRouter);
app.use("/api/logout", logoutRoutes);
app.use("/login", authLoginRouter);
app.use("/products", productsRouter);
export default app;

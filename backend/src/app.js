import express from "express";
import { router as authRegisterRouter } from "./modules/auth/register/register.routes.js";

const app = express();

app.use(express.json());

// Health
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRegisterRouter);

export default app;

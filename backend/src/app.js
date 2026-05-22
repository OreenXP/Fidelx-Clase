import express from "express";
import logoutRoutes from "./modules/auth/logout/logout.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/logout", logoutRoutes);

export default app;

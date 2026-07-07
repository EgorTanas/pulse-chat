import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "PulseChat API is running 🚀",
    version: "0.1.0",
  });
});

export default router;
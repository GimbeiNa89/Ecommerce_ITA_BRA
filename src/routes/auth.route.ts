import { Router } from "express";
import { authByRole } from "../middleware/auth.middleware";
import { login, signup, logout } from "../controllers/auth.controller";

export const router = Router();

router.post("/signup", signup);
router.post("/admin/signup", authByRole("Admin"), signup);
router.post("/login", login);
router.post("/logout", logout);

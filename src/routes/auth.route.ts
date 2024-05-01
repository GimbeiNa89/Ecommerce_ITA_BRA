import { Router } from "express";
import {
  authByRole,
  authByStatus,
  verifyTokenMiddle,
} from "../middleware/auth.middleware";
import {
  login,
  signup,
  logout,
  showUser,
} from "../controllers/auth.controller";

export const router = Router();

router.post("/signup", signup);
router.post("/admin/signup", authByRole("admin"), signup);
router.post("/login", login);
router.get("/logout", authByStatus, logout);
router.get("/user", verifyTokenMiddle, showUser);

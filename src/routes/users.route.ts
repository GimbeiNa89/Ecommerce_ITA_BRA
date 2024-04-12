import { Router } from "express";
import { authByRole } from "../middleware/auth.middleware";
import {
  findAllUsers,
  findUserById,
  deleteUserHandler,
  updateUserHandler,
  // addNewUserHandler,
} from "../controllers/user.controller";

export const router = Router();

router.get("/", authByRole("Admin"),findAllUsers);
router.get("/:id", findUserById);
// router.post("/", addNewUserHandler);
router.put("/:id", authByRole("Admin"),updateUserHandler);
router.delete("/:id", authByRole("Admin") ,deleteUserHandler);

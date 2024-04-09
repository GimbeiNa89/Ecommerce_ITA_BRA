import { Router } from "express";
import {
  findAllUsers,
  findUserById,
  deleteUserHandler,
  updateUserHandler,
  addNewUserHandler,
} from "../controllers/user.controller";

export const router = Router();

router.get("/", findAllUsers);
router.get("/:id", findUserById);
router.post("/", addNewUserHandler);
router.put("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);

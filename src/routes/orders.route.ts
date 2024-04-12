import { Router } from "express";
import { authByRole } from "../middleware/auth.middleware";
import {
  findAllOrders,
  upToDateOrder,
  eliminateOrder,
  findSpecificOrder,
  createNewOrder,
} from "../controllers/order.controller";

export const router = Router();

router.get("/", authByRole("Admin"), findAllOrders);
router.get("/:id", findSpecificOrder);
router.post("/", createNewOrder);
router.put("/:id", authByRole("Admin"), upToDateOrder);
router.delete("/:id", eliminateOrder);

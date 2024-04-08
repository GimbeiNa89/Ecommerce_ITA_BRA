import { Router } from "express";
import {
  findAllOrders,
  upToDateOrder,
  eliminateOrder,
  findSpecificOrder,
  createNewOrder,
} from "../controller/order.controller";

export const router = Router();

router.get("/", findAllOrders);
router.get("/:id", findSpecificOrder);
router.post("/", createNewOrder);
router.put("/:id", upToDateOrder);
router.delete("/:id", eliminateOrder);

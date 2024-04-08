import { Router } from "express";
import {
  getProducts,
  getProductById,
  eliminatedProduct,
  upToDateProduct,
  addProduct,
} from "../controller/product.controller";

export const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", upToDateProduct);
router.delete("/:id", eliminatedProduct);

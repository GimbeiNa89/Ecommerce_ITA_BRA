import { Router } from "express";
import {
  getProducts,
  getProductById,
  eliminatedProduct,
  upToDateProduct,
  addProduct,
} from "../controllers/product.controller";
import { authByRole } from "../middleware/auth.middleware";

export const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", authByRole("Admin"), addProduct);
router.put("/:id", authByRole("Admin"),upToDateProduct);
router.delete("/:id", authByRole("Admin"),eliminatedProduct);

//IL controller implementa la logica, il cervello dell'api.
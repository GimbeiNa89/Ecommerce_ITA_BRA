import { Router } from "express";
import {
  getProducts,
  getProductById,
  eliminatedProduct,
  upToDateProduct,
  addProduct,
} from "../controllers/product.controller";
import { authByRole, authByStatus } from "../middleware/auth.middleware";

export const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", authByRole("admin"), upToDateProduct);
router.delete("/:id", eliminatedProduct);

//IL controller implementa la logica, il cervello dell'api.

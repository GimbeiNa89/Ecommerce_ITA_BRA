import { Router } from "express";
import {
  checkMyCart,
  addNewProduct,
  deleteItem,
} from "../controllers/cart.controller";
import { showCart } from "../services/cart.service";

export const router = Router();

// @TODO: questo è tutto finto, è da implementare per fare almeno un primo giro

router.get("/", checkMyCart);
router.post("/add/:id", addNewProduct);
router.delete("/remove/:id", deleteItem);
router.delete("/clear", (req, res) => {
  res.json({ message: "Cart" });
});

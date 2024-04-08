import { Router } from "express";
import { products } from "../data/products.data";


export const router = Router();

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/:id", (req, res) => {
    res.json()
});

router.post("/", (req, res) => {
    res.send("Product");
});

router.put("/:id", (req, res) => {
    res.send("Product");
});

router.delete("/:id", (req, res) => {
    res.send("Product");
});

import { Router } from "express";

export const router = Router();

// @TODO: questo è tutto finto, è da implementare per fare almeno un primo giro

router.get("/", (req, res) => {
    res.json({ message: "Carts" });
});

router.get("/:id", (req, res) => {
    res.json({ message: "Cart" });
});

router.post("/", (req, res) => {
    res.json({ message: "Cart" });
});

router.put("/:id", (req, res) => {
    res.json({ message: "Cart" });
});

router.delete("/:id", (req, res) => {
    res.json({ message: "Cart" });
});


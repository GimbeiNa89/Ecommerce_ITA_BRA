import { Router } from "express";

export const router = Router();

// @TODO: questo è tutto finto, è da implementare per fare almeno un primo giro

router.get("/", (req, res) => {
    res.json({ message: "Carts" });
});
router.post("/add/:id", (req, res) => {
    res.json({ message: "Cart" });
});

router.delete("/remove/:id", (req, res) => {
    res.json({ message: "Cart" });
});

router.delete("/clear", (req, res) => {
    res.json({ message: "Cart" });
});

router.delete("/:id", (req, res) => {
    res.json({ message: "Cart" });
});


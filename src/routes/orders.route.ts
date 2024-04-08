import { Router } from "express";   

export const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Orders" });
});

router.get("/:id", (req, res) => {
    res.json({ message: "Order" });
});

router.post("/", (req, res) => {
    res.json({ message: "Order" });
});

router.put("/:id", (req, res) => {
    res.json({ message: "Order" });
});

router.delete("/:id", (req, res) => {
    res.json({ message: "Order" });
});

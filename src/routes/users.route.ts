import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
    res.send("Users");
});

router.get("/:id", (req, res) => {
    res.send("User");
});

router.post("/", (req, res) => {
    res.send("User");
});

router.put("/:id", (req, res) => {
    res.send("User");
});

router.delete("/:id", (req, res) => {
    res.send("User");
}); 
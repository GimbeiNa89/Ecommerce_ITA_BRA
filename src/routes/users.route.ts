import { Router } from "express";
import {findAllUsers} from "../controller/user.controller";

export const router = Router();

router.get("/", findAllUsers);

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
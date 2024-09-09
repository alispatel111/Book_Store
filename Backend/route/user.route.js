import express from "express";
// import { signup, login } from "../controller/user.controller.js"; // Ensure this path is correct
import { signup, login } from "../controller/user.controller.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
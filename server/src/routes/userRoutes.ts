import express from "express";
import { registerUser, loginUser, getMe } from "../controllers/userControllers";
import protect from "../middlewares/authHandler";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const authHandler_1 = __importDefault(require("../middlewares/authHandler"));
const router = express_1.default.Router();
router.post("/register", userControllers_1.registerUser);
router.post("/login", userControllers_1.loginUser);
router.get("/me", authHandler_1.default, userControllers_1.getMe);
exports.default = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = __importDefault(require("../models/user.model"));
const registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // incomplete req data
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    // already existed user
    const targetUser = yield user_model_1.default.findOne({
        $or: [{ email }, { username }],
    });
    if (targetUser) {
        res.status(400);
        throw new Error("User already exists");
    }
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    const newUser = yield user_model_1.default.create({
        username,
        email,
        password: hashedPassword,
    });
    if (newUser) {
        res.status(201).json({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            token: generateToken(newUser._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid user data");
    }
}));
exports.registerUser = registerUser;
const loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const targetUser = yield user_model_1.default.findOne({ email });
    if (targetUser && (yield bcryptjs_1.default.compare(password, targetUser.password))) {
        res.json({
            _id: targetUser.id,
            username: targetUser.username,
            email: targetUser.email,
            token: generateToken(targetUser._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
}));
exports.loginUser = loginUser;
const getMe = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req.body;
    try {
        const targetUser = yield user_model_1.default.findOne(user._id);
        if (targetUser)
            res.status(200).json({
                _id: targetUser._id,
                username: targetUser.username,
                email: targetUser.email,
            });
    }
    catch (err) {
        res.status(404);
        throw new Error("Invalid token");
    }
}));
exports.getMe = getMe;
const generateToken = (id) => jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
});

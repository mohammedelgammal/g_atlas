"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const db_1 = __importDefault(require("./config/db"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
dotenv_1.default.config();
(0, db_1.default)();
const connectionPort = process.env.SERVER_CONNECTION_PORT || 5000;
const app = (0, express_1.default)();
app
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: false }))
    .use("/api/users/", userRoutes_1.default)
    .use(errorHandler_1.default)
    .listen(connectionPort, () => {
    console.info(`Server listening on port ${connectionPort}`);
});

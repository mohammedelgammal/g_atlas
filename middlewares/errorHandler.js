"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const errMsg = err.message || "Something went wrong";
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: errMsg,
        stack: process.env.NODE_ENV === "development" ? err.stack : {},
    });
};
exports.default = errorHandler;

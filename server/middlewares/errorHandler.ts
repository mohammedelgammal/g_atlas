import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = res.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  res.status(statusCode);

  res.json({
    status: statusCode,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

export default errorHandler;

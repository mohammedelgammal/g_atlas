import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();
connectDB();
const connectionPort = parseInt(process.env.PORT || "8000");
const app = express();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/api/users/", userRoutes)
  .use(errorHandler)
  .listen(connectionPort, "0.0.0.0", () => {
    console.info(`Server listening on port ${connectionPort}`);
  });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";

dotenv.config();
connectDB();
const connectionPort = process.env.SERVER_CONNECTION_PORT!;
const app = express();

app
  .use(express.json())
  .use(cors())
  .use("/api/users/", userRoutes)
  .listen(connectionPort, () => {
    console.info(`Server listening on port ${connectionPort}`);
  });

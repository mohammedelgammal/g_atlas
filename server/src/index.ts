import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "./models/user.model";

const SERVER_PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/UsersDB");

app.post("/api/register", async (req, res) => {
  try {
    const newUser = req.body.data;
    await User.create({
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
    });
    res.status(201).send("User created successfully");
  } catch (err) {
    console.log(req.body);
    res.json({ status: "error", message: "User already exists" });
  }
});

app.post("/api/login", async (req, res) => {
  const userData = req.body.data;
  console.log(userData);
  const targetUser = await User.findOne({
    email: userData.email,
    password: userData.password,
  });

  if (targetUser) {
    const token = jwt.sign(
      { email: targetUser.email, username: targetUser.username },
      Date().toString()
    );
    res.json({ status: 200, token });
  } else res.json({ status: 401, message: "Invalid credentials" });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";

const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body.data;
    await UserModel.create({
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
    });
    res.status(201).send("User created successfully");
  } catch (err) {
    console.log(req.body);
    res.json({ status: "error", message: "User already exists" });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const userData = req.body.data;
  console.log(userData);
  const targetUser = await UserModel.findOne({
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
};

export { registerUser, loginUser };

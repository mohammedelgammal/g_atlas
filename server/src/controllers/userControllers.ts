import Schema from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import UserModel from "../models/user.model";

const registerUser = asyncHandler(async (req, res) => {
  // incomplete req data
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  // already existed user
  const targetUser = await UserModel.findOne({ email });
  if (targetUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await UserModel.create({
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
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const targetUser = await UserModel.findOne({ email });

  if (targetUser && (await bcrypt.compare(password, targetUser.password))) {
    res.json({
      _id: targetUser.id,
      name: targetUser.username,
      email: targetUser.email,
      token: generateToken(targetUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getMe = asyncHandler(async (req, res) => {
  const { user } = req.body;
  const targetUser = await UserModel.findOne(user._id);
  if (targetUser)
    res.status(200).json({
      id: targetUser._id,
      username: targetUser.username,
      email: targetUser.email,
    });
});

const generateToken = (id: Schema.Types.ObjectId) =>
  jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });

export { registerUser, loginUser, getMe };

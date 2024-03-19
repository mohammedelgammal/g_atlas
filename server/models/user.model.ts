import mongoose, { Model } from "mongoose";
import { UserModelType } from "../types/userTypes";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "users", timestamps: true }
);

const userModel: Model<UserModelType> = mongoose.model("User", userSchema);

export default userModel;

import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    token: {
      type: String,
      required: false,
    },
    refreshToken: {
      type: String,
      required: false,
    },
    isOnline: {
      type: Boolean,
      default: false,
      required: true,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  },

  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);

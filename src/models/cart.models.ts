import { Mongoose } from "mongoose";
import mongoose from "mongoose";
import { ICart } from "../interface/carts.interface";

const cartSchema = new mongoose.Schema<ICart>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
export const cartModel = mongoose.model("cartModel", cartSchema);

import { Mongoose } from "mongoose";
import mongoose from "mongoose";
import { ICart } from "../interfaces/cart.interface";

const cartSchema = new mongoose.Schema<ICart>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "productModel",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 0,
        },
      },
    ],
    totalAmount: {
      type: Number,
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

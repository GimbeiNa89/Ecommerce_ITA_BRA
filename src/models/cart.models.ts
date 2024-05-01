import { Mongoose, Schema, Types } from "mongoose";
import mongoose from "mongoose";
import { ICart, ICartItem } from "../interfaces/cart.interface";

const cartSchema = new mongoose.Schema<ICart>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  ICartItem: [
    {
      type: Schema.Types.ObjectId,
      ref: "CartItem",
    },
  ],
  totalAmount: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export const Cart = mongoose.model("Cart", cartSchema);

const cartItemSchema = new mongoose.Schema<ICartItem>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const CartItem = mongoose.model("CartItem", cartItemSchema);

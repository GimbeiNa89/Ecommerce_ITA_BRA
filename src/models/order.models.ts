import { Mongoose } from "mongoose";
import mongoose from "mongoose";
import { Schema } from "mongoose";
import { IOrder } from "../interfaces/order.interface";

const orderSchema = new mongoose.Schema<IOrder>(
  {
    id: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productModel",
        required: true,
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("orderModel", orderSchema);

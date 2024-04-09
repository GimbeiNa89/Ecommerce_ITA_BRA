import { Mongoose } from "mongoose";
import mongoose from "mongoose";
import { ICart } from "../interfaces/cart.interface";

const cartSchema = new mongoose.Schema<ICart>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: true,
    },
    products: [ // Questo è inutile, abbiamo deciso di usare un array di objectID (vedi ICart)
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "productModel",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
export const cartModel = mongoose.model("cartModel", cartSchema);

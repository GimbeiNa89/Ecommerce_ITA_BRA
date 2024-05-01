import Mongoose from "mongoose";
import { IProduct } from "../interfaces/product.interface";

const productSchema = new Mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    imageURL: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = Mongoose.model("Product", productSchema);

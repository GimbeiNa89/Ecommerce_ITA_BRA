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
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const productModel = Mongoose.model("productModel", productSchema);

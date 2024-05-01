import { Schema } from "mongoose";

export interface IProduct {
  _id?: string;
  name: string;
  description?: string;
  imageURL?: string;
  price: number;
}

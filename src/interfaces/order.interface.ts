import { Schema } from "mongoose";

export interface IOrder {
  id?: string;
  user: Schema.Types.ObjectId;
  products: Schema.Types.ObjectId[];
  cart: Schema.Types.ObjectId;
  total: number;
  status: string;
}

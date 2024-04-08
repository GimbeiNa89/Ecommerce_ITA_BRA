import { Schema } from "mongoose";

export interface IOrder {
  id: string,
  userId: string,
  products: Schema.Types.ObjectId,
  total: number
}
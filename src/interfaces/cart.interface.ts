import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICart extends Document {
  _id?: string;
  userId: mongoose.Types.ObjectId;
  ICartItem: Types.Array<ICartItem["_id"]>;
  totalAmount?: number;
  isActive?: boolean;
}

export interface ICartItem extends Document {
  productId: mongoose.Types.ObjectId;
  quantity: number;
}

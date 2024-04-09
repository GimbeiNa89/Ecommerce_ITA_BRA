import { Schema } from "mongoose";

export interface IProduct {
  id?: string;
  name: string;
  description: string;
  imageURL: string;
  price: number;
}

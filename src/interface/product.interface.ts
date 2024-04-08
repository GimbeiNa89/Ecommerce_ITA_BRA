import {Schema} from "mongoose";

export interface IProduct {
  name: string,
  description: string,
  image: string,
  price: number,
}
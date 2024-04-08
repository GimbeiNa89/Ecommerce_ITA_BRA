import { Schema } from "mongoose";

export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  cart: Schema.Types.ObjectId;
}

import { Schema } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
  cart: Schema.Types.ObjectId[];
  tokens: [
    {
      token: string;
    }
  ];
}

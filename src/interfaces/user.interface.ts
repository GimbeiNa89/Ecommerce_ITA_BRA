import { Schema } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  token?: string;
  role?: string;
  refreshToken?: string;
  isOnline: boolean;
  cart?: Schema.Types.ObjectId[];
}

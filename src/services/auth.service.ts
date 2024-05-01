import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { Cart } from "../models/cart.models";
dotenv.config();

export const findByKeyUser = async (key: string): Promise<IUser | null> => {
  return await User.findOne({ key });
};

export const KeyObjectUser = async (key: string): Promise<Object | null> => {
  return await User.findOne({ key });
};

export const findByKeyCart = async (key: string): Promise<IUser | null> => {
  return await Cart.findOne({ key });
};

export const createAccessToken = async (
  id: string,
  time: string
): Promise<string> => {
  return jwt.sign({ id }, "ciao", { expiresIn: time });
};

export const verifyAccessToken = async (token: string): Promise<JwtPayload> => {
  return jwt.verify(token, "ciao") as JwtPayload;
};

export const updateLogStatus = async (
  id: string,
  status: boolean
): Promise<Partial<IUser | null>> => {
  return await User.findOneAndUpdate(
    { _id: id },
    { isOnline: status },
    { new: true }
  );
};

export const updateRoleStatus = async (
  id: string,
  status: string
): Promise<Partial<IUser | null>> => {
  return await User.findOneAndUpdate(
    { _id: id },
    { role: status },
    { new: true }
  );
};

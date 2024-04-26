import { IUser } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const findByKey = async (email: string): Promise<IUser | null> => {
  return await userModel.findOne({ email });
};

export const findByEmail = async (email: string): Promise<IUser | null> => {
  return await userModel.findOne({ email });
};

export const createAccessToken = (id: string, time: string): string => {
  return jwt.sign({ id }, 'ciao', {expiresIn: time});
};

export const verifyRefreshToken = (refreshToken: string) => {
      const decoded = jwt.verify(
      refreshToken,
      'ciao'
    );
    return decoded;
};


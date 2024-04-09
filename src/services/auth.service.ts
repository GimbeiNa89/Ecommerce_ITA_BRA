import { IUser } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const findByKey = async (email: string): Promise<IUser | null> => {
  return await userModel.findOne({ email });
};

export const findByEmail = async (email: string): Promise<IUser | null> => {
  return await userModel.findOne({ email });
};

export const createRefreshToken = async (userId: string): Promise<string> => {
  // Genera un nuovo refreshToken utilizzando la funzione uuidv4
  const refreshToken = uuidv4();

  // Restituisci il refreshToken appena creato
  return refreshToken;
};

export const verifyRefreshToken = (refreshToken: string) => {
  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as jwt.Secret
    );
    return decoded;
  } catch (error) {
    throw new Error("Invalid refreshToken");
  }
};

export const createAccessToken = (id: string): string => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: "1d",
  });
};

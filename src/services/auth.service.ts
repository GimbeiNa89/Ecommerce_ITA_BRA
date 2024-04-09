import { IUser } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";

export const findByKey = async (email: string): Promise<IUser | null> => {
  return await userModel.findOne({ email });
};

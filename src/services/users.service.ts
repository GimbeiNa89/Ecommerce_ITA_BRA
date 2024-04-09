import { IUser } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";

export const showUsers = async (): Promise<IUser[]> => {
  return await userModel.find();
};

export const showUserById = async (id: string): Promise<IUser | null> => {
  return await userModel.findById(id);
};

export const addNewUser = async (newUser: IUser): Promise<IUser> => {
  return await userModel.create(newUser);
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await userModel.findByIdAndDelete(id);
};

export const updateUserServ = async (
  id: string,
  user: Partial<IUser>
): Promise<IUser | null> => {
  return await userModel.findByIdAndUpdate(id, user, { new: true });
};

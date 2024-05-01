import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

export const showUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

export const showUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const addNewUser = async (newUser: IUser): Promise<IUser> => {
  return await User.create(newUser);
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};

export const updateUserServ = async (
  id: string,
  user: Partial<IUser>
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

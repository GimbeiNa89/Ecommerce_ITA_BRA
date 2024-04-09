import { IUser } from "../interfaces/user.interface";
import {
  addNewUser,
  deleteUser,
  showUserById,
  showUsers,
  updateUserServ,
} from "../services/users.service";

import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const findAllUsers = async (req: Request, res: Response) => {
  const users = await showUsers();
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findUserById = async (req: Request, res: Response) => {
  const user = await showUserById(req.params.id);
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addNewUserHandler = async (req: Request, res: Response) => {
  // const salt = bcrypt.genSalt(); il salt viene generato mettendo 10 come secondo parametro
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  // console.log(salt);
  // console.log(hashedPassword);
  const user: IUser = { ...req.body, password: hashedPassword };
  const newUser: IUser = await addNewUser(user);
  try {
    res.status(200).json({ message: "new user added", newUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const userToElim = await deleteUser(req.params.id);
  try {
    res.status(200).json(userToElim);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const updateUser = await updateUserServ(req.params.id, req.body);
  try {
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

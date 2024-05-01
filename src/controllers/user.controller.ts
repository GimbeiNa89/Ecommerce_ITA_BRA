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
import { findByKeyUser } from "../services/auth.service";

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
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// export const addNewUserHandler = async (req: Request, res: Response) => {
//   const userTest: IUser = req.body;
//   // const salt = bcrypt.genSalt(); il salt viene generato mettendo 10 come secondo parametro
//   const hashedPassword = await bcrypt.hash(userTest.password, 10);
//   const userByEmail = await findByKey(userTest.email);
//   if (userByEmail) {
//     //se si restituisco status(400)
//     return res.status(400).json({ message: "The user already exists" });
//   }
//   // console.log(salt);
//   // console.log(hashedPassword);
//   const newUser: IUser = await addNewUser({ ...req.body, password: hashedPassword });
//   try {
//     res.status(200).json({ message: "new user added", newUser });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

export const deleteUserHandler = async (req: Request, res: Response) => {
  const userToDelete = await deleteUser(req.params.id);
  try {
    res.status(200).json(userToDelete);
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

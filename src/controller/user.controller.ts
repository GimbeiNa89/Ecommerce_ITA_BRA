import { addNewUser, deleteUser, showUserById, showUsers, updateUser } from "../service/user.service";
import { Request, Response } from "express";

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
  const newUser = await addNewUser(req.body);
  try {
    res.status(200).json({ message: "new user added", newUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const userToKill = await deleteUser(req.params.id);
  try {
    res.status(200).json(userToKill);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const upgradeUser = await updateUser(req.params.id, req.body);
  try {
    res.status(200).json(upgradeUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
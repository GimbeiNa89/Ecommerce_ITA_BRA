import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/user.interface";

export const authByRole = (Permissions: string | string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole: string = req.body.role;
    if (Permissions.includes(userRole)) {
      next();
    } else {
      return res.status(401).json({ message: "You don't have the permission" });
    }
  };
};

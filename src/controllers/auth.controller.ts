import { admin } from "../utility/admin.list";
import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import { findByKey } from "../services/auth.service";
import { addNewUser } from "../services/users.service";
import { findByEmail } from "../services/auth.service";
import { verifyRefreshToken } from "../services/auth.service";
import { createAccessToken } from "../services/auth.service";

import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user: IUser = { ...req.body, password: hashedPassword }; //hashing password req provided

  const userByEmail = await findByKey(user.email);

  if (userByEmail) {
    return res.status(400).json({ message: "Email already exists" }); //check if the email on the req already exists in my database
  }

  try {
    // if does not exist I create a new user
    const newUser: IUser = await addNewUser(user);
    if (admin.includes(user.email)) {
      newUser.role = "admin";
    } else {
      newUser.role = "user";
    }
    const token = createAccessToken(newUser._id, "15m"); // I create a token based on the user _id
    const refreshToken = createAccessToken(newUser._id, "10d"); //a referesh token that expires later

    newUser.token = token;
    newUser.refreshToken = refreshToken;

    return res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userByEmail = await findByEmail(email);

  if (!userByEmail) {
    return res.status(400).json({ message: "Wrong email or password" });
  }

  bcrypt.compare(password, userByEmail.password, (err, result) => {
    if (err) {
      console.error("Error on matching passwords", err);
      return;
    }

    if (!result) {
      console.log("Wrong password or email");
    } else {
      const accessToken = createAccessToken(userByEmail._id, "15m");
      const refreshToken = createAccessToken(userByEmail._id, "10d");
      if (refreshToken) {
        try {
          const decoded = verifyRefreshToken(refreshToken);
          console.log(decoded);
          // Controlla che l'ID dell'utente associato al refreshToken sia lo stesso dell'utente che sta cercando di eseguire il login
          // if (decoded.userId !== userByEmail.id) {
          //   throw new Error("Invalid refreshToken");
          // }
        } catch (err) {
          return res.status(400).json({ message: "Invalid refreshToken" });
        }
      }
      userByEmail.isOnline = true;
      
      return res.status(200).json({
        user: { userByEmail },
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }
  });
};

// Genera un nuovo refreshToken per questo login

export const logout = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Logout successfully" });
};

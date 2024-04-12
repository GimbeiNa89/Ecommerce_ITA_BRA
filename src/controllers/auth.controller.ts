import { Jwt } from "jsonwebtoken";
import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import { findByKey } from "../services/auth.service";
import { addNewUser } from "../services/users.service";
import { findByEmail } from "../services/auth.service";
import { createRefreshToken } from "../services/auth.service";
import { verifyRefreshToken } from "../services/auth.service";
import { createAccessToken } from "../services/auth.service";

import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  // const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user: IUser = { ...req.body, password: hashedPassword };
  // console.log(user);

  const userByEmail = await findByKey(user.email); //cerco se tra le email della collection nel db c'è quella inserita nel req.body
  if (userByEmail) {
    //se si restituisco status(400)
    return res.status(400).json({ message: "Email already exists" });
  }

  try {
    //se no aggiungo il nuovo user
    const newUser: IUser = await addNewUser(user);
    const token = createAccessToken(newUser._id); //e un gli dò un token dandogli come parametro in entrata l'id di newUser e per quanti giorni deve durare
    return res.status(200).json({ user: newUser, token }); //restituisco il nuovo utente con il token creato
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password, refreshToken } = req.body;

  const userByEmail = await findByEmail(email);

  if (!userByEmail || userByEmail.password !== password) {
    return res.status(400).json({ message: "Wrong email or password" });
  }

  // Genera un nuovo refreshToken per questo login
  const newRefreshToken = createRefreshToken(userByEmail._id);

  // Verifica il refreshToken solo se è stato fornito nella richiesta
  if (refreshToken) {
    try {
      // Verifica la validità del refreshToken
      const decoded = verifyRefreshToken(refreshToken);

      // Controlla che l'ID dell'utente associato al refreshToken sia lo stesso dell'utente che sta cercando di eseguire il login
      // if (decoded.userId !== userByEmail.id) {
      //   throw new Error("Invalid refreshToken");
      // }
    } catch (err) {
      return res.status(400).json({ message: "Invalid refreshToken" });
    }
  }

  // Se tutte le verifiche sono passate, genera un nuovo token di accesso
  const accessToken = createAccessToken(userByEmail._id);

  return res
    .status(200)
    .json({ user: userByEmail, accessToken, refreshToken: newRefreshToken });
};

export const logout = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Logout successfully" });
};

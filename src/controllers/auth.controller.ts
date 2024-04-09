import { Jwt } from "jsonwebtoken";
import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import { findByKey } from "../services/auth.service";
import { addNewUser } from "../services/users.service";
import { createNewToken } from "../creationToken";
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
    const token = createNewToken(newUser.id, 30); //e un gli dò un token dandogli come parametro in entrata l'id di newUser e per quanti giorni deve durare
    return res.status(200).json({ user: newUser, token }); //restituisco il nuovo utente con il token creato
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const user = req.body as { email: string; password: string }; //chiedo in entrata email e password
  // console.log("req User", user); test
  const userByEmail = await findByKey(user.email); //il metodo findOne() restituisce null se non trova corrispondenza
  // console.log("user By Email", userByEmail); test
  if (!userByEmail) {
    //perciò se è null restituisce status(400)
    return res.status(400).json({ message: "Wrong email or password" });
  }
  if (userByEmail.password !== user.password) {
    //se trova corrispondenza restituisce tutto l'oggetto, per cui è possibile richiamare la password visto che è una chiave valore dell'user
    return res.status(400).json({ message: "Wrong email or password" });
  }
  try {
    const token = createNewToken(userByEmail.id!, 30);
    return res.status(200).json({ user: userByEmail, token });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

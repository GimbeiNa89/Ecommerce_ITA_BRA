import { admin } from "../utility/admin.list";
import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import {
  findByKeyUser,
  updateLogStatus,
  updateRoleStatus,
} from "../services/auth.service";
import { addNewUser } from "../services/users.service";
import { createAccessToken } from "../services/auth.service";
import bcrypt from "bcrypt";
import { JwtPayload } from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user: IUser = { ...req.body, password: hashedPassword }; //hashing password req provided

  const isAvailable: IUser | null = await findByKeyUser(user.email);

  if (isAvailable) {
    return res.status(400).json({ message: "Email already exists" }); //check if the email on the req already exists in my database
  }

  try {
    const newUser: IUser = await addNewUser(user);
    if (admin.includes(user.email)) {
      newUser.role = "admin";
      await updateRoleStatus(newUser._id, newUser.role);
    } else {
      newUser.role = "user";
      await updateRoleStatus(newUser._id, newUser.role);
    }
    const token = await createAccessToken(newUser._id, "15m"); // creating a token based on the user _id
    const refreshToken = await createAccessToken(newUser._id, "10d"); //..a referesh token that expires later

    newUser.token = token;
    newUser.refreshToken = refreshToken;

    console.log("newUser.token: ", newUser.token);

    return res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/*export const login = async (req: Request, res: Response) => {
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
    }
  });

  const accessToken = createAccessToken(userByEmail._id, "15m");
  const refreshToken = createAccessToken(userByEmail._id, "10d");
  if (refreshToken) {
    try {
      const decoded = verifyRefreshToken(refreshToken) as JwtPayload;
      console.log(decoded);
      if (decoded.id !== userByEmail._id) {
        throw new Error("invalid request");
      }
      // Controlla che l'ID dell'utente associato al refreshToken sia lo stesso dell'utente che sta cercando di eseguire il login
      // if (decoded.userId !== userByEmail.id) {
      //   throw new Error("Invalid refreshToken");
      // }
      // userByEmail.isOnline = true;
      const updatedUser = await updateLogStatus(
        userByEmail._id,
        (userByEmail.isOnline = true)
      );

      return res.status(200).json({
        user: { updatedUser },
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (err) {
      return res.status(400).json({ message: "Invalid refreshToken" });
    }
  }
};
*/

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user: IUser | null = await findByKeyUser(email);

    if (!user) {
      return res.status(400).json({ message: "Wrong email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Wrong email or password" });
    }

    user.token = await createAccessToken(user._id, "15m");
    console.log("token", user.token);
    // user.refreshToken = await createAccessToken(user._id, "10d");

    user.isOnline = true;
    await updateLogStatus(user._id, user.isOnline);

    return res.status(200).json({
      message: `User ${user.name} is logged in!,
        ${user.token}`,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user: IUser | null = await findByKeyUser(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.isOnline = false;
    await updateLogStatus(user._id, user.isOnline);

    return res
      .status(200)
      .json({ message: `User ${user.name} Logged out successfully` });
  } catch (error) {
    console.error("Error during logout:", error);
    return res.status(500).json({ error: "Error during logout" });
  }
};

export const showUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user: IUser | null = await findByKeyUser(email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  try {
    return res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
/* try {
  const user: IUser | null = await findByEmail(email);
  if (!user || !user.isOnline) {
    return res
      .status(400)
      .json({ message: "You don't have the permission to access!" });
  }
  res.status(200).json(user);
} catch (error) {
  res.status(500).json({ error: "Server Error!" });
}*/

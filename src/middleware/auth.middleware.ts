import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/user.interface";
import { JwtPayload } from "jsonwebtoken";
import { findByKeyUser, verifyAccessToken } from "../services/auth.service";

export const authByRole = (permissions: string | string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: IUser | null = await findByKeyUser(req.body.email); // Esempio: recuperare l'utente dal database
      const userRole: string | undefined = user?.role;

      const allowedRoles: string[] = Array.isArray(permissions)
        ? permissions
        : [permissions];

      if (userRole && allowedRoles.includes(userRole)) {
        next(); // Passa al middleware successivo se il ruolo è consentito
      } else {
        return res
          .status(401)
          .json({ message: "You don't have the permission" });
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};

export const authByStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUser | null = await findByKeyUser(req.body.email);

    if (!user || !user.isOnline) {
      return res
        .status(401)
        .json({ message: "Access denied, you have to login first" });
    }

    // Se l'utente è online, passa al middleware successivo
    next();
  } catch (error) {
    console.error("Error in authByStatus middleware:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const verifyTokenMiddle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: IUser | null = await findByKeyUser(req.body.email);
  console.log("user trovato", user);
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  const authHeader = req.headers["authorization"];
  console.log("authHeader", authHeader);
  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token from header", token);
  // const token = user.token;
  if (!token) {
    return res.status(401).json({ message: "Token provided is not valid!" });
  }
  try {
    const decoded = await verifyAccessToken(token);
    console.log("oggetto decoded", decoded);
    if (decoded.id != user?._id) {
      console.log("id dell'user", user._id);
      return res.status(401).json({ message: "Token not valid!" });
    }
    next();
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
// export const authByRole = (Permissions: string | string[]) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const userRole: string = req.body.role;
//     if (Permissions.includes(userRole)) {
//       next();
//     } else {
//       return res.status(401).json({ message: "You don't have the permission" });
//     }
//   };
// };

// export const authByStatus = async (req: Request, res: Response, next: NextFunction) => {
//     const user: IUser | null = await findByKey(req.body.email);
//     const status: boolean | undefined = user?.isOnline;
//     if (status) {
//       return next();
//     } else {
//       return res.status(401).json({ message: "You have to login first" });
//     }
//   };

import jwt from "jsonwebtoken";
import "dotenv/config";
import { configDotenv } from "dotenv";

export const createNewToken = (id: string, days: number) => {
  //   const payload = { id, role }; 
  return jwt.sign({ id }, "secret", {
    expiresIn: days * 72240,
  });
};

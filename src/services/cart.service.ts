import { products } from "../data/products.data";
import { ICart } from "../interfaces/cart.interface";
import { cartModel } from "../models/cart.models";
import { Types } from "mongoose";

export const showCartByUserId = async (
  userIdAsString: string
): Promise<ICart | null> => {
  let userId = new Types.ObjectId(userIdAsString);
  const cart = await cartModel.findOne({ user: userId });
  return cart;
};

export const createCart = async (linekart: ICart): Promise<ICart> => {
  return await cartModel.create({ linekart });
};

import { ObjectId } from "mongodb";
import { ICart } from "../interfaces/cart.interface";
import { Cart } from "../models/cart.models";
import { Types } from "mongoose";
import { ImportDeclaration } from "typescript";

export const showCartByUserId = async (
  userId: string
): Promise<ICart | null> => {
  /*let user = new Types.ObjectId(userId);
  const cart = */return await Cart.findById({ user: userId });
  // return cart;
};

export const showCart = async (cartId: string): Promise<ICart | null> => {
  return await Cart.findById(cartId);
};

export const createCart = async (linekart: ICart): Promise<ICart> => {
  return await Cart.create(linekart);
};

export const updateCart = async (
  id: string,
  linekart: Partial<ICart>
): Promise<ICart | null> => {
  return await Cart.findByIdAndUpdate(id, linekart);
};

export const deleteProduct = async (_id: string): Promise<ICart | null> => {
  return await Cart.findByIdAndDelete(_id);
};

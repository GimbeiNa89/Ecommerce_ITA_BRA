import { ICart } from "../interfaces/cart.interface";
import { cartModel } from "../models/cart.models";

export const showCartByUserId = async (userId: string) => {
    const cart = await cartModel.findById(userId);
    return cart;
};
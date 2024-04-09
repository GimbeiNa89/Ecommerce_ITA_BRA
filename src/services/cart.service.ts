import { ICart } from "../interfaces/cart.interface";
import { cartModel } from "../models/cart.models";
import { Types } from "mongoose";

export const showCartByUserId = async (userIdAsString: string) => {
    let userId = new Types.ObjectId(userIdAsString);
    const cart = await cartModel.findOne({user: userId});
    return cart;
};
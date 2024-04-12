import { Request, Response } from "express";
import { cartModel } from "../models/cart.models";
import { productModel } from "../models/product.model";
import {
  createCart,
  showCartByUserId,
  updateCart,
} from "../services/cart.service";
import { showProductById } from "../services/products.service";
import { products } from "../data/products.data";

export const createNewCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body as {
    userId: string;
    productId: string;
    quantity: number;
  };

  try {
    const cart = await cartModel.findOne({ userId });
    const product = await productModel.findOne({ _id: productId });

    if (!product) {
      return res.status(404).send({ message: "Item not found" });
    }

    const price = product.price;
    const name = product.name;
    const finalPrice = cart!.totalAmount + price * quantity;
    if (cart) {
      // const existingProduct = product;
      const updatedCart = await updateCart(userId, {
        ...req.body,
        totalAmount: finalPrice,
        isActive: true,
      });

      return res.status(200).send(updatedCart);
    } else {
      const newCart = await createCart({
        ...req.body,
        totalAmount: finalPrice,
        isActive: true,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Something went wrong");
  }
};

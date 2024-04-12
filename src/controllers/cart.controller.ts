import { Request, Response } from "express";
import { cartModel } from "../models/cart.models";
import { productModel } from "../models/product.model";
import { createCart } from "../services/cart.service";

export const createNewCart = async (req: Request, res: Response) => {
  const userId = req.body.user._id;
  const cartNovo = req.body as {
    productId: string;
    quantity: number;
  };

  try {
    const cart = await cartModel.findOne({ userId });
    const item = await productModel.findOne({ _id: productId });
    if (!item) {
      res.status(404).send({ message: "item not found" });
      return;
    }
    const quantity = cart.quantity;
    const price = item.price;
    const name = item.name;
    //If cart already exists for user,
    if (cart) {
      const itemIndex = cart.products.findIndex(
        (select) => select.productId === productId
      );
      //check if product exists or not
      if (itemIndex > -1) {
        let product = cart.products[itemIndex];
        product.quantity += quantity;
        cart.totalAmount = cart.products.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0);
        cart.products[itemIndex] = product;
        await res.status(200).send(cart);
      } else {
        cart.products.push({ productId, name, quantity, price });
        cart.totalAmount = cart.products.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0);
        res.status(200).send(cart);
      }
    } else {
      //no cart exists, create one
      const newCart = await createCart({
        userId,
        products: [{ productId, name, quantity, price }],
        totalAmount: quantity * price,
        isActive: true,
      });
      return res.status(201).send(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

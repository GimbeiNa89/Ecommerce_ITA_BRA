import { Request, Response } from "express";
import { findProductById } from "../services/products.service";
import { findByKeyUser } from "../services/auth.service";
import mongoose, { ObjectId } from "mongoose";
import { Cart, CartItem } from "../models/cart.models";
import {
  createCart,
  deleteProduct,
  showCart,
  showCartByUserId,
} from "../services/cart.service";

export const addNewProduct = async (req: Request, res: Response) => {
  const userId = req.params._id;
  const productId = req.body.productId;

  try {
    const user = await findByKeyUser(userId);
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }
    console.log(productId);
    const product = await findProductById(productId);
    console.log(product);
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

    // Creazione dell'elemento del carrello per il nuovo prodotto
    const cartItem = new CartItem({
      productId: new mongoose.Types.ObjectId(productId),
      quantity: req.body.quantity || 1, // Imposta una quantità predefinita se non specificata
    });

    let userCart = await Cart.findOne({ userId }).populate(
      //non funziona
      "ICartItem.productId"
    );
    console.log(userCart, "userCart tramite userId");
    if (!userCart) {
      userCart = new Cart({
        userId: userId,
        ICartItem: [cartItem], // controllare se non aggiungere un crea attraverso un modello.mong
      });
      // await userCart.save();
      await createCart(userCart);
      return res
        .status(200)
        .json({ message: `Product ${product} added successfuly`, userCart });
    } else {
      const existingItemIndex = userCart.ICartItem.findIndex(
        (item) => item.productId === productId
      );
      if (existingItemIndex !== -1) {
        userCart.ICartItem[existingItemIndex].quantity += cartItem.quantity;
      } else {
        userCart.ICartItem.push(cartItem);
      }
    }
    await userCart.save();

    return res.status(201).json({ message: "Product added to cart", userCart });
  } catch (error) {
    console.error("Error creating cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const checkMyCart = async (req: Request, res: Response) => {
  const cartId = req.body._id as string;
  try {
    const cart = await showCart(cartId);
    if (!cart) {
      return res.status(400).json({ message: "Cart not found" });
    }
    res.status(200).json({ message: "Cart found successfuly", cart });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const userId = req.params._id as string;
  const cartItemId = req.body._id as string;
  try {
    const cart = await showCartByUserId(cartItemId);
    if (!cart) {
      res.status(400).json({ message: "Cart not available" });
    }
    if (userId === cart?.userId.toString()) {
      const eraseProduct = req.body.product._id;
      await deleteProduct(eraseProduct);
      return res.status(200).json({ message: "Product deleted successfully" });
    } else {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete product from this cart" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

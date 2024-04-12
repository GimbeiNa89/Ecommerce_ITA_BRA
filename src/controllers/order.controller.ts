import { Request, Response } from "express";
import {
  addNewOrder,
  deleteOrder,
  showOrderById,
  showOrders,
  updateOrderServ,
} from "../services/orders.service";
import { IOrder } from "../interfaces/order.interface";
import { showCartByUserId } from "../services/cart.service";
import { productModel } from "../models/product.model";
import { showProductById } from "../services/products.service";
import { showUserById } from "../services/users.service";
import { cartModel } from "../models/cart.models";

export const findAllOrders = async (req: Request, res: Response) => {
  const orders = await showOrders();
};

export const upToDateOrder = async (req: Request, res: Response) => {
  const updateOrder: IOrder | null = await updateOrderServ(
    req.params._id,
    req.body
  );
  try {
    res.status(200).json(updateOrder);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminateOrder = async (req: Request, res: Response) => {
  const eraseOrder = await deleteOrder(req.params.id);
  try {
    res.status(200).json(eraseOrder);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const findSpecificOrder = async (req: Request, res: Response) => {
  const order = await showOrderById(req.params.id);
  try {
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewOrder = async (req: Request, res: Response) => {
  // recupero l'id dell'utente dalla richiesta
  const userId = req.body.userId;
  const user = await showUserById(userId);
  if (!user) {
    throw new Error(`User with id ${userId} not found`);
  }
  console.log(user);

  // per l'utente recupero il carrello
  const cart = await cartModel.findOne(userId);
  // per ogni prodotto nel carrello:
  // recupero il prezzo del prodotto
  let totalOrderAmount = 0.0;
  if (!cart) {
    return res
      .status(404)
      .json({ message: "Cart not found"});
  }
  for (const productId of cart.products) {
    const product = await showProductById(productId.toString());
    if (!product) {
      throw new Error(`Product with id ${productId} not found`);
    }
    totalOrderAmount += cart.totalAmount;
  }

  // sommo il totale con il prezzo del prodotto moltiplicato per la quantità specificata
  // recupero l'indirizzo e il metodo di spedizione dalla richiesta

  const newOrder: IOrder = {
    user: userId,
    cart: cart!.id,
    total: totalOrderAmount,
    status: "created",
    // status: creato
  };
  // salvo l'ordine nel DB mongo
  await addNewOrder(newOrder);

  // cancello il cart corrispondente all'utente o, in alternativa, 'svuoto' il carrello attuale dell'utente
  // restituisco l'ordine creato in JSON
  try {
    res.status(200).json(newOrder);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

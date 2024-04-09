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

export const findAllOrders = async (req: Request, res: Response) => {
  const orders = await showOrders();
};

export const upToDateOrder = async (req: Request, res: Response) => {
  const updateOrder: IOrder | null = await updateOrderServ(
    req.params.id,
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
  const userId = req.body.user_id;
  // per l'utente recupero il carrello
  const cart = await showCartByUserId(userId);
  // per ogni prodotto nel carrello:
  // recupero il prezzo del prodotto
  for (const product of cart.products) {
    const somma = product.price * product.quantity
    product.price= somma+product.price;
  }
  // sommo il totale con il prezzo del prodotto moltiplicato per la quantità specificata
  // recupero l'indirizzo e il metodo di spedizione dalla richiesta

  const newOrder: IOrder = {
    user_id: req.body.user_id,
    // status: creato
  };

  // salvo l'ordine nel DB mongo
  // cancello il cart corrispondente all'utente o, in alternativa, 'svuoto' il carrello attuale dell'utente
  // restituisco l'ordine creato in JSON
  try {
    res.status(200).json();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

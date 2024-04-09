import { Request, Response } from "express";
import {
  addNewOrder,
  deleteOrder,
  showOrderById,
  showOrders,
  updateOrderServ,
} from "../services/orders.service";
import { IOrder } from "../interfaces/order.interface";

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
  const newOrder = await addNewOrder(req.body);
  try {
    res.status(200).json(newOrder);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

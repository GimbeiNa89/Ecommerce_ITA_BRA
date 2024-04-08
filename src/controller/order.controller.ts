import { Request, Response } from "express";
import {
  addNewOrder,
  deleteOrder,
  showOrderById,
  showOrders,
  updateOrder,
} from "../service/order.service";

export const findAllOrders = async (req: Request, res: Response) => {
  const orders = await showOrders();
};

export const upToDateOrder = async (req: Request, res: Response) => {
  const upgradeOrder = await updateOrder(req.params.id, req.body);
  try {
    res.status(200).json(upgradeOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const eliminateOrder = async (req: Request, res: Response) => {
  const eraseOrder = await deleteOrder(req.params.id);
  try {
    res.status(200).json(eraseOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findSpecificOrder = async (req: Request, res: Response) => {
  const order = await showOrderById(req.params.id);
  try {
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createNewOrder = async (req: Request, res: Response) => {
  const newOrder = await addNewOrder(req.body);
  try {
    res.status(200).json(newOrder);
      } catch (error) {
    res.status(500).json(error);
  }
}
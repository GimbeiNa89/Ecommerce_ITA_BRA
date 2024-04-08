import { IOrder } from "../interface/orders.interface";
import { orderModel } from "../models/order.models";

export const showOrders = async (): Promise <IOrder[]> => {
    return await orderModel.find();
};

export const showOrderById = async(id: string): Promise <IOrder | null> => {
  return await orderModel.findById(id);
};

export const updateOrder = async (id: string, order: Partial <IOrder>): Promise <IOrder|null> => {
    return await orderModel.findByIdAndUpdate(id, order, {new: true});
};

export const deleteOrder = async (id: string): Promise <IOrder|null> => {
    return await orderModel.findByIdAndDelete(id);
};

export const addNewOrder = async (newOrder: IOrder): Promise <IOrder> => {
  return await orderModel.create(newOrder);
}
import { ObjectId } from "mongodb";
import { IProduct } from "../interfaces/product.interface";
import { Product } from "../models/product.model";

export const findProducts = async (): Promise<IProduct[]> => {
  return await Product.find();
};

export const findProductById = async (_id: string | ObjectId): Promise<IProduct | null> => {
  return await Product.findById({ _id });
};

export const ProductObjectKey = async (
  key: string | Object
): Promise<Object | null> => {
  return await Product.findOne({ key });
};

export const addNewProduct = async (
  newProduct: IProduct
): Promise<IProduct> => {
  return await Product.create(newProduct);
};

export const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return await Product.findByIdAndDelete(id);
};

export const updateProduct = async (
  id: string,
  product: Partial<IProduct>
): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, product, { new: true });
};

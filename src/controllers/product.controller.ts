import { IProduct } from "../interfaces/product.interface";
import { Request, Response } from "express";
import {
  deleteProduct,
  addNewProduct,
  findProducts,
  findProductById,
  updateProduct,
} from "../services/products.service";

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await findProductById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      throw new Error("product not found");
    }
  } catch {
    res.status(404).json("message: errore");
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await findProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("message:errore");
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct: IProduct = await addNewProduct(req.body);
    res.status(200).json({
      message: "Product added successfully",
      newProduct,
    });
  } catch (error) {
    res.status(400).json("Bad Request");
  }
};

export const eliminatedProduct = async (req: Request, res: Response) => {
  const product = await deleteProduct(req.params.id);
  if (!product) {
    res.status(404).json({ message: "The product doesn't exist" });
  }
  try {
    res.status(200).json({ message: "product deleted", product });
  } catch (errore) {
    res.status(400).json("error");
  }
};

export const upToDateProduct = async (req: Request, res: Response) => {
  const product = await updateProduct(req.params.id, req.body);
  if (!product) {
    res.status(404).json({ message: "product not found" });
  }
  try {
    res.status(200).json({ message: "product updated", product });
  } catch (error) {
    res.status(500).json(error);
  }
};

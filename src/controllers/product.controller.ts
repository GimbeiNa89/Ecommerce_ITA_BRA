import { IProduct } from "../interfaces/product.interface";
import { Request, Response } from "express";
import {
  deleteProduct,
  addNewProduct,
  showProducts,
  showProductById,
  updateProduct,
} from "../services/products.service";

export const getProductById = async (req: Request, res: Response) => {
  try {
    const products = await showProductById(req.params.id);
    if (products) {
      res.status(200).json(products);
    } else {
      throw new Error("product not found");
    }
  } catch {
    res.status(404).json("message: errore");
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await showProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("message:errore");
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct: IProduct = await addNewProduct(req.body);
    res.status(200).json({
      message: "User added successfully",
      newProduct,
    });
  } catch (error) {
    res.status(400).json("Bad Request");
  }
};

export const eliminatedProduct = async (req: Request, res: Response) => {
  try {
    const product = await deleteProduct(req.params.id);
    res.status(200).json({ message: "product deleted", product });
  } catch (errore) {
    res.status(400).json("error");
  }
};

export const upToDateProduct = async (req: Request, res: Response) => {
  const product = await updateProduct(req.params.id, req.body);
  try {
    if (product) {
      res.status(200).json({ message: "product update", product });
    } else {
      throw new Error("product not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

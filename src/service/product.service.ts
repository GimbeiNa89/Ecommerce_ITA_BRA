import { IProduct } from "../interface/product.interface";
import { productModel } from "../models/product.model";

export const showProducts = async (): Promise<IProduct[]> => {
    return await productModel.find();
};

export const showProductById = async (id: string): Promise<IProduct | null> => {
    return await productModel.findById(id);
}


export const addNewProduct = async (newProduct: IProduct): Promise<IProduct> => {
    return await productModel.create(newProduct);
}

export const deleteProduct = async (id: string): Promise<IProduct | null> => {
    return await productModel.findByIdAndDelete(id);
}

export const updateProduct = async (
    id: string,
    product: Partial<IProduct>
): Promise<IProduct | null> => {
    return await productModel.findByIdAndUpdate(id, product, { new: true });
}

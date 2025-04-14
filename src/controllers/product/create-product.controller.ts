import { Request, Response } from "express";
import { ProductModel } from "../../models";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = await ProductModel.create({
      name,
      price,
      description,
    });
    console.log(newProduct);
    res.status(200).json({ message: "amjilttai product uuslee", newProduct });
  } catch (error) {
    res.status(500).json({ message: "error product", error });
  }
};

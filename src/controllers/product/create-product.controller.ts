import { Request, Response } from "express";
import { EmployeModel, ProductModel } from "../../models";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, userId } = req.body;

    const newProduct = await ProductModel.create({
      name,
      price,
      description,
    });
    if (!newProduct) {
      res.status(400).json({ message: "error" });
      return;
    }
    const employee = await EmployeModel.findByIdAndUpdate(
      userId,
      { $push: { products: newProduct._id } },
      { new: true }
    );
    console.log(employee);
    res.status(200).json({ message: "amjilttai product uuslee", newProduct });
  } catch (error) {
    res.status(500).json({ message: "error product", error });
  }
};

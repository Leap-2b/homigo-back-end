import { Request, Response } from "express";
import { EmployeModel } from "../../models";

export const getEmployWithProducts = async (req: Request, res: Response) => {
  try {
    const EmployWithProducts = await EmployeModel.find().populate("products");

    res.status(200).json({ message: "amjilttai", EmployWithProducts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error getEmployWithProducts", error });
  }
};

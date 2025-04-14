import { Request, Response } from "express";
import { OrderModel } from "../../models";

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    if (_id) {
      res.status(404).json("order not fount");
      return;
    }
    const orderById = OrderModel.findById(_id);
    res.status(200).json({ message: "amjilttai", orderById });
  } catch (error) {
    res.status(500).json({ message: "error orderbyid", error });
  }
};

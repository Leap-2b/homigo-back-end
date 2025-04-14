import { Request, Response } from "express";
import { OrderModel } from "../../models";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { request, employeId, userId, productId, isPaid, totalPrice } =
      req.body;
    const newOrder = await OrderModel.create({
      request,
      employeId,
      userId,
      productId,
      isPaid,
      totalPrice,
    });
    res.status(200).json({ message: "amjilttai", newOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error createorder", error });
  }
};

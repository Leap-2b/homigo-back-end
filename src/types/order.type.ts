import { ObjectId, Schema } from "mongoose";
import { orderStatusEnum } from "../constants";

export type OrderModelType = {
  _id: Schema.Types.ObjectId;
  orderStatus: orderStatusEnum;
  request: string;
  userId: ObjectId;
  employeId: ObjectId;
  productId: ObjectId;
  isPaid: boolean;
  totalPrice: number;
};

import { model, Model, models, Schema } from "mongoose";
import { OrderModelType } from "../types";
import { orderStatusEnum } from "../constants";

const OrderSchema = new Schema<OrderModelType>({
  orderStatus: {
    type: String,
    enum: Object.values(orderStatusEnum),
    default: orderStatusEnum.PENDING,
  },
  request: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  employeId: { type: Schema.Types.ObjectId, ref: "Employe", required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Products", required: true },
  isPaid: { type: Boolean, required: true },
  totalPrice: { type: Number, required: true },
});

export const OrderModel: Model<OrderModelType> =
  models["Orders"] || model<OrderModelType>("Orders", OrderSchema);

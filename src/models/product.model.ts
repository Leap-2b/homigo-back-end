import { Schema, model, models, Model } from "mongoose";
import { ProductModelType } from "../types";

const ProductSchema = new Schema<ProductModelType>({
  name: { type: String, unique: true, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

export const ProductModel: Model<ProductModelType> =
  models["Product"] || model<ProductModelType>("Product", ProductSchema);

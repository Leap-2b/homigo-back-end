import { Schema } from "mongoose";
import { categoryStatusEnum } from "../constants";
import { ProductModelType } from "./product.type";

export type employeType = {
  _id: Schema.Types.ObjectId;
  phone: number;
  secondPhone: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  register: string;
  about: string;
  address: string;
  experience: string;
  img: string;
  category: categoryStatusEnum;
  products: ProductModelType[];
};

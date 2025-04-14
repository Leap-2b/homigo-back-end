import { Schema } from "mongoose";
import { userRoleStatusEnum } from "../constants";

export type UserModelType = {
  _id: Schema.Types.ObjectId;
  userName: string;
  email: string;
  phone: number;
  password: string;
  role: userRoleStatusEnum;
  createdAt: Date;
  updatedAt: Date;
};

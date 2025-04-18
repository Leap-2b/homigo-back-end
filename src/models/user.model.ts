import { Model, Schema, model, models } from "mongoose";
import { UserModelType } from "../types";
import { userRoleStatusEnum } from "../constants";

const UserSchema = new Schema<UserModelType>(
  {
    userName: { type: String,  required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, select: false },
    phone: { type: Number, required: true, unique: true },

    role: {
      type: String,
      enum: Object.values(userRoleStatusEnum),
      default: userRoleStatusEnum.USER,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel: Model<UserModelType> =
  models["Users"] || model<UserModelType>("Users", UserSchema);

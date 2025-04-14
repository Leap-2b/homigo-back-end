import { EmployeModel, UserModel } from "../models";

export const isExistingUser = async (email: string) => {
  return await UserModel.findOne({ email });
};
export const isExistingEmploye = async (email: string) => {
  return await EmployeModel.findOne({ email });
};

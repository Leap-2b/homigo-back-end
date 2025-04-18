import { EmployeModel, UserModel } from "../models";

export const isExistingEmailUser = async (email: string) => {
  return await UserModel.findOne({ email });
};
export const isExistingPhoneUser = async (phone: string) => {
  return await UserModel.findOne({ phone });
};
export const isExistingEmploye = async (email: string) => {
  return await EmployeModel.findOne({ email });
};

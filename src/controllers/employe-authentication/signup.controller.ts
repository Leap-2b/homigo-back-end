import { Request, Response } from "express";
import { isExistingEmploye } from "../../utils/existing-user-check";
import { hashPassword } from "../../utils/password-util";
import { EmployeModel } from "../../models";

export const signUp = async (req: Request, res: Response) => {
  try {
    const {
      phone,
      email,
      password,
      firstName,
      lastName,
      register,
      address,
      secondPhone,
      experience,
      category,
    } = req.body;
    const existingEmploye = await isExistingEmploye(email);
    if (existingEmploye) {
      res.status(409).json({ message: "User is already registered." });
      return;
    }
    const hashedPassword = await hashPassword(password);
    const newEmploye = await EmployeModel.create({
      phone,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      register,
      address,
      secondPhone,
      experience,
      category,
    });
    res
      .status(200)
      .json({ message: "Successfully created Employe", newEmploye });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

import { Request, Response } from "express";
import { EmployeModel } from "../../models";
import { comparePassword } from "../../utils/password-util";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body;
    const employe = await EmployeModel.findOne({ phone });
    if (!employe) {
      res.status(400).json({ message: "employe not found" });
      return;
    }
    const isPasswordCorrect = comparePassword(password, employe.password);
    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Incorrect phone or password." });
    }
    res.status(200).json({ message: "Successfully logged in.", employe });
  } catch (error) {
    res.status(500).json({ message: "employ signIn error", error });
  }
};

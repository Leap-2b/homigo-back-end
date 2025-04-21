import { Request, Response } from "express";
import { EmployeModel } from "../../models";
import { comparePassword } from "../../utils/password-util";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body;
    const employe = await EmployeModel.findOne({ phone });
    if (!employe) {
      res.status(400).json({ message: "тухайн утсандээр ажилтан бүртгэлгүй байна" });
      return;
    }
    const isPasswordCorrect = comparePassword(password, employe.password);
    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Нууц үг буруу байна" });
    }
    res.status(200).json({ message: "Амжилттай нэвтэрлээ", employe });
  } catch (error) {
    res.status(500).json({ message: "Сэрвэрийн алдаа", error });
  }
};

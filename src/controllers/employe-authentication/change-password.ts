import { Request, Response } from "express";
import { EmployeModel } from "../../models";
import { hashPassword } from "../../utils/password-util";

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { _id, password } = req.body;

    if (!password) {
      res.status(400).json({ message: "Шинэ нууц үг шаардлагатай." });
    }

    const hashedPassword = await hashPassword(password);

    const updatedEmployee = await EmployeModel.findByIdAndUpdate(
      _id,
      { password: hashedPassword },
      { new: true }
    );

    if (!updatedEmployee) {
      res.status(404).json({ message: "Ажилтан олдсонгүй." });
    }

    res.status(200).json({ message: "Нууц үг амжилттай шинэчлэгдлээ." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Нууц үг солих үед алдаа гарлаа", error });
  }
};

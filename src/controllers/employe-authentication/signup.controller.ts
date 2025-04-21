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
      about,
      address,
      secondPhone,
      experience,
      category,
      img,
    } = req.body;
    const existingEmploye = await isExistingEmploye(email);
    if (existingEmploye) {
      res
        .status(409)
        .json({
          message: "Тухайн емайл юм уу утас дээр хэрэглэгч бүртгүүлсэн байна",
        });
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
      about,
      address,
      secondPhone,
      experience,
      category,
      img,
    });
    res.status(200).json({ message: "Амжилттай бүртгэгдлээ", newEmploye });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Сэрвэрийн алдаа", error });
  }
};

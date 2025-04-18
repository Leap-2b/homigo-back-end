import { Request, Response } from "express";
import {
  isExistingEmailUser,
  isExistingPhoneUser,
} from "../../utils/existing-user-check";
import { hashPassword } from "../../utils/password-util";
import { UserModel } from "../../models";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { userName, email, phone, password } = req.body;
    if (!email) {
      res.status(400).json({ message: "Email is required." });
      return;
    }
    const existingEmailUser = await isExistingEmailUser(email);
    const existingNunberUser = await isExistingPhoneUser(phone);

    if (existingEmailUser) {
      res
        .status(409)
        .json({ message: "Емайл дээр хэрэглэгч аль хэдийн бүртгүүлсэн байна" });
      return;
    }
    if (existingNunberUser) {
      res
        .status(409)
        .json({ message: "Утас дээр хэрэглэгч аль хэдийн бүртгүүлсэн байна" });
      return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await UserModel.create({
      userName,
      email,
      phone,
      password: hashedPassword,
    });
    res.status(200).json({ message: "Амжилттай бүртгүүллээ", newUser });
  } catch (error) {
    console.error("Error during signup:", error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

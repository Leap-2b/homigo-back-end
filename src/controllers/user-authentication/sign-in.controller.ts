import { Request, Response } from "express";
import { UserModel } from "../../models";
import { comparePassword } from "../../utils/password-util";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body;

    const user = await UserModel.findOne({ phone }).select("+password");

    if (!user) {
      res.status(400).json({ message: "No user found with this phone." });
      return;
    }
    const isPasswordCorrect = comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Incorrect email or password." });
    }

    res.status(200).json({ message: "Successfully logged in.", user });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

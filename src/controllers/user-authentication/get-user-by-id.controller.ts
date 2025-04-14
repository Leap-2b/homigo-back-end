import { Request, Response } from "express";
import { UserModel } from "../../models";

export const userById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    console.log(_id);
    const user = await UserModel.findById(_id);

    if (!user) {
      res.status(400).json({ message: "user not found" });
      return;
    }
    res.status(200).json({ message: "hereglegch oldloo", user });
  } catch (error) {
    res.status(500).json({ message: "error get user by id", error });
  }
};

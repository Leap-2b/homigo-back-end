import { Request, Response } from "express";
import { EmployeModel } from "../../models";

export const getEmployeById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    console.log(_id);

    const employe = await EmployeModel.findById(_id);

    if (!employe) {
      res.status(400).json({ message: "iim id tei hereglegch baihgui baina" });
      return;
    }
    res.status(200).json({ message: "amjilttai hereglegch oldoo", employe });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "get employ by id error", error });
  }
};

import { Request, Response } from "express";
import { EmployeModel } from "../../models";

export const changeInfo = async (req: Request, res: Response) => {
  const { _id, img, lastName, firstName, about, email } = req.body;

  try {
    const updatedEmploye = await EmployeModel.findByIdAndUpdate(
      _id,
      {
        img,
        lastName,
        firstName,
        about,
        email,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedEmploye) {
      res.status(404).json({ message: "Ажилтан олдсонгүй" });
      return;
    }

    res.status(200).json({ message: "Амжилттай солигдлоо", updatedEmploye });
  } catch (error) {
    res.status(500).json({ message: "Шинэчлэхэд алдаа гарлаа", error });
  }
};

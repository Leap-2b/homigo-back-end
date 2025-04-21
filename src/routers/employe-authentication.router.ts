import { Router } from "express";
import {
  changePassword,
  getEmployeById,
  getEmployWithProducts,
  signIn,
  signUp,
} from "../controllers/employe-authentication";

export const employeAuthenticationRouter = Router();
employeAuthenticationRouter.post("/sign-up", signUp);
employeAuthenticationRouter.post("/sign-in", signIn);
employeAuthenticationRouter.get("/refresh/:_id", getEmployeById);
employeAuthenticationRouter.get("/", getEmployWithProducts);
employeAuthenticationRouter.put("/change-password", changePassword);

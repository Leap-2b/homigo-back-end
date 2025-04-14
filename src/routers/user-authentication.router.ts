import { Router } from "express";
import { signIn, signUp, userById } from "../controllers/user-authentication";

export const userAuthenticationRouter = Router();
userAuthenticationRouter.post("/sign-up", signUp);
userAuthenticationRouter.post("/sign-in", signIn);
userAuthenticationRouter.get("/refresh/:_id", userById);

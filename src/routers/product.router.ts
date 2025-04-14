import { Router } from "express";
import { createProduct } from "../controllers/product";


export const productRouter = Router();
productRouter.post("/product", createProduct);

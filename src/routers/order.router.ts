import { Router } from "express";
import { createOrder, getOrderById } from "../controllers/order";

export const orderRoutes = Router();
orderRoutes.get("/order", createOrder);
orderRoutes.get("/order/:_id", getOrderById);

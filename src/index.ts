import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./database/db";
import {
  employeAuthenticationRouter,
  orderRoutes,
  productRouter,
  userAuthenticationRouter,
} from "./routers";

const app = express();
app.use(cors());
app.use(bodyParser.json());
configDotenv();
connectMongoDb();

app.use("/auth/users", userAuthenticationRouter);
app.use("/auth/employe", employeAuthenticationRouter);
app.use("/", productRouter);
app.use("/", orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});

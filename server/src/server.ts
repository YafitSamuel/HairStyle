import express, { Request, Response, Router } from "express";
import { connectDb } from "./DB/db";
import dotenv from "dotenv";
import { router } from "./Routes/userRoute";
import { notificationsRouter } from "./Routes/notificationsRoute";
import { register, login } from "../config/auth";

const port = process.env.PORT || 8001;
const app = express();
dotenv.config();
connectDb.then((val) => val).catch((err) => err);
app.use(express.json());
app.use(router);
app.use(notificationsRouter);

app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});

app.post("/register", (req: Request, res: Response) => {
  return register(req, res);
});

app.post("/login", (req: Request, res: Response) => {
  return login(req, res);
});


import express, { Request, Response, Router } from 'express';
import { connectDb } from "./DB/db"
import dotenv from "dotenv"
import cors from "cors"
import {router} from "./Routes/userRoute"

const port = process.env.PORT || 8001;
const app = express();
dotenv.config()
connectDb.then((val) => val).catch((err) => err)
app.use(express.json());
app.use(router);
// app.use(cors)

 

app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});








 




























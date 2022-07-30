import express from "express";
import path from "path";
import { connectDb } from "./DB/db";
import dotenv from "dotenv"

dotenv.config()
const app = express();
connectDb.then((val) => val).catch((err) => err);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});



// const path=require('path');
// const cors=require('cors')
// app.use(cors());
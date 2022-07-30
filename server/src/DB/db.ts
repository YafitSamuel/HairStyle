import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Connection = process.env.DataBaseConnection
  ? process.env.DataBaseConnection
  : "";
const connectDb = mongoose
  .connect(Connection)
  .then(() => console.log("connected"))
  .catch((err) => console.log("error"));

export { connectDb };

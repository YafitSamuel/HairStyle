
import mongoose from "mongoose";
const Catalog = new mongoose.Schema(
  {
    image: "String",
  },
  { timestamps: true }
);
export { Catalog };
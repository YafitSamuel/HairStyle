
import mongoose from "mongoose";
const Catalog = new mongoose.Schema(
  {
    image: { type: String, require: true },
  },
  { timestamps: true }
);
export { Catalog };
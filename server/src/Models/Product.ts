import mongoose from "mongoose";
const Product = new mongoose.Schema(
  {
    image: { type: String, require: true },
    text:{ type: String, require: true },
    price:{ type: String, require: true },


  },
  { timestamps: true }
);
export { Product };
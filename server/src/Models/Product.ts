import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    image: String,
    text: String,
    price: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);

export default Product;

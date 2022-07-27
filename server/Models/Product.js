const mongoose = require("mongoose");
const Product = new mongoose.Schema(
  {
    image: { type: String, require: true },
    text:{ type: String, require: true },
    price:{ type: String, require: true },


  },
  { timestamps: true }
);
module.exports = mongoose.model("product", Product);
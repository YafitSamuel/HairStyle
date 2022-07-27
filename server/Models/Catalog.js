const mongoose = require("mongoose");
const Catalog = new mongoose.Schema(
  {
    image: { type: String, require: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("catalog", Catalog);

const mongoose = require("mongoose");
const Alert = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    typeOfTreatment: { type: String, require: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("alert", Alert);

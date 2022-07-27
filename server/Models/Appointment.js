const mongoose = require("mongoose");
const Appointment = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    typeOfTreatment: { type: String, require: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
module.exports = mongoose.model("appointment", Appointment);

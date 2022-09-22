
import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema(
  {
    userId: String,
    typeOfTreatment: String,
    date: Date
  },
  { timestamps: true }
);

const Appointment= mongoose.model("appointment", appointmentSchema)

export default Appointment ; 
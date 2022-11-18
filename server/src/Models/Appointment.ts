
import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema(
  {
    userId: String,
    typeOfAppointment: String,
    date: Date,
    time:String
  },
  { timestamps: true }
);

const Appointment= mongoose.model("appointment", appointmentSchema)

export default Appointment ; 
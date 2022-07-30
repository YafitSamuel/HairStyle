import mongoose from "mongoose";

const Notifications = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    typeOfTreatment: { type: String, require: true },
  },
  { timestamps: true }
);
export { Notifications };
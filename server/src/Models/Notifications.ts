import mongoose from "mongoose";

const notificationsSchema = new mongoose.Schema(
  {
    userId: String,
    typeOfTreatment: String
  },
  { timestamps: true }
);
const Notifications = mongoose.model("notifications", notificationsSchema);

export default Notifications;


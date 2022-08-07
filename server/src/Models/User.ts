import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    image: String,
    password: String,
    isAdmin: Boolean,
    appointment: Date,
    phoneNumber: Number,
   id: String,
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;

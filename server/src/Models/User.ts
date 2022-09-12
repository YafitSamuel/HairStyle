import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String, 
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

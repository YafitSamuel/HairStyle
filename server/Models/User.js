const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    image:{type: String},
    password:{ type: String, require: true },
    isAdmin: { type: Boolean, default: false },
    myAppointment:{ type: Date, default: Date.now },
    phoneNumber:{ type: Number, require: true},
    userId:{ type: String, require: true },

  },
  { timestamps:true}
);
module.exports=mongoose.model('user',User)

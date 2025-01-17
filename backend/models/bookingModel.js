const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
    },
    tourName:{
        type:String,
        require:true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    bookAt:{
        type:Date,
        required:true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
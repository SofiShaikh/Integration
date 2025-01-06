const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    tourName:{
        type:String,
        require : [true, "Please add tour name"],
    },

    tourCountryName:{
        type:String,
        require : [true, "Please add tour country name"],
    },

    tourCost:{
        type:String,
        require : [true, "Please add tour cost"],
    },

    tourImage:{
        type:String,
       
    },
    reviews: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Review",
        },
      ],
  
    featured: {
        type: Boolean,
        default: false,
      },
}, {
    timestamps:true,
}

);
module.exports = mongoose.model("Tour", tourSchema);
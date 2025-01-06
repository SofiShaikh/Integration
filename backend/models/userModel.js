const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        require : [true, "Please add user name"],
    },

    userEmail:{
        type:String,
        require : [true, "Please add email"],
        unique : [true, "Email address already taken"]
    },

    userPassword:{
        type:String,
        require : [true, "Please add user password"],
    },

}, {
    timestamps:true,
}

);
module.exports = mongoose.model("User", userSchema);
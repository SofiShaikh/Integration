const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc get all contacts
//@route GET /api/contacts
//@access public

const registerUser = asyncHandler(async (req, res) =>{
    const {userName, userEmail, userPassword} = req.body;
    if(!userName || !userEmail || !userPassword){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ userEmail });
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    console.log( "Hashed password", hashedPassword);
    const user = await User.create({
        userName, userEmail, 
        userPassword : hashedPassword
        });

    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id: userName, email:userEmail});
    }
    else{
        res.status(400);
        throw new Error("User data invalid");
    }



    res.json({message :"Register the user"});
});



//@desc get all contacts
//@route GET /api/contacts
//@access public
const loginUser = asyncHandler(async (req, res) =>{
    const {userEmail, userPassword} = req.body;

    if(!userEmail ||  !userPassword){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({userEmail});
    if(user && (await bcrypt.compare(userPassword, user.userPassword))){
        const accessToken = jwt.sign({
            user : {
                userName : user.userName,
                userEmail : user.userEmail,
                id : user.id
            },
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn : "1m"}
    );
    return res.status(200).json({ accessToken});

    }else{
         res.status(401);
        throw new Error("Email or password is not valid");
    }
});



//@desc get all contacts
//@route GET /api/contacts
//@access private
const currentUser = asyncHandler(async (req, res) =>{
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser};
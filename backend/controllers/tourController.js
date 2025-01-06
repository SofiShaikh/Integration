const asyncHandler = require("express-async-handler");
const Tour = require("../models/tourModel");

//@desc get all contacts
//@route GET /api/contacts
//@access public

const getTour = asyncHandler(async (req, res) => {
    const tour = await Tour.find();
    res.status(200).json(tour);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createTour = asyncHandler(async (req, res) => {
    console.log("Request body is: ", req.body);
    const {tourName, tourCountryName, tourCost, feature} = req.body;
    if(!tourName || !tourCountryName || !tourCost || !feature){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const tour = await Tour.create({
        tourName, tourCountryName, tourCost, feature
    });
    res.status(201).json(tour);
});

//@desc Get contacts by id
//@route GET /api/contacts/:id
//@access public

const getTourById = asyncHandler(async (req, res) => {

    const tour = await Tour.findById(req.params.id);
    if(!tour){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(tour);
});

//@desc Update contacts by id
//@route PUT /api/contacts/:id
//@access public

const updateTourById = asyncHandler(async (req, res) => {
    const {id} = req.params.id
    const contact = await Tour.findById(id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedTour = await Tour.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updatedTour);
});

//@desc Delete contacts by id
//@route DELETE /api/contacts/:id
//@access public

const deleteTourById = asyncHandler(async (req, res) => {
    const tour = await Tour.findById(req.params.id);
    if(!tour){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(tour);
});

module.exports = {getTour, createTour, getTourById, updateTourById, deleteTourById};
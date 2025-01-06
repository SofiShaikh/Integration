const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");

//@desc get all contacts
//@route GET /api/contacts
//@access public

const getBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.find();
    res.status(200).json(booking);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createBooking = asyncHandler(async (req, res) => {
    console.log("Request body is: ", req.body);
    const {tourId, username, reviewText, rating} = req.body;
    if(!username || !reviewText || !rating){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const booking = await Booking.create({
        tourId, username, reviewText, rating
    });
    res.status(201).json(booking);
});

//@desc Get contacts by id
//@route GET /api/contacts/:id
//@access public

const getBookingById = asyncHandler(async (req, res) => {

    const booking = await Booking.findById(req.params.id);
    if(!booking){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(booking);
});

//@desc Update contacts by id
//@route PUT /api/contacts/:id
//@access public

const updateBookingById = asyncHandler(async (req, res) => {
    const {id} = req.params.id
    const booking = await Booking.findById(id);
    if(!booking){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updatedBooking);
});

//@desc Delete contacts by id
//@route DELETE /api/contacts/:id
//@access public

const deleteBookingById = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    if(!booking){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json(booking);
});

module.exports = {getBooking, createBooking, getBookingById, updateBookingById, deleteBookingById};
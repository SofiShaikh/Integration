const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");

//@desc get all contacts
//@route GET /api/contacts
//@access public

const getReview = asyncHandler(async (req, res) => {
    const review = await Review.find();
    res.status(200).json(review);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createReview = asyncHandler(async (req, res) => {
    console.log("Request body is: ", req.body);
    const {tourId, username, reviewText, rating} = req.body;
    if(!username || !reviewText || !rating){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const review = await Review.create({
        tourId, username, reviewText, rating
    });
    res.status(201).json(review);
});

//@desc Get contacts by id
//@route GET /api/contacts/:id
//@access public

const getReviewById = asyncHandler(async (req, res) => {

    const review = await Review.findById(req.params.id);
    if(!review){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(review);
});

//@desc Update contacts by id
//@route PUT /api/contacts/:id
//@access public

const updateReviewById = asyncHandler(async (req, res) => {
    const {id} = req.params.id
    const review = await Review.findById(id);
    if(!review){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedTour = await Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updatedTour);
});

//@desc Delete contacts by id
//@route DELETE /api/contacts/:id
//@access public

const deleteReviewById = asyncHandler(async (req, res) => {
    const review = await Review.findById(req.params.id);
    if(!review){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json(review);
});

module.exports = {getReview, createReview, getReviewById, updateReviewById, deleteReviewById};
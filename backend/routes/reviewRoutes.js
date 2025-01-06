const express = require("express");
const router = express.Router();
const { getReview } = require("../controllers/reviewController");
const { createReview } =require("../controllers/reviewController");
const { getReviewById } = require("../controllers/reviewController");
const { updateReviewById } = require("../controllers/reviewController");
const { deleteReviewById } = require("../controllers/reviewController");

router.route('/').get(getReview).post(createReview);

router.route('/:id').get(getReviewById).put(updateReviewById).delete(deleteReviewById);

module.exports = router;


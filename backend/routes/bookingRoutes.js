const express = require("express");
const router = express.Router();
const { getBooking } = require("../controllers/bookingController");
const { createBooking } =require("../controllers/bookingController");
const { getBookingById } = require("../controllers/bookingController");
const { updateBookingById } = require("../controllers/bookingController");
const { deleteBookingById } = require("../controllers/bookingController");

router.route('/').get(getBooking).post(createBooking);

router.route('/:id').get(getBookingById).put(updateBookingById).delete(deleteBookingById);

module.exports = router;
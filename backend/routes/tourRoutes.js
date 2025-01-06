const express = require("express");
const router = express.Router();
const { getTour } = require("../controllers/tourController");
const { createTour } =require("../controllers/tourController");
const { getTourById } = require("../controllers/tourController");
const { updateTourById } = require("../controllers/tourController");
const { deleteTourById } = require("../controllers/tourController");

router.route('/').get(getTour).post(createTour);

router.route('/:id').get(getTourById).put(updateTourById).delete(deleteTourById);

module.exports = router;
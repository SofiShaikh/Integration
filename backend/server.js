const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDb =require("./config/dbConnection");
const dotenv = require("dotenv").config();


connectDb();
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/tours", require("./routes/tourRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

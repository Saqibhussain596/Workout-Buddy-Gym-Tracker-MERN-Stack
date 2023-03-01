require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutsRoutes");
const cors = require("cors");
// express app
const app = express();
app.use(cors());
mongoose.set("strictQuery", true);
// connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port ", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
// Middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/workouts", workoutRoutes);

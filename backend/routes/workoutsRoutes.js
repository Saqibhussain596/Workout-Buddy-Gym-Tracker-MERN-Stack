const express = require("express");
const router = express.Router();
const workoutsControllers = require("../controllers/workoutsControllers");

// GET all workouts
router.get("/", workoutsControllers.workouts_index);

// GET a single workout
router.get("/:id", workoutsControllers.workouts_details);

// POST a workout
router.post("/", workoutsControllers.workouts_create_post);

// DELETE a workout
router.delete("/:id", workoutsControllers.workouts_delete);

// PATCH (update) a workout
router.patch("/:id", workoutsControllers.workouts_update);

module.exports = router;

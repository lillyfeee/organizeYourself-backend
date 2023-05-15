const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const router = express.Router();
const mongoose = require("mongoose");

const Task = require("../models/ToDo.model");

//  POST /api/tasks  -  Creates a new task
router.post("/tasks", (req, res, next) => {
  const { tasks, completed} = req.body;

  Task.create({ tasks, completed })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/tasks/:taskId  - Retrieves a specific task by id
router.get("/tasks", (req, res, next) => {

  Task.find()
    .then((oneTask) => res.json(oneTask))
    .catch((error) => res.json(error));
});

//  DELETE /api/tasks/:taskId  - Deletes a specific task by id
router.delete("/tasks/:taskId", (req, res, next) => {
  const { taskId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Task.findByIdAndRemove(taskId)
    .then(() =>
      res.json({ message: `Task with ${taskId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
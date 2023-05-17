const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Name = require("../models/Grateful.model")
const router = express.Router();
const mongoose = require("mongoose");

//  POST /api/tasks  -  Creates a new task
router.post("/", (req, res, next) => {
  const { name } = req.body;

  Name.create({ name })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/tasks/:taskId  - Retrieves a specific task by id
router.get("/", (req, res, next) => {

    Name.find()
      .then((oneName) => res.json(oneName))
      .catch((error) => res.json(error));
  });

//  DELETE /api/tasks/:taskId  - Deletes a specific task by id
router.delete("/:nameId", (req, res, next) => {
    const { nameId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(nameId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Name.findByIdAndRemove(nameId)
      .then(() =>
        res.json({ message: `Task with ${nameId} is removed successfully.` })
      )
      .catch((error) => res.json(error));
  });
  


  module.exports = router;
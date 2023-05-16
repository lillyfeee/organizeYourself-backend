const router = require("express").Router();
const Tasks = require("../models/ToDo.model")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/projects", (req, res, next) => {
  Tasks.find ()
  .then (response => {
    res.status(201).json(response)
  })
  .catch (error => {
    res.status.json("error")
  })
})

module.exports = router;

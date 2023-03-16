const express = require("express");
const router = express.Router();

const Post = require("../models/Post")

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
  res.send("Home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("about");
});

router.get("/about", (req, res) => {
  res.send("about");
});

module.exports = router

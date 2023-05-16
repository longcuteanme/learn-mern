const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/User");

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/", [createUser]);

module.exports = router;

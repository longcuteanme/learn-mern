const express = require("express");
const router = express.Router();

const { login } = require("../controller/User");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", [login]);

module.exports = router;

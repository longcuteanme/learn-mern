const express = require("express");
const router = express.Router();
const login = require("./login");
const register = require("./register");

router.get("/", (req, res) => {
  res.render("home");
});

router.use("/login", login);
router.use("/register", register);

module.exports = router;

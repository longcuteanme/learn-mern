const express = require("express");
const router = express.Router();
const login = require("./login");
const register = require("./register");
const post = require("./post");

router.get("/", (req, res) => {
  res.render("home");
});

router.use("/login", login);
router.use("/register", register);
router.use("/post", post);

module.exports = router;

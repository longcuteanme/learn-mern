require("dotenv").config();

const User = require("../models/User");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { username, password, isAdmin } = req.body;
  const userExit = await User.findOne().byUsername(username);
  if (userExit) {
    res.status(400).json({
      code: 400,
      status: "failure",
      message: "User already exists",
    });
    return;
  }
  const newUser = new User({ ...req.body, isAdmin: false });
  try {
    await newUser.save();
    res.status(200).json({
      code: 200,
      status: "success",
      elements: newUser._id,
    });
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: "failure",
      message: err,
    });
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    const user = await User.findOne({ username, password });
    if (user) {
      const accessToken = jwt.sign(
        { _id: user._id, is_admin: user.isAdmin },
        process.env.secret_key,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        code: 200,
        status: "success",
        accessToken: accessToken,
      });
      // res.redirect("/post");
      return;
    }
  }
  res.status(404).json({ code: 400, status: "wrong id" });
};

module.exports = { createUser, login };

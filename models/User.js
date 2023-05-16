const mongoose = require("mongoose");

const { Schema } = mongoose;

const User = new Schema({
  username: String,
  name: String,
  password: String,
  email: String,
  phone: String,
  address: String,
  isAdmin: Boolean,
});

module.exports = mongoose.model("users", User);

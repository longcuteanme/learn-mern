const mongoose = require("mongoose");

const { Schema } = mongoose;

const User = new Schema(
  {
    username: { type: String, required: true, trim: true },
    name: String,
    password: { type: String, required: true, trim: true },
    email: String,
    phone: String,
    address: String,
    isAdmin: { type: Boolean, required: true, trim: true },
  },
  {
    timestamps: true,
    statics: {
      async authenticate(username, password) {
        const users = await this.find({ username, password });
        if (users.length > 0) {
          return users[0];
        } else return null;
      },
    },
  }
);

module.exports = mongoose.model("users", User);

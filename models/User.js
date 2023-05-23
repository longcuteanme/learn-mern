const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const { Schema } = mongoose;

const User = new Schema(
  {
    username: { type: String, required: true, trim: true, lowercase: true },
    name: String,
    password: {
      type: String,
      required: true,
      trim: true,
      // {
      //   return bcrypt.hash(p, saltRounds, function (err, hash) {
      //     if (!err) {
      //       console.log("hash", hash);
      //       return hash;
      //     }
      //   });
      // },
    },
    email: String,
    phone: String,
    address: String,
    isAdmin: { type: Boolean, required: true, trim: true },
  },
  {
    timestamps: true,
    methods: {
      getListPost() {
        return mongoose.model("posts").find({ userId: this._id });
      },
    },
    statics: {
      async authenticate(username, password) {
        const users = await this.find({ username, password });
        if (users.length > 0) {
          return users[0];
        }
      },
    },
    query: {
      byUsername(username) {
        return this.where({ username });
      },
    },
  }
);

User.pre("save", async function (next) {
  // Only hash the password if it has been modified or is new
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, saltRounds, function (err, hash) {
    if (!err) {
      console.log("hash", hash);
      this.password = hash;
      next();
    }
  });
});

module.exports = mongoose.model("users", User);

const mongoose = require("mongoose");
const config = require("./default");
const db = config.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("mongoDB connected");
  } catch (err) {
    console.log("can't connect to mongodb", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

import mongoose from "mongoose";
import config from "./default.json";
const db = config.mongoURI;

export const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      autoIndex: false,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("mongoDB connected");
  } catch (err) {
    console.log("can't connect to mongodb", err.message);
    process.exit(1);
  }
};

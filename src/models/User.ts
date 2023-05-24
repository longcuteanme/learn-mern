import mongoose from "mongoose";

const { Schema } = mongoose;

export interface IUser {
  username: string;
  password: string;
  name: string;
  email?: string;
  phone: String;
  address: String;
  isAdmin: Boolean;
}

const User = new Schema<IUser>(
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
    isAdmin: { type: Boolean, required: true, trim: true, default: false },
  },
  {
    timestamps: true,
    methods: {
      getListPost() {
        return mongoose.model("posts").find({ userId: this._id });
      },
    },
    statics: {
      async authenticate(username: string, password: string) {
        const users = await this.find({ username, password });
        if (users.length > 0) {
          return users[0];
        }
        return null;
      },
    },
    query: {
      byUsername(username: string) {
        return this.where({ username });
      },
    },
  }
);

export default mongoose.model("users", User);

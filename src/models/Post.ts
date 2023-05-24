import mongoose from "mongoose";

const { Schema } = mongoose;

interface IPost {
  name: string;
  userId: string;
  description: string;
}

const Post = new Schema<IPost>(
  {
    name: { type: String, required: true, trim: true, maxLength: 50 },
    description: { type: String, required: true, trim: true, maxLength: 300 },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
    statics: {
      async getPostsByUserId(userId) {
        const posts = await this.find({ userId: userId });
        return posts;
      },
    },
    query: {
      byUserId(userId) {
        return this.where({ userId });
      },
    },
  }
);

Post.index({ _id: 1, userId: 1 }, { sparse: true });

module.exports = mongoose.model("posts", Post);
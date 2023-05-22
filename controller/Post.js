const Post = require("../models/Post");
const User = require("../models/User");

const createPost = async (req, res) => {
  const userId = req.user._id;
  const newPost = new Post({ ...req.body, userId });
  try {
    await newPost.save();
    res.status(200).json({
      code: 200,
      status: "success",
      elements: newPost._id,
    });
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: "failure",
      menubar: err,
    });
  }
};

const getPosts = async (req, res) => {
  const userId = req.user._id;
  try {
    const posts = await Post.find().byUserId(userId);
    res.status(200).json({
      code: 200,
      status: "success",
      data: posts,
    });
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: "failure",
      message: err,
    });
  }
};

const deletePost = async (req, res) => {
  const userId = req.user._id;
  console.log(req.query)
  const postId = req.query.postId;
  console.log(postId)
  try {
    const postDelete = await Post.findOne({ userId, _id: postId });
    console.log(postDelete)
    await postDelete.remove();
    res.status(200).json({
      code: 200,
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      code: 400,
      status: "failure",
      message: err,
    });
  }
};

module.exports = { createPost, getPosts, deletePost };

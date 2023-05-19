const Post = require("../models/Post");

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
    const posts = await Post.getPostsByUserId(userId);
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
  try {
    const posts = await Post.getPostsByUserId(userId);
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

module.exports = { createPost, getPosts };

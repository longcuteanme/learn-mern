const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const { createPost, getPosts } = require("../controller/Post");

router.get("/", [verifyToken, getPosts]);

router.post("/", [verifyToken, createPost]);

module.exports = router;

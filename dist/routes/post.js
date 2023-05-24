"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const { createPost, getPosts, deletePost } = require("../controller/Post");
router.get("/", [verifyToken, getPosts]);
router.post("/", [verifyToken, createPost]);
router.delete("/", [verifyToken, deletePost]);
exports.default = router;
//# sourceMappingURL=post.js.map
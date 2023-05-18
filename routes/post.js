const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");

router.get("/", [verifyToken]);

module.exports = router;

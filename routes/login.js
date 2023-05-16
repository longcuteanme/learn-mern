const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName)
});

module.exports = router;

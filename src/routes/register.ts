import express from "express";

const router = express.Router();
const { createUser } = require("../controller/User");

router.get("/", (_req, res) => {
  res.render("register");
});

router.post("/", [createUser]);

export default router;

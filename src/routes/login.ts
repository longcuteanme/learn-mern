import express from "express";

const router = express.Router();

const { login } = require("../controller/User");

router.get("/", (_req: any, res: any) => {
  res.render("login");
});

router.post("/", [login]);

export default router;

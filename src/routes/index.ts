import express from "express";
import login from "./login";
import register from "./register";
import post from "./post";

const indexRouter = express.Router();

indexRouter.get("/", (_req, res) => {
  res.render("home");
});
indexRouter.use("/login", login);
indexRouter.use("/register", register);
indexRouter.use("/post", post);

export default indexRouter;

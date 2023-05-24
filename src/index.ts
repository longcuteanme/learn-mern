require("dotenv").config();

import { engine } from "express-handlebars";
import { connectDB } from "./config/db";
import express from "express";
import indexRouter from "./routes/index";

var bodyParser = require("body-parser");

connectDB();

const { port } = process.env;

const app = express();

app.use(express.urlencoded());
app.use(bodyParser.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

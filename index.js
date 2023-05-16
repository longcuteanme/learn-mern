const express = require("express");
const connectDB = require("./config/db");
const { engine } = require("express-handlebars");
require("dotenv").config();
var bodyParser = require("body-parser");

connectDB();

const { port } = process.env;

var indexRouter = require("./routes/index");

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

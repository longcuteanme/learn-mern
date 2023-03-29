const express = require("express");
const connectDB = require("./config/db");
const home = require("./routes/index");
const { engine } = require("express-handlebars");

connectDB();

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const port = 3000;

// app.use(express.json);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

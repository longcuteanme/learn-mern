const express = require("express");
const { engine } = require('express-handlebars');
const connectDB = require("./config/db");
const home = require("./routes/index");

connectDB();

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

// app.use(express.json);
app.get('/', (req, res) => {
  res.render('index');
});

app.get("/about", (req, res) => {
  res.render("about");
});

// app.use("/", home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

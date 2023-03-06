const express = require("express");
const connectDB = require("./config/db");
const home = require("./routes/index")

connectDB();

const app = express();
const port = 3000;

app.use(express.json);
app.use("/", home)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

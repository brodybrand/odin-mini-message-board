const express = require("express");
const path = require("node:path");

const app = express();

const indexRoute = require("./routes/index");
const newRoute = require("./routes/new");
const messageRoute = require("./routes/message");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRoute);
app.use("/new", newRoute);
app.use("/message", messageRoute);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

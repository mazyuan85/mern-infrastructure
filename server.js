const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require('dotenv').config();
require('./config/database');

const app = express();
const port = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "dist", "vite.svg")));
app.use(express.static(path.join(__dirname, "dist")));

app.get("/api", (req, res) => {
  res.send("Hi!");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

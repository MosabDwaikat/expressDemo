const express = require("express");
const app = express();
const list = require("./list");

app.get("/:id", (req, res) => {
  console.log("get single todo");
  res.status(200);
  console.log(list.filter((e) => e.id.toString() === req.params.id)[0]);
  res.send(list.filter((e) => e.id.toString() === req.params.id)[0]);
});
module.exports = app;

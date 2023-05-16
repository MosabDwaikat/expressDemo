const express = require("express");
const app = express();
const list = require("./list");

app.delete("/:id", (req, res) => {
  console.log("deleting the todo");
  const i = list.indexOf(
    list.filter((e) => e.id.toString() === req.params.id)[0]
  );
  list.splice(i, 1);
  res.status(204);
  res.send();
});
module.exports = app;

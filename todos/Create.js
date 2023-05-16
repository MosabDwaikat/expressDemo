const express = require("express");
const app = express();
const list = require("./list");

app.use(express.json());

app.post("/:id", (req, res) => {
  console.log("Todo created");
  const todo = {
    id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    status: "not done",
  };
  list.push(todo);
  res.status(200);
  res.send(todo);
});
module.exports = app;

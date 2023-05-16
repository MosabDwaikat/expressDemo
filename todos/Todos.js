const express = require("express");
const app = express();
const list = require("./list");
const middle = require("./middle");
const mid2 = require("./postMiddleware");

const single = require("./SingleTodo");
const create = require("./Create");
const update = require("./update");
const remove = require("./remove");

app.all("/:id", middle);
app.get("/:id", single);
app.put("/:id", update);
app.delete("/:id", remove);
app.post("/:id", mid2);
app.post("/:id", create); //needs another middle

app.get("/", (req, res) => {
  console.log("get all todos");
  res.status(200);
  res.send(list);
});
module.exports = app;

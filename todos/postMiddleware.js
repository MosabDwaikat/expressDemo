const express = require("express");
const app = express();
const list = require("./list");

app.use(express.json());

const middleware = function (req, res, next) {
  console.log("title and description check before creating todo");
  const title = req.body.title;
  const description = req.body.description;

  if (!title) {
    res.status(422); //Unprocessable Entity
    res.send("please provide a valid title");
  } else if (!description) {
    res.status(422); //Unprocessable Entity
    res.send("please provide a valid description");
  } else {
    next();
  }
};

app.post("/:id", middleware);

module.exports = app;

const express = require("express");
const app = express();
const list = require("./list");

const middleware = function (req, res, next) {
  console.log("check if ID exist");

  let exist = false;
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element.id.toString() === req.params.id) {
      exist = true;
      break;
    }
  }
  console.log(exist ? "ID exist" : "ID does not exist");
  //check the request type
  if (req.method === "POST") {
    if (exist) {
      console.log("ID already exist, try another ID");
      res.status(409); //Conflict
      res.send("ID already exist, try another ID");
    } else next();
  } else {
    if (exist) next();
    else {
      res.status(404); //not found
      res.send("ID does not exist");
    }
  }
};

app.all("/:id", middleware);

module.exports = app;

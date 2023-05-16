const express = require("express");
const app = express();
const list = require("./list");

app.put("/:id", (req, res) => {
  console.log("updating the todo status");
  let newStatus;
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element.id.toString() === req.params.id) {
      element.status = element.status === "done" ? "not done" : "done";
      newStatus = element.status;
      break;
    }
  }
  res.status(200);
  res.send("todo with id= " + req.params.id + " is set to " + newStatus);
});
module.exports = app;

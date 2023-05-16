const express = require("express");
const app = express();
const port = 3000;
const list = require("./todos/list");
const todos = require("./todos/Todos");

app.use(express.static("public"));
app.use("/todos", todos);

app.get("/", (req, res) => {
  res.status(200);
  res.send(list);
});
app.delete("/", (req, res) => {
  if (list.length === 0) {
    res.status(422);

    res.send("no objects are available for deletion");
  } else {
    const i = Math.floor(Math.random() * list.length);
    list.splice(i, 1);
    res.status(204);

    res.send();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

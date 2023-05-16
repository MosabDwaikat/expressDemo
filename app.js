const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const list = require("./todos/list");
const todos = require("./todos/Todos");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static("public"));
app.use("/todos", todos);

app.get("/", (req, res) => {
  res.status(200);
  res.send(list);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// routing basic

app.get("/", (req, res) => {
  res.send("Main!");
});

app.get("/hello", (req, res) => {
  console.log({ urlParam: req.query });
  res.send("Hello Lalalala!");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  const username = req.body.username;
  if (username === usernameFromDBExist) {
    res.status(400);
    res.send("Username tidak dapat digunakan");
  } else {
    res.send("Username dapat digunakan");
  }
  res.send("Welcome Rafly");
});

app.put("/username", (req, res) => {
  console.log({ updatedData: req.body });
  res.send("update success");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

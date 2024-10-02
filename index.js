const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

// routing basic

app.get("/", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, async (err, result) => {
    // hasil data dari database
    try {
      if (result.length > 0) {
        response(200, result, "Get data from mahasiswa", res);
      } else {
        response(404, null, "Data not found", res);
      }
    } catch (error) {
      response(500, null, "Internal server error", res);
    }
  });
});

app.get("/find", (req, res) => {
  const sql = `SELECT * FROM mahasiswa WHERE nim = ${req.query.nim}`;
  console.log(`find nim : ${req.query.nim}`);
  db.query(sql, async (err, result) => {
    try {
      if (result.length > 0) {
        response(200, result, "Get data from mahasiswa", res);
      } else {
        response(404, null, "Data not found", res);
      }
    } catch (error) {
      response(500, null, "Internal server error", res);
    }
  });
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

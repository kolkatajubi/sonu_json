const express = require("express");
// create express app
const app = express();
const port = 3000;
const fs = require("fs");
let rawdata = fs.readFileSync("db.json");
console.log(typeof rawdata);
const bodyParser = require("body-parser");
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// listen for requests
app.listen(port, "127.0.0.1", () =>
  console.log(`Example app listening on port ${port}!`)
);
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/assets/index.html");
});
app.get("/action", function(req, res) {
  res.sendFile(__dirname + "/assets/action.js");
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/db.json");
});
app.post("/requestjson", (req, res) => {
  console.log("hello json");
  console.log(req.body);
  let json = JSON.stringify(req.body);

  console.log(json);
  fs.writeFile("db.json", json, "utf8", () => {
    console.log("User data updated");
  });
  console.log("entered in var stored");
});

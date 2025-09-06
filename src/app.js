const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log('In home')
  res.send("In homepage");
});

app.get("/dashboard", (req, res) => {
    console.log('In dashboard')
  res.send("In dashboard");
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});

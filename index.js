const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("See you Youtubers ! Welcome to Software Bhayya");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

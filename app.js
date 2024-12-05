const express = require("express");
const app = express();
const port = 5000;

const accounts = require("./accounts");
app.get("/", (req, res) => {
  res.status({ name: "yousef" });
});
app.listen(port, () => {
  console.log(`the application is runing ${port}`);
});

const express = require("express");
const app = express();
const port = 5000;

const accounts = require("./accounts");
app.get("/accont", (req, res) => {
  res.status(200).json(accounts);
});
app.listen(port, () => {
  console.log(`the application is runing ${port}`);
});

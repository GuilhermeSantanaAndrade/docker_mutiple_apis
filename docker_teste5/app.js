const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world 3334")
})

app.listen(3333, () => {
  console.log("Servidor ON 3334")
});
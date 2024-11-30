require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send("kya baba");
});

app.get('/kuchsikha', (req,res) => {
  res.send("kya sikha backend");
});

app.listen(process.env.port, () => {
  console.log("first project in backend");
});

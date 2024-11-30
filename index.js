require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

const githubdata={
  "message":"API rate limit exceeded for 117.250.76.237. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)","documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}


app.get('/', (req, res) => {
  res.send("kya baba");
});

app.get('/kuchsikha', (req,res) => {
  res.send("kya sikha backend");
});
app.get('/github',(req,res)=>{
  res.json(githubdata)
})

app.listen(process.env.port, () => {
  console.log("first project in backend");
});

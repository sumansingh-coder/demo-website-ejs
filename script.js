const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/pokemon", (req, res) => {
  res.send("Hello Charizard!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

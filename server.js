const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "./public")));
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/produtos", (req, res) => {
  res.render("produtos");
});
app.get("/cuidados", (req, res) => {
  res.render("cuidados");
});

app.get("/cadastrar", (req, res) => {
  res.render("cadastrar");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(3000, () => {
  console.log("server running on port 3000!");
});

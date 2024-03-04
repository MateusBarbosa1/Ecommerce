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

require("./routes/home")(app);
require("./routes/produtos")(app);
require("./routes/cuidados")(app);
require("./routes/cadastrar")(app);
require("./routes/login")(app);

module.exports = app;

app.listen(3000, () => {
  console.log("server running on port 3000!");
});

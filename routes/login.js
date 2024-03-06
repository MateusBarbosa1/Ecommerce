module.exports = function (app) {
  const controllerLogin = require("../controllers/loginController");
  app.get("/login", (req, res) => {
    controllerLogin.renderLogin(app, req, res);
  });
  app.post("/login", (req, res) => {
    controllerLogin.login(app, req, res);
  });
};

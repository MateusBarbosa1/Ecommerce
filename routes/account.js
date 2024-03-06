module.exports = function (app) {
  const controllerLogin = require("../controllers/loginController");

  app.get(
    "/account",
    (req, res, next) => {
      controllerLogin.verificarToken(req, res, next);
    },
    (req, res) => {
      res.render("account");
    }
  );
};

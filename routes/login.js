module.exports = function (app) {
  app.get("/login", (req, res) => {
    require("../controllers/loginController").renderLogin(app, req, res);
  });
};

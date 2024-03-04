module.exports = function (app) {
  app.get("/", (req, res) => {
    require("../controllers/homeController").renderHome(app, req, res);
  });
};

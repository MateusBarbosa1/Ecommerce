module.exports = function (app) {
  app.get("/cuidados", (req, res) => {
    require("../controllers/cuidadosController").renderCuidados(app, req, res);
  });
};

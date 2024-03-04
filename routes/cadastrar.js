module.exports = function (app) {
  const controller = require("../controllers/cadastroController");
  app.get("/cadastrar", (req, res) => {
    controller.renderCadastro(app, req, res);
  });
  app.post("/cadastrar", (req, res) => {
    controller.cadastrarUsuario(app, req, res);
  });
};

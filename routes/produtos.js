module.exports = function (app) {
  app.get("/produtos", (req, res) => {
    require("../controllers/produtosController").renderProdutos(app, req, res);
  });
};

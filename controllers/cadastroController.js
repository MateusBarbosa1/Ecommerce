module.exports.renderCadastro = function (app, req, res) {
  res.render("cadastrar", { erro: false });
};
module.exports.cadastrarUsuario = async function (app, req, res) {
  const data = req.body;

  const userModel = require("../models/userModel");
  const created = await userModel.createUser(data);

  if (created == true) {
    res.redirect("/login");
  } else {
    res.render("cadastrar", { erro: true });
  }
};

module.exports.renderCadastro = function (app, req, res) {
  res.render("cadastrar");
};
module.exports.cadastrarUsuario = async function (app, req, res) {
  const data = req.body;

  const userModel = require("../models/userModel");
  await userModel.createUser(data);

  res.redirect("/login");
};

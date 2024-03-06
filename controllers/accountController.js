module.exports.renderAccount = async function (app, req, res) {
  const token = req.cookies["token"];
  const id = req.cookies["id"];

  const userModel = require("../models/userModel");

  const user = await userModel.findUserID(id);
  let nome = user[0].name.split(" ");
  res.render("account", {
    token: true,
    nome: nome[0],
    nomeCompleto: user[0].name,
    email: user[0].email,
    telefone: user[0].phone,
  });
};

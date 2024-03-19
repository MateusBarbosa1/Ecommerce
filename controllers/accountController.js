module.exports.renderAccount = async function (app, req, res) {
  const { jwtDecode } = require("jwt-decode");
  const token = req.cookies["token"];

  const userModel = require("../models/userModel");

  const tokenDecoded = jwtDecode(token);
  const user = await userModel.findUserID(tokenDecoded.id);
  let nome = user[0].name.split(" ");

  if (
    tokenDecoded.email == "pg9779628@gmail.com" ||
    tokenDecoded.email == "gabriellycavcanti@gmail.com"
  ) {
    res.render("account", {
      token: true,
      nome: nome[0],
      nomeCompleto: user[0].name,
      email: user[0].email,
      telefone: user[0].phone,
      admin: true,
    });
  } else {
    res.render("account", {
      token: true,
      nome: nome[0],
      nomeCompleto: user[0].name,
      email: user[0].email,
      telefone: user[0].phone,
      admin: false,
    });
  }
};

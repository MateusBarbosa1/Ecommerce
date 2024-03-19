module.exports.renderProdutos = async function (app, req, res) {
  const { jwtDecode } = require("jwt-decode");
  const token = req.cookies["token"];

  const userModel = require("../models/userModel");

  if (token === undefined) {
    res.render("produtos", { token: false, nome: false });
  } else {
    const tokenDecoded = jwtDecode(token);
    const user = await userModel.findUserID(tokenDecoded.id);
    if (user == false) {
      res.render("produtos", { token: false, nome: false });
    } else {
      let nome = user[0].name.split(" ");
      res.render("produtos", { token: true, nome: nome[0] });
    }
  }
};

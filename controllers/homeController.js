module.exports.renderHome = async function (app, req, res) {
  const { jwtDecode } = require("jwt-decode");

  const token = req.cookies["token"];
  const userModel = require("../models/userModel");

  if (token === undefined) {
    res.render("index", { token: false, nome: false });
  } else {
    const decodedToken = jwtDecode(token); // Correção aqui
    const user = await userModel.findUserID(decodedToken.id);
    if (user == false) {
      res.render("index", { token: false, nome: false });
    } else {
      let nome = user[0].name.split(" ");
      res.render("index", { token: true, nome: nome[0] });
    }
  }
};

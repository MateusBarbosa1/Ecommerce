module.exports.renderProdutos = async function (app, req, res) {
  const token = req.cookies["token"];
  const id = req.cookies["id"];

  const userModel = require("../models/userModel");

  if (token === undefined) {
    res.render("produtos", { token: false, nome: false });
  } else {
    const user = await userModel.findUserID(id);
    if (user == false) {
      res.render("produtos", { token: false, nome: false });
    } else {
      let nome = user[0].name.split(" ");
      res.render("produtos", { token: true, nome: nome[0] });
    }
  }
};

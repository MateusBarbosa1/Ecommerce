module.exports.renderHome = async function (app, req, res) {
  const token = req.cookies["token"];
  const id = req.cookies["id"];

  const userModel = require("../models/userModel");

  if (token === undefined) {
    res.render("index", { token: false, nome: false });
  } else {
    const user = await userModel.findUserID(id);
    let nome = user[0].name.split(" ");
    res.render("index", { token: true, nome: nome[0] });
  }
};

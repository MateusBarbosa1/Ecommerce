module.exports.renderCuidados = async function (app, req, res) {
  const token = req.cookies["token"];
  const id = req.cookies["id"];

  const userModel = require("../models/userModel");

  if (token === undefined) {
    res.render("cuidados", { token: false, nome: false });
  } else {
    const user = await userModel.findUserID(id);
    if (user == false) {
      res.render("cuidados", { token: false, nome: false });
    } else {
      let nome = user[0].name.split(" ");
      res.render("cuidados", { token: true, nome: nome[0] });
    }
  }
};

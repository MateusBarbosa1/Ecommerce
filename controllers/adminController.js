module.exports.renderAdmin = async function (app, req, res) {
  const { jwtDecode } = require("jwt-decode");
  const token = req.cookies["token"];

  const userModel = require("../models/userModel");

  if (token === undefined) {
    res.redirect("/");
  } else {
    const tokenDecoded = jwtDecode(token);
    if (
      tokenDecoded.email == "pg9779628@gmail.com" ||
      tokenDecoded.email == "gabriellycavcanti@gmail.com"
    ) {
      const user = await userModel.findUserID(tokenDecoded.id);
      let nome = user[0].name.split(" ");

      const allUsers = await userModel.allUsers();

      res.render("admin", {
        token: true,
        nome: nome[0],
        usersCreated: allUsers.length,
      });
    } else {
      res.redirect("/");
    }
  }
};

module.exports.createProduct = async function (app, req, res) {
  const produtosModel = require("../models/produtosModel.js");

  await produtosModel.createProduct(req.body, req.file.originalname);

  if (req.file) {
    res.redirect("/admin");
  }
};

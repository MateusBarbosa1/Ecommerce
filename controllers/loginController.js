const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const SECRET = process.env.SECRET;

module.exports.renderLogin = function (app, req, res) {
  res.render("login", { erro: false });
};
module.exports.login = async function (app, req, res) {
  const data = req.body;

  const userModel = require("../models/userModel");
  const usuario = await userModel.findUser(data.email);

  if (usuario == false) {
    res.render("login", { erro: true });
  } else {
    const validacaoPassword = bcrypt.compareSync(
      data.senha,
      usuario[0].password
    );

    if (!validacaoPassword) {
      res.render("login", { erro: true });
    } else {
      const token = jwt.sign(
        { id: usuario[0].id, email: usuario[0].email },
        SECRET
      );

      res.cookie("token", token).redirect("/account");
    }
  }
};

module.exports.verificarToken = function (req, res, next) {
  const tokenHeader = req.cookies["token"];
  const token = tokenHeader;

  if (!token) {
    res.redirect("/login");
  }

  try {
    jwt.verify(token, SECRET);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: 500,
      message: "Token não valido.",
    });
  }
};

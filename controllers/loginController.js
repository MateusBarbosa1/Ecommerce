const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const SECRET = process.env.SECRET;

module.exports.renderLogin = function (app, req, res) {
  res.render("login");
};
module.exports.login = async function (app, req, res) {
  const data = req.body;

  const userModel = require("../models/userModel");
  const usuario = await userModel.findUser(data.email);

  if (usuario == false) {
    return res.status(401).json({
      statusCode: 401,
      message: "Usuário não encontrado!",
      data: {
        email: req.body.email,
      },
    });
  } else {
    const validacaoPassword = bcrypt.compareSync(
      data.senha,
      usuario[0].password
    );

    if (!validacaoPassword) {
      return res.status(401).json({
        statusCode: 401,
        message: "Não autorizado!",
      });
    } else {
      const token = jwt.sign({ name: usuario.name }, SECRET);
      res.cookie("id", usuario[0].id);
      res.cookie("token", token).redirect("/account");
      /*
      res.status(200).json({
        statusCode: 200,
        message: "Login realizado com sucesso!",
        data: {
          token,
        },
      });
      */
    }
  }
};

module.exports.verificarToken = function (req, res, next) {
  const tokenHeader = req.cookies["token"];
  const token = tokenHeader;

  console.log(tokenHeader);

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: "Não autorizado!",
    });
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

module.exports.renderAdmin = async function (app, req, res) {
  const { jwtDecode } = require("jwt-decode");
  const token = req.cookies["token"];

  const userModel = require("../models/userModel");
  const productsModel = require("../models/produtosModel");

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
      const products = await productsModel.getProducts();

      res.render("admin", {
        token: true,
        nome: nome[0],
        usersCreated: allUsers.length,
        productsCreated: products.length,
        products: products,
      });
    } else {
      res.redirect("/");
    }
  }
};

module.exports.createProduct = async function (app, req, res) {
  const { jwtDecode } = require("jwt-decode");
  const token = req.cookies["token"];

  if (token === undefined) {
    res.redirect("/");
  } else {
    const tokenDecoded = jwtDecode(token);
    if (
      tokenDecoded.email == "pg9779628@gmail.com" ||
      tokenDecoded.email == "gabriellycavcanti@gmail.com"
    ) {
      const produtosModel = require("../models/produtosModel.js");

      await produtosModel.createProduct(req.body, req.file.originalname);

      if (req.file) {
        res.redirect("/admin");
      }
    } else {
      res.redirect("/");
    }
  }
};

module.exports.updateProduct = async function (app, req, res) {
  const { jwtDecode } = require("jwt-decode");
  const token = req.cookies["token"];

  if (token === undefined) {
    res.redirect("/");
  } else {
    const tokenDecoded = jwtDecode(token);
    if (
      tokenDecoded.email == "pg9779628@gmail.com" ||
      tokenDecoded.email == "gabriellycavcanti@gmail.com"
    ) {
      const produtosModel = require("../models/produtosModel.js");
      await produtosModel.updateProducts(req.params.id, req.body);

      res.redirect("/admin");
    } else {
      res.redirect("/");
    }
  }
};

module.exports.deleteProduct = async function (app, req, res) {
  const { jwtDecode } = require("jwt-decode");
  const token = req.cookies["token"];

  if (token === undefined) {
    res.redirect("/");
  } else {
    const tokenDecoded = jwtDecode(token);
    if (
      tokenDecoded.email == "pg9779628@gmail.com" ||
      tokenDecoded.email == "gabriellycavcanti@gmail.com"
    ) {
      const fs = require("fs");

      const produtosModel = require("../models/produtosModel.js");
      const productDeleted = await produtosModel.deleteProduct(req.params.id);

      fs.unlink(`./public/images/produtos/${productDeleted.image}`, (error) => {
        if (error) {
          console.error(error);
        }
        console.log("imagem excluida");
      });

      res.redirect("/admin");
    } else {
      res.redirect("/");
    }
  }
};

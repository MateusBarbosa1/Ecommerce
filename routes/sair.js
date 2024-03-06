module.exports = function (app) {
  app.get("/sair", (req, res) => {
    res.clearCookie("token");
    res.clearCookie("id");
    res.redirect("/");
  });
};

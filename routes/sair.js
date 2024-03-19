module.exports = function (app) {
  app.get("/sair", (req, res) => {
    res.clearCookie("token");
    res.clearCookie("token-admin");
    res.clearCookie("id");
    res.redirect("/");
  });
};

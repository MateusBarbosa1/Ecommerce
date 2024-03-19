module.exports = function (app) {
  app.get("/admin", (req, res) => {
    require("../controllers/adminController").renderAdmin(app, req, res);
  });

  const upload = require("../middlewares/uploadImage");

  app.post("/admin/criar-produto", upload.single("image"), (req, res) => {
    require("../controllers/adminController").createProduct(app, req, res);
  });
};

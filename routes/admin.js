module.exports = function (app) {
  app.get("/admin", (req, res) => {
    require("../controllers/adminController").renderAdmin(app, req, res);
  });

  const upload = require("../middlewares/uploadImage");

  app.post("/admin/criar-produto", upload.single("image"), (req, res) => {
    require("../controllers/adminController").createProduct(app, req, res);
  });
  app.post("/admin/update-product/:id", (req, res) => {
    require("../controllers/adminController").updateProduct(app, req, res);
  });
  app.get("/admin/delete-product/:id", (req, res) => {
    require("../controllers/adminController").deleteProduct(app, req, res);
  });
};

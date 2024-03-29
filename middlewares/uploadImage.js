const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images/produtos/");
    },
    filename: (req, file, cb) => {
      console.log(req.body.produto);
      cb(null, file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    const extensaoImg = ["image/png", "image/jpg", "image/jpeg"].find(
      (formatoAceito) => formatoAceito == file.mimetype
    );

    if (extensaoImg) {
      return cb(null, true);
    }

    return cb(null, false);
  },
});

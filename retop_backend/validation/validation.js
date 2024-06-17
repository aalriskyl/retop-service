const { check, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      status: false,
      message: errors.array()[0].msg,
    });
  }
  next();
};


exports.validationLogin = [check("username", "username tidak boleh kosong").notEmpty(), check("password", "password tidak boleh kosong").notEmpty()];

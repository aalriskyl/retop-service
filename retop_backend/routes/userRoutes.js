const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/userController.js");
const { runValidation,  validationLogin } = require("../validation/validation");

// USER AUTH
router.post("/login", validationLogin, runValidation, loginUser);
module.exports = router;

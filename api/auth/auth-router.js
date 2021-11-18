const express = require("express");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");

const router = express.Router();

router.post("/register", (req, res, next) => {
  res.send("[POST] to auth/register");
});

router.post("/login", (req, res, next) => {
  res.send("[POST] to auth/login");
});

module.exports = router;

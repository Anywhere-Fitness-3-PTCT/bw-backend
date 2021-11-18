const express = require("express");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const Users = require("../users/users-model");
const { validateUserPayload } = require("./auth-middleware");

const router = express.Router();

router.post("/register", validateUserPayload, (req, res, next) => {
  res.send("[POST] to auth/register");
});

router.post("/login", validateUserPayload, (req, res, next) => {
  res.send("[POST] to auth/login");
});

module.exports = router;

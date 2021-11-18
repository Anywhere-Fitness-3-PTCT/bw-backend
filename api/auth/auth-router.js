const express = require("express");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const Users = require("../users/users-model");
const { validateUserPayload } = require("./auth-middleware");

const router = express.Router();

router.post("/register", validateUserPayload, async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    // add role to user with AUTH code to register as an instructor later
    const newUser = { username, password: hash };
    const createdUserRows = await Users.insertUser(newUser);
    //later generate token and include in response so login can happen simultaneously
    console.log("createdUserRows--> ", createdUserRows);
    res.status(201).json(createdUserRows);
  } catch (err) {
    next(err);
  }
});

router.post("/login", validateUserPayload, (req, res, next) => {
  res.send("[POST] to auth/login");
});

module.exports = router;

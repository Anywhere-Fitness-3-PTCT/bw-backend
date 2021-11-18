const express = require("express");
const Users = require("./users-model");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Users.getAllUsers());
});

router.post("/", async (req, res) => {
  res.status(201).json(await Users.insertUser(req.body));
  console.log(process.env.TOKEN_SECRET);
});

module.exports = router;

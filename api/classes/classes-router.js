const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("[GET] all classes");
});

module.exports = router;

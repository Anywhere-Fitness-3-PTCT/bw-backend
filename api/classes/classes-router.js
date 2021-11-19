const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("[GET] all classes");
});

router.get("/:class_id", (req, res, next) => {
  res.json("[GET] class by class_id");
});

router.post("/", (req, res, next) => {
  res.json("[POST] new classes");
});

router.put("/:class_id", (req, res, next) => {
  res.json("[PUT] class");
});

router.delete("/:class_id", (req, res, next) => {
  res.json("[DELETE] class by id");
});

module.exports = router;

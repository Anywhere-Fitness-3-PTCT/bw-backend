const express = require("express");
const Classes = require("./classes-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const classesRows = await Classes.get();
    res.json(classesRows);
  } catch (err) {
    next(err);
  }
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

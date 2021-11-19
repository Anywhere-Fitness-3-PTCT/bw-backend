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

router.get("/filter", async (req, res, next) => {
  try {
    console.log("searchTerm-->", req.body.searchTerm);
    const classRows = await Classes.getByFilter(req.body.searchTerm);
    res.json(classRows);
  } catch (err) {
    next(err);
  }
});

router.get("/:class_id", async (req, res, next) => {
  try {
    const classRow = await Classes.getById(req.params.class_id);
    res.json(classRow);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  res.json("[POST] new classes");
});

router.put("/:class_id", (req, res, next) => {
  res.json("[PUT] class");
});

router.delete("/:class_id", (req, res, next) => {
  res.json("[DELETE] class by id");
});

module.exports = router;

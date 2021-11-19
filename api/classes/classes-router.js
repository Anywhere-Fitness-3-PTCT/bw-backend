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

//add validating middleware
router.get("/filter", async (req, res, next) => {
  try {
    console.log("searchTerm-->", req.body.searchTerm);
    const classRows = await Classes.getByFilter(req.body.searchTerm);
    res.json(classRows);
  } catch (err) {
    next(err);
  }
});

//add validating middleware
router.get("/:class_id", async (req, res, next) => {
  try {
    const classRow = await Classes.getById(req.params.class_id);
    res.json(classRow);
  } catch (err) {
    next(err);
  }
});

//add validating middleware
router.post("/", async (req, res, next) => {
  try {
    const newClassRow = await Classes.insertClass(req.body);
    res.status(201).json(newClassRow);
  } catch (err) {
    next(err);
  }
});

//add validating middleware
router.put("/:class_id", async (req, res, next) => {
  try {
    const updatedClassRow = await Classes.updateClass(
      req.params.class_id,
      req.body
    );
    res.json(updatedClassRow);
  } catch (err) {
    next(err);
  }
});

router.delete("/:class_id", async (req, res, next) => {
  try {
    const deletedClassId = await Classes.deleteClass(req.params.class_id);
    res.json(deletedClassId);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const db = require("../data/db-config");

function get() {
  return db("classes");
}

function getById(class_id) {
  return db("classes").where({ class_id }).first();
}

function getByFilter(filter) {
  return db("classes").where(filter);
}

async function insertClass(newClass) {
  const [newClassRows] = await db("classes").insert(newClass, [
    "class_id",
    "name",
    "time",
    "date",
    "duration",
    "type",
    "intensity",
    "location",
    "capacity",
    "reservations",
  ]);
  return newClassRows;
}

async function updateClass(class_id, updatedClass) {
  const [updatedClassRows] = await db("classes")
    .where({ class_id })
    .update(updatedClass, [
      "class_id",
      "name",
      "time",
      "date",
      "duration",
      "type",
      "intensity",
      "location",
      "capacity",
      "reservations",
    ]);
  return updatedClassRows;
}

async function deleteClass(class_id) {
  const [deletedRows] = await db("classes")
    .where({ class_id })
    .del(["class_id"]);
  return deletedRows;
}

module.exports = {
  get,
  getById,
  getByFilter,
  insertClass,
  updateClass,
  deleteClass,
};

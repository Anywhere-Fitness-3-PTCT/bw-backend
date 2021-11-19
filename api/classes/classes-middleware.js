const Classes = require("./classes-model");

const verifyClassById = async (req, res, next) => {
  try {
    const classRow = await Classes.getById(req.params.class_id);
    if (classRow) {
      req.class = classRow;
      next();
    } else {
      next({ status: 404, message: "class does not exist" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  verifyClassById,
};

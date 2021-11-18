const Users = require("../users/users-model");

const validateUserPayload = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    next({ status: 422, message: "username and password required" });
  } else next();
};

const verifyUniqueUsername = async (req, res, next) => {
  try {
    const [existingUser] = await Users.getBy({ username: req.body.username });
    if (existingUser) {
      next({ status: 422, message: "username taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const verifyExistingUser = async (req, res, next) => {
  try {
    const [existingUser] = await Users.getBy({ username: req.body.username });
    if (existingUser) {
      req.body.user = existingUser;
      next();
    } else {
      next({ status: 401, message: "invalid credentials" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateUserPayload,
  verifyUniqueUsername,
  verifyExistingUser,
};

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

//when validating user exists upon login make sure to include user_id, username, and role when attaching user to req object in findBy model function

module.exports = {
  validateUserPayload,
  verifyUniqueUsername,
};

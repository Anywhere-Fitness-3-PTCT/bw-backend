const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config/secrets");

const generateToken = (user) => {
  const payload = {
    subject: user.user_id,
    username: user.username,
    role: user.role,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, TOKEN_SECRET, options);
};

module.exports = generateToken;

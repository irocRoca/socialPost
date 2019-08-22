const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server");

module.exports = ({ req }) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (!token) {
      throw new Error("No Authorization token provided");
    }
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      return user;
    } catch (err) {
      throw new AuthenticationError("Invalid Token");
    }
  }
  throw new Error("No authentication header provided");
};

const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");
const { JWT_SECRET } = require("../../config");
const { registerValidate, loginValidate } = require("../../util/validate");

const genToken = user => {
  return jwt.sign(
    {
      id: user.id,
      userName: user.userName
    },
    process.env.JWT_SECRET,
    { expiresIn: "1hr" }
  );
};

module.exports = {
  Mutation: {
    login: async (_, { userName, password }) => {
      const { isValid, errors } = loginValidate(userName, password);
      if (!isValid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ userName });
      if (!user) {
        errors.message = "Invalid Username or Password";
        throw new UserInputError("Errors", { errors });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.message = "Invalid Username or Password";
        throw new UserInputError("Errors", { errors });
      }

      const token = genToken(user);

      return {
        ...user._doc,
        id: user.id,
        token
      };
    },

    register: async (
      _,
      { registerInput: { userName, email, password, confirmPassword } }
    ) => {
      const { isValid, errors } = registerValidate(
        userName,
        email,
        password,
        confirmPassword
      );
      if (!isValid) {
        throw new UserInputError("Errors", { errors });
      }

      const verifyUser = await User.findOne({ userName });
      if (verifyUser) {
        errors.message = "Username unavailable";
        throw new UserInputError("Errors", { errors });
      }
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        userName,
        password: hash,
        email,
        createdAt: new Date().toISOString()
      });
      const user = await newUser.save();

      const token = genToken(user);

      return {
        ...user._doc,
        id: user.id,
        token
      };
    }
  }
};

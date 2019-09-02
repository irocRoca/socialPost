const validator = require("validator");
const isEmpty = require("is-empty");

module.exports.registerValidate = (
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword
) => {
  let errors = {};

  firstName = !isEmpty(firstName) ? firstName : ""; // cap
  lastName = !isEmpty(lastName) ? lastName : ""; // capalize
  userName = !isEmpty(userName) ? userName : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";
  confirmPassword = !isEmpty(confirmPassword) ? confirmPassword : "";

  //First Name
  if (validator.isEmpty(firstName)) {
    errors.firstName = "Field is required";
  } else if (!validator.isLength(firstName, { min: 3 })) {
    errors.firstName = "First name must be atleast 3 charcters";
  }

  //Last Name
  if (validator.isEmpty(lastName)) {
    errors.lastName = "Field is required";
  } else if (!validator.isLength(lastName, { min: 3 })) {
    errors.lastName = "Last name must be atleast 3 charcters";
  }

  //User Name check
  if (validator.isEmpty(userName)) {
    errors.userName = "Field is required";
  } else if (!validator.isLength(userName, { min: 3 })) {
    errors.userName = "Username must be atleast 3 charcters";
  }

  //Email
  if (validator.isEmpty(email)) {
    errors.email = "Field is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  //Password
  if (validator.isEmpty(password)) {
    errors.password = "Field is required";
  } else if (!validator.isLength(password, { min: 6 })) {
    errors.password = "Password must be greater than 6 characters";
  }

  //Confirm password
  if (validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = "Field is required";
  } else if (!validator.equals(password, confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports.loginValidate = (userName, password) => {
  let errors = {};

  userName = !isEmpty(userName) ? userName : "";
  password = !isEmpty(password) ? password : "";

  //User Name check
  if (validator.isEmpty(userName)) {
    errors.userName = "Field is required";
  }

  //Password
  if (validator.isEmpty(password)) {
    errors.password = "Field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

// const reg = /([A-Za-z]+("?: [A-Za-z]+)*),? ([A-Za-z]{2})/;
// const test = 'state, fl'
// reg.test(test) ? store value in db : else error

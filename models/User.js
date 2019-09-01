const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  photo: { type: String, default: "d2deneiwm0sukahfoajb" },
  password: String,
  createdAt: String,
  bio: String,
  location: String
});

module.exports = mongoose.model("user", userSchema);

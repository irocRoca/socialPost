const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  createdAt: String
});

module.exports = mongoose.model("user", userSchema);

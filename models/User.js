const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: String,
  email: String,
  photo: { type: String, default: "d2deneiwm0sukahfoajb" },
  password: String,
  createdAt: String
});

module.exports = mongoose.model("user", userSchema);

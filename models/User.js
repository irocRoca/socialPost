const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  photo: { type: String, default: "d2deneiwm0sukahfoajb" },
  password: String,
  createdAt: String,
  bio: { type: String, default: "Bio about myself" },
  location: { type: String, default: "" }
});

module.exports = mongoose.model("user", userSchema);

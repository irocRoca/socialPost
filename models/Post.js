const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  body: String,
  userName: String,
  createdAt: String,
  comments: [
    {
      body: String,
      userName: String,
      createdAt: String
    }
  ],
  likes: [
    {
      userName: String,
      createdAt: String
    }
  ]
  // ,
  // user: {
  //   type: schema.type.objectid,
  //   ref: "users"
  // }
});

module.exports = mongoose.model("post", postSchema);

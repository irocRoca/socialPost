const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  body: String,
  userName: String,
  createdAt: String,
  userId: String,
  comments: [
    {
      body: String,
      userName: String,
      createdAt: String
    }
  ],
  likes: [
    {
      userName: String
    }
  ],
  likeCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 }
});

module.exports = mongoose.model("post", postSchema);

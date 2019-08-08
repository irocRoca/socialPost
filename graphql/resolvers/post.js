const Post = require("../../models/Post");

const resolvers = {
  Query: {
    getPosts: () => {
      try {
        return Post.find();
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};

module.exports = resolvers;

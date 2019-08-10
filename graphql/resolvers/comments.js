const Post = require("../../models/Post");
const verifyAuth = require("../../verifyAuth");
const { AuthenticationError } = require("apollo-server");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const user = verifyAuth(context);
      /// Add userinput validation later

      const post = await Post.findById(postId);
      if (post) {
        post.comments.unshift({
          body,
          userName: user.userName,
          userId: user.id,
          createdAt: new Date().toISOString()
        });
        await post.save();
        return post;
      } else {
        throw new Error("Post not found");
      }
    },
    deleteComment: async (_, { postId, commentId }, context) => {
      const user = verifyAuth(context);
      const post = await Post.findById(postId);
      if (post) {
        const index = post.comments.findIndex(ele => ele.id === commentId);
        if (post.comments[index].userName === user.userName) {
          post.comments.splice(index, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError("Cannot Delete Comment");
        }
      } else {
        throw new Error("Post not found");
      }
    }
  }
};

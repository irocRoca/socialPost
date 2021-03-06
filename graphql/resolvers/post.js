const Post = require("../../models/Post");
const User = require("../../models/User");
const verifyAuth = require("../../util/verifyAuth");

const resolvers = {
  Query: {
    getPost: async (_, { postId }) => {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        }
        throw new Error("Unknown Post");
      } catch (err) {
        throw new Error(err);
      }
    },

    getPosts: async () => {
      try {
        const post = await Post.find().sort({ createdAt: -1 });
        return post;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    createPost: async (_, { body }, context) => {
      const user = verifyAuth(context);
      if (body.trim() === "") {
        throw new Error("Body cannot be empty");
      }

      ///Change later by adding user db to context
      const newUser = await User.findById(user.id);

      const newPost = new Post({
        body,
        photo: newUser.photo,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        userName: user.userName,
        userId: user.id,
        createdAt: new Date().toISOString()
      });
      const post = await newPost.save();
      return post;
    },
    deletePost: async (_, { postId }, context) => {
      const user = verifyAuth(context);

      try {
        const post = await Post.findById(postId);
        if (post.userId === user.id) {
          post.delete();
          return "Posted Deleted Successfully";
        } else {
          throw new Error("Action not authorized");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    likePost: async (_, { postId }, context) => {
      const { userName } = verifyAuth(context);

      const post = await Post.findById(postId).catch(err => {
        throw new Error("Post Not found");
      });
      if (post.likes.find(e => e.userName === userName)) {
        post.likes = post.likes.filter(item => item.userName !== userName);
      } else {
        post.likes.push({
          userName: userName
        });
      }
      await post.save();
      return post;
    }
  }
};

module.exports = resolvers;

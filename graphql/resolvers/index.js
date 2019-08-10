const postResolvers = require("./post");
const userResolvers = require("./user");
const commentsResolvers = require("./comments");

module.exports = {
  Query: {
    ...postResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentsResolvers.Mutation
  }
};

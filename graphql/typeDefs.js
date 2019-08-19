const gql = require("graphql-tag");

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    userName: String!
    createdAt: String!
    userId: ID!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int
    commentCount: Int
  }

  type User {
    id: ID!
    email: String!
    userName: String!
    token: String!
    createdAt: String!
  }

  type Comment {
    id: ID!
    body: String!
    userName: String!
    createdAt: String!
  }

  type Like {
    id: ID!
    userName: String!
  }

  input RegisterInput {
    userName: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(userName: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;

module.exports = typeDefs;

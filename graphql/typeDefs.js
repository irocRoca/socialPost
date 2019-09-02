const gql = require("graphql-tag");

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    photo: String!
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
    firstName: String!
    lastName: String!
    email: String!
    photo: String
    userName: String!
    token: String!
    createdAt: String!
    bio: String
    location: String
  }

  type Comment {
    id: ID!
    body: String!
    photo: String
    userName: String!
    createdAt: String!
  }

  type Like {
    id: ID!
    userName: String!
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post!
    getUser(id: ID!): User!
  }

  type Mutation {
    updateUser(
      firstName: String!
      lastName: String!
      location: String!
      bio: String!
    ): User!
    register(registerInput: RegisterInput): User!
    login(userName: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    singleUpload(file: Upload!): String!
  }
`;

module.exports = typeDefs;

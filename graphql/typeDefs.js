const gql = require("graphql-tag");

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    userName: String!
    createdAt: String!
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
    commentId: ID!
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
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(userName: String!, password: String!): User!
  }
`;

module.exports = typeDefs;

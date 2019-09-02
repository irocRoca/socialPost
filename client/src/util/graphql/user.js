import gql from "graphql-tag";

export const USER_LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      id
      token
      userName
      email
      firstName
      lastName
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        firstName: $firstName
        lastName: $lastName
        userName: $userName
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      firstName
      lastName
      token
      userName
      email
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      photo
      userName
      bio
      location
    }
  }
`;

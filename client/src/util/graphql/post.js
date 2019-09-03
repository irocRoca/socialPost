import gql from "graphql-tag";

export const GET_POSTS = gql`
  {
    getPosts {
      id
      body
      userName
      firstName
      lastName
      photo
      createdAt
      likeCount
      commentCount
      likes {
        id
        userName
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      photo
      firstName
      lastName
      userName
      userId
      createdAt
      likeCount
      commentCount
      likes {
        id
        userName
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      userName
      photo
      createdAt
      comments {
        id
        body
        userName
        createdAt
      }
      likeCount
      commentCount
      likes {
        id
        userName
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        userName
      }
      likeCount
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      body
      userName
      createdAt
      likeCount
      commentCount
      likes {
        id
        userName
      }
      comments {
        id
        body
        userName
        createdAt
      }
    }
  }
`;

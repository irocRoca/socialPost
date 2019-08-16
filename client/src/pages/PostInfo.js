import React from "react";
import Post from "../components/Post";
import Comments from "../components/Comments";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const PostInfo = props => {
  const {
    // loading,
    data: { getPost: post }
  } = useQuery(GET_POST, {
    variables: { postId: props.match.params.id }
  });

  //// Create a wireframe for loading...
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      {post && (
        <Post data={post}>
          <Comments data={post.comments} />
        </Post>
      )}
    </div>
  );
};

const GET_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      userName
      createdAt
      comments {
        id
        body
        userName
        createdAt
      }
    }
  }
`;

export default PostInfo;

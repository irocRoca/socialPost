import React from "react";
import Post from "../components/Post";
import Comments from "../components/Comments";
import { useQuery } from "@apollo/react-hooks";
import { GET_POST } from "../util/graphql/post";

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
        <Post data={post} singleP="true">
          <Comments data={post.comments} postId={post.id} />
        </Post>
      )}
    </div>
  );
};

export default PostInfo;

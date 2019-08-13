import React from "react";
import Post from "../components/Post";
import Comments from "../components/Comments";

const PostInfo = props => {
  console.log(props);
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <Post>
        <Comments />
      </Post>
    </div>
  );
};

export default PostInfo;

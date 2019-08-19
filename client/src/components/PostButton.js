import React from "react";
import LikeButton from "./LikeButton";
import { Button, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PostButton = ({
  data: { id, likeCount, commentCount, userName, likes }
}) => {
  return (
    <div>
      <Button.Group
        fluid
        style={{ maxWidth: "80%", margin: "auto", display: "flex" }}
      >
        <LikeButton
          likeCount={likeCount}
          id={id}
          userName={userName}
          likes={likes}
        />
        <Button labelPosition="right" as={Link} to={`/post/${id}`}>
          <Button basic color="blue">
            <Icon name="comments" />
            Comment
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Button.Group>
    </div>
  );
};

export default PostButton;

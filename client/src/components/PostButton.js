import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PostButton = ({ id }) => {
  return (
    <div>
      <Button.Group
        fluid
        style={{ maxWidth: "80%", margin: "auto", display: "flex" }}
      >
        <Button as="div" labelPosition="right">
          <Button color="red">
            <Icon name="like" />
            Like
          </Button>
          <Label basic color="red" pointing="left">
            {/* Later receive props for like count */}2
          </Label>
        </Button>
        <Button labelPosition="right" as={Link} to={`/post/${id}`}>
          <Button basic color="blue">
            <Icon name="comments" />
            Comment
          </Button>
          <Label basic color="blue" pointing="left">
            {/* Later receive props for like count */}2
          </Label>
        </Button>
      </Button.Group>
    </div>
  );
};

export default PostButton;

import React from "react";
import { Card, Image } from "semantic-ui-react";
import PostButton from "./PostButton";

const Post = props => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Card fluid style={{ width: "100%" }}>
        <Card.Content>
          <Image
            floated="left"
            avatar
            size="massive"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wJ90xBHS5VQEdYGHqdyZKpfbCnU2sl_5jFxSlJtOuodsCoVo"
          />
          <Card.Header>John Doe</Card.Header>
          <Card.Meta>@John</Card.Meta>
          <Card.Description>Had an amazing birthday weekend.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <PostButton />
        </Card.Content>
        {props.children}
      </Card>
    </div>
  );
};

export default Post;

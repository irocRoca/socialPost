import React from "react";
import { Card, Image } from "semantic-ui-react";
import PostButton from "./PostButton";
import moment from "moment";
import { create } from "domain";

const Post = props => {
  const { id, body, userName, createdAt } = props.data;
  return (
    <Card fluid style={{ width: "100%", marginBottom: "1rem" }}>
      <Card.Content>
        <Image
          floated="left"
          avatar
          size="massive"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wJ90xBHS5VQEdYGHqdyZKpfbCnU2sl_5jFxSlJtOuodsCoVo"
        />
        <Card.Header>John Doe</Card.Header>
        <Card.Meta>@{userName}</Card.Meta>
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <PostButton />
      </Card.Content>
      {props.children}
    </Card>
  );
};

export default Post;

import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import PostButton from "./PostButton";
import moment from "moment";

const Post = props => {
  const { body, userName, createdAt } = props.data;
  return (
    <Grid.Row>
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
          <Card.Description style={{ fontSize: "1.18rem" }}>
            {body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <PostButton data={props.data} />
        </Card.Content>
        {props.children}
      </Card>
    </Grid.Row>
  );
};

export default Post;

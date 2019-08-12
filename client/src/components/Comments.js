import React from "react";
import { Comment, Header } from "semantic-ui-react";

const Comments = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        <Comment>
          <Comment.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsBGYX4aIjM3ykjPaz7Q5AQx7Kldk_rfc_EGKpWGtYyeadVSycw" />
          <Comment.Content>
            <Comment.Author as="span">Jessica Jones</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:25PM </div>
            </Comment.Metadata>
            <Comment.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
              eu lobortis elementum nibh tellus molestie nunc. Sociis natoque
              penatibus et magnis dis parturient montes nascetur.
            </Comment.Text>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="span">Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
};

export default Comments;

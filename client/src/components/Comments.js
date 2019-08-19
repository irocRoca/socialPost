import React from "react";
import { Comment, Header } from "semantic-ui-react";
import moment from "moment";
import AddComment from "../components/AddComment";

const Comments = props => {
  const dataList = props.data;

  // dataList <= 0 ? null :
  const list = (
    <div style={{ padding: " 1rem 2rem" }}>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        <AddComment id={props.postId} />
        {dataList.map(item => (
          <Comment key={item.id}>
            {/* Later add userImg url to comments */}
            <Comment.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsBGYX4aIjM3ykjPaz7Q5AQx7Kldk_rfc_EGKpWGtYyeadVSycw" />
            <Comment.Content>
              <Comment.Author as="span">{item.userName}</Comment.Author>
              <Comment.Metadata>
                <div>{moment(item.createdAt).fromNow()}</div>
              </Comment.Metadata>
              <Comment.Text>{item.body}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
    </div>
  );

  return list;
};

export default Comments;

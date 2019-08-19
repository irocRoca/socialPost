import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/react-hooks";
import { LIKE_POST } from "../util/graphql/post";
import { Button, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LikeButton = ({ likeCount, id, likes }) => {
  const user = useSelector(state => state.userData);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find(item => item.userName === user.userName)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST, { variables: { postId: id } });
  const handleClick = e => {
    likePost(id);
  };

  const btn = user ? (
    liked ? (
      <Button color="red" onClick={handleClick}>
        <Icon name="like" />
        Like
      </Button>
    ) : (
      <Button color="red" basic onClick={handleClick}>
        <Icon name="like" />
        Like
      </Button>
    )
  ) : (
    <Button color="red" as={Link} basic to="/login">
      <Icon name="like" />
      Like
    </Button>
  );

  return (
    <Button as="div" labelPosition="right">
      {btn}
      <Label basic color="red" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
};

export default LikeButton;

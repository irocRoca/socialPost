import React, { useState } from "react";

import { Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENT } from "../util/graphql/post";
import { useSelector } from "react-redux";

const AddComment = ({ id }) => {
  const user = useSelector(state => state.userData);
  const [value, setValue] = useState("");
  const [insertComment] = useMutation(CREATE_COMMENT, {
    variables: { postId: id, body: value },
    onError: err => console.log(err.graphQLErrors)
  });

  const handleSubmit = e => {
    e.preventDefault();
    insertComment();
    setValue("");
  };

  const handleChange = e => setValue(e.target.value);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Add Comment"
          action="Submit"
          value={value}
          onChange={handleChange}
          disabled={user ? false : true}
        />
      </Form>
    </div>
  );
};

export default AddComment;

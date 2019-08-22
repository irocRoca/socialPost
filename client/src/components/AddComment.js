import React, { useState } from "react";

import { Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENT } from "../util/graphql/post";

const AddComment = ({ id }) => {
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
          action="submit"
          value={value}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default AddComment;
